import React from 'react'
import Signup from './pages/userContents/Signup'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './pages/userContents/Home'
import Login from './pages/userContents/Login'
import Seats from './pages/userContents/Seats'
import AdminLogin from './pages/adminContents/AdminLogin'
import { AdminHome } from './pages/adminContents/AdminHome'
import AddMovies from './pages/adminContents/AddMovies'
import AddBanner from './pages/adminContents/AddBanner'
import Movies from './pages/userContents/Movies'
import { useSelector } from 'react-redux'
import Profile from './pages/userContents/Profile'
import MovieDetails from './pages/userContents/MovieDetails'
import ComingSoon from './pages/userContents/ComingSoon'
import MovieSchedule from './pages/adminContents/MovieSchedule'
import Success from './pages/userContents/Success'
import Cancel from './pages/userContents/Cancel'

function App() {

  const userDetails = useSelector((info)=>info.userInfo.login)
  console.log("^^^^^^^^^^^^^^",userDetails)
  if(userDetails){
    var token = userDetails.token
  }
  console.log("tokennnnnnnnnnnnnn",token)
  const display = createBrowserRouter([
    {path:'/',
      element:<Home/>
    },
    {path:'/login',
      element:token?<Profile/>:<Login/>
    },
    {path:'/signup',
      element:<Signup/>
    },
    {path:'/seat/:id/:date',
      element:<Seats/>
    },
    {path:'/adminlogin',
      element:<AdminLogin/>
    },
    {path:'/adminhome',
      element:<AdminHome/>
    },
    {path:'/movie',
      element:<AddMovies/>
    },
    {path:'/banner',
      element:<AddBanner/>
    },
    {path:'/displaymovie',
      element:<Movies/>
    },
    {path:'/moviedetails/:id',
      element:<MovieDetails/>
    },
    {path:'/comingsoon',
      element:<ComingSoon/>
    },
    {path:'/schedule',
      element:<MovieSchedule/>
    },
    {path:'/success',
      element:<Success/>
    },
    {path:'/cancel',
      element:<Cancel/>
    }
  ])
  return (
    <div>
    <RouterProvider router={display}></RouterProvider>
    </div>
  )
}

export default App