import {Box, Input, Button, Flex, Text, Select, RadioGroup, Stack, Radio, InputGroup, InputLeftAddon, Checkbox} from '@chakra-ui/react'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { ClientNavbar } from '../../components'
import Loginfooter from '../../components/footer/Loginfooter';
import { useAppDispatch } from '../../store/hook';
import { adduser } from '../../store/user/user.slice';

export interface User {
	email: string;
	password: string;
    name: string;
    address: string;
    locality: string;
    phone: string;
    repeat_password: string;
    pincode: string;
    more: string;
    city: string;
    select: string;
    radio: string;
}


export default function SignUp() {

    const dispatch = useAppDispatch();

    const [userCredentials, setUserCredentials] = useState<User>({
		email: '',
		password: '',
        name:"",
        address:"",
        locality: "",
        phone: "",
        repeat_password: "",
        pincode: "",
        more: "",
        city: "",
        select: "",
        radio: "",
	});

    const handleSubmit = async (event: React.SyntheticEvent) => {
        event.preventDefault();
		// if (password !== repeat_password) {
		// 	alert("passwords don't match");
		// 	return;
        // }
            
    }


    function handleChange(e:ChangeEvent<HTMLInputElement>) {
    const {name,value} = e.target
    setUserCredentials({...userCredentials,[name]:value});
    // console.log(userCredentials);
    }
    function handleSelect(e:ChangeEvent<HTMLSelectElement>) {
        const {name,value} = e.target
        setUserCredentials({...userCredentials,[name]:value});
        
    }

    function handleRegister(e:FormEvent<HTMLFormElement>) {
        e.preventDefault();
        dispatch(adduser(userCredentials))
        
        
    }
    
    console.log(userCredentials);
  
    return (
        <Box>

            <ClientNavbar />
            <form onSubmit={handleRegister}>
            <Flex  mt={200}  gap={0} direction={['column']}>
                <Box  h={"auto"} w={["80%","80%",500,500]} mx={"auto"}>
                
                    <Text fontSize={22}><b>PERSONAL DETAILS</b></Text>
                    <Input
                        id='name'
                        type='name'
                        name="name"
                        onChange={handleChange}
                        value={userCredentials.name}
                        required 
                        placeholder='NAME' 
                        mt={5}
                        focusBorderColor="none"
                        borderLeft={"none"} 
                        borderTop={"none"} 
                        borderRight={"none"} 
                        borderRadius={"none"}
                    />
                    
                    <Input 
                        id='email'
                        type='email'
                        name="email"
                        onChange={handleChange}
                        value={userCredentials.email}
                        required
                        placeholder='E-MAIL' 
                        mt={5} 
                        focusBorderColor="none"
                        borderLeft={"none"} 
                        borderTop={"none"} 
                        borderRight={"none"} 
                        borderRadius={"none"}
                    />
                    
                    <Input 
                        id='password'
                        type='password'
                        name="password"
                        onChange={handleChange}
                        value={userCredentials.password}
                        required
                        placeholder='PASSWORD' 
                        mt={5}
                        focusBorderColor="none"
                        borderLeft={"none"} 
                        borderTop={"none"} 
                        borderRight={"none"} 
                        borderRadius={"none"}
                    />
                    
                    
                    
                    
                    
                    
                    <Input
                        type={"submit"}
                        value="CREATE ACCOUNT"
                        fontSize={18} 
                        mt={50}
                        size='md'
                        height='45px'
                        width='500px'
                        border='0'
                        bg={"black"}
                        color={"white"}
                        borderRadius={"none"}
                        variant='none'
                        />
                        
                    
                
                </Box>

                
                
            </Flex>
            </form>
            

            <Loginfooter />
        </Box>
    )
  }
  