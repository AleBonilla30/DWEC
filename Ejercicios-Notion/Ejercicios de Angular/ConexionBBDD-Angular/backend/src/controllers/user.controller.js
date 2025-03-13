const db = require('../config/db'); //importar la conexion a mysql
const bcrypt = require('bcryptjs');//para encriptar contraseñas

//registro de usuarios

exports.registerUser = (request, response) => {
    const {nombre, primer_apellido, segundo_apellido, empresa, email, password} = request.body// se estraen los datos enviados desde el formulario de registro

    //encriptar la contraseña
    const hashedPassword = bcrypt.hashSync(password,10);

    //sql para insertar usuario
    const sql = "INSERT INTO  usuarios (nombre, primer_apellido, segundo_apellido, empresa, email, password) VALUES (?,?,?,?,?,?)"
    db.query(sql, [nombre, primer_apellido, segundo_apellido, empresa, email, hashedPassword], (err, result) => {
        if (err) return response.status(500).json({error: err.message});
        response.status(201).json({message: 'Usuario registrado exitosamente'})
    })
}

//login de uusuarios

exports.loginUser = (req, res) => {
    const {email, password} = req.body;

    //buscar usuario
    const sql = "SELECT * FROM usuarios WHERE email = ?"
    db.query(sql, [email], (err, result) => {
        if (err) return res.status(500).json({error: err.message})
        
        if (result.length === 0) return res.status(404).json({error: '❌ usuario no encontrado'})
        
        const user = result[0]

        //comparamos contraseñas
        const passMatch = bcrypt.compareSync(password, user.password)

        if(!passMatch) return res.status(401).json({error: '❌ contraseña incorrecta'})

        res.status(200).json({message: '✔ login exitoso', user})
    })
}