import axios from 'axios'
import { storeToken } from './src/Redux/UserSlice'

export const addAdminLogin = async(adminInfo)=>{
    try{
        const getAdmin = await axios.post('http://localhost:4000/admin/adminlogin',adminInfo)
        return getAdmin.data

    }catch(err){
        return res.status(500).json(err.message)
    }
}

export const postUserSignup = async(userInfo)=>{
    try{
        const userResponse = await axios.post('http://localhost:4000/user/register',userInfo)
        return userResponse.data

    }catch(err){
        return res.status(500).json(err.message)
    }
}

export const addUserLogin = async(userLoginInfo,dispatch)=>{
    console.log("[[[[[[[[[[[",userLoginInfo)
    try{
        const loginResponse = await axios.post('http://localhost:4000/user/login',userLoginInfo)
        console.log("resssssssssssssssssssss",loginResponse.data)
        dispatch(storeToken(loginResponse.data))
        return loginResponse.data

    }catch(err){
        return res.status(500).json(err.message)
    }
}

export const addNewMovies = async(movieDetails)=>{
    try{
        const movieResponse = await axios.post('http://localhost:4000/admin/addmovie',movieDetails)
        console.log(movieResponse.data)
        return movieResponse.data

    }catch(err){
        return res.status(500).json(err.message)
    }
}

export const addNewBanner = async(bannerDetails)=>{
    try{
        const bannerResponse = await axios.post('http://localhost:4000/admin/addbanner',bannerDetails)
        console.log(bannerResponse)
        return bannerResponse.data

    }catch(err){
        return res.status(500).json(err.message)

    }
}

export const getBannerData = async()=>{
    try{
        const bannerData = await axios.get('http://localhost:4000/admin/getbanner')
        console.log("bannerdetails",bannerData)
        return bannerData.data

    }catch(err){
        return res.status(500).json(err.message)
    }
}

export const getMovieData = async()=>{
    try{
        const movieData = await axios.get('http://localhost:4000/admin/getmovie')
        return movieData.data
        

    }catch(err){
        return res.status(500).json(err.message)
    }
}

export const getSingleMovieDetails = async(id)=>{
    try{
        const singleMovie = await axios.get(`http://localhost:4000/user/getsinglemovie/${id}`)
        console.log("*******************",singleMovie)
        return singleMovie.data

    }catch(err){}
}