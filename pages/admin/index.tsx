import React, { useEffect } from 'react'
import {AdminNav} from '../../components/'
import { useAppDispatch, useAppSelector } from '../../store/hook'
import {  getallCategory } from '../../store/category/categorySlice'
import { Box, Flex } from '@chakra-ui/react'

export default function Home() {
  const dispatch =  useAppDispatch()

  useEffect(()=>{
    dispatch(getallCategory("jeet"))
  },[])
  
  return (
    <div>
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
