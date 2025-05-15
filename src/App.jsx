import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'

import HomePage from './pages/HomePage'
import About from './pages/About'
import Contacts from './pages/Contacts'

function App() {
  //mi creo la variabile di stato  ( stato=currentPage | aggiorna valore=setCurrentPage | "home"=valore iniziale di stato)
  const [currentPage, setCurrentPage] = useState("home")

  return (
    <>

    </>
  )
}

export default App
