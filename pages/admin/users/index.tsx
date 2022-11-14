import { Box,Button,Flex, useDisclosure} from '@chakra-ui/react'
import axios from 'axios'
import { GetServerSideProps } from 'next'
import React,{useState,useEffect} from 'react'
import { AdminHeader, AdminNav } from '../../../components'
import { Iuserclient } from '../../../interface/client/user.interface'
import { useAppDispatch, useAppSelector } from '../../../store/hook'
import { deletuser, getAlluser, updateuser } from '../../../store/user/user.slice'
// {users}:{users:Array<Iuserclient>}

// alerf
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'

// icons 
// icons
import {BsFillTrashFill, BsPencilSquare} from "react-icons/bs"
import {FiSave} from 'react-icons/fi'
import {MdOutlineCancel} from 'react-icons/md'
import {GrDocumentUpdate} from 'react-icons/gr'
import ConfirmationModel from '../../../components/client/nav/ConfirmationModel'
import { StringMappingType } from 'typescript'

export default function UserHOme() {

    const [userslist, setUsersList] = useState<Array<Iuserclient>>([])
    const [filter, setFilter] = useState<"admin"|"user"|"all">("all")
    const dispatch = useAppDispatch()
    const users= useAppSelector(store=>store.user)
    const {isOpen, onOpen, onClose} = useDisclosure()
    const [userId, setUserId] = useState<string>("")
    const [netreq, setnetReq] =  useState<boolean>(false)
    const [alert, setAlert] =  useState<"success"|"error"|"">("")

    useEffect(()=>{
        if(users.users.length===0){
            dispatch(getAlluser("takeitnow"))
        }
    },[])
 
    useEffect(()=>{
        if(filter==="all"){
            setUsersList(users.users)
        }
        if(filter==="admin"){
            let data  = users.users.filter((item)=>{
                return item.role==="admin"
            })
            console.log(data);
            
            setUsersList(data)
        }
        if(filter==="user"){
            let data  = users.users.filter((item)=>{
                return item.role==="user"
            })
            console.log(data);
            setUsersList(data)
        }
        
    },[filter, users])

    const handleDelete =async()=>{
        await dispatch(deletuser(userId))
        onClose()
        setUserId("")
        setnetReq(true)
        setTimeout(()=>{
            setnetReq(false)
        },5000)
    }

  
    useEffect(()=>{
        if(netreq===true){
            if(users.isError){
                setAlert("error")
            }else{
                if(users.isError){
                    setAlert("success")
                }
                setTimeout(()=>{
                    setAlert("")  
                },3000)
            }  
        }
    },[users])


    const updateRole =(id:string, role:string)=>{
        dispatch(updateuser({id:id, role:role}))
    }

  return (
    <Box>
        <AdminHeader/>
        <Flex>
            <Box>
                <AdminNav/>
            </Box>
           
            <Box w="80%"  overflowX={"scroll"}  >
            
            <Box border="1px solid #021" textAlign={"center"} fontWeight="800" fontSize={"20px"}  textTransform={"uppercase"}>Registered Users</Box>
                
                <Flex border="1px solid #021" my="10px" py="5px" gap="10px" px="10px">
                    <Box  onClick={()=>setFilter("all")} _hover={{cursor:"pointer"}} px="30px" py="5px" border="1px solid #000"> All </Box>   
                    <Box  onClick={()=>setFilter("user")} _hover={{cursor:"pointer"}} px="30px" py="5px" border="1px solid #000"> Users </Box>   
                    <Box  onClick={()=>setFilter("admin")} _hover={{cursor:"pointer"}} px="30px" py="5px" border="1px solid #000"> Admin </Box>    
                </Flex>

                <Flex   direction={"column"} w={["200%","200%","100%","100%"]} gap="10px">
                            <Flex  mt="20px"  fontWeight="700" fontSize={"20px"} gap="20px"  border={"1px solid #ccc"}>
                                            <Box borderLeft={"1px solid #000"} borderRight={"1px solid #000"} w={["150px"]}> Name</Box>   
                                            <Box borderRight={"1px solid #000"} w={["200px"]}> Email </Box>    
                                            <Box borderRight={"1px solid #000"}w={["50px"]}> Role </Box> 
                                       
                            </Flex>
                    {userslist?.map((user)=>{
                        return (
                            <>
                            {filter==="all" && 
                            <Flex key={user._id} gap="20px" borderBottom={"1px solid #ccc"}>
                                  <Box w={["150px"]}> {user.name} </Box>   
                                  <Box w={["200px"]}> {user.email} </Box>    
                                  <Box w={["50px"]}> {user.role} </Box> 
                                  <Button px="20px" onClick={()=>updateRole(user._id, user.role)} colorScheme={user.role==="admin"?"green":"orange"} w={"100px"}> {user.role==="user"?"Make Admin":"Make User"}  </Button>
                                  <Button onClick={()=>{
                                    setUserId(user._id)
                                    onOpen()
                                  }} colorScheme={"red"}> <BsFillTrashFill/> </Button>
                            </Flex>}

                            {filter==="admin" && 
                            <Flex key={user._id} gap="20px" borderBottom={"1px solid #ccc"}>
                                  <Box w={["150px"]}> {user.name} </Box>   
                                  <Box w={["200px"]}> {user.email} </Box>    
                                  <Box w={["50px"]}> {user.role} </Box> 
                                  <Button px="20px" onClick={()=>updateRole(user._id, user.role)} colorScheme={user.role==="admin"?"green":"orange"}w={"100px"}> {user.role==="user"?"Make Admin":"Make User"}  </Button>
                                  <Button onClick={()=>{
                                    setUserId(user._id)
                                    onOpen()
                                  }} colorScheme={"red"}> <BsFillTrashFill/> </Button>
                            </Flex>}

                            {filter==="user" && 
                            <Flex key={user._id} gap="20px" borderBottom={"1px solid #ccc"}>
                                  <Box w={["150px"]}> {user.name} </Box>   
                                  <Box w={["200px"]}> {user.email} </Box>    
                                  <Box w={["50px"]}> {user.role} </Box> 
                                  <Button px="20px" onClick={()=>updateRole(user._id, user.role)}  colorScheme={user.role==="admin"?"green":"orange"} w={"100px"}> {user.role==="user"?"Make Admin":"Make User"}  </Button>
                                  <Button onClick={()=>{
                                    setUserId(user._id)
                                    onOpen()
                                  }} colorScheme={"red"}> <BsFillTrashFill/> </Button>
                            </Flex>}
                            </>
                        )
                    })}
                </Flex>

            </Box>

            <ConfirmationModel  handlerFunc={handleDelete} isOpen={isOpen} onOpen={onOpen} onClose={onClose} ActionMsg="Do You Really Want to Delete" actionTitle='Delte User' ActionText='Delete' />
        </Flex>

        <Box position={"fixed"} left="45%" top="25px">
          {alert==="error"?<Alert status='error'>
            <AlertIcon />
            There was an error processing your request
        </Alert>
        :alert==="success"?
        <Alert status='success'>
            <AlertIcon />
                    User Deleted Successfully 
        </Alert>
        :
        null
        }
</Box>
    </Box>
  )
}


// const getServerProps:GetServerSideProps = async(context)=>{

//     const url = process.env.BASEURL
//     const res = await axios.get(`${url}/user`)
//     const users = res.data;
//     console.log(users);
    
//     return {
//         props:{
//             users
//         }
//     }
// }