import React from 'react'
import { Link } from 'react-router-dom'

function Card({ video: { id: { videoId }, snippet } }) {
  console.log(snippet, videoId)
  return (
    <>

      <div
        className="w-[300px] rounded-md border shadow-xl hover:shadow-black md:w-320 md:h-180 xl:w-480 md:h-360 sm:w-120 md:h-90">
        <Link to={`/video/${videoId}`}>
          <img src={snippet.thumbnails.high.url}
            alt={snippet.title}
            className="h-[200px] w-full rounded-md object-cover"
          />



          <div className="mt-1 px-2 flex items-center space-x-2">

            <span>
              <h1 className="text-lg font-semibold">{snippet.title}</h1>
              <h2 className="text-[10px] font-medium text-gray-900">{snippet.channelTitle}</h2>
              <span className="text-[8px] font-medium text-gray-500">{snippet.publishedAt}</span>

            </span>
          </div>
        </Link>
      </div>

    </>
  )
}
export default Card