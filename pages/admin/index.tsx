import React, { useEffect } from 'react'
import {AdminNav, AdminHeader} from '../../components/'
import { useAppDispatch, useAppSelector } from '../../store/hook'
import {  getallCategory } from '../../store/category/categorySlice'
import { Box, Flex, Text } from '@chakra-ui/react'
import { getAllSlides } from '../../store/homeslide/slideSlice'
import { getAllsubcategory } from '../../store/subcategory/subCategorySlice'
import { getAllProdType } from '../../store/productType/productTypeSclie'
import { getAllProduct } from '../../store/product/productSlice'
import { GetServerSideProps } from 'next'
import axios from 'axios'
import { CIcategory } from '../../interface/client/category.interface'



export default function Home({cat}:{cat:Array<CIcategory>}) {
  const dispatch = useAppDispatch()
  useEffect(()=>{
    dispatch(getallCategory("gtakeitnow"))
    dispatch(getAllSlides("gtakeitnow"))
    dispatch(getAllsubcategory("gtakeitnow"))
    dispatch(getAllProdType("takeitnow"))
    dispatch(getAllProduct("takeitnow"))
  },[])
  
  return (

   <Box backgroundImage={"logo/1.jpg"} minH="100vh" backgroundSize={"cover"}>
      <AdminHeader />
        <Flex justify={"center"} px="20px" py="30px">
          <Box w={["250px","250px","20%","20%"]}>
              <AdminNav />
          </Box>

          <Box w="100%"  mx="auto">
              <Flex wrap={"wrap"} gap="20px" justify={"center"} py="20px">
                <Flex color="#fff" bg="rgba(50,50,80,.7)" py="25px" direction={"column"} justify={"center"} align={"center"} gap={"20px"} w={["80%", "100%", "30%","30%"]} borderRadius={"5px"} >
                      <Text fontSize={"28px"} fontWeight={"800"} >Total Categories</Text> 
                      <Text fontSize={"24px"} fontWeight={"800"}> {cat?.length} </Text>
                      <Flex direction={"column"}>
                          <Flex px="20px" fontSize={"20px"} gap="20px" borderBottom={"1px solid #456"} borderTop={"1px solid #456"}>
                              <Box w={"50%"}>{'Category Name'}</Box>
                              <Box w={"50%"}>{"Total Subcategories"}</Box>
                          </Flex>
                      {cat.map((categ)=>{
                        return (
                          <Flex px="20px" key={categ._id} fontSize={"20px"}>
                              <Box w={"50%"}>{categ.name}</Box>
                              <Box w={"50%"}>{categ?.subCategory?.length}</Box>
                          </Flex>
                        )
                     })}
                      </Flex>
                </Flex>
                <Flex  bg="rgba(50,50,80,.7)" color="#fff" py="25px" direction={"column"} justify={"center"} align={"center"} gap={"20px"} w={["80%",  "100%", "100%","60%"]} borderRadius={"20px"} border={"1px solid #768"}>
                      <Text fontSize={"28px"} fontWeight={"700"} > Category Statistics</Text> 
                    <Flex direction={"column"}>
                          <Flex  gap="20px" borderBottom={"1px solid #456"} borderTop={"1px solid #456"}>
                              <Box w={"50%"}>{'Category Name'}</Box>
                              <Box w={"50%"}>{"Subcategories"}</Box>
                              <Box w={"50%"}>{'Products under Category'}</Box>
                              <Box w={"50%"}>{"Home Slides under Category"}</Box>
                          </Flex>
                      {cat.map((categ)=>{
                        return (
                          <Flex key={categ._id}>
                              <Box w={"50%"}>{categ.name}</Box>
                              <Box w={"50%"}>{categ?.subCategory?.length}</Box>
                              <Box w={"50%"}>{categ?.products?.length}</Box>
                              <Box w={"50%"}>{categ?.slides?.length}</Box>
                          </Flex>
                        )
                     })}
                      </Flex>
                </Flex>
                <Flex py="25px" direction={"column"} justify={"center"} align={"center"} gap={"20px"} w={["100%",  "100%", "90%","90%"]} borderRadius={"20px"} border={"1px solid #768"}>
                
                </Flex>

               
              </Flex>
          </Box>
        </Flex>
    </Box>

  )
}

export const getServerSideProps:GetServerSideProps = async (context) => {
  const url = process.env.BASEURL
 
  const res = await axios.get(`${url}/category`)
  const cat = await res.data
    return {
      props: {
        cat
      }
    }
  }