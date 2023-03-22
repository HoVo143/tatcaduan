import React , {useEffect, useState} from 'react'
import { Box, Button, Stack,TextField, Typography } from '@mui/material'
const SearchExercises = () => {
  return (

    // 3:02:50 / 8:16:44

    
    <Stack alignItems="center" justifyContent="center" p="20px" mt="37px">
        <Typography fontWeight={700} 
            sx={{fontSize:{lg:'44px', xs:'30px'}}}
            mb="50px" textAlign="center">
            Awesome Exercises You Should  Know
        </Typography>
        <Box position='relative' mb="72px">
            <TextField 
                sx={{
                    input:{fontWeight:'700',
                        border:'none',
                        borderRadius:'15px'
                    },
                    width:{lg:'1150px', xs:'250px'},
                    backgroundColor:"#ffff",
                    borderRadius:'40px'

                }}
                height="76px"
                value=""
                onChange={(e)=>{}}
                placeholder="Search Exercises"
                type="text">
            </TextField>
            <Button className='search-btn'
            sx={{
                bgcolor:'#FF2625'
            }}>
                Search
            </Button>

        </Box>
    </Stack>
  )
}

export default SearchExercises