import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
// import Page from 'components/Layout/Page'

const StyledNotFound = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 64px);
  justify-content: center;
  background-repeat: no-repeat, repeat;
  background-size: cover;
`

const NotFound = () => {

  return (
    <div>
      <h1>404</h1>
      <span>Oops, page not found.</span>
      <Link to='/'>Back Home</Link>
    </div>
  )
}

export default NotFound
