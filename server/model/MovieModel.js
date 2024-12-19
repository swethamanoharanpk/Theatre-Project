const mongoose = require('mongoose')
const MovieSchema = new mongoose.Schema({
    movieName:String,
    duration:String,
    language:String,
    genre:String,
    image:String,
    director:String,
    production:String,
    staring:String,
    status:{
        type:String,
    enum:['running','comingsoon','expires']}



},
{timestamps:true})

module.exports = mongoose.model('moviecollection',MovieSchema)
