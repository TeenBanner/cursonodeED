const express = require('express')
const app = express()
const port = 3000
const user = require('./routes/users')
const loggedMiddleware = require('./middlewares/logged')

//middlewares
app.use(loggedMiddleware.isLogged)

// rutas
app.get('/', (req, res) =>{
    res.send('bienvenido')
})

app.use('/user',user)

app.listen(port, () => {
    console.log(`aplicacion corriendo en el puerto: ${port}`)
})

