import React from 'react'
import logo from '../assets/NexoraLogo.jpeg'

function Logo({width = '70px'}) {
  return (
   <img src={logo} width={width} className='rounded-full' alt="" />
  )
}

export default Logo