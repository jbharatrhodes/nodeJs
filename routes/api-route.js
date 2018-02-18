const express = require('express')
const router = express.Router()
const homeController = require('../controllers/homeController')

route.route('/users')
get(homeController.getUsers)
.post(homeController.createUsers)
router.get('/users/:username', homeController.getUserByname)

module.exports = router 