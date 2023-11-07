import React, { useEffect, useState } from 'react'
import { fetchFromAPI } from '../../Utill/fetchFromAPI'
import VideoCard from '../VideoCard'




const Home = ({setProgress}) => {

const [search, setsearch] = useState('Latest')
const [videos, setvideos] = useState([])

  useEffect(() => {
    setProgress(40);
    setTimeout(() => {
      setProgress(100);
    }, 1000);
    fetchFromAPI(`search?part=snippet&q=${search}`)
  .then((data)=>setvideos(data.items))
  
  }, [search])
  console.log(videos)

  
  return (
<>
<div className='pt-3  bg-gray-100'>
<div className='flex flex-wrap gap-3 justify-center'>
      {videos.map((item,idx) => (
          <VideoCard video={item} key={idx}/>
      ))}
      </div>
      </div>

</>
    )
}

export default Home