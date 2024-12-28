const mongoose = require('mongoose')
const movieScheduleSchema = new mongoose.Schema({
    movieName: {
        type: String
    },
    movieId:{
        type:String
    },
    seats:{
        type:Array
    },
    showsDate:{
        type:Date
    },
    movieSchedules: [
        {
            movieId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'moviecollection'
            },
            showTime: String,
            showDate: Date,
            notAvailableSeats: [{
                row : String,
                col : Number,
                seat_id : String,
                price : Number
            }]

        }
    ]


},
    { timestamps: true })
module.exports = mongoose.model('schedulecollection', movieScheduleSchema)