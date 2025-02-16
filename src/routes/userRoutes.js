const express= require('express')
const router=express.Router()
const cont= require('../controllers/userController')


router.get('/',cont.getAllusers)
router.get('/userid',cont.getUserById)

module.exports = router