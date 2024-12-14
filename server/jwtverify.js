const webToken = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

const generateToken = (id,role)=>{
    const token = webToken.sign({id,role},process.env.jwtSecretkey,{expiresIn:'1d'})
    console.log(token)
    return token

}



const verifyUserToken = (req,res,next)=>{

    try{
        const userToken = req.headers.webToken
        if(userToken){
            webToken.verify(userToken,process.env.jwtSecretkey,(err,data)=>{
                if(err){
                    return res.status(401).json('token not authorized')
                }
                if(req.params.id == data.id){
                    next()
                }else{
                    return res.status(401).json('token not matched')
                }
            })
        }

    }catch(err){
        res.status(500).json(err.message)
    }
}

const verifyAdminToken = (req,res,next)=>{
    try{

    }catch(err){
        return res.status(500).json(err.message)
    }

}

module.exports = {generateToken,verifyUserToken}