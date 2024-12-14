const router = require('express').Router()

const {userRegister, userLogin,getsingleMovieData} = require('../controller/userController')

router.post('/register',userRegister)
router.post('/login',userLogin)
router.get('/getsinglemovie/:id',getsingleMovieData)

module.exports = router