const getUsers = (req, res) => {
    res.send('accediendo a usuarios')
}

const createUser = (req, res)=>{
    res.send('crear usuario')
}

const updateUsers = (req, res)=>{
    res.send('modificando usuario')
}

const deleteUsers = (req, res)=>{
    res.send('eliminando usuario')
}

module.exports = {getUsers, createUser, updateUsers, deleteUsers}