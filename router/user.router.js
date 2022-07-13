const router = require('express').Router()
const {getUser,addUser,updateUser,deleteUser,userLogin, userAuth,userLogout}  = require('../controller/user.controller')

//get user
router.get('/',getUser)

//add user
router.post('/register',addUser)


//login user
router.get('/login',userLogin)

// login by jwt token
router.get('/userAuth',userAuth)

//logout user
router.get('/logout',userLogout)


//updateUser
router.put('/',updateUser)

//delete user
router.delete('/',deleteUser)

module.exports = router