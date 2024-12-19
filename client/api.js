import axios from 'axios'
import { storeToken } from './src/Redux/UserSlice'

export const addAdminLogin = async(adminInfo)=>{
    try{
        const getAdmin = await axios.post('http://localhost:4000/admin/adminlogin',adminInfo)
        return getAdmin.data

    }catch(err){
        console.log(err.message)
    }
}

export const postUserSignup = async(userInfo)=>{
    try{
        const userResponse = await axios.post('http://localhost:4000/user/register',userInfo)
        return userResponse.data

    }catch(err){
        console.log(err.message)
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
        console.log(err.message)
    }
}

export const getUserLogin = async(id)=>{
    try{
        const profileDetails = await axios.get(`http://localhost:4000/user/getsingleuser/${id}`)
        console.log("userrrrrrrrrrrrrrr",profileDetails)
        return profileDetails.data

    }catch(err){
        console.log(err.message)
    }
}


export const updateUserDetails = async(userUpInfo,id)=>{
    try{
        const updatedDetails = await axios.put(`http://localhost:4000/user/update/${id}`,userUpInfo)
        console.log("upppppppppppppppppppp",updatedDetails)
        return updatedDetails.data

    }catch(err){
    }
}

export const addNewMovies = async(movieDetails)=>{
    try{
        const movieResponse = await axios.post('http://localhost:4000/admin/addmovie',movieDetails)
        console.log(movieResponse.data)
        return movieResponse.data

    }catch(err){
        console.log(err.message)
    }
}

export const addNewBanner = async(bannerDetails)=>{
    try{
        const bannerResponse = await axios.post('http://localhost:4000/admin/addbanner',bannerDetails)
        console.log(bannerResponse)
        return bannerResponse.data

    }catch(err){
        console.log(err.message)

    }
}

export const getBannerData = async()=>{
    try{
        const bannerData = await axios.get('http://localhost:4000/admin/getbanner')
        console.log("bannerdetails",bannerData)
        return bannerData.data

    }catch(err){
        console.log(err.message)
    }
}

export const getMovieData = async()=>{
    try{
        const movieData = await axios.get('http://localhost:4000/admin/getmovie')
        return movieData.data
        

    }catch(err){
        console.log(err.message)
    }
}

export const getSingleMovieDetails = async(id)=>{
    try{
        const singleMovie = await axios.get(`http://localhost:4000/user/getsinglemovie/${id}`)
        console.log("*******************",singleMovie)
        return singleMovie.data

    }catch(err){}
}

export const getComingMovieDetails = async()=>{
    try{
        const comingMovie = await axios.get('http://localhost:4000/user/comingmovie')
        return comingMovie.data

    }catch(err){
        console.log(err)
    }
}