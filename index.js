const http = require('http')
const server = http.createServer(onRequest)
const fs = require('fs')
const port = 3000
const qs = require('querystring')


server.listen(port,() =>{
    console.log(`mi servidor esta corriendo en localhost:${port}`)
})

function onRequest(req, res){
    console.log('se ha detectado una peticion')
    if(req.url === '/'){
        fs.readFile('./index.html', (err, content) =>{
            if(err){
                if (err.code == 'ENOENT'){
                    res.serStatus = 404
                    console.log('no se a encontrado el archivo')
                }else{
                    res.setStatus = 500
                    console.log('a ocurriod un error en el servidor')
                }
                console.log(`a ocurrido un error.  error: ${err}`)
            }else{
                res.serStatus = 202
                res.setHeader('content-type', 'text/html')
                res.write(content)
                res.end()
            }
        })
    }else if(req.url == '/users'){
        if (req.method == 'GET'){
            res.serStatus = 202
            res.setHeader('content-type', 'text/html')
            res.write('accediendo a usuarios')
            res.end()
        }else if (req.method == 'POST'){
            let datos = ''
            req.on('data', (d)=>{
                datos += d
            })
            req.on('end',()=>{
                let post = qs.parse(datos)
                res.end(`datos recibidos: ` + post.nombre)
            })
            res.setHeader('content-type', 'text/html')
            res.write('insertando usuarios')
            res.end()
        }else if (req.method == 'PUT'){
            let datos = ''
            req.on('data', (d)=>{
                datos += d
            })
            req.on('end',()=>{
                let post = qs.parse(datos)
                res.end(`datos recibidos: ` + post.nombre)
            })
        }else if (req.method == 'DELETE'){
            let datos = ''
            req.on('data', (d)=>{
                datos += d
            })
            req.on('end',()=>{
                let post = qs.parse(datos)
                res.end(`datos recibidos: `+ post.nombre)
            })
        }
    }
}