import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'
import Logo from '../assets/img/logo2.jpg'
const Navbar = () => {
  return (
    <Stack direction="row" 
      justifyContent="space-around"
        sx={{gap:{sm:"120px", xs:"40px"}, mt:{sm:'32px', xs:'20px'}, justifyContent:"none"}} px='20px'>
      <Link>
      <img src={Logo} 
      alt="logo" 
      style={{width:"100px", height:"100px", margin:"0 20px"}}></img>
      </Link>
      <Stack
      direction="row"
      gap="40px"
      fontSize="24px"
      alignItems="flex-end"
      >
        <Link to="/" 
          style={{textDecoration:'none', 
                  color:'#3A1212', 
                    borderBottom:'3px solid black'}}>Home</Link>
        <a href="#exercises" 
            style={{textDecoration:'none', 
                 color:'#3A1212'}}>exercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar