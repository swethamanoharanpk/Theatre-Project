import axios from 'axios'


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

export const getAllMovieData = async()=>{
    try{
        const movieAllData = await axios.get('http://localhost:4000/admin/getallmovie')
        return movieAllData.data
        

    }catch(err){
        console.log(err.message)
    }
}

export const updateMovies = async(updateInfo,id)=>{
    console.log("api iddddddddddddddddd",id)
    try{
        const updatemovie = await axios.put(`http://localhost:4000/admin/update/${id}`,updateInfo)
        return updatemovie.update.data

    }catch(err){
        console.log(err)
    }
}
export const deleteMovies = async(id)=>{
    console.log("delete idddddddddddddddd",id)
    try{
        const deletedMovies = await axios.delete(`http://localhost:4000/admin/delete/${id}`)
        console.log(deletedMovies.message)

    }catch(err){
        console.log(err)
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


export const getSchedule = async(id,date)=>{
    try{
        console.log("yyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",id,date)
        const scheduledMovie = await axios.get(`http://localhost:4000/user/schedule/${id}/${date}`)
        console.log(" axiosssssssssssssss",scheduledMovie.data)
        return scheduledMovie.data
        

    }catch(err){}
}


export const getFilteredSchedule = async(id,date)=>{
    try{
        console.log("yyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",id,date)
        const filteredScheduledMovie = await axios.get(`http://localhost:4000/user//filterschedule/${id}/${date}`)
        console.log("second axiosssssssssssssss",filteredScheduledMovie.data)
        return filteredScheduledMovie.data
        

    }catch(err){}
}

// export const getSchedule = async(id,date)=>{
//     try{
//         const scheduledMovie = await axios.get(`http://localhost:4000/user/schedule/${id}/${date}`)
//         return scheduledMovie.data

//     }catch(err){}
// }

export const addScreen = async(schedule)=>{
    try{
        const addScreenData = await axios.post('http://localhost:4000/admin/addscreen',schedule)
        return addScreenData.data

    }catch(err){
        console.log(err)
    }
}
export const bookingSeats = async(paymentDetails)=>{
    console.log("payment..................",paymentDetails)
    try{
        const bookSeats = await axios.post('http://localhost:4000/user/booktickets',paymentDetails)
        console.log("//////////////////",bookSeats.data)
        return bookSeats.data

    }catch(err){
        console.log(err)
    }
}





export const userBooking = async (userId) => {
    console.log("User ID:", userId);
    try {
        const userBookingResponse = await axios.get(`http://localhost:4000/user/userbooking?userId=${userId}`);
        return userBookingResponse.data;
    } catch (err) {
        console.log(err);
    }
};



export const getMovies = ()=>{}