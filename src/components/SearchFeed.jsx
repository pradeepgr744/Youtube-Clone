import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { fetchFromAPI } from '../Utill/fetchFromAPI';
import VideoCard from '../components/VideoCard'


const SearchFeed = ({setProgress}) => {
  
    const [videos, setVideos] = useState([]);
    const { searchTerm } = useParams();

    useEffect(() => {
      setProgress(40);
      setTimeout(() => {
        setProgress(100);
      }, 1000);

        fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
          .then((data) => setVideos(data.items))
      }, [searchTerm]);

     
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

export default SearchFeed