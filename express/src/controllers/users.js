const path = require('path')
const root = path.join(__dirname, '../public')

const getUsers = (req, res) => {
    res.sendFile('users.html', {root: root})
}

const createUser = (req, res)=>{
    res.sendFile('create-user.html', {root: root})
}

const updateUsers = (req, res)=>{
    res.sendFile('update.html', {root: root})
}

const deleteUsers = (req, res)=>{
    res.sendFile('delete.html', {root: root})
}

module.exports = {getUsers, createUser, updateUsers, deleteUsers}