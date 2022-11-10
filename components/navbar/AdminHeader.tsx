import { Box, Flex, Img, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function AdminHeader() {
  return (
    <Flex minH="50px" px={"20px"} py="5px" borderBottom={"1px solid #019"} mb="20px">
        <Flex h="100%" align="center" gap="20px"> 
           <Link href="/admin/">
           <Image alt={"Brand Logo"} width={"150"} height={"50"} src={"/logo/brandLogo1.png"} />
           </Link>
           <Text fontSize={["18px","20px","25px","25px"]} fontWeight={["700"]}>
                Admin Dashboard
           </Text>
        </Flex>
    </Flex>
  )
}
