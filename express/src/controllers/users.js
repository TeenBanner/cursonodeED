const users = [
    {id: 1, nombre:"pablo", edad: 25},
    {id: 2, nombre:"luis", edad: 23},
    {id: 3, nombre:"jose", edad: 22},
]
const getUsers = (req, res) => {
    res.render('users', {users: users})
}

const createUser = (req, res)=>{
    res.render('create',{users: users})
}

const updateUsers = (req, res)=>{
    res.render('update',{users: users})
}

const deleteUsers = (req, res)=>{
    res.render('delete',{users: users})
}

module.exports = {getUsers, createUser, updateUsers, deleteUsers}