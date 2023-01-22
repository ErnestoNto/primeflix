import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
      <h1>404</h1>
      <h2>A página não foi encontrada</h2>
      <Link to='/' >Home</Link>
    </div>
  )
}

export default Error
