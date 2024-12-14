const mongoose = require('mongoose')
const BannerSchema = new mongoose.Schema({
    title:String,
    bannerImage:String,
    language:String,
    director:String,
    staring:String
},
{timestamps:true})

module.exports = mongoose.model('bannercolletion',BannerSchema)