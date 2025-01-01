
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import '../../styles/Seat.css';
import { bookingSeats, getFilteredSchedule, getSchedule, getSingleMovieDetails } from '../../../api';

function Seats() {
    const params = useParams();
    const { id, date } = params;

    const [userId,setUserId] = useState(null)

    const [selectedTime, setSelectedTime] = useState(null);
    const [selectedSeat, setSelectedSeat] = useState([]);
    const [movie, setMovie] = useState(null);
    const [screen, setScreen] = useState(null);
    const [filtered,setFiltered] = useState(null)
    const [selectedDate,setSlectedDate] = useState(null)

  

    useEffect(() => {
        getSingleMovieDetails(id).then((result) => {
            setMovie(result);

            
            
        });
    }, [id]);

    console.log("userIdddddddddddddddddddddddddddd",userId)


    useEffect(() => {
        getSchedule(id, date).then((result) => {
            setScreen(result);
            if (result.movieSchedules && result.movieSchedules.length > 0) {
                setSelectedTime(result.movieSchedules[0]);
            }
            
        });
    }, [id, date]);

   

    useEffect(()=>{
      getFilteredSchedule(id,date).then((result)=>{
        setFiltered(result)
      })
    },[id,date])

    console.log("screennnnnnnnnnnnnn",screen)
    console.log("timeeeeeeeeeeeeeeee",selectedTime)
    console.log("filterrrrrrrrrrrrrrrrr",filtered)

    const selectDeselectSeat = (seat) => {
      
        const isSelected = selectedSeat.some((s) =>
            s.row === seat.row && 
            s.col === seat.col &&
            s.seat_id === seat.seat_id
        );

        if (isSelected) {
            setSelectedSeat(selectedSeat.filter((s) =>
                s.row !== seat.row ||
                s.col !== seat.col ||
                s.seat_id !== seat.seat_id
            ));
        } else {
            setSelectedSeat([...selectedSeat, seat]);
        }
        console.log("seattttttttttttttttttttt", seat)
    };




  const generateSeatLayout = () => {
    if (!screen || !selectedTime) {
        return <p>Loading seat layout...</p>;
    }

    console.log("selectedtimeee",selectedTime,)

    const scheduleIndex = screen.movieSchedules.findIndex((t) => t.showTime === selectedTime.showTime);
    
    // if (scheduleIndex === -1 || !screen.seats || !screen.seats[scheduleIndex] || !screen.seats[scheduleIndex].rows) {
    //     return <p>No seats available for this time slot.</p>;
    // }

    const notAvailableSeats = screen.movieSchedules[scheduleIndex].notAvailableSeats || [];
    const seatBlock = screen.seats[scheduleIndex];
    console.log("seatblock",scheduleIndex)

    return (
        <div>
        {screen.seats.map((seatType, index) => (
            <div className="seat-type" key={index}>
                <h6>{seatType.type} - ₹{seatType.price}</h6>
                <div className="seat-rows">
                    {seatType.rows.map((row, rowIndex) => (
                        <div key={rowIndex} className="seat-row">
                            <p className="rowname">Row: {row.rowName}</p>
                            <div className="seat-cols">
                                {row.cols.map((col, colIndex) => (
                                    <div key={colIndex} className="seat-col">
                                        {col.seats.map((seat, seatIndex) => {
                                            const isUnavailable = notAvailableSeats.some(
                                                (s) =>
                                                    s.row === row.rowName &&
                                                    s.seat_id === seat.seat_id &&
                                                    s.col === colIndex
                                            );
        
                                            const isSelected = selectedSeat.some(
                                                (s) =>
                                                    s.row === row.rowName &&
                                                    s.seat_id === seat.seat_id &&
                                                    s.col === colIndex
                                            );
        
                                            const seatClass = isUnavailable
                                                ? "seat-unavailable"
                                                : isSelected
                                                ? "seat-selected"
                                                : "seat-available";
        
                                            return (
                                                <span
                                                    key={seatIndex}
                                                    className={seatClass}
                                                    onClick={() =>
                                                        !isUnavailable &&
                                                        selectDeselectSeat({
                                                            row: row.rowName,
                                                            col: colIndex,
                                                            seat_id: seat.seat_id,
                                                            price: seatType.price
                                                        })
                                                    }
                                                >
                                                    {seatIndex + 1}
                                                </span>
                                            );
                                        })}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ))}
        
        
        </div>
    );
};



var userDetails = useSelector((info)=>info.userInfo.login)
console.log("userrrrrrrrrrrrrrrrrrrr",userDetails.id)

// const handleBooking = ()=>{
   
            
//     bookingSeats({showTime:selectedTime.showTime, showDate:date,movieId:id,userId:userDetails.id,
//         seats:selectedSeat,totalPrice:selectedSeat.reduce((acc, seat)=>acc + seat.price, 0),
//         paymentId:'123456789',
//         paymentType:'online'
//     }).then((result)=>{console.log("resulttttttttttttttttttttttttttttt",result)

//     })

// }




async function handleBooking() {
    try {
        const response = await bookingSeats({
            showTime: selectedTime.showTime,
            showDate: date,
            movieId: id,
            movieName:movie.movieName,
            userId: userDetails.id,
            seats: selectedSeat,
            totalPrice: selectedSeat.reduce((acc, seat) => acc + seat.price, 0),
            paymentId: '123456789',
            paymentType: 'online',
        });

        console.log("urllllllllllllllllllllll",response.session.url)

        if (response.session?.url) {
            window.location.href = response.session.url;
        }

        
    } catch (error) {
        console.error("Error during booking:", error);
    }
}




  if(screen){
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~", selectedTime)
  }




    return (
        <div className='selectseatpage'>
        {
          movie && screen &&
          <div className='s1'>
          <div className='head'>
          <h1>{movie.movieName}</h1>
          <h5>date:{selectedDate}</h5>
          </div>
          </div>
        }
        {
    
          screen &&
          <div className='selectedseat'>
          <div className='timecont'>
          {
            screen.movieSchedules.map((schedule,index)=>(
              
              
          
              <h6 key={index}
              className={selectedTime?._id === schedule._id ? 'selected' : 'time'}
              
              onClick={()=>{
                setSelectedTime(schedule)
                setSelectedSeat([])
            
              }}
              
              >{schedule.showTime}</h6>
              
              
              
            ))
          }
          </div>
          </div>
        }


        <div className='indicators'>
          <div>
            <span className='seat-unavailable'></span>
            <p>Not Available</p>
          </div>
          <div>
            <span className='seat-available'></span>
            <p>Available</p>
          </div>
          <div>
            <span className='seat-selected'></span>
            <p>Selected</p>
          </div>
        </div>
            <h5>Seats for {movie?.movieName}</h5>
            <div>
                <h5>{selectedTime?.showTime || "No time selected"}</h5>

                {generateSeatLayout()}
                <div className='totalcont'>
                <div className='total'>
                <h4>Total</h4>
                <h3>Rs. {selectedSeat.reduce((acc,seat)=> acc + seat.price , 0)}</h3>
                </div>
                <button className='button' onClick={handleBooking}>
                Book Now
                </button>
                </div>
                
            </div>
        </div>
    );
}

export default Seats;






