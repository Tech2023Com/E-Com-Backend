const express = require('express')
const router  = express.Router()
const CustomerController =  require('../Controllers/CustomerContollers')




router.post('/add-customer' ,CustomerController.addCustomer  )
router.post('/login-customer' ,CustomerController.loginCustomer  )




module.exports =  router