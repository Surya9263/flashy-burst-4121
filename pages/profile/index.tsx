import React, { ChangeEvent, useState, useEffect } from 'react'
import {Box,  Text, Flex,FormControl, Input, Button, Textarea,
    // ALert Components
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from '@chakra-ui/react'
import Link from "next/link"
import { ClientNavbar } from '../../components'
import { useAppDispatch, useAppSelector } from '../../store/hook'
import Router from 'next/router'
import { getAuthSUer, updateuser } from '../../store/user/user.slice'

export interface User {
    password: string;
    newpassword:string;
    confirmpassword:string;
}

const ProfileDetails = () => {

    const dispatch = useAppDispatch()
    const auth = useAppSelector(store=>store.auth)
    const user = useAppSelector(store=>store.user)

    const [netReqStatus,setNetReqStatus] = useState<number>(0)
    const [sucessAlrt, setAucessAlrt] = useState<boolean>(false)
    const [errorMsg, setErrorMsg] =  useState<string>("")

  
    
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

    const handleUpdatePwd = ()=>{
        
        if(userCredentials.confirmpassword!==userCredentials.newpassword){
            setErrorMsg("New password  and confirm password are different ")
                setTimeout(()=>{
                    setErrorMsg("")
                },5000)
            return 
        }

        if(userCredentials.confirmpassword.length===0||userCredentials.newpassword.length===0|| userCredentials.newpassword.length<8){
            setErrorMsg("New password must be 8 charachers long ")
                setTimeout(()=>{
                    setErrorMsg("")
                },5000)
            return 
        }
        dispatch(updateuser({id:auth.userId, password:userCredentials.confirmpassword}))
        setNetReqStatus(1)
        setTimeout(()=>{
            setNetReqStatus(0)
        },5000)
        
    }

    
    useEffect(()=>{
        if(!auth.isAuth){
             Router.push("/signin")
        }
        if(auth.isAuth){
            dispatch(getAuthSUer(auth.userId))
        }

    },[auth])

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
                setUserCredentials({password:'',newpassword:'',confirmpassword:""})
                setTimeout(()=>{
                    setAucessAlrt(false)
                },3000)
            }
    
        }
        
         return () => {
           
         }
       }, [user])


  return (
    <Box  h={"auto"}  my={"auto"}  mx="50px">

        <Box minH={"130px"}>
            <ClientNavbar />
        </Box>
        
    
        <Flex   direction={['column', "column", "row", "row"]} py="20px" gap="30px">
        
        <Flex  direction={"column"} gap={"20px"} >
            <Text fontSize={22}><b>Account Information</b></Text>
            <Flex>
                <Box fontSize={16} > Your e-mail : </Box>
                <Box fontSize={16} > {` `} {user?.authUser?.email}</Box>
           
            </Flex>

            <Flex>
                    <Box fontSize={16} > Name : </Box>
                    <Box fontSize={16} > {` `} {user?.authUser?.name}</Box>
            </Flex>


            <Flex direction={"row"} align={"center"} w={"100%"}>
                <Box fontSize={16} > Added Cart Items : </Box>
                <Box fontSize={16} > {` `} {user?.authUser.cart?.length}</Box>
            </Flex>

            
            </Flex>

            



                    <Box maxW="400px">
                    <Text fontSize={22} textAlign={"center"} pb="20px"><b>Change Your Account Password</b></Text>
                        <FormControl>
                        <Input 
                            id='password'
                            type='password'
                            name="password"
                            onChange={handleChange}
                            value={userCredentials.password}
                            required
                            placeholder=' CURRENT PASSWORD' 
                           
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
                            _hover={{cursor:"pointer"}}
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
                            onClick={handleUpdatePwd}
                            />
                            
                            </FormControl>
                            {sucessAlrt
                            &&
                            <Alert status='success'>
                                <AlertIcon />
                                <AlertTitle>{"Password Updated Successfully  Successfully" }</AlertTitle>
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

                   {auth.role==="user"
                   &&
                   <Flex direction={"column"} gap="25px">
                   <Text> Have a Query? get in Touch with us  </Text>
                   <Input type="text" name="" placeholder='Subject'/>   
                   <Textarea  name="" placeholder='Type Your query'/>
                   <Button bg="#000" color="#fff"> Send</Button>                   
                    </Flex>
                    }
        </Flex>
       
        <Box  fontSize="20px" fontWeight={"500"} mt={5}  >
              
        </Box>
    
    
    </Box>
   
   
  )
}

export default ProfileDetails