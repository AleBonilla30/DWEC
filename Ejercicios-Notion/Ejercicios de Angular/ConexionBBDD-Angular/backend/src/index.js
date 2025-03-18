const express = require('express')
const cors = require('cors')
const userRoutes = require('./routes/user.routes')

const app = express()

app.use(express.json())
const whiteList = ['http://localhost:4200']
app.use(cors({origin: whiteList}))
app.use('/api/users', userRoutes)

const PORT = process.env.PORT || 5000 //USA EL DEL PUERTO O EL POR DEFECTO
app.listen(PORT, () => console.log(`servidor corriendo en el puerto ${PORT}`));

app.get('/', (req, res) =>{
    res.send('API')
})
