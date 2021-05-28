import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube';
import './RowPoster.css'
import axios from '../axios'
import {imageUrl,API_KEY} from '../constants/contant'
function RowPoster({title,issmall,uu}) {
  
  const [movies, setMovies] = useState([])
  const [url, setUrl] = useState('')

  useEffect(() => {
   axios.get(uu).then(response =>{
     console.log(response.data)
     setMovies(response.data.results)
   }).catch(err=>{
     alert('Network Error')
   })
  }, [])
  
const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
 const clickHandler = (id)=>{
   console.log(id)
   axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
     console.log(response.data)
     if(response.data.results!==0){
      setUrl(response.data.results[0])
     }else{
       alert('No url')
     }
   })
 }
 return (
  <div className="row">
   <h2>{title}</h2>
   <div className="posters">
   
    {
    
    movies.map((item)=>(
      <img onClick={()=>clickHandler(item.id)} className={issmall ? 'smallPoster' : 'poster' } src={`${imageUrl+item.backdrop_path}`} alt="" />
    ))}
   
</div>

{ url ? <YouTube videoId={`${url.key}`} opts={opts}  /> : ''}
  </div>
 )
}

export default RowPoster
