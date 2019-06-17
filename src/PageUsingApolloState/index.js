import React from 'react'
import { graphql } from 'react-apollo'
import { Link } from 'react-router-dom'

import STORE_QUERIES from '../store/queries'
import './index.css'

const PageUsingApolloState = ({ nightMode }) => {
  const bg = nightMode ? '#1e1e1e' : '#fff'
  return (
    <div
      className='container'
      style={{ background: bg }}
    >
      <Link to='/sample'>Go to Sample page </Link>
      <h1> Page Using Apollo State </h1>
    </div>
  )
}

export default graphql(
  STORE_QUERIES.nightMode,
  {
    props: ({ data: { nightMode } }) => ({
      nightMode
    })
  }
)(PageUsingApolloState)
