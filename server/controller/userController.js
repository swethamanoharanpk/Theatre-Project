const user = require('../model/UserModel')
const movie = require('../model/MovieModel')
const Screen = require('../model/ScheduleModel')
const argon = require('argon2')
const {generateToken} = require('../jwtverify')
const Stripe = require('stripe');
const Booking = require('../model/BookingSchema')
const mongoose = require('mongoose')


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


// const getScheduledMovies = async(req,res)=>{
//     try{
//         const date = req.params.date;
//         const movieId  = req.params.id;
//       console.log("11111111111111111111",date,movieId)
//       const screen = await Screen.find({movieId})
//       console.log("screeennnnnnnn",screen)
       
//       let temp = [];
//       screen.movieSchedules.forEach(schedule => {
//         let showDate = new Date(schedule.showDate)
//             let bodyDate = new Date(date);
//             if(showDate.getDay()===bodyDate.getDay() &&
//                showDate.getMonth()===bodyDate.getMonth() &&
//                showDate.getFullYear()===bodyDate.getFullYear() &&
//                schedule.movieId == movieId){
//                 temp.push(screen)
//                }
        
        
//       });

//       return res.status(200).json(temp)

//     }catch(err){
//         return res.status(500).json(err.message)
//     }
// }



const getScheduledMovies = async (req, res) => {
    try {
        const date = req.params.date;
        const movieId = req.params.id;





        const inputDate = date

// Parse the date string into a Date object
const parsedDate = new Date(inputDate);

// Convert to ISO format and set time to midnight (UTC)
const formattedDate = new Date(
  Date.UTC(parsedDate.getFullYear(), parsedDate.getMonth(), parsedDate.getDate())
).toISOString();

console.log(formattedDate); // Output: 2024-12-30T00:00:00.000Z







        console.log("Incoming params:", { date, movieId });

        // Find all schedules for the specified movieId
        const screens = await Screen.findOne({ movieId:movieId , showsDate:formattedDate });

        console.log("Fetched screens:", screens);

        const temp = [];

        // Iterate through each screen and its schedules
        // screens.forEach(screen => {
        //     screen.movieSchedules.forEach(schedule => {
        //         const showDate = new Date(schedule.showDate);
        //         const bodyDate = new Date(date);

        //         if (
        //             showDate.getDate() === bodyDate.getDate() &&
        //             showDate.getMonth() === bodyDate.getMonth() &&
        //             showDate.getFullYear() === bodyDate.getFullYear()
        //         ) {
        //             temp.push({
        //                 screenId: screen._id,
        //                 schedule, // Include the matching schedule
        //             });
        //         }
        //     });
        // });


        if (screens.movieSchedules && Array.isArray(screens.movieSchedules)) {
            screens.movieSchedules.forEach(schedule => {
                const showDate = new Date(schedule.showDate);
                const bodyDate = new Date(date);
        
                if (
                    showDate.getDate() === bodyDate.getDate() &&
                    showDate.getMonth() === bodyDate.getMonth() &&
                    showDate.getFullYear() === bodyDate.getFullYear()
                ) {
                    temp.push({
                        screenId: screens._id,
                        schedule, // Include the matching schedule
                    });
                }
            });
        }
        

        console.log("Filtered schedules:", temp);
        
            return res.status(200).json(screens);
        

        
    } catch (err) {
        console.error("Error in getScheduledMovies:", err);
        return res.status(500).json({ error: err.message });
    }
};




const getFilteredScheduledMovies = async (req, res) => {
    try {
        const date = req.params.date;
        const movieId = req.params.id;

        console.log("Incoming params:", { date, movieId });

        // Find all schedules for the specified movieId
        const screens = await Screen.findOne({ movieId });

        console.log("Fetched :", screens);

        const temp = [];

        if (screens.movieSchedules && Array.isArray(screens.movieSchedules)) {
            screens.movieSchedules.forEach(schedule => {
                const showDate = new Date(schedule.showDate);
                const bodyDate = new Date(date);
        
                if (
                    showDate.getDate() === bodyDate.getDate() &&
                    showDate.getMonth() === bodyDate.getMonth() &&
                    showDate.getFullYear() === bodyDate.getFullYear()
                ) {
                    temp.push({
                        screenId: screens._id,
                        schedule, // Include the matching schedule
                    });
                }
            });
        }
        

        console.log("Filtered:", temp);

        return res.status(200).json(temp);
    } catch (err) {
        console.error("Error in getScheduledMovies:", err);
        return res.status(500).json({ error: err.message });
    }
};


// const bookTickets = async(req,res)=>{
//     try{
//         const {showTime,showDate,movieId,seats,totalPrice,paymentId,paymentType} = req.body
//         console.log("ppppppppppppppp",req.body)
//         const screen = await Screen.findById(movieId)
//         const User = await user.findById(req.userId)

//         if(!screen) {
//             return res.status(404).json({
//                 message:"theatre not found"
//             })
//         }


//         const stripe = new Stripe(process.env.STRIPESCRTKEY)

//         const session = await stripe.checkout.sessions.create({
//             payment_method_types:['card'],
//             mode: 'payment',
//             success_url: `${process.env.CLIENTURL}/checkout-success`,
//             cancel_url: `${req.protocol}://${req.get('host')}/seat/${movieId}`,
//             customer_email: User.email,
//             line_items:[{
//                 price_data:{
//                     currency:'USD',
//                     unit_amount: totalPrice * 100,
//                     product_data:{
//                         name : screen.movieName,

//                 }
//                 },
//                 quantity:1
//             }]
//         })

        
//         const movieSchedule = screen.movieSchedules.find(schedule=>{
//             console.log(schedule)
//             let showDate1 = new Date(schedule.showDate)
//             let showDate2 = new Date(showDate)
//             if(showDate1.getDay() == showDate2.getDay() &&
//             showDate1.getMonth() == showDate2.getMonth() &&
//             showDate1.getFullYear() == showDate2.getFullYear() &&
//             schedule.showTime === showTime &&
//             schedule.movieId === movieId){
//                 return true;
//             }
//             return false;
//         })


//         if(!movieSchedule){
//             return res.status(404).json({message:"movie schedule not found"})
//         }

        
//         if(!User){
//             return res.status(404).json({message:"User not found"})
//         }

//         const newBooking = new Booking({userId:req.userId, showTime, showDate, movieId, screenId,seats,totalPrice, paymentId, paymentType})
//         await newBooking.save();
//         console.log('new booking done')

//         movieSchedule.notAvailableSeats.push(...seats);
//         await screen.save();
//         User.bookings.push(newBooking._id)
//         await user.save();

//         return res.status(200).json({message:"Booking successfull"})



//     }catch(err){
//         return res.status(500).json(err.message)
//     }
// }



const bookTickets = async (req, res) => {
    try {
        const { showTime, showDate, movieId, seats, totalPrice, paymentId, paymentType ,movieName,userId} = req.body;
        console.log("Request Body:", req.body);

        const screen = await Screen.findOne({movieId});
        console.log("screennnnnnnnnnnnnn",screen)
        
        if (!screen) {
            return res.status(404).json({ message: "Theatre not found" });
           
        }

        const User = await user.findById(req.body.userId);
        console.log("screen and userrrrrrrrrrrrrrr",User)
        if (!User) {
            return res.status(404).json({ message: "User not found" });
        }

        
        const stripe = new Stripe(process.env.STRIPESCRTKEY);

        let session;
        try {
            session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                mode: 'payment',
                line_items: [{
                    price_data: {
                        currency: 'usd',
                        unit_amount: totalPrice * 100, // Ensure correct unit conversion
                        product_data: {
                            name: screen.movieName,
                        },
                    },
                    quantity: 1,
                }],
                success_url: `${process.env.CLIENTURL}/success`,
                cancel_url: `${process.env.CLIENTURL}/cancel`,
                customer_email: User.email,

                
                
            });


            const newBooking = new Booking({
                userId: req.body.userId,
                showTime,
                showDate,
                movieId,
                movieName, 
                seats,
                totalPrice,
                paymentId,
                paymentType,
            });
    
            await newBooking.save();
            console.log("New booking done");

        
        } catch (stripeError) {
            console.error("Stripe error:", stripeError.message);
            return res.status(500).json({ message: "Stripe session creation failed", error: stripeError.message });
        }



        return res.status(200).json({ message: "Booking successful", session});
    } catch (err) {
        console.error("Error:", err.message);
        return res.status(500).json({ message: err.message });
    }
};

// const bookingConfirm = async(req,res)=>{
//     try{


//         const movieSchedule = screen.movieSchedules?.find(schedule => {
//             console.log(schedule);
//             const scheduleDate = new Date(schedule.showDate);
//             const inputDate = new Date(showDate);
//             return (
//                 scheduleDate.toDateString() === inputDate.toDateString() &&
//                 schedule.showTime === showTime &&
//                 schedule.movieId === movieId
//             );
//         });

//         // console.log("sesssionnnnnnnnnnn",session)
        
//         // if (!movieSchedule) {
//         //     return res.status(404).json({ message: "Movie schedule not found" });
//         // }


//         User.bookings.push(newBooking._id);
//         await User.save();


//         const movieSchedule = screen.movieSchedules?.find(schedule => {
//             console.log(schedule);
//             const scheduleDate = new Date(schedule.showDate);
//             const inputDate = new Date(showDate);
//             return (
//                 scheduleDate.toDateString() === inputDate.toDateString() &&
//                 schedule.showTime === showTime &&
//                 schedule.movieId === movieId
//             );
//         });

//         movieSchedule.notAvailableSeats.push(...seats);
//         await screen.save();

//         console.log("haiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii")

       
       
        
//     }catch(err){
//         return res.status(500).json({message:err.message})
//     }
// }



// const userBooking = async(req,res)=>{
//     try{
        
//         const getUserBooking = await Booking.find({userId:req.body.userId})
//         console.log("userBokkinggggggggggggg",getUserBooking)
//         return res.status(200).json(getUserBooking)

//     }catch(err){
//         return res.status(500).json({message:err.message})
//     }
// }



const userBooking = async (req, res) => {
    try {
        const userId = req.query.userId; // Access query parameter
        if (!userId) {
            return res.status(400).json({ message: "userId is required" });
        }

        const getUserBooking = await Booking.find({ userId });
        res.status(200).json(getUserBooking);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};





module.exports = {userRegister,userLogin,getsingleMovieData,getSingleUser,updateUser,getComingsoonMovies,getScheduledMovies,getFilteredScheduledMovies,bookTickets,userBooking}