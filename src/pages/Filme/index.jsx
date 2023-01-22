import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../services/api'
import './filme.css'

const Filme = () => {
    const [details, setDetails] = useState({})
    const { id } = useParams()

    useEffect(() => {
      const loadDetails = async () => {
        api.get(`movie/${id}`,{
          params:{
            api_key: '3ec9015b0229978a28c3a5e2d674fcfb',
            language: 'pt-BR'
          }
        }).then(item => {
          console.log(item)
          setDetails(item.data)
        })
      }

      loadDetails()
    },[id])

    const addFavorites = () => {
      const favoritos = JSON.parse(localStorage.getItem('favoritos')) || []
      
      const hasFilme = favoritos.some(item => item.id === details.id)

      if(hasFilme){
        alert('Esse filme já foi salvo')
        return
      }

      favoritos.push(details)
      return localStorage.setItem('favoritos', JSON.stringify(favoritos))
    }

  return (
    <div className='filme-details'>
      <h1>{details.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500/${details.backdrop_path}`} alt="" />
      <span>{details.overview}</span>
      <div>
        <button onClick={() => addFavorites()}>Salvar</button>
        <button><a href={`https://www.youtube.com/results?search_query=${details.title}`} target='blank' rel='external'>Trailer</a></button>
      </div>
    </div>
  )
}

export default Filme
