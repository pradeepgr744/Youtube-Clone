import React, { Suspense, useState } from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import Trending from './components/Trending/Trending.jsx'
import Contact from './components/Contact/Contact.jsx'
import Player from './components/Player.jsx'
import SearchFeed from './components/SearchFeed.jsx'

// const Trending = React.lazy(() => import('./components/Trending/Trending.jsx'))
import LoadingBar from 'react-top-loading-bar'


const App = () => {
    const [progress, setProgress] = useState(0)

    
   
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<Layout />}>
                <Route path="" element={<Home setProgress={setProgress}/>} />
                <Route path='Trending' element={<Trending setProgress={setProgress}/>} />
                <Route path='Contact' element={<Contact />} />
                <Route path='/search/:searchTerm' element={<SearchFeed setProgress={setProgress}/>} />
                <Route path='video/:id' element={<Player setProgress={setProgress}/>} />
            </Route>
        )
    )
    return (
        <>
         <LoadingBar
    color='#f11946'
    progress={progress}
    onLoaderFinished={() => setProgress(0)}
  />
            <RouterProvider router={router} />

        </>
    )
}
export default App