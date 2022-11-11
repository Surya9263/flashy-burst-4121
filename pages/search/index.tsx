import React, { useEffect, useState } from 'react'
import {Box, Container, Flex,Input,Link,Spacer, Stack, Text} from "@chakra-ui/react"
import style from "../search/index.module.css"

const SearchPage = () => {
  // const [isShowTrends,setIsShowTrends]=useState(false)
  // useEffect(()=>{
  //   setIsShowTrends(false);
  // },[])
  return (
    <Box>
    <Flex style={{fontFamily:'Neue-Helvetica'}} m={{lg:"auto"}} ml={{sm:"4"}} w={{lg:"12%",sm:"5%"}} gap={{sm:"10px"}} justifyContent={{sm:"flex-start"}} >
        <Box><Link><Text fontSize={"13px"}>WOMAN</Text></Link></Box>
        <Spacer/>
        <Box><Link><Text fontSize={"13px"}>MAN</Text></Link></Box>
        <Spacer/>
        <Box><Link><Text fontSize={"13px"}>KIDS</Text></Link></Box>
    </Flex>
    <Flex my={{lg:"16",sm:"10"}} mt={{sm:"3"}} mb={{sm:"16"}} ml={{lg:"56",sm:"4"}} w={{lg:"80%"}}>
        <Input  focusBorderColor='black' className={style.searchInput} placeholder='ENTER SEARCH TERMS' _placeholder={{color:"black"}} borderColor="black" variant="flushed"/>
    </Flex>
    <Stack w={{lg:"5%"}} ml={{lg:"56",sm:"4"}}>
        <Box><Text fontSize={"13px"} as={"b"}>TRENDS</Text></Box>
        <Box><Text cursor={"pointer"} fontSize={"13px"}>DRESS</Text></Box>
        <Box><Text cursor={"pointer"} fontSize={"13px"}>TOP</Text></Box>
        <Box><Text cursor={"pointer"} fontSize={"13px"}>SKIRT</Text></Box>
        <Box><Text cursor={"pointer"} fontSize={"13px"}>BLAZER</Text></Box>
    </Stack>
    </Box>
  )
}

export default SearchPage