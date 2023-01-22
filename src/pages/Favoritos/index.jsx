import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './favoritos.css'

const Favoritos = () => {
  const [filmes, setFilmes] = useState([])

  useEffect(() => {
    const favoritos = localStorage.getItem('favoritos')
    setFilmes(JSON.parse(favoritos) || [])

    console.log(favoritos);
  },[])

  const deleteItem = (ID) => {
    const newArray = filmes.filter(filme => filme.id !== ID)

    setFilmes(newArray)
    localStorage.setItem('favoritos', JSON.stringify(newArray))
  }

  if(filmes.length === 0){
    return(
      <h1>Não tem filmes salvos :(</h1>
    )
  }

  return (
    <ul>
      {filmes.map(filme => {
        return(
          <li className='favoritos'>
            <h3>{filme.title}</h3>
            <div>
              <Link to={`/filmes/${filme.id}`}>Detalhes</Link>
              <button onClick={() => deleteItem(filme.id)}>Delete</button>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default Favoritos
