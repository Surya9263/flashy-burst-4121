import React, { ChangeEvent, useState } from 'react'
import {Box, Input,  Text, } from '@chakra-ui/react'
import {
    FormControl,
 
  } from '@chakra-ui/react'

export interface User {

	name: string;
    newname:string;
    confirmname:string;
   
}



const ChangeName = () => {

    const [name, setName] = React.useState('1')

    const [userCredentials, setUserCredentials] = useState<User>({
		
		name: '',
       newname: '',
       confirmname:'',
	});


    function handleChange(e:ChangeEvent<HTMLInputElement>) {
    const {name,value} = e.target
    setUserCredentials({...userCredentials,[name]:value});
  
    }




  return (

         

<Box w={["full","md"]} mx={"auto"}>



    <Box  h={"auto"} w={500} >
    
        <Text fontSize={22}><b>ACCOUNT</b></Text>
    
        <Text fontSize={16} mt={5}>YOUR CURRENT NAME </Text>
        <FormControl>
        <Input 
            id='name'
            type='name'
            name="name"
            onChange={handleChange}
            value={userCredentials.name}
            required
            placeholder=' CURRENT NAME' 
            mt={5}
            focusBorderColor="none"
            borderLeft={"none"} 
            borderTop={"none"} 
            borderRight={"none"} 
            borderRadius={"none"}
        />
        
       
        
        <Input 
            id='newname'
            type='name'
            name="newname"
            onChange={handleChange}
            value={userCredentials.newname}
            required
            placeholder='NEW NAME' 
            mt={5}
            focusBorderColor="none"
            borderLeft={"none"} 
            borderTop={"none"} 
            borderRight={"none"} 
            borderRadius={"none"}
        />
        
        
        <Input 
            id='confirmname'
            type='name'
            name="confirmname"
            onChange={handleChange}
            value={userCredentials.confirmname}
            required
            placeholder='CONFIRM NAME' 
            mt={5}
            focusBorderColor="none"
            borderLeft={"none"} 
            borderTop={"none"} 
            borderRight={"none"} 
            borderRadius={"none"}
        />
        
       
        <Input
            type={"submit"}
            value="UPDATE NAME"
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

export default ChangeName