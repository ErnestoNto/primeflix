import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components'
import Error from './pages/Error'
import Favoritos from './pages/Favoritos'
import Filme from './pages/Filme'
import Home from './pages/Home'

const RoutesApp = () => {
  return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={ <Home />} />
                <Route path='/filmes/:id' element={ <Filme /> } />
                <Route path='/favoritos' element={ <Favoritos /> } />

                <Route path='*' element={ <Error /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp
