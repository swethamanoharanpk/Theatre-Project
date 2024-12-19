const user = require('../model/UserModel')
const movie = require('../model/MovieModel')
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

module.exports = {userRegister,userLogin,getsingleMovieData,getSingleUser,updateUser,getComingsoonMovies}