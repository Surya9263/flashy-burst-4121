import { Box, Flex,Image,Text,Button, Show,useDisclosure,
 } from '@chakra-ui/react'
import Head from 'next/head'
import Link from 'next/link'
import React,{useContext, useEffect, useState} from 'react'
import {FaBars} from 'react-icons/fa'
import { colorContext } from '../../context/ColorContext'
import {BsBag} from 'react-icons/bs'
import { useAppDispatch, useAppSelector } from '../../store/hook'
import ProductNav from '../client/nav/ProductNav'
import { GetServerSideProps } from 'next'
import axios from 'axios'
import { CIcategory } from '../../interface/client/category.interface'
import  Router from 'next/router'
import { getAuthSUer } from '../../store/user/user.slice'
import { cartContxt } from '../../context/CartCItemContext'
import cartController from '../../controller/cart.controller'
import { getUserCartItems } from '../../store/cart/cartSlice'
import style from './ClientNavbar.module.css'


export default function ClientNavbar() {
   const {color} = useContext(colorContext)
   const auth = useAppSelector(store=>store.auth) 
   const cart = useAppSelector(store=>store.cart)
    const user =   useAppSelector(store=>store.user)
    
   const { isOpen, onOpen, onClose } = useDisclosure()
   const btnRef = React.useRef<any|null>(null)
    const {setCartItem} = useContext(cartContxt)

    const dispatch = useAppDispatch()
    const {cartItem} = useContext(cartContxt)
   
    useEffect(()=>{
       if(Router.pathname.startsWith("/cart")){
        if(!auth.isAuth || auth.role!=="user"){
            Router.push({
                pathname:"/signin",
                query:{prevPath:Router.pathname}
            })
          }
       }
       if(auth.isAuth){
        dispatch(getAuthSUer(auth.userId))
        dispatch(getUserCartItems(auth.userId))
        
        let remaininfItem = cart.cartItems.filter((item)=>{
            return !item.orderplaced
            })
        setCartItem(remaininfItem.length)
        
       }
       
     
   },[auth])
 
  


  
  return (
    <Box  w={"100%"}>
       
    <Box position={"fixed"} top="0px" zIndex={"10"}  w={"100%"} _hover={{bg:"rgba(255,255,255,.8)"}} transition=".3s all ease-in">

        <Flex align={"center"}  px={["10px","10px","20px","20px"]} color={color} justify="space-between" >
           
           <Flex align={"center"} gap={["10px","10px","20px","20px"]} >
                <Button  ref={btnRef} variant={"outline"} _hover={{bg:"none"}} p="0" border={"none"} fontSize={"24px"} onClick={()=>{
                    if(!isOpen){
                        onOpen()
                    }else{
                        onClose()
                    }
                }}>
                    <FaBars fontFamily='Dancing Script' />
                </Button>
                {/* <Image src={'/logo/brandLogo1.png'} alt="brand Logo"/> */}
               <Link href="/">
                <Text className={style.gFont} fontFamily={'Dancing Script'} fontSize={['2.5em', '2.5em',"4em","4em"]}>
                        TAKEITNOW
                    </Text>
               </Link>
           </Flex>
                
            <Flex mt={["20px","20px","0px","0px"]} align={"center"} gap={["10px","10px","24px","24px"]} direction={["column-reverse", "column-reverse", "row","row"]}>
                <Box borderBottom={"1px solid #000"} fontSize="20px" fontWeight={"500"} w={"120px"} textTransform={"uppercase"}>
                    <Link href="/search">
                            Search
                    </Link>
                </Box>

                <Show breakpoint='(min-width: 768px)'>
                
                
                    <Box  fontSize="20px" textTransform={"uppercase"}>
                        
                     {auth.isAuth && <Link href="/profile">
                            {user?.authUser?.name}
                        </Link>}
                       
                   

                    {!auth.isAuth && <Link href="/signin">
                            Log in
                        </Link>}
                       
                    </Box>

                    <Box fontSize="20px"  textTransform={"uppercase"}>
                        <Link href="/help">
                            HELP
                        </Link>
                    </Box>
                </Show>

                <Box fontSize="30px" position={"relative"} >
                    <Link href="/cart">
                        <BsBag />
                        <Text fontSize={["14px"]} position="absolute" top="8px" w="30px" textAlign="center">{cartItem}</Text>
                    </Link>
                </Box>
            </Flex>

        </Flex>
    </Box>

    {isOpen&&<ProductNav isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>}
    </Box>
  )
}



