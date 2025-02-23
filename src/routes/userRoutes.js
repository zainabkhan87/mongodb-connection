const express= require('express')
const router=express.Router()
const cont= require('../controllers/userController')


router.get('/',cont.getAllusers)
router.get('/userid',cont.getUserById)
router.post('/username',cont.postUserName)
router.post('/customer',cont.createCustomer)
router.get('/getallcustomers',cont.getallcustomers)
router.get('/getcustomerbyid',cont.getcustomerbyid)

module.exports = router