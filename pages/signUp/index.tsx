import {Box, Input, Button, Flex, 
     // ALert Components
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Text, Select, RadioGroup, Stack, Radio, InputGroup, InputLeftAddon, Checkbox} from '@chakra-ui/react'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { ClientNavbar } from '../../components'
import Loginfooter from '../../components/footer/Loginfooter';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { adduser } from '../../store/user/user.slice';

export interface User {
	email: string;
	password: string;
    name: string;
}
import {useEffect}from 'react'
import  Router  from 'next/router';

export default function SignUp() {

    const dispatch = useAppDispatch();
    const user = useAppSelector(store=>store.user)
    const [netReqStatus,setNetReqStatus] = useState<number>(0)
    const [sucessAlrt, setAucessAlrt] = useState<boolean>(false)
    const [errorMsg, setErrorMsg] =  useState<string>("")

    const [userCredentials, setUserCredentials] = useState<User>({
		email: '',
		password: '',
        name:""
	});



    function handleChange(e:ChangeEvent<HTMLInputElement>) {
    const {name,value} = e.target
    setUserCredentials({...userCredentials,[name]:value});

    }
    function handleSelect(e:ChangeEvent<HTMLSelectElement>) {
        const {name,value} = e.target
        setUserCredentials({...userCredentials,[name]:value});
       
    }

    function handleRegister(e:FormEvent<HTMLFormElement>) {
        e.preventDefault();
       
        dispatch(adduser(userCredentials))
        if(userCredentials.password.length<8){
            setErrorMsg("Password Length must be 8  characters long")
            setTimeout(()=>{
                setErrorMsg("")
            },3000)
            return
        }

               
        setNetReqStatus(1)
        setTimeout(()=>{
            setNetReqStatus(0)
        },5000)
        
    }
    
   useEffect(() => {
     
    if(netReqStatus===1){
        if(user.isError){
            setErrorMsg(user.errormsg)
            setTimeout(()=>{
                setErrorMsg("")
            },5000)
        }
        else{
            setAucessAlrt(true)
            setUserCredentials({email:'',password: '',name:""})
            
            setTimeout(()=>{
                setAucessAlrt(false)
                Router.push("/signin")
            },3000)
        }

    }
    
     return () => {
       
     }
   }, [user])
   
  
    return (
        <Box w={"90vw"}>

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
                        _hover={{cursor:"pointer"}}
                        type={"submit"}
                        value="CREATE ACCOUNT"
                        fontSize={18} 
                        mt={50}
                        size='md'
                        height='45px'
                        
                        border='0'
                        bg={"black"}
                        color={"white"}
                        borderRadius={"none"}
                        variant='none'
                        />
                        
                    
                
                        {sucessAlrt
                            &&
                            <Alert status='success'>
                                <AlertIcon />
                                <AlertTitle>{"Registration   Successfull" }</AlertTitle>
                                {/* <AlertDescription> </AlertDescription> */}
                                </Alert>}

                                {errorMsg
                                &&
                                <Alert status='error'>
                                    <AlertIcon />
                                    <AlertTitle>{errorMsg}</AlertTitle>
                                    {/* <AlertDescription> </AlertDescription> */}
                                </Alert>}
                </Box>

              
                
            </Flex> 
            </form>
            

            <Loginfooter />
        </Box>
    )
  }
  