import React,{useRef,useState,useEffect} from 'react'
import {
    Box,
    Input,
    Button,
    Flex
  } from '@chakra-ui/react'
  import {AiOutlineClose} from "react-icons/ai"
import {useInView} from "framer-motion"
import { navView,navOut } from '../../../styles/global'
import { useAppSelector ,useAppDispatch} from '../../../store/hook'
import Link from 'next/link'
import { getallCategory } from '../../../store/category/categorySlice'
import { GetServerSideProps } from 'next'
import axios from 'axios'
import { CIcategory } from '../../../interface/client/category.interface'

export default function ProductNav({onClose, isOpen,onOpen}:{onClose:VoidFunction, isOpen:boolean,onOpen:VoidFunction}) {
    const ref = useRef(null)
    const refview = useInView(ref)
    const category = useAppSelector(store=>store.category)
    const [catIndex, setCatIndex] = useState<number>(0)
    const distapch = useAppDispatch()

    useEffect(()=>{
        if(category.categories.length===0){
            distapch(getallCategory("takeitnow"))
        }
    },[])
    
  return (
    <Box style={refview?navView:navOut}  ref={ref} position={"fixed"} top="15%" h={"85%"} w={["78%","78%","40%","30%"]}  zIndex={"100"} >
        <Button onClick={onClose} position="absolute" right={"5px"} top="5px" colorScheme={"orange"} variant="outline" p="0">
            <AiOutlineClose fontSize={"20px"} fontWeight="700"/>
        </Button>


        <Flex justify={"center"} gap="25px" py="30px">
                {
                category?.categories?.map((category, i)=>{
                    return(
                        <Box  _hover={{cursor:"pointer"}} key={category._id} order={category.name==="Kids"?3:0} fontSize={["20px"]} onClick={()=>setCatIndex(i)}>
                                {category.name}
                        </Box>
                    )
                })
                }
        </Flex>


        <Flex direction={"column"} gap={"20px"}>
            {category &&category?.categories[catIndex]?.subCategory?.map((subcat)=>{
                return (
                    <Link href={`${subcat?.path}`} key={subcat._id}>
                        <Box fontSize={"20px"} pl="25px">
                            {subcat.name}
                        </Box>
                       
                    </Link>
                )
            })}
        </Flex>

    </Box>
  )
}

