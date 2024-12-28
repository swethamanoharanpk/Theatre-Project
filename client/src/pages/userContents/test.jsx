import { useParams } from 'react-router-dom';
import '../../styles/Seat.css'
import React, { useEffect, useState } from "react";
import { getSchedule, getSingleMovieDetails } from '../../../api';





function Seats() {


  const screen = {
    timeSlot: [
      {
        time: '10.00 AM',
        seats: [
          {
            type: 'top',
            rows: [
              {
                rowName: 'H',
                cols: [
                  {
                    seats: [
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '1'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '2'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '3'
                      },
                      {
                        type: 'seat',
                        status: 'unavailable',
                        seat_id: '4'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '5'
                      }
                    ]
                  },
                  {
                    seats: [
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '1'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '2'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '3'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '4'
                      },
                      {
                        type: 'seat',
                        status: 'unavailable',
                        seat_id: '5'
                      }

                    ]
                  }
                ]




              },
              {
                rowName: 'G',
                cols: [
                  {
                    seats: [
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '1'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '2'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '3'
                      },
                      {
                        type: 'seat',
                        status: 'unavailable',
                        seat_id: '4'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '5'
                      }
                    ]
                  },
                  {
                    seats: [
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '1'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '2'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '3'
                      },
                      {
                        type: 'seat',
                        status: 'available',
                        seat_id: '4'
                      },
                      {
                        type: 'seat',
                        status: 'unavailable',
                        seat_id: '5'
                      }
                    ]
                  }
                ]
              }

            ],
            price: 150
          }
        ]
      }
    ]
  }

  const params = useParams()

  const { id, date } = params

  console.log("paramssssssssssssssssss", id, date)


  const [selectedTime, setSelectedTime] = useState(screen.timeSlot[0])
  // const [selectedTime,setSelectedTime] = useState("")
  const [selectedSeat, setSelectedSeat] = useState([])
  const [movie, setMovie] = useState(null)


  useEffect(()=>{
    getSingleMovieDetails(id).then((result)=>{
      console.log("+++++++++++++++++",result)
      setMovie(result)
    })

  },[])

  useEffect(()=>{
    getSchedule(id,date).then((result)=>{
      console.log("final movieeeeeeeeeeeeeeeeeee",result)
      setSelectedTime(result[0])
    })


  },[])
  console.log("timeeeeeeeeeeeeeeeeee",selectedTime)



  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const movieDetails = await getSingleMovieDetails(id);
  //       console.log("+++++++++++++++++", movieDetails);
  //       setMovie(movieDetails);

  //       const schedule = await getSchedule(id, date);
  //       console.log("final movieeeeeeeeeeeeeeeeeee", schedule);

  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, [id, date]); // Ensure id and date are added to the dependency array.




  const selectDeselectSeat = (seat) => {
    console.log("seattttttttttttttttttttt", seat)
    const isSelected = selectedSeat.some((s) => (
      s.row === seat.row &&
      s.col === seat.col &&
      s.seat_id === seat.seat_id

    ))

    if (isSelected) {
      setSelectedSeat(selectedSeat.filter((s) => (
        s.row != seat.row ||
        s.col != seat.col ||
        s.seat_id !== seat.seat_id)));
    } else {
      setSelectedSeat([...selectedSeat, seat])

    }
  }

  console.log("seatt finallllllllllllllllllllll", selectedSeat)




  const generateSeatLayout = () => {


    const x = screen.timeSlot.findIndex((t) => t.time == selectedTime.time)

    return screen.timeSlot[x].seats.map((seatType, index) => (
      <div className='seat-type' key={index}>
        <h2>{seatType.type} - Rs. {seatType.price}</h2>
        <div className='seat-rows'>
          {
            seatType.rows.map((row, rowIndex) => (
              <div className='seat-row' key={rowIndex}>
                <p className='rowname'>{row.rowName}</p>
                <div className='seat-cols'>
                  {row.cols.map((col, colIndex) => (
                    <div className='seat-col' key={colIndex}>
                      {col.seats.map((seat, seatIndex) => (
                        <div key={seatIndex}>
                          {
                            seat.status == 'available' &&
                            <span className={
                              selectedSeat.find((s) => {
                                return s.row === row.rowName && s.seat_id === seat.seat_id && s.col === colIndex
                              }) ? 'seat-selected' : 'seat-available'
                            }
                              onClick={() => selectDeselectSeat({
                                row: row.rowName,
                                col: colIndex,
                                seat_id: seat.seat_id,
                                price: seatType.price
                              })}>
                              {seatIndex + 1}
                            </span>

                          }
                          {
                            seat.status == 'unavailable' &&
                            <span className='seat-unavailable'
                            >
                              {seatIndex + 1}
                            </span>

                          }

                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))
          }

        </div>
      </div>
    ))

  }









  return (
    <div>

      <div className='selectseat'>
        <div className='timecont'>
          {screen.timeSlot.map((time, index) => {
            return (
              <h6 key={index}
                className={selectedTime.time === time.time ? 'time-selected' : 'time'}
                onClick={() => {
                  setSelectedTime(time)
                }}
              >{time.time}

              </h6>
            )

          })}
        </div>
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
          
        <div className='totalcontainer'></div>
      </div>

    </div>
  )
}

export default Seats




// seat generatelayout
// const generateSeatLayout = () => {
    //     if (!screen || !selectedTime) {
    //         return <p>Loading seat layout...</p>;
    //     }

    //     const scheduleIndex = screen.movieSchedules.findIndex((t) => t.showTime === selectedTime);
    //     let notavailableseats = screen.movieSchedules[scheduleIndex].notAvailableSeats

    //     if (scheduleIndex === -1 || !screen.seats || screen.seats.length === 0) {
    //         return <p>No seats available for this time slot.</p>;
    //     }

    //     const seatBlock = screen.seats[scheduleIndex];

    //     return (
    //         <div className='seat-type'>
    //         <div className='seat-rows'>
    //             {seatBlock.rows.map((row, rowIndex) => (
    //                 <div key={rowIndex} className="seat-row">
    //                     <p className='rowname'>Row: {row.rowName}</p>
    //                         <div className='seat-cols'>
    //                         {row.cols.map((col, colIndex)=>(
    //                           <div className='seat-col' key={colIndex}>
    //                           {col.seats.map((seat,seatIndex)=>{
    //                             console.log(seat),
    //                             <div key={seatIndex}>
    //                             {
    //                               notavailableseats.find((s)=>{
    //                                 s.row === row.rowname && 
    //                                 s.seat_id === seat.seat_id &&
    //                                 s.col === colIndex
    //                               }) ?
    //                               <span className='seat-unavailable'>
    //                               {seatIndex+1}
    //                               </span>
    //                               :
    //                               <span>
    //                               {seatIndex+1}
    //                               </span>
    //                             }
    //                             </div>
    //                           })}
    //                           </div>
    //                         ))}
                                
    //                         </div>
    //                     ))
    //                 </div>
    //             ))}
    //         </div>
    //         </div>
    //     );



    // const generateSeatLayout = () => {
    //   if (!screen || !selectedTime) {
    //       return <p>Loading seat layout...</p>;
    //   }
  
    //   const scheduleIndex = screen.movieSchedules.findIndex((t) => t.showTime === selectedTime);
    //   if (scheduleIndex === -1 || !screen.seats || screen.seats.length === 0) {
    //       return <p>No seats available for this time slot.</p>;
    //   }
  
    //   const notavailableseats = screen.movieSchedules[scheduleIndex].notAvailableSeats || [];
    //   const seatBlock = screen.seats[scheduleIndex];
  
    //   return (
    //       <div className="seat-type">
    //           <div className="seat-rows">
    //               {seatBlock.rows.map((row, rowIndex) => (
    //                   <div key={rowIndex} className="seat-row">
    //                       <p className="rowname">Row: {row.rowName}</p>
    //                       <div className="seat-cols">
    //                           {row.cols.map((col, colIndex) => (
    //                               <div key={colIndex} className="seat-col">
    //                                   {col.seats.map((seat, seatIndex) => (
    //                                     console.log(seat),
    //                                     <div key={seatIndex}>
    //                                     {
    //                                       notavailableseats.find((s)=>{
    //                                         s.row === row.rowname &&
    //                                         s.seat_id === seat.seat_id &&
    //                                         s.col === colIndex

    //                                       }) ?
    //                                       <span className='seat-unavailable'>
    //                                       {seatIndex+1}
    //                                       </span>
    //                                       :
    //                                       <span className={selectedSeat.find((s)=>(
    //                                         s.row === row.rowname &&
    //                                         s.seat_id ===seat.seat_id &&
    //                                         s.col === colIndex
    //                                       )) ? "seat-selected" : "seat-available"
    //                                     }
    //                                     onClick={()=>selectDeselectSeat({
    //                                       row : row.rowname,
    //                                       col : colIndex,
    //                                       seat_id : seat.seat_id,
                                        
    //                                     })}>
    //                                     {seatIndex+1}
    //                                       </span>
    //                                     }</div>
    //                                   )


                                          
                                          
    //                                   )}
    //                               </div>
    //                           ))}
    //                       </div>
    //                   </div>
    //               ))}
    //           </div>
    //       </div>
    //   );


    //generate layout
    
  //   const generateSeatLayout = () => {
  //     if (!screen || !selectedTime) {
  //         return <p>Loading seat layout...</p>;
  //     }
  
  //     const scheduleIndex = screen.movieSchedules.findIndex((t) => t.showTime === selectedTime.showTime);
  //     if (scheduleIndex === -1 || !screen.seats || screen.seats.length === 0) {
  //         return <p>No seats available for this time slot.</p>;
  //     }
  //     console.log("indexxxxxxxxxx",scheduleIndex)
  
  //     const notavailableseats = screen.movieSchedules[scheduleIndex].notAvailableSeats || [];
  //     const seatBlock = screen.seats[scheduleIndex];
  
  //     return (
  //         <div className="seat-type">
  //             <div className="seat-rows">
  //                 {seatBlock.rows.map((row, rowIndex) => (
  //                     <div key={rowIndex} className="seat-row">
  //                         <p className="rowname">Row: {row.rowName}</p>
  //                         <div className="seat-cols">
  //                             {row.cols.map((col, colIndex) => (
  //                                 <div key={colIndex} className="seat-col">
  //                                     {col.seats.map((seat, seatIndex) => {
  //                                         const isUnavailable = notavailableseats.some(
  //                                             (s) =>
  //                                                 s.row === row.rowName &&
  //                                                 s.seat_id === seat.seat_id &&
  //                                                 s.col === colIndex
  //                                         );
  
  //                                         const isSelected = selectedSeat.some(
  //                                             (s) =>
  //                                                 s.row === row.rowName &&
  //                                                 s.seat_id === seat.seat_id &&
  //                                                 s.col === colIndex
  //                                         );
  
  //                                         const seatClass = isUnavailable
  //                                             ? "seat-unavailable"
  //                                             : isSelected
  //                                             ? "seat-selected"
  //                                             : "seat-available";
  
  //                                         return (
  //                                             <span
  //                                                 key={seatIndex}
  //                                                 className={seatClass}
  //                                                 onClick={() =>
  //                                                     !isUnavailable &&
  //                                                     selectDeselectSeat({
  //                                                         row: row.rowName,
  //                                                         col: colIndex,
  //                                                         seat_id: seat.seat_id,
  //                                                     })
  //                                                 }
  //                                             >
  //                                                 {seatIndex + 1}
  //                                             </span>
  //                                         );
  //                                     })}
  //                                 </div>
  //                             ))}
  //                         </div>
  //                     </div>
  //                 ))}
  //             </div>
  //         </div>
  //     );
  // };



  // import { useParams } from 'react-router-dom';
//import '../../styles/Seat.css'
// import React, { useEffect, useState } from "react";
// import { getSchedule, getSingleMovieDetails } from '../../../api';





// function Seats() {


//   // const screen = {
//   //   timeSlot: [
//   //     {
//   //       time: '10.00 AM',
//   //       seats: [
//   //         {
//   //           type: 'top',
//   //           rows: [
//   //             {
//   //               rowName: 'H',
//   //               cols: [
//   //                 {
//   //                   seats: [
//   //                     {
//   //                       type: 'seat',
//   //                       status: 'available',
//   //                       seat_id: '1'
//   //                     },
//   //                     {
//   //                       type: 'seat',
//   //                       status: 'available',
//   //                       seat_id: '2'
//   //                     },
//   //                     {
//   //                       type: 'seat',
//   //                       status: 'available',
//   //                       seat_id: '3'
//   //                     },
//   //                     {
//   //                       type: 'seat',
//   //                       status: 'unavailable',
//   //                       seat_id: '4'
//   //                     },
//   //                     {
//   //                       type: 'seat',
//   //                       status: 'available',
//   //                       seat_id: '5'
//   //                     }
//   //                   ]
//   //                 },
//   //                 {
//   //                   seats: [
//   //                     {
//   //                       type: 'seat',
//   //                       status: 'available',
//   //                       seat_id: '1'
//   //                     },
//   //                     {
//   //                       type: 'seat',
//   //                       status: 'available',
//   //                       seat_id: '2'
//   //                     },
//   //                     {
//   //                       type: 'seat',
//   //                       status: 'available',
//   //                       seat_id: '3'
//   //                     },
//   //                     {
//   //                       type: 'seat',
//   //                       status: 'available',
//   //                       seat_id: '4'
//   //                     },
//   //                     {
//   //                       type: 'seat',
//   //                       status: 'unavailable',
//   //                       seat_id: '5'
//   //                     }

//   //                   ]
//   //                 }
//   //               ]




//   //             },
//   //             {
//   //               rowName: 'G',
//   //               cols: [
//   //                 {
//   //                   seats: [
//   //                     {
//   //                       type: 'seat',
//   //                       status: 'available',
//   //                       seat_id: '1'
//   //                     },
//   //                     {
//   //                       type: 'seat',
//   //                       status: 'available',
//   //                       seat_id: '2'
//   //                     },
//   //                     {
//   //                       type: 'seat',
//   //                       status: 'available',
//   //                       seat_id: '3'
//   //                     },
//   //                     {
//   //                       type: 'seat',
//   //                       status: 'unavailable',
//   //                       seat_id: '4'
//   //                     },
//   //                     {
//   //                       type: 'seat',
//   //                       status: 'available',
//   //                       seat_id: '5'
//   //                     }
//   //                   ]
//   //                 },
//   //                 {
//   //                   seats: [
//   //                     {
//   //                       type: 'seat',
//   //                       status: 'available',
//   //                       seat_id: '1'
//   //                     },
//   //                     {
//   //                       type: 'seat',
//   //                       status: 'available',
//   //                       seat_id: '2'
//   //                     },
//   //                     {
//   //                       type: 'seat',
//   //                       status: 'available',
//   //                       seat_id: '3'
//   //                     },
//   //                     {
//   //                       type: 'seat',
//   //                       status: 'available',
//   //                       seat_id: '4'
//   //                     },
//   //                     {
//   //                       type: 'seat',
//   //                       status: 'unavailable',
//   //                       seat_id: '5'
//   //                     }
//   //                   ]
//   //                 }
//   //               ]
//   //             }

//   //           ],
//   //           price: 150
//   //         }
//   //       ]
//   //     }
//   //   ]
//   // }

//   const params = useParams()

//   const { id, date } = params

//   console.log("paramssssssssssssssssss", id, date)


//   const [selectedTime, setSelectedTime] = useState(null)
//   // const [selectedTime,setSelectedTime] = useState("")
//   const [selectedSeat, setSelectedSeat] = useState([])
//   const [movie, setMovie] = useState(null)
//   const [screen,setScreen] = useState("")


//   useEffect(()=>{
//     getSingleMovieDetails(id).then((result)=>{
//       console.log("+++++++++++++++++",result)
//       setMovie(result)
//     })

//   },[])

//   useEffect(()=>{
//     getSchedule(id,date).then((result)=>{
//       console.log("final movieeeeeeeeeeeeeeeeeee",result)
//       setScreen(result)
//       setSelectedTime(result.movieSchedules[0].showTime)

      
//     })


//   },[])
//   console.log("ressssssssssssssssss",screen)
//   console.log("timeeeeeeeeeeeeeeeeee",selectedTime)



//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     try {
//   //       const movieDetails = await getSingleMovieDetails(id);
//   //       console.log("+++++++++++++++++", movieDetails);
//   //       setMovie(movieDetails);

//   //       const schedule = await getSchedule(id, date);
//   //       console.log("final movieeeeeeeeeeeeeeeeeee", schedule);

//   //     } catch (error) {
//   //       console.error("Error fetching data:", error);
//   //     }
//   //   };

//   //   fetchData();
//   // }, [id, date]); // Ensure id and date are added to the dependency array.




//   const selectDeselectSeat = (seat) => {
//     console.log("seattttttttttttttttttttt", seat)
//     const isSelected = selectedSeat.some((s) => (
//       s.row === seat.row &&
//       s.col === seat.col &&
//       s.seat_id === seat.seat_id

//     ))

//     if (isSelected) {
//       setSelectedSeat(selectedSeat.filter((s) => (
//         s.row != seat.row ||
//         s.col != seat.col ||
//         s.seat_id !== seat.seat_id)))
//     } else {
//       setSelectedSeat([...selectedSeat, seat])

//     }
//   }

//   console.log("seatt finallllllllllllllllllllll", selectedSeat)
//   console.log("[[[[[[[[[[[[[[[[[[[[[[",screen)

  
//  const generateSeatLayout = ()=>{

//   const x = screen.movieSchedules.findIndex((t)=>t.showTime === selectedTime)
//   console.log("xxxxxxxxxxxxxxxxxxx",x)
  
//   // let notavailableseats = screen.movieSchedule[x].notAvailableSeats
//   return (
//     <div>
//     {screen.seats[x].map((seatType,index)=>(
//       <div className='seat-type' key={index}>
//       <h2>{seatType.type}</h2></div>
//   ))}
    
//     </div>
//   )
//  }

 




//   return (
//     <div>

//      <button onClick={generateSeatLayout}>showSeats</button>

//     </div>
//   )
// }

// export default Seats
