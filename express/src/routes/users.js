const express = require('express')
const userController = require('../controllers/users')

const router = express.Router()

router.get('/user', userController.getUsers )

router.get('/create', userController.createUser)
router.get('/update', userController.updateUsers)
router.get('/delete', userController.deleteUsers)


module.exports = router