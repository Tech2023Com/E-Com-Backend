const express = require('express')
const router  = express.Router()
const AdminController =  require('../Controllers/AdminController')




router.post('/add-poduct' ,AdminController.addProduct )










module.exports =  router