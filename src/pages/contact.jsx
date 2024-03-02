import React from 'react'
import { useParams } from 'react-router-dom'

const contact = () => {
  const { userName } = useParams()
  return (
    <div
      className='contact'
      style={{
        backgroundColor: 'rgba(3, 199, 13, 0.745)',
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <h1>Contact page for {userName} </h1>
    </div>
  )
}

export default contact
