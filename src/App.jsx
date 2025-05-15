import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import Prodotti from './pages/Contacts'
import ChiSiamo from './pages/About'

function App() {
  //mi creo la variabile di stato  ( stato=currentPage | aggiorna valore=setCurrentPage | "home"=valore iniziale di stato)
  // const [currentPage, setCurrentPage] = useState("home")

  return (
    <>
      {/* `Definisco le rotte */}
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={HomePage}></Route>
          <Route path='/Chi-siamo' Component={ChiSiamo}></Route>
          <Route path='/Prodotti' Component={Prodotti}></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
