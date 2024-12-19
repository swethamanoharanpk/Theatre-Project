const router = require('express').Router()

const {userRegister, userLogin,getsingleMovieData, getSingleUser, updateUser, getComingsoonMovies} = require('../controller/userController')

router.post('/register',userRegister)
router.post('/login',userLogin)
router.get('/getsinglemovie/:id',getsingleMovieData)
router.get('/getsingleuser/:id',getSingleUser)
router.put('/update/:id',updateUser)
router.get('/comingmovie',getComingsoonMovies)

module.exports = router