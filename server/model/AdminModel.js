const mongoose = require('mongoose')
const AdminSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String

},
{timestamps:true})

module.exports = mongoose.model('admincollection',AdminSchema)