const admin = require('../model/AdminModel')
const movies = require('../model/MovieModel')
const banner = require('../model/BannerModel')
const {generateToken} = require('../jwtverify')


const adminLogin = async (req,res)=>{
    try{
        const adminLoginData = admin.findOne({email:req.body.email})
        console.log(adminLoginData)
        if(!adminLoginData){
            return res.status(401).json({message:'Admin credentials is not matched'})
        }else{
        const Token = generateToken(adminLoginData._id,'admin')
        return res.status(200).json({token:Token,id:adminLoginData._id,role:'admin',message:"admin login successfull"})
        }

    }catch(err){
        return res.status(500).json(err.message)

    }
    
}

const postMovies = async(req,res)=>{
    try{
        
        const postedMovies = await movies.create(req.body)
        //  console.log(postedMovies)
        return res.status(200).json({message:'movie added successfully'})


    }catch(err){
        return res.status(500).json(err.message)
    }
}
const postBanner = async(req,res)=>{
    try{

        const postedBanner = await banner.create(req.body)
        return res.status(200).json({message:'upload banner successfully'})

    }catch(err){
        return res.status(500).json(err.message)
    }
}

const getBanner = async(req,res)=>{
    
    try{
        const getBannerDetails = await banner.find()
        return res.status(200).json(getBannerDetails)

    }catch(err){
        return res.status(500).json(err.message)
    }
}

const getMovies = async(req,res)=>{
    try{
        const getMovieDetails = await movies.find({status:'running'})
        return res.status(200).json(getMovieDetails)

    }catch(err){
        return res.status(500).json(500).json(err.message)
    }
}



module.exports = {adminLogin,postMovies,postBanner,getBanner,getMovies}