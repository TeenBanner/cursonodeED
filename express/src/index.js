const express = require('express')
const app = express()
const port = 3000
const user = require('./routes/users')
// rutas
app.get('/', (req, res) =>{
    res.send('bienvenido')
})

app.use('/user',user)

app.listen(port, () => {
    console.log(`aplicacion corriendo en el puerto: ${port}`)
})

