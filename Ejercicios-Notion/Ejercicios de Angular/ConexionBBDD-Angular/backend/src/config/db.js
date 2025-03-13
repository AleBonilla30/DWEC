const mysql = require('mysql2');
const dotenv = require('dotenv');//carga variables de entorno

dotenv.config();
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS || "",
    database: process.env.DB_NAME
});

//conectar a la base de  datos
db.connect(err => {
    if (err) {
        console.log('Error conectando a MySQL:', err);
        
        return
    }
    console.log('Conectado a la base de datos MySQL.');
    
});

module.exports = db;