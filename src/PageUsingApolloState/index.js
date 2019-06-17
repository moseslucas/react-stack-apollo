import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const PageUsingApolloState = () => {
  return (
    <div
      className='container'
      style={{ background: '#1e1e1e' }}
    >
      <Link to='/sample'>Go to Sample page </Link>
      <h1> Page Using Apollo State </h1>
    </div>
  )
}

export default PageUsingApolloState
