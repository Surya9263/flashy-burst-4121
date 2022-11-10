import { Box, Flex,Image,Text,Button, Show } from '@chakra-ui/react'
import Head from 'next/head'
import Link from 'next/link'
import React,{useContext} from 'react'
import {FaBars} from 'react-icons/fa'
import { colorContext } from '../../context/ColorContext'
import {BsBag} from 'react-icons/bs'


export default function ClientNavbar() {
   const {color} = useContext(colorContext)
  return (
    <Box  w={"100%"}>
        <Head>
        <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Dancing+Script" />
    </Head>
    <Box position={"fixed"} top="0px" zIndex={"10"}  w={"100%"}>

        <Flex align={"center"}  px={["10px","10px","20px","20px"]} color={color} justify="space-between" >
           
           <Flex align={"center"} gap={["10px","10px","20px","20px"]} >
            <Button variant={"outline"} _hover={{bg:"none"}} p="0" border={"none"} fontSize={"24px"}>
                    <FaBars fontFamily='Dancing Script' />
                </Button>
                {/* <Image src={'/logo/brandLogo1.png'} alt="brand Logo"/> */}
               <Link href="/">
                <Text  fontFamily={'Dancing Script'} fontSize={['2.5em', '2.5em',"4em","4em"]}>
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
                        <Link href="/login">
                            Log in
                            
                        </Link>
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
                        <Text fontSize={["14px"]} position="absolute" top="8px" w="30px" textAlign="center">99</Text>
                    </Link>
                </Box>
            </Flex>

        </Flex>
    </Box>
    </Box>
  )
}
