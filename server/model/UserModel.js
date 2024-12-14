const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    phone:String

},
{timestamps:true})




module.exports = mongoose.model('usercolletion',userSchema)