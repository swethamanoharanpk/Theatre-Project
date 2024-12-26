const user = require('../model/UserModel')
const movie = require('../model/MovieModel')
// const movieSchedules = require('../model/ScheduleModel')
const Screen = require('../model/ScheduleModel')
const argon = require('argon2')
const {generateToken} = require('../jwtverify')


const userRegister = async(req,res)=>{
        req.body.password = await argon.hash(req.body.password);
    try{
        const postDatas = await user.create(req.body)
        return res.status(200).json({message:'register succesfull'})

    }catch(err){
        return res.status(500).json(err.message)
    }
}

const userLogin = async(req,res)=>{
    try{
        const findUser = await user.findOne({email:req.body.email})
        if(!findUser){
            return res.status(401).json({message:'email is not match'})
        }
        if(await argon.verify(findUser.password,req.body.password)){
            const Token = generateToken(findUser._id,'user')
            return res.status(200).json({token:Token,id:findUser._id,role:'user',message:'login success'})
        }else{
            return res.status(401).json('password and email are not match')
        }

    }catch(err){
        return res.status(500).json(err.message)
    }
}


const getsingleMovieData = async(req,res)=>{
    try{
        const singleData = await movie.findById(req.params.id)
        console.log("singleeeeeeeeeeeeeee",singleData)
        return res.status(200).json(singleData)

    }catch(err){
        return res.status(500).json(err.message)
    }
}

const getSingleUser = async(req,res)=>{
    try{
        const singleUser = await user.findById(req.params.id)
        return res.status(200).json(singleUser)


    }catch(err){
        return res.status(500).json(err.message)
    }
}

const updateUser = async(req,res)=>{
    console.log("helllllllllllllllll")
    if(req.body.password){
        req.body.password = await argon.hash(req.body.password)
    }
    
    try{

        const updatedUser = await user.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        console.log("jjjjjjjj",updatedUser)
        return res.status(200).json(updatedUser)

    }catch(err){
        return res.status(500).json(err.message)
    }
}

const getComingsoonMovies = async(req,res)=>{
    try{
        const getComingMovieDetails = await movie.find({status:'comingsoon'})
        return res.status(200).json(getComingMovieDetails)

    }catch(err){
        return res.status(500).json(500).json(err.message)
    }
}


// const getScheduledMovies = async(req,res)=>{
//     try{
//         const date = req.params.date;
//         const movieId  = req.params.id;
//       console.log("11111111111111111111",date,movieId)
//       const screen = await Screen.find({movieId})
//       console.log("screeennnnnnnn",screen)
       
//       let temp = [];
//       screen.movieSchedules.forEach(schedule => {
//         let showDate = new Date(schedule.showDate)
//             let bodyDate = new Date(date);
//             if(showDate.getDay()===bodyDate.getDay() &&
//                showDate.getMonth()===bodyDate.getMonth() &&
//                showDate.getFullYear()===bodyDate.getFullYear() &&
//                schedule.movieId == movieId){
//                 temp.push(screen)
//                }
        
        
//       });

//       return res.status(200).json(temp)

//     }catch(err){
//         return res.status(500).json(err.message)
//     }
// }



const getScheduledMovies = async (req, res) => {
    try {
        const date = req.params.date;
        const movieId = req.params.id;

        console.log("Incoming params:", { date, movieId });

        // Find all schedules for the specified movieId
        const screens = await Screen.find({ movieId });

        console.log("Fetched screens:", screens);

        const temp = [];

        // Iterate through each screen and its schedules
        screens.forEach(screen => {
            screen.movieSchedules.forEach(schedule => {
                const showDate = new Date(schedule.showDate);
                const bodyDate = new Date(date);

                if (
                    showDate.getDate() === bodyDate.getDate() &&
                    showDate.getMonth() === bodyDate.getMonth() &&
                    showDate.getFullYear() === bodyDate.getFullYear()
                ) {
                    temp.push({
                        screenId: screen._id,
                        schedule, // Include the matching schedule
                    });
                }
            });
        });

        console.log("Filtered schedules:", temp);

        return res.status(200).json(temp);
    } catch (err) {
        console.error("Error in getScheduledMovies:", err);
        return res.status(500).json({ error: err.message });
    }
};


module.exports = {userRegister,userLogin,getsingleMovieData,getSingleUser,updateUser,getComingsoonMovies,getScheduledMovies}