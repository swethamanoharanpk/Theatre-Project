import { useParams } from 'react-router-dom';
import '../../styles/Seat.css'
import React, { useEffect, useState } from "react";
import { getSchedule, getSingleMovieDetails } from '../../../api';





function Seats() {


  const screen = {
    timeSlot:[
      {time:'10.00 AM',
        seats:[
          {type:'top',
            rows:[
            {rowName:'H',
              cols:[
                {seats:[
                  {type:'seat',
                    status:'available',
                    seat_id:'1'
                  },
                  {type:'seat',
                    status:'available',
                    seat_id:'2'
                  },
                  {type:'seat',
                    status:'available',
                    seat_id:'3'
                  },
                  {type:'seat',
                    status:'unavailable',
                    seat_id:'4'
                  },
                  {type:'seat',
                    status:'available',
                    seat_id:'5'
                  }
                ]
              },
              {seats:[
                {type:'seat',
                  status:'available',
                  seat_id:'1'
                },
                {type:'seat',
                  status:'available',
                  seat_id:'2'
                },
                {type:'seat',
                  status:'available',
                  seat_id:'3'
                },
                {type:'seat',
                  status:'available',
                  seat_id:'4'
                },
                {type:'seat',
                  status:'unavailable',
                  seat_id:'5'
                }

              ]}
            ]
              
                


            },
            {rowName:'G',
              cols:[
                {seats:[
                  {type:'seat',
                    status:'available',
                    seat_id:'1'
                  },
                  {type:'seat',
                    status:'available',
                    seat_id:'2'
                  },
                  {type:'seat',
                    status:'available',
                    seat_id:'3'
                  },
                  {type:'seat',
                    status:'unavailable',
                    seat_id:'4'
                  },
                  {type:'seat',
                    status:'available',
                    seat_id:'5'
                  }
                ]
              },
              {seats:[
                {type:'seat',
                  status:'available',
                  seat_id:'1'
                },
                {type:'seat',
                  status:'available',
                  seat_id:'2'
                },
                {type:'seat',
                  status:'available',
                  seat_id:'3'
                },
                {type:'seat',
                  status:'available',
                  seat_id:'4'
                },
                {type:'seat',
                  status:'unavailable',
                  seat_id:'5'
                }
              ]}
            ]}

          ],
        price:150}
        ]
      }
    ]
  }
     
    const params = useParams() 

    const {id,date} = params

    console.log("paramssssssssssssssssss",id,date)
    

    const [selectedTime,setSelectedTime] = useState(screen.timeSlot[0])
    const [selectedSeat,setSelectedSeat] = useState([])
    const [movie,setMovie] = useState(null)


    useEffect(()=>{
      getSingleMovieDetails(id).then((result)=>{
        console.log("+++++++++++++++++",result)
        setMovie(result)
      })
      getSchedule(id,date).then((result)=>{
        console.log(result)
      })
     

    },[])



    const selectDeselectSeat = (seat)=>{
      console.log("seattttttttttttttttttttt",seat)
      const isSelected = selectedSeat.some((s)=>(
         s.row === seat.row &&
          s.col === seat.col &&
           s.seat_id === seat.seat_id
      
      ))

      if(isSelected){
        setSelectedSeat(selectedSeat.filter((s)=>(
          s.row != seat.row ||
          s.col != seat.col ||
          s.seat_id !== seat.seat_id)))
      }else{
        setSelectedSeat([...selectedSeat,seat])
        
      }
    }

    console.log("seatt finallllllllllllllllllllll",selectedSeat)
  



    const generateSeatLayout = ()=>{


      const x = screen.timeSlot.findIndex((t)=>t.time==selectedTime.time)

      return screen.timeSlot[x].seats.map((seatType,index)=>(
        <div className='seat-type' key={index}>
        <h2>{seatType.type} - Rs. {seatType.price}</h2>
        <div className='seat-rows'>
        {
          seatType.rows.map((row,rowIndex)=>(
            <div className='seat-row' key={rowIndex}>
            <p className='rowname'>{row.rowName}</p>
            <div className='seat-cols'>
            {row.cols.map((col,colIndex)=>(
              <div className='seat-col' key={colIndex}>
              {col.seats.map((seat,seatIndex)=>(
                <div key={seatIndex}>
                {
                  seat.status=='available' &&
                  <span className={
                    selectedSeat.find((s)=>{
                      return s.row === row.rowName && s.seat_id === seat.seat_id && s.col === colIndex
                    }) ? 'seat-selected' :'seat-available'
                  }
                  onClick={()=>selectDeselectSeat({
                    row:row.rowName,
                    col:colIndex,
                    seat_id:seat.seat_id,
                    price:seatType.price
                  })}>
                {seatIndex+1}
                </span>

                }
                {
                  seat.status=='unavailable' &&
                  <span className='seat-unavailable'
                  >
                {seatIndex+1}
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
    {screen.timeSlot.map((time,index)=>{
      return(
        <h6 key={index} 
        className={selectedTime.time===time.time ? 'time-selected':'time'}
        onClick={()=>{
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
    {generateSeatLayout()}
    <div className='totalcontainer'></div>
    </div>
    
    </div>
  )
}

export default Seats




