import React, { useEffect } from 'react'
import {AdminNav, AdminHeader} from '../../components/'
import { useAppDispatch, useAppSelector } from '../../store/hook'
import {  getallCategory } from '../../store/category/categorySlice'
import { Box, Flex } from '@chakra-ui/react'
import { getAllSlides } from '../../store/homeslide/slideSlice'
import { getAllsubcategory } from '../../store/subcategory/subCategorySlice'
import { getAllProdType } from '../../store/productType/productTypeSclie'
import { getAllProduct } from '../../store/product/productSlice'

export default function Home() {
  const dispatch =  useAppDispatch()

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

          <Box>

          </Box>
        </Flex>
    </div>
  )
}
