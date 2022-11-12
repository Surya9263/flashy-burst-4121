import React, { ChangeEvent, useState } from 'react'
import {Box, Input, Text, } from '@chakra-ui/react'
import {
    FormControl,
   
  } from '@chakra-ui/react'

export interface User {

	password: string;
    newpassword:string;
    confirmpassword:string;
   
}



const ChangePassword = () => {

    const [password, setPassword] = React.useState('1')

    const [userCredentials, setUserCredentials] = useState<User>({
		
		password: '',
       newpassword: '',
       confirmpassword:'',
	});


    function handleChange(e:ChangeEvent<HTMLInputElement>) {
    const {name,value} = e.target
    setUserCredentials({...userCredentials,[name]:value});
   
    }

    


  return (

         

<Box w={["full","md"]} mx={"auto"}>



    <Box  h={"auto"} w={500} >
    
        <Text fontSize={22}><b>ACCOUNT</b></Text>
    
       
        <FormControl>
        <Input 
            id='password'
            type='password'
            name="password"
            onChange={handleChange}
            value={userCredentials.password}
            required
            placeholder=' CURRENT PASSWORD' 
            mt={5}
            focusBorderColor="none"
            borderLeft={"none"} 
            borderTop={"none"} 
            borderRight={"none"} 
            borderRadius={"none"}
        />
        
       
        
        <Input 
            id='newpassword'
            type='password'
            name="newpassword"
            onChange={handleChange}
            value={userCredentials.newpassword}
            required
            placeholder='NEW PASSWORD' 
            mt={5}
            focusBorderColor="none"
            borderLeft={"none"} 
            borderTop={"none"} 
            borderRight={"none"} 
            borderRadius={"none"}
        />
        
        
        <Input 
            id='confirmpassword'
            type='password'
            name="confirmpassword"
            onChange={handleChange}
            value={userCredentials.confirmpassword}
            required
            placeholder='CONFIRM PASSWORD' 
            mt={5}
            focusBorderColor="none"
            borderLeft={"none"} 
            borderTop={"none"} 
            borderRight={"none"} 
            borderRadius={"none"}
        />
        
       
        <Input
            type={"submit"}
            value="UPDATE PASSWORD"
            fontSize={18} 
            mt={50}
            w={["auto","full"]}
            size='md'
            height='45px'
            width='500px'
            border='0'
            bg={"black"}
            color={"white"}
            borderRadius={"none"}
            variant='none'
            />
            
            </FormControl>
    
    </Box>
   
            
    </Box>
   
  )
}

export default ChangePassword