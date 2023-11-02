import './App.css'
import Nav from './nav/nav'
import Data from './componant/data-load/data'
import { useEffect, useState } from 'react'
import Newbookmark from './componant/Bookmark/newbookmark'

function App() {


  return (
    <div>
      <Nav></Nav>
      <div className='grid'>
      <Data ></Data>
      <Newbookmark></Newbookmark>
      </div>
    </div>
  )
}

export default App
