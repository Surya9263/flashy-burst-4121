import {Box, Input, Button, Flex, Text, LinkBox,
  // ALert Components
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
import Link from 'next/link';
import Router  from 'next/router';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { ClientNavbar } from '../../components';
import Loginfooter from '../../components/footer/Loginfooter';
import { login } from '../../store/auth/authSlice'; 
import { useAppDispatch, useAppSelector } from '../../store/hook';


export interface User {
	email: string;
	password: string;
}


export default function Login() {
    const dispatch = useAppDispatch()
    const auth = useAppSelector(store=>store.auth)

    const [netReqStatus,setNetReqStatus] = useState<number>(0)
    const [sucessAlrt, setAucessAlrt] = useState<boolean>(false)
    const [errorMsg, setErrorMsg] =  useState<string>("")

    const [userCredentials, setUserCredentials] = useState<User>({
		email: '',
		password: '',
	});


    function handleChange(e:ChangeEvent<HTMLInputElement>) {
    const {name,value} = e.target
    setUserCredentials({...userCredentials,[name]:value});
    }

    function handleLogin(e:FormEvent<HTMLFormElement>){
        e.preventDefault()
       
        if(!userCredentials){
            setErrorMsg("Please Provide Creadintials for login")
        }

        if(userCredentials.password.length<7){
            setErrorMsg("Password must be 8 character long")
            return 
        }
        dispatch(login(userCredentials))
        setNetReqStatus(1)
        setTimeout(()=>{
            setNetReqStatus(0)
          },5000)
    }


    
useEffect(()=>{
    if(netReqStatus===1){
       
      if(auth.isError){
        setAucessAlrt(false)
        setErrorMsg("Failed to login")
        setTimeout(()=>{
          setErrorMsg("")
        },5000)
      }

      if(auth.isAuth){
             setErrorMsg("")
            setAucessAlrt(true)
            setUserCredentials({email:"", password:""})
            auth.role==="admin"?Router.push('/admin'):Router.push('/')
            setTimeout(()=>{
              setAucessAlrt(false)
            },5000)
      }
    }
    
},[auth,netReqStatus])

useEffect(()=>{
    if(auth.isAuth){
       
    }
},[auth])


  
    
      
        
    
    return (
        <>
           
           <ClientNavbar />
            
            <Flex gap={200} mt={200} ml={[50,200]} direction={['column', 'row']}>
                <Box  h={"auto"} w={250} >
                    <Text fontSize={22}><b>LOG IN</b></Text>
                    <form onSubmit={handleLogin}>
                        <Input 
                            id='email'
                            type='email'
                            name="email"
                            onChange={handleChange}
                            value={userCredentials.email}
                            required
                            placeholder='E-MAIL' 
                            mt={10} 
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
                            value={userCredentials.password}
                            onChange={handleChange}
                            required 
                            placeholder='PASSWORD' 
                            mt={5}
                            focusBorderColor="none"
                            borderLeft={"none"} 
                            borderTop={"none"} 
                            borderRight={"none"} 
                            borderRadius={"none"}
                        />
                        <Text 
                            fontSize={9} 
                            mt={10}
                            >
                            HAVE YOU FORGOTTEN YOUR PASSWORD?
                        </Text>
                        <Input 
                            
                            type="submit"
                            value="LOG IN"
                            fontSize={18} 
                            mt={50}
                            size='md'
                            height='45px'
                            width='250px'
                            border='0'
                            bg={"black"}
                            color={"white"}
                            cursor={"pointer"}
                            borderRadius={"none"}
                            variant='none'
                            />
                            
                    </form>

                    {sucessAlrt
                            &&
                            <Alert status='success'>
                                <AlertIcon />
                                <AlertTitle>{"Logged in  Successfully" }</AlertTitle>
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

                <Box h={400} w={400}>
                    <Text fontSize={22}><b>REGISTER</b></Text>
                    <Text 
                        fontSize={14} 
                        mt={5}
                        >
                        IF YOU STILL DON'T HAVE A <b>ZARA.COM</b> ACCOUNT, USE THIS OPTION TO ACCESS THE REGISTRATION FORM.
                        <br></br>
                        BY GIVING US YOUR DETAILS, PURCHASING IN <b>ZARA.COM</b> WILL BE FASTER AND AN ENJOYABLE EXPERIENCE.
                    </Text>

                    <Button
                        fontSize={18} 
                        mt={140}
                        size='md'
                        height='45px'
                        width='300px'
                        border='0'
                        bg={"black"}
                        color={"white"}
                        borderRadius={"none"}
                        variant='none'
                        >
                        <Link href="/signup">
                            CREATE ACCOUNT
                        </Link>
                    </Button>
                    
                </Box>
            </Flex>

            <Loginfooter />
        </>
    )
  }
  