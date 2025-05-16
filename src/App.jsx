import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import Prodotti from './pages/Prodotti'
import ChiSiamo from './pages/ChiSiamo'
//importo layout per utilizzare outlet
import DefaultLayout from './layouts/DefaultLayout'

function App() {
  //mi creo la variabile di stato  ( stato=currentPage | aggiorna valore=setCurrentPage | "home"=valore iniziale di stato)
  // const [currentPage, setCurrentPage] = useState("home")

  return (
    <>
      {/* `Definisco le rotte */}
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path='/' Component={HomePage}></Route>
            <Route path='/Chi-siamo' Component={ChiSiamo}></Route>
            <Route path='/Prodotti' Component={Prodotti}></Route>
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
