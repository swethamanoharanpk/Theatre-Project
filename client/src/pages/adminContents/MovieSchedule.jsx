import '../../styles/Schedule.css'
import React, { useEffect, useState } from 'react'
import { addScreen, getMovieData } from '../../../api'

const MovieSchedule = () => {

  const [movies,setMovies] = useState([])

  const seatLayout = [
    {
          type:'top',
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
        price:150
        
      
    
  }
]

  const [schedule,setSchedule] = useState({
    
    movieId: "",
    movieName:"",
    seats:seatLayout,
    showsTime:"",
    showTime: "",
    showDate: ""
  })

  useEffect(()=>{
    getMovieData().then((result)=>{
      setMovies(result)
    })


  },[])

  console.log("----movie------------",schedule.movieName)


  const createSchedule = ()=>{
    if(!schedule.movieId || !schedule.showTime || !schedule.showDate ||!schedule.movieName)
      return
    addScreen(schedule).then((result)=>{
      console.log("scren....................",result)
    })

  }

  return (
    <div>

    <div>
    <div className='items'>
    <input type='date' name='showsDate' id='showsDate'
    onChange={(e)=> setSchedule({...schedule,showsDate: e.target.value})} />
    <h1>Movies</h1>
    {
      movies?.map((movie)=>(
        <div className={schedule.movieId === movie._id ? 'item-selected': 'item'} key={movie._id}
        onClick={()=>{
          setSchedule({...schedule, movieId:movie._id,movieName:movie.movieName})
        }}>
        <p>Movie : {movie.movieName}</p>
        <p>Genre : {movie.genre}</p>
        <p>Language : {movie.language}</p>
        <p>Starring : {movie.staring}</p>
        <p>Duration : {movie.duration}</p>
        
        </div>    
      ))
    }
  


    <input type='time' name='showTime'  id='showTime' 
    onChange={(e)=> setSchedule({...schedule, showTime: e.target.value})}/>
    
    <input type='date' name='showDate' id='showDate'
    onChange={(e)=> setSchedule({...schedule,showDate: e.target.value})} />
    

    <button onClick={()=>createSchedule()}>SAVE</button>
  
    
    
    
    </div>
    </div>
    </div>

  
  )
}

export default MovieSchedule