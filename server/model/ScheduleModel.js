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
    movieSchedules: [
        {
            movieId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'moviecollection'
            },
            showTime: String,
            showDate: Date,
            notAvailableSeats: [String]

        }
    ]


},
    { timestamps: true })
module.exports = mongoose.model('schedulecollection', movieScheduleSchema)