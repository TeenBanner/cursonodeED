const http = require('http')
const server = http.createServer(onRequest)
const fs = require('fs')
const port = 3000


server.listen(port,() =>{
    console.log(`mi servidor esta corriendo en localhost:${port}`)
})

function onRequest(req, res){
    console.log('se ha detectado una peticion')
    res.setHeader('content-type', 'text/html')
    res.write('<h1>Bienvenidos all curso de Nodejs</h1>')
    res.write('<h2>Pagina de prueba</h2>')
    res.end()
}