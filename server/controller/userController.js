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
        res.status(200).json(singleData)

    }catch(err){
        return res.status(500).json(err.message)
    }
}

module.exports = {userRegister,userLogin,getsingleMovieData}