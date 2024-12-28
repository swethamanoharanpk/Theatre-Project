
// import { useParams } from 'react-router-dom';
// import React, { useEffect, useState } from "react";
// import '../../styles/Seat.css';
// import { getFilteredSchedule, getSchedule, getSingleMovieDetails } from '../../../api';

// function Seats() {
//     const params = useParams();
//     const { id, date } = params;

//     const [selectedTime, setSelectedTime] = useState(null);
//     const [selectedSeat, setSelectedSeat] = useState([]);
//     const [movie, setMovie] = useState(null);
//     const [screen, setScreen] = useState(null);
//     const [filtered,setFiltered] = useState(null)

//     useEffect(() => {
//         getSingleMovieDetails(id).then((result) => {
//             setMovie(result);
//         });
//     }, [id]);

//     useEffect(() => {
//         getSchedule(id, date).then((result) => {
//             setScreen(result);
//             if (result.movieSchedules && result.movieSchedules.length > 0) {
//                 setSelectedTime(result.movieSchedules[0]);
//             }
//         });
//     }, [id, date]);

//     useEffect(()=>{
//       getFilteredSchedule(id,date).then((result)=>{
//         setFiltered(result)
//       })
//     },[id,date])

//     console.log("screennnnnnnnnnnnnn",screen)
//     console.log("timeeeeeeeeeeeeeeee",selectedTime)
//     console.log("filterrrrrrrrrrrrrrrrr",filtered)

//     const selectDeselectSeat = (seat) => {
      
//         const isSelected = selectedSeat.some((s) =>
//             s.row === seat.row && 
//             s.col === seat.col &&
//             s.seat_id === seat.seat_id
//         );

//         if (isSelected) {
//             setSelectedSeat(selectedSeat.filter((s) =>
//                 s.row !== seat.row ||
//                 s.col !== seat.col ||
//                 s.seat_id !== seat.seat_id
//             ));
//         } else {
//             setSelectedSeat([...selectedSeat, seat]);
//         }
//         console.log("seattttttttttttttttttttt", seat)
//     };





//   const generateSeatLayout = () => {
//     if (!screen || !selectedTime) {
//         return <p>Loading seat layout...</p>;
//     }

//     const scheduleIndex = screen.movieSchedules.findIndex((t) => t._id === selectedTime._id);
//     if (scheduleIndex === -1 || !screen.seats || !screen.seats[scheduleIndex] || !screen.seats[scheduleIndex].rows) {
//         return <p>No seats available for this time slot.</p>;
//     }

//     const notAvailableSeats = screen.movieSchedules[scheduleIndex].notAvailableSeats || [];
//     const seatBlock = screen.seats[scheduleIndex];
//     console.log("seatblock",seatBlock)

//     return (
//         <div>
//         {screen.seats.map((seatType,index)=>{
//             <div className='seat-type' key={index}>
//             <h3>{seatType.type}- {seatType.price}</h3>
//             <div className='seat-rows'>
//             {seatType.rows.map((row, rowIndex) => (
//                 <div key={rowIndex} className="seat-row">
//                     <p className="rowname">Row: {row.rowName}</p>
//                     <div className="seat-cols">
//                         {row.cols.map((col, colIndex) => (
//                             <div key={colIndex} className="seat-col">
//                                 {col.seats.map((seat, seatIndex) => {
                        
//                                     const isUnavailable = notAvailableSeats.some(
//                                         (s) =>
//                                             s.row === row.rowName &&
//                                             s.seat_id === seat.seat_id &&
//                                             s.col === colIndex
//                                     );

//                                     const isSelected = selectedSeat.some(
//                                         (s) =>
//                                             s.row === row.rowName &&
//                                             s.seat_id === seat.seat_id &&
//                                             s.col === colIndex
//                                     );

//                                     const seatClass = isUnavailable
//                                         ? "seat-unavailable"
//                                         : isSelected
//                                         ? "seat-selected"
//                                         : "seat-available";

//                                     return (
//                                         <span
//                                             key={seatIndex}
//                                             className={seatClass}
//                                             onClick={() =>
//                                                 !isUnavailable &&
//                                                 selectDeselectSeat({
//                                                     row: row.rowName,
//                                                     col: colIndex,
//                                                     seat_id: seat.seat_id,
//                                                 })
//                                             }
//                                         >
//                                             {seatIndex + 1}
//                                         </span>
//                                     );
//                                 })}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             ))}
//             </div>
//             </div>
//         })}
//         </div>
//     );
// };



//   if(screen){
//   console.log("~~~~~~~~~~~~~~~~~~~~~~~~~", selectedTime)
//   }

//     return (
//         <div className='selectseatpage'>
//         {
//           movie && screen &&
//           <div className='s1'>
//           <div className='head'>
//           <h1>{movie.movieName}</h1>
//           </div>
//           </div>
//         }
//         {
//           screen &&
//           <div className='selectedseat'>
//           <div className='timecont'>
//           {
//             screen.movieSchedules.map((schedule,index)=>(
              
              
          
//               <h6 key={index}
//               className={selectedTime?._id === schedule._id ? 'selected' : 'time'}
              
//               onClick={()=>{
//                 setSelectedTime(schedule)
//                 setSelectedSeat([])
            
//               }}
              
//               >{schedule.showTime}</h6>
              
              
//             ))
//           }
//           </div>
//           </div>
//         }
//             <h5>Seats for {movie?.movieName}</h5>
//             <div>
//                 <h5>{selectedTime?.showTime || "No time selected"}</h5>
//                 {generateSeatLayout()}
//             </div>
//         </div>
//     );
// }

// export default Seats;









// import { useParams } from 'react-router-dom';
// import React, { useEffect, useState } from "react";
// import '../../styles/Seat.css';
// import { getFilteredSchedule, getSchedule, getSingleMovieDetails } from '../../../api';

// function Seats() {
//     const params = useParams();
//     const { id, date } = params;

//     const [selectedTime, setSelectedTime] = useState(null);
//     const [selectedSeat, setSelectedSeat] = useState([]);
//     const [movie, setMovie] = useState(null);
//     const [screen, setScreen] = useState(null);
//     const [filtered,setFiltered] = useState(null)

//     useEffect(() => {
//         getSingleMovieDetails(id).then((result) => {
//             setMovie(result);
//         });
//     }, [id]);

//     useEffect(() => {
//         getSchedule(id, date).then((result) => {
//             setScreen(result);
//             if (result.movieSchedules && result.movieSchedules.length > 0) {
//                 setSelectedTime(result.movieSchedules[0]);
//             }
//         });
//     }, [id, date]);

//     useEffect(()=>{
//       getFilteredSchedule(id,date).then((result)=>{
//         setFiltered(result)
//       })
//     },[id,date])

//     console.log("screennnnnnnnnnnnnn",screen)
//     console.log("timeeeeeeeeeeeeeeee",selectedTime)
//     console.log("filterrrrrrrrrrrrrrrrr",filtered)

//     const selectDeselectSeat = (seat) => {
      
//         const isSelected = selectedSeat.some((s) =>
//             s.row === seat.row && 
//             s.col === seat.col &&
//             s.seat_id === seat.seat_id
//         );

//         if (isSelected) {
//             setSelectedSeat(selectedSeat.filter((s) =>
//                 s.row !== seat.row ||
//                 s.col !== seat.col ||
//                 s.seat_id !== seat.seat_id
//             ));
//         } else {
//             setSelectedSeat([...selectedSeat, seat]);
//         }
//         console.log("seattttttttttttttttttttt", seat)
//     };


  
//     const generateSeatLayout = () => {
//         if (!screen || !selectedTime) {
//             return <p>Loading seat layout...</p>;
//         }
    
//         const scheduleIndex = screen.movieSchedules.findIndex(
//             (schedule) => schedule._id === selectedTime._id
//         );
    
//         if (scheduleIndex === -1) {
//             return <p>No valid schedule found for this time slot.</p>;
//         }
    
//         const seatBlocks = screen.seats?.[scheduleIndex];
//         if (!seatBlocks || !Array.isArray(seatBlocks)) {
//             return <p>No seats available for this time slot.</p>;
//         }
    
//         const notAvailableSeats = screen.movieSchedules[scheduleIndex]?.notAvailableSeats || [];
    
//         return (
//             <div>
//                 {seatBlocks.map((seatType, index) => (
//                     <div className="seat-type" key={index}>
//                         <h3>{seatType.type} - ₹{seatType.price}</h3>
//                         <div className="seat-rows">
//                             {seatType.rows.map((row, rowIndex) => (
//                                 <div key={rowIndex} className="seat-row">
//                                     <p className="rowname">Row: {row.rowName}</p>
//                                     <div className="seat-cols">
//                                         {row.cols.map((col, colIndex) => (
//                                             <div key={colIndex} className="seat-col">
//                                                 {col.seats.map((seat, seatIndex) => {
//                                                     const isUnavailable = notAvailableSeats.some(
//                                                         (s) =>
//                                                             s.row === row.rowName &&
//                                                             s.seat_id === seat.seat_id &&
//                                                             s.col === colIndex
//                                                     );
    
//                                                     const isSelected = selectedSeat.some(
//                                                         (s) =>
//                                                             s.row === row.rowName &&
//                                                             s.seat_id === seat.seat_id &&
//                                                             s.col === colIndex
//                                                     );
    
//                                                     const seatClass = isUnavailable
//                                                         ? "seat-unavailable"
//                                                         : isSelected
//                                                         ? "seat-selected"
//                                                         : "seat-available";
    
//                                                     return (
//                                                         <span
//                                                             key={seatIndex}
//                                                             className={seatClass}
//                                                             onClick={() =>
//                                                                 !isUnavailable &&
//                                                                 selectDeselectSeat({
//                                                                     row: row.rowName,
//                                                                     col: colIndex,
//                                                                     seat_id: seat.seat_id,
//                                                                 })
//                                                             }
//                                                         >
//                                                             {seatIndex + 1}
//                                                         </span>
//                                                     );
//                                                 })}
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         );
//     };
    


//   if(screen){
//   console.log("~~~~~~~~~~~~~~~~~~~~~~~~~", selectedTime)
//   }

//     return (
//         <div className='selectseatpage'>
//         {
//           movie && screen &&
//           <div className='s1'>
//           <div className='head'>
//           <h1>{movie.movieName}</h1>
//           </div>
//           </div>
//         }
//         {
//           screen &&
//           <div className='selectedseat'>
//           <div className='timecont'>
//           {
//             screen.movieSchedules.map((schedule,index)=>(
              
              
          
//               <h6 key={index}
//               className={selectedTime?._id === schedule._id ? 'selected' : 'time'}
              
//               onClick={()=>{
//                 setSelectedTime(schedule)
//                 setSelectedSeat([])
            
//               }}
              
//               >{schedule.showTime}</h6>
              
              
//             ))
//           }
//           </div>
//           </div>
//         }
//             <h5>Seats for {movie?.movieName}</h5>
//             <div>
//                 <h5>{selectedTime?.showTime || "No time selected"}</h5>
//                 {generateSeatLayout()}
//             </div>
//         </div>
//     );
// }

// export default Seats;




import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import '../../styles/Seat.css';
import { getFilteredSchedule, getSchedule, getSingleMovieDetails } from '../../../api';

function Seats() {
    const params = useParams();
    const { id, date } = params;

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
                
            </div>
        </div>
    );
}

export default Seats;






