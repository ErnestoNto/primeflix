import React, { useState, useEffect } from 'react'
import api from '../../services/api'
import { Link } from 'react-router-dom'
import './home.css'

const Home = () => {
  const [filmes, setFilmes] = useState([])

  useEffect(() => {
    const loadFilmes = async () => {
      const response = await api.get('movie/now_playing',{
        params: {
        api_key: '3ec9015b0229978a28c3a5e2d674fcfb',
        language: 'pt-br',
        pages: 1
        }
      })

      console.log(response.data.results.splice(0, 10))
      setFilmes(response.data.results.splice(0, 10))
    }

    loadFilmes()

  }, [])

  return (
    <div>
      {filmes.map(item => {
        return <div key={item.id} className='lista-filmes'>
          <h2>{item.title}</h2>
          <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="" />
          <Link to={`filmes/${item.id}`} >Acessar</Link>
        </div>
      })}
    </div>
  )
}

export default Home
