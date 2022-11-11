import React from 'react'
import {Box, Flex, HStack, Link, Stack, Text, VStack} from "@chakra-ui/react"
const SingleProduct = () => {
  return (
    <HStack justifyContent={"center"} spacing={"25px"} fontFamily={"Neue-Helvetica"}>
        <Box w={"15%"}>
            <Stack>
                <Box w={"70%"}><Text lineHeight={"18px"} fontSize={"13px"} as={"b"}>MATERIALS, CARE AND ORIGIN</Text></Box>
                <Box><Text lineHeight={"16px"} fontSize={"11px"} as={"b"}>MATERIALS</Text></Box>
                <Box><Text lineHeight={"16px"} fontSize={"13px"}>We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products. </Text></Box>
                <Box><Text lineHeight={"16px"} fontSize={"13px"}>The Green to Wear 2.0 standard aims to minimise the environmental impact of textile manufacturing. To that end, we have developed Inditex’s The List programme, which helps guarantee both that production processes are clean and that our </Text></Box>
                <Box><Link><Text textDecoration={"underline"} lineHeight={"16px"} fontSize={"12px"}>View more</Text></Link></Box>
            </Stack>
        </Box>
        <Box w={"30%"} border={"1px solid red"}>Image</Box>
        <Box w={"30%"} border={"1px solid red"}>Size and all</Box>
    </HStack>
  )
}

export default SingleProduct