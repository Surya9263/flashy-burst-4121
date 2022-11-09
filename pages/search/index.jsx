import React from 'react'
import {Box, Flex,Input,Link,Spacer, Text} from "@chakra-ui/react"
import style from "../search/index.module.css"

const SearchPage = () => {
  return (
    <Box>
    <Flex m={"auto"} w={"12%"}>
        <Box><Text style={{fontFamily:'Neue-Helvetica'}}>Woman</Text></Box>
        <Spacer/>
        <Box><Link>Men</Link></Box>
        <Spacer/>
        <Box>Kids</Box>
    </Flex>
    <Flex my={"20"} ml={"56"} w={"80%"}>
        <Input focusBorderColor='black' className={style.searchInput} placeholder='ENTER SEARCH TERMS' _placeholder={{color:"black"}} borderColor="black" variant="flushed"/>
    </Flex>
    </Box>
  )
}

export default SearchPage