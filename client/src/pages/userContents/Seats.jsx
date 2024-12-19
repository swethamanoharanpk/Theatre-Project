
import '../../styles/Seat.css'
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";



function Seats() {
 
    const [startDate, setStartDate] = useState(new Date());
    const generateSeatLayout = ()=>{
      return

    }
    

    const screen = {
      timeSlot:[
        {time:'10.00 AM',
          seats:[
            {row:[
              {rowName:'H',
                cols:[
                  {seats:[
                    {type:'seat',
                      status:'available',
                      seatId:'1'
                    },
                    {type:'seat',
                      status:'available',
                      seatId:'2'
                    },
                    {type:'seat',
                      status:'available',
                      seatId:'3'
                    },
                    {type:'seat',
                      status:'available',
                      seatId:'4'
                    },
                    {type:'seat',
                      status:'available',
                      seatId:'5'
                    }
                  ]
                },
                {seats:[
                  {type:'seat',
                    status:'available',
                    seatId:'1'
                  },
                  {type:'seat',
                    status:'available',
                    seatId:'2'
                  },
                  {type:'seat',
                    status:'available',
                    seatId:'3'
                  },
                  {type:'seat',
                    status:'available',
                    seatId:'4'
                  },
                  {type:'seat',
                    status:'available',
                    seatId:'5'
                  }

                ]}
              ]
                
                  


              }
            ]}
          ]
        }
      ]
    }


    const [selectedTime,setSelectedTime] = useState(screen.timeSlot[0])
  
  return (
    <div>
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
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
    <div className='indicator'>
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