import React, { useEffect, useState } from 'react'
import { fetchFromAPI } from '../Utill/fetchFromAPI';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Player = ({setProgress}) => {

  const [videoDetail, setvideoDetail] = useState(null);
  const [comment, setcomment] = useState("")
  const { id } = useParams();
  const [mainTask, setmainTask] = useState([])

  useEffect(() => {
    setProgress(40);
    setTimeout(() => {
      setProgress(100);
    }, 1000);
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setvideoDetail(data.items[0]))

  }, [id])

  if (!videoDetail?.snippet) return 'Loading...';
  const { snippet: { title, channelId, channelTitle }, statistics: {
    viewCount, likeCount
  } } = videoDetail

  const submitHandler = (e) => {
    e.preventDefault()


      setmainTask([...mainTask, { comment }])

      setcomment("")
  

    console.log(mainTask)
  }

  const deleteHandler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i, 1)
    setmainTask(copytask)
  }

  let renderTask = <h2>No Comments are Available..........</h2>
  if (mainTask.length > 0)
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className='flex items-center justify-between my-1'>
          <div className='text-md items-center flex justify-between  w-2/3'>
            <h5 className='text-md'>{t.comment}</h5>

          </div>
          <button
            onClick={() => { deleteHandler(i) }}
          ><img src='/delete.svg' className='w-8 h-6' /></button>
        </li>
      )
    })

  return (
    <div className='flex justify-center mt-5'>
      <div>
        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
          className="react-player w-[100%]" controls
        ></ReactPlayer>

        <h1 className='text-xl font-bold'>{title}</h1>

        <div className='flex justify-left gap-[450px]'>
          {channelTitle}
          <div>
            <div>
              {parseInt(viewCount).toLocaleString()}views
            </div>
            <div>
              {parseInt(likeCount).toLocaleString()}👍
            </div>
          </div>
        </div>

        <h1 className='font-bold mb-5'>Comments</h1>
        <form className='flex justify-start' onSubmit={submitHandler}>
          <img src='/comment.svg' alt='profile picture'
            className='rounded w-6 h-8 mr-5' />
          <textarea
            placeholder="Your message"
            name="message"
            className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
            required
            value={comment}
            onChange={(e)=>setcomment(e.target.value)}
            
          />



          <button
            className=' text-white rounded p-2 px-4 py-2 font-bold'>
            <img src='/enter.svg' />
          </button>

        </form>
        <hr />
        <div className='mt-5 p-3 rounded-md bg-gray-300'>
          <ul>
            {renderTask}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Player