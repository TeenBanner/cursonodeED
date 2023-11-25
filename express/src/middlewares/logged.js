const isLogged = (req, res, next) => {
    let logged = true
    if (logged == true){
        next()
    }else{
        res.send('no puedes acceder debes estar logueado')
    }
}
exports.isLogged = isLogged