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

   <div>
      <AdminHeader />
        <Flex>
          <Box w={["250px","250px","20%","20%"]}>
              <AdminNav />
          </Box>

          <Box w="100%">
              <Flex wrap={"wrap"} gap="20px">
                <Flex py="25px" direction={"column"} justify={"center"} align={"center"} gap={"20px"} w={["80%", "40%", "30%","30%"]} borderRadius={"20px"} border={"1px solid #768"}>
                    
                </Flex>
                <Flex py="25px" direction={"column"} justify={"center"} align={"center"} gap={"20px"} w={["80%", "40%", "30%","30%"]} borderRadius={"20px"} border={"1px solid #768"}>
                     <Text fontSize={"28px"} fontWeight={"700"} >Total Category</Text> 
                      <Text fontSize={"24px"} fontWeight={"700"}> {cat?.length} </Text>
                </Flex>
                <Flex py="25px" direction={"column"} justify={"center"} align={"center"} gap={"20px"} w={["80%", "40%", "30%","30%"]} borderRadius={"20px"} border={"1px solid #768"}>
                     <Text fontSize={"28px"} fontWeight={"700"} >Total Category</Text> 
                      <Text fontSize={"24px"} fontWeight={"700"}> {cat?.length} </Text>
                </Flex>
                <Flex py="25px" direction={"column"} justify={"center"} align={"center"} gap={"20px"} w={["80%", "40%", "30%","30%"]} borderRadius={"20px"} border={"1px solid #768"}>
                     <Text fontSize={"28px"} fontWeight={"700"} >Total Category</Text> 
                      <Text fontSize={"24px"} fontWeight={"700"}> {cat?.length} </Text>
                </Flex>
                <Flex py="25px" direction={"column"} justify={"center"} align={"center"} gap={"20px"} w={["80%", "40%", "30%","30%"]} borderRadius={"20px"} border={"1px solid #768"}>
                     <Text fontSize={"28px"} fontWeight={"700"} >Total Category</Text> 
                      <Text fontSize={"24px"} fontWeight={"700"}> {cat?.length} </Text>
                </Flex>
                  <Flex py="25px" direction={"column"} justify={"center"} align={"center"} gap={"20px"} w={["80%", "40%", "30%","30%"]} borderRadius={"20px"} border={"1px solid #768"}>
                     <Text fontSize={"28px"} fontWeight={"700"} >Total Category</Text> 
                      <Text fontSize={"24px"} fontWeight={"700"}> {cat?.length} </Text>
                </Flex>
              </Flex>
          </Box>
        </Flex>
    </div>

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