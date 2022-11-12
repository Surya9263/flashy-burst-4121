import { Box, Flex, Img, Text ,Button} from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function AdminHeader() {
  return (
   
    <Flex minH="50px" px={"20px"} py="5px" borderBottom={"1px solid #019"} mb="20px" position={"sticky"} top="0px" w={"100%"}  justify={"space-between"}>
       
        <Flex h="100%" align="center" gap="20px"> 
   
           <Link href="/admin/">
           <Image alt={"Brand Logo"} width={"150"} height={"50"} src={"/logo/brandLogo1.png"} />
           </Link>
           <Text fontSize={["18px","20px","25px","25px"]} fontWeight={["700"]}>
                Admin Dashboard
           </Text>
        
           </Flex>
           
    
          
           <Flex h="100%" align="center" gap="20px"> 
           <Box  fontSize="20px" fontWeight={"500"} w={"120px"} >
                    <Link href="/profile">
                           User Name
                    </Link>
                </Box>

          <Button>
            LOG OUT
          </Button>
       
    </Flex>
    </Flex>
          
   
  )
}
