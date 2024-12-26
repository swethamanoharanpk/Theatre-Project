const adminRouter = require('express').Router()
const {adminLogin, postMovies, postBanner, getBanner, getMovies, updatedMovies, getAllMovies, deleteMovie, addScreenData} = require('../controller/adminController')


adminRouter.post('/adminlogin',adminLogin)
adminRouter.post('/addmovie',postMovies)
adminRouter.post('/addbanner',postBanner)
adminRouter.get('/getbanner',getBanner)
adminRouter.get('/getmovie',getMovies)
adminRouter.get('/getallmovie',getAllMovies)
adminRouter.put('/update/:id',updatedMovies)
adminRouter.delete('/delete/:id',deleteMovie)
adminRouter.post('/addscreen',addScreenData)

module.exports = adminRouter