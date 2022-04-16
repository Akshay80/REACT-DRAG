import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Video from './components/Video'
import Home from './pages/Home'

export default function MaterialUi() {
  return (
    <>  
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </Router>
    </>
  )
}
