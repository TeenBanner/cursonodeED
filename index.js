const http = require('http')
const server = http.createServer(onRequest)
const port = 3000

server.listen(port,() =>{
    console.log(`mi servidor esta corriendo en localhost:${port}`)
})

function onRequest(req, res){
    console.log('se ha detectado una peticion')
    res.setHeader('content-type', 'text/plain')
    res.write('hola mundo')
    res.end()
}