
import Head from 'next/head'
import {useState, useRef} from 'react'
import {Box, Input, Button, Image, Flex} from '@chakra-ui/react'
import { MouseEvent, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../store/hook'
import {  getallCategory } from '../store/category/categorySlice'
import {MdArrowBackIosNew, MdArrowForwardIos} from 'react-icons/md'
import { getAllSlides } from '../store/homeslide/slideSlice'
import { ClientNavbar, Footer, UiImage } from '../components'
import { motion, useInView } from 'framer-motion'
import TempNav from '../components/client/nav/TempNav'
import { getAllProduct } from '../store/product/productSlice'

export default function Home() {
  const dispatch =  useAppDispatch()
  const category = useAppSelector(store=>store.category)
  const slides = useAppSelector(store=>store.slide.slides)
  const [catIndex, setCatIndex] =  useState<number>(0)

  const footerRef = useRef(null)
  const footView = useInView(footerRef)



  useEffect(()=>{
    dispatch(getallCategory("takeitnow"))
    dispatch(getAllSlides("takeitnow"))
    dispatch(getAllProduct("takeitnow"))
  },[])

const forward = ()=>{
  setCatIndex(catIndex>category.categories.length?0:catIndex+1)
}

  const previous = ()=>{
    setCatIndex(catIndex<0?category.categories.length-1:catIndex-1)
  }


  const jumpToReleventDiv = (id:string) => {
    const releventDiv = document.getElementById(id);
    // behavior: "smooth" parameter for smooth movement
    releventDiv?.scrollIntoView({behavior: "smooth"});
  }

  
  return (  
   <Box position={"relative"}>

      <ClientNavbar />
    
        {category.categories[catIndex]?.slides?.map((slide)=>{
          return (
           <Box  mx="auto" key={slide._id}>
             <UiImage slide={slide} key={slide._id}/>
            </Box>
          )
        })}
 
    
     {!footView &&
     
     <Box>

 
        {catIndex>0 && <Button variant={"outline"} colorScheme="orange" borderRadius={"none"} position="fixed" top={"45vh"} onClick={previous}>
            <MdArrowBackIosNew /> {category.categories[catIndex-1]?.name}
          </Button>
        }

        {catIndex<category.categories?.length-1 &&  
          <Button variant={"outline"} colorScheme="orange" borderRadius={"none"} position="fixed" top={"45vh"} right="0px" onClick={forward}>
            {category.categories[catIndex+1].name} <MdArrowForwardIos /> 
          </Button>
          }
      </Box>
    }

     {!footView &&
      <Flex gap={"20px"} position={"fixed"} bottom={"2vh"} justify={"center"} w="100%" >

        {slides?.map((slide)=>{
            return (
              
                    category.categories[catIndex]?._id===slide.category._id 
                    &&
                    <Box key={slide._id} fontWeight={"700"} textAlign="center" _hover={{cursor:"pointer"}} onClick={()=>{
                      jumpToReleventDiv(slide._id)
                    }}>
                      {slide.subcategory.name}
                    </Box>
            )
        })}

        </Flex> 
      }

        <Box ref={footerRef}>
        <TempNav/>
            <Footer/>
        </Box>
    </Box>
  )
}
