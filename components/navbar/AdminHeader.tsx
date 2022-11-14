import { Box, Flex,  Text, Button, Show, useDisclosure } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { logout } from '../../store/auth/authSlice'
import { clearCart } from '../../store/cart/cartSlice'
import { useAppDispatch, useAppSelector } from '../../store/hook'
import {BiLogOutCircle} from "react-icons/bi"
import Logout from '../client/nav/Logout'


export default function AdminHeader() {
  const dispatch = useAppDispatch()
  const user = useAppSelector(store=>store.user) 
  const {onClose, isOpen,onOpen} = useDisclosure()
 
  return (
    <Flex align={"center"} justify={"space-between"} minH="50px" px={"20px"} py="5px" borderBottom={"1px solid #019"} mb="20px" position={"sticky"} top="0px" w={"100%"}>
        <Flex h="100%" align="center" gap="20px"> 
           <Link href="/admin/">
           <Image alt={"Brand Logo"} width={"150"} height={"50"} src={"/logo/brandLogo1.png"} />
           </Link>
          <Show  breakpoint='(min-width: 768px)'>
            <Text fontSize={["18px","20px","25px","25px"]} fontWeight={["700"]}>
                  Admin Dashboard
            </Text>
          </Show>
           
        </Flex>

        <Flex h={"100%"} align={"center"}>
            <Box  fontSize={["14px","14px","20px","20px"]} fontWeight={"500"} w={"120px"} >
                <Link href="/profile">
                     Hellow {user.authUser.name} 
                </Link>
            </Box>

            
            <Show breakpoint='(min-width: 768px)'>
              <Button onClick={onOpen} colorScheme={"blue"}> LOG OUT </Button>
            </Show> 
            <Show breakpoint='(max-width: 767px)' > 
              <Button onClick={onOpen} colorScheme={"blue"}><BiLogOutCircle/></Button>
            </Show>
            

           
        </Flex>
        <Logout onClose={onClose} isOpen={isOpen} onOpen={onOpen} />
    </Flex>
  )
}


