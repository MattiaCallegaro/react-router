import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import Prodotti from './pages/Prodotti/Prodotti'
import ChiSiamo from './pages/ChiSiamo'
//importo layout per utilizzare outlet
import DefaultLayout from './layouts/DefaultLayout'
import Prodotto from './pages/Prodotti/Prodotto'


function App() {
  //mi creo la variabile di stato  ( stato=currentPage | aggiorna valore=setCurrentPage | "home"=valore iniziale di stato)
  // const [currentPage, setCurrentPage] = useState("home")

  return (
    <>
      {/* `Definisco le rotte */}
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path='/' Component={HomePage} />
            <Route path='/Chi-siamo' Component={ChiSiamo} />
            <Route path='/products' >
              <Route index Component={Prodotti} />
              <Route path=":id" Component={Prodotto} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
