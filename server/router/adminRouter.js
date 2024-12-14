const adminRouter = require('express').Router()
const {adminLogin, postMovies, postBanner, getBanner, getMovies} = require('../controller/adminController')


adminRouter.post('/adminlogin',adminLogin)
adminRouter.post('/addmovie',postMovies)
adminRouter.post('/addbanner',postBanner)
adminRouter.get('/getbanner',getBanner)
adminRouter.get('/getmovie',getMovies)

module.exports = adminRouter