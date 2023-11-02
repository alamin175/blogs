import './App.css'
import Nav from './nav/nav'
import Data from './componant/data-load/data'
import { useEffect, useState } from 'react'
import Newbookmark from './componant/Bookmark/newbookmark'
import Bookmark from './componant/Bookmark/Bookmark'

function App() {
  const [reading, setReading] = useState(0)
  const [bookmark, setbookmark ] = useState([])
  const handlebookmark = (bookmarkTwo)=>{
    const newbookmark = [...bookmark, bookmarkTwo]
    setbookmark(newbookmark)
  }
  const handleMarkAsRead = (time, id)=>{
    const newTime = reading + time
    setReading(newTime)
    const remainingBook = bookmark.filter(bookmark => bookmark.id !== id);
    setbookmark(remainingBook)
}
  return (
    <div>
      <Nav></Nav>
      <div className='grid'>
      <Data handleMarkAsRead ={handleMarkAsRead} handlebookmark={handlebookmark} ></Data>
      <Bookmark reading ={reading} bookmark={bookmark} ></Bookmark>
      </div>
    </div>
  )
}
export default App
