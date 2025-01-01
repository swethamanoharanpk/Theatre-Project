const router = require('express').Router()

const {userRegister, userLogin,getsingleMovieData, getSingleUser, updateUser, getComingsoonMovies, getScheduledMovies,getFilteredScheduledMovies, bookTickets, userBooking} = require('../controller/userController')
const { verifyUserToken } = require('../jwtverify')

router.post('/register',userRegister)
router.post('/login',userLogin)
router.get('/getsinglemovie/:id',getsingleMovieData)
router.get('/getsingleuser/:id',getSingleUser)
router.put('/update/:id',updateUser)
router.get('/comingmovie',getComingsoonMovies)
router.get('/schedule/:id/:date',getScheduledMovies)
router.get('/filterschedule/:id/:date',getFilteredScheduledMovies)
router.post('/booktickets', bookTickets)
router.get('/userbooking',userBooking)

module.exports = router