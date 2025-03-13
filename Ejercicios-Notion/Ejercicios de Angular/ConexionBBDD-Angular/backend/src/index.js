const express = require('express')
const cors = require('cors')
const userRoutes = require('./routes/user.routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/users', userRoutes)

const PORT = process.env.PORT || 5000 //USA EL DEL PUERTO O EL POR DEFECTO
app.listen(PORT, () => console.log(`servidor corriendo en el puerto ${PORT}`));

app.get('/', (req, res) =>{
    res.send('API')
})
