import React, { useState } from 'react'
import axios from 'axios';
import {Box, Button, Divider, Flex, HStack, Image, Link, Radio, RadioGroup, Spacer, Stack, Text, VStack} from "@chakra-ui/react"
import { GetServerSideProps } from 'next';
import { CIproduct } from '../../interface/client/product.interface';
const SingleProduct = ({product}:{product:CIproduct}) => {
  console.log(product);
  const [isShowSupImg,setIsShowSupImg]=useState(false)
  const [prodColor,setProdColor]=useState("")
  const [mainImg,setMainImg]=useState(product.mainImg)
  return (
    <Flex gap="20px" direction={["column", "column","row","row"]}>
        <Box w={["100%","100%","30%","30%"]} order={["3","3","0","0"]}>
            <Stack>
                <Box w={"70%"}><Text lineHeight={"18px"} fontSize={"13px"} as={"b"}>MATERIALS, CARE AND ORIGIN</Text></Box>
                <Box my={'52'}><Text lineHeight={"16px"} fontSize={"11px"} as={"b"}>MATERIALS</Text></Box>
                <Box><Text lineHeight={"16px"} fontSize={"13px"}>We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products. </Text></Box>
                <Box><Text lineHeight={"16px"} fontSize={"13px"}>The Green to Wear 2.0 standard aims to minimise the environmental impact of textile manufacturing. To that end, we have developed Inditex’s The List programme, which helps guarantee both that production processes are clean and that our </Text></Box>
                <Box><Link><Text textDecoration={"underline"} lineHeight={"16px"} fontSize={"12px"}>View more</Text></Link></Box>
            </Stack>
        </Box>
        <Box w={["100%","100%","30%","30%"]} h={['auto','auto', '470px','470px']} overflow={"hidden"} boxSizing='border-box'>
          <Flex onMouseOver={()=>{setIsShowSupImg(true)}} onMouseLeave={()=>setIsShowSupImg(false)} gap={4}>
          <Link><Image transition={'ease-in-out'} height={"xl"} src={mainImg}/></Link>
          <Stack hidden={!isShowSupImg} spacing={'6'}>
            {product.supImg?.map((e)=><Box w='40px' h='40px'><Image cursor={"pointer"} onClick={()=>setMainImg(e.target.src)} src={e}/></Box>)}
          <Box w='40px' h='40px'><Image cursor={"pointer"} onClick={(e)=>setMainImg(e.target.src)} src='https://static.zara.net/photos///2022/I/0/1/p/8263/646/611/2/w/750/8263646611_1_1_1.jpg?ts=1663157747603'/></Box>
          {/* <Box w='40px' h='40px'><Image cursor={"pointer"} onClick={(e)=>setMainImg(e.target.src)} src='https://static.zara.net/photos///2022/I/0/1/p/8263/646/611/2/w/750/8263646611_2_1_1.jpg?ts=1663157750866'/></Box>
          <Box w='40px' h='40px'><Image cursor={"pointer"} onClick={(e)=>setMainImg(e.target.src)} src='https://static.zara.net/photos///2022/I/0/1/p/8263/646/611/2/w/750/8263646611_2_2_1.jpg?ts=1663157763818'/></Box>
          <Box w='40px' h='40px'><Image cursor={"pointer"} onClick={(e)=>setMainImg(e.target.src)} src='https://static.zara.net/photos///2022/I/0/1/p/8263/646/611/2/w/750/8263646611_1_1_1.jpg?ts=1663157747603'/></Box>
          <Box w='40px' h='40px'><Image cursor={"pointer"} onClick={(e)=>setMainImg(e.target.src)} src='https://static.zara.net/photos///2022/I/0/1/p/8263/646/611/2/w/750/8263646611_1_1_1.jpg?ts=1663157747603'/></Box> */}
        </Stack>
        </Flex>
        </Box>
        <Flex direction={"column"} w={["100%","100%","30%","30%"]} >
          <Box>
            <Text as={'b'} fontSize={"18px"}>TAILORED DOUBLE-BREASTED BLAZER</Text>
          </Box>
          <Box>
            <Text fontSize={"13px"}>Long sleeve blazer with a lapel collar. Featuring pronounced shoulders, front flap pockets and double-breasted metal button fastening at the front.</Text>
          </Box>
          <RadioGroup defaultValue='2' py={"4"}>
              <Stack spacing={5} direction='row'>
                <Radio onChange={(e)=>setProdColor(e.target.value)} colorScheme={"red"} backgroundColor='red' value='RED'>
                </Radio>
                <Radio onChange={(e)=>setProdColor(e.target.value)} colorScheme={"green"} backgroundColor='green' value='GREEN'>
                </Radio>
              </Stack>
          </RadioGroup>
          <Text fontSize={"11px"}>{prodColor}</Text>
          <Text fontSize={"11px"}>₹ 5,590.00</Text>
          <Text color={"grey"} fontSize={"10px"}>MRP incl. of all taxes</Text>
          <Box my={2}  border={"1px solid"} borderTop={"none"}></Box>
          <Text _hover={{backgroundColor:"rgb(240,240,240)"}} cursor={"pointer"} fontSize={"11px"}>S</Text>
          <Text _hover={{backgroundColor:"rgb(240,240,240)"}} cursor={"pointer"}  my={"2"} fontSize={"11px"}>M</Text>
          <Text _hover={{backgroundColor:"rgb(240,240,240)"}} cursor={"pointer"} fontSize={"11px"}>L</Text>
          <Box my={2} border={"1px solid"} borderTop={"none"}></Box>
          <Flex py={4} justify={"space-between"}>
            <Text fontSize={"11px"}>FIND YOUR SIZE</Text>
            <Text fontSize={"11px"}>SIZE GUIDE</Text>
          </Flex>
          <Button fontSize={"12px"} color={"white"} backgroundColor={"black"} colorScheme={"black"} variant={"outline"} borderRadius={"none"} w={"100%"}>ADD TO BAG</Button>
        </Flex>
    </Flex>
  )
}

// export const getServerSideProps = async (context) => {
//   const url = process.env.BASEURL
//   console.log(context.params);
  
//   const res = await axios.get(`${url}${context?.params?.id}`)
//   const product = res.data  
//   return {
//     props: {
//       product,
//     },
//   }
// }
// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const url = process.env.BASEURL
//   console.log(context.params);
  
//   const res:AxiosResponse<CIproduct> = await axios.get(`${url}${context?.params?.id}`)
//   const product = res.data  
//   return {
//     props: {
//       product,
//     },
//   }
// }

export default SingleProduct

export const getServerSideProps: GetServerSideProps = async (context) => {
  const url = process.env.BASEURL
  const res = await axios.get(`http://localhost:3000/api/product/${context?.params?.id}`)
  const product = await res.data
    return {
      props: {
        product
      }
    }
  }