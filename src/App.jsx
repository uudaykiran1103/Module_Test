import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotesPage from './pages/NotesPage'
import { useWidth } from './Hooks/widthContext'
import './App.css'

function App() {
  const screenWidth = useWidth();
  if(screenWidth>=675 && screenWidth<1085) {
    return <div className='screen-error'>
      Pocket Notes is not available for this screen size.
    </div>
  }

  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/notes/:groupId' element={<NotesPage/>}/>
    </Routes>
  )
}

export default App;