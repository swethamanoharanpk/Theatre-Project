const mongoose = require('mongoose')
const MovieSchema = new mongoose.Schema({
    movieName:String,
    duration:String,
    language:String,
    genre:String,
    image:String,
    director:String,
    production:String,
    staring:String


},
{timestamps:true})

module.exports = mongoose.model('moviecollection',MovieSchema)
