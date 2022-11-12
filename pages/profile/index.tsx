import React, { ChangeEvent, useState } from 'react'
import {Box,  Text, Link} from '@chakra-ui/react'




const ProfileDetails = () => {

   


  return (

         



    <Box  h={"auto"} w={500} mx={"auto"} my={"auto"}  >
    
        <Text fontSize={22}><b>ACCOUNT</b></Text>
    
        <Text fontSize={16} mt={5}>YOUR CURRENT EMAIL</Text>
        <Box  fontSize="20px" fontWeight={"500"} mt={5}  >
                    <Link href="/changename">
                           Change Name
                    </Link>
                </Box>
                <Box fontSize="20px" fontWeight={"500"}  mt={5} >
                    <Link href="/changepassword">
                           Change Password
                    </Link>
                </Box>
    
    
    </Box>
   
   
  )
}

export default ProfileDetails