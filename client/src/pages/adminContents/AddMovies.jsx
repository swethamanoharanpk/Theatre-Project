import React, { useState } from 'react'
import { addNewMovies } from '../../../api'

const AddMovies = () => {
  const [movieName,setMovieName] = useState('')
  const [language,setLanguage] = useState('')
  const [genre,setGenre] = useState('')
  const [image,setImage] = useState('')
  const [duration,setDuration] = useState('')
  const [director,setDirector] = useState('')
  const [production,setProduction] = useState('')
  const [staring,setStaring] = useState('')


  const [movie,setMovie] = useState('')


  const addImage = async(e)=>{
    const file = e.target.files[0]
    if(!file){
      return 
    }
    const data = new FormData()
    data.append('file',file)
    data.append('upload_preset','theatre-booking')
    data.append('cloud_name','ddf1gyk6m')

    const res = await fetch('https://api.cloudinary.com/v1_1/ddf1gyk6m/image/upload', {
      method: 'POST',
      body: data,
    });

const imageUrl = await res.json()
console.log(imageUrl)
setImage(imageUrl.url)

  }

  const displayMovies = ()=>{
    addNewMovies({movieName,language,genre,image,duration,director,production,staring}).then((result)=>{
      console.log("%%%%%%%",result)
      setMovie(result)
    })

  }
  return (
    <div>
    <div style={{display:'flex'}}>
    
    <form style={{display:'flex',flexDirection:'column',padding:'70px'}}>
    <label>Movie Name</label>
    <input onChange={(e)=>{setMovieName(e.target.value)}}></input>
    <label>Language</label>
    <input onChange={(e)=>{setLanguage(e.target.value)}}></input>
    <label>Genre</label>
    <input onChange={(e)=>{setGenre(e.target.value)}}></input>
    <label>Duration</label>
    <input onChange={(e)=>{setDuration(e.target.value)}}></input>
    <label>Director</label>
    <input onChange={(e)=>{setDirector(e.target.value)}}></input>
    <label>Production</label>
    <input onChange={(e)=>{setProduction(e.target.value)}}></input>
    <labe>Staring</labe>
    <input onChange={(e)=>{setStaring(e.target.value)}}></input>
    <label>Upload Image</label>
    <input type='file' onChange={addImage}></input>
    <button onClick={displayMovies}>Add Movies</button>
    </form>

    </div>
    </div>
  )
}

export default AddMovies