const express = require('express')
const app = express()
const port = 3000
// rutas
app.get('/', (req, res) =>{
    res.send('bienvenido')
})

app.get('/users', (req, res)=>{
     res.send('todos los usuarios')
})

app.listen(port, () => {
    console.log(`aplicacion corriendo en el puerto: ${port}`)
})

