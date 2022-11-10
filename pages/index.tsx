
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


    console.log("hihihi");


  
  return (
    <div>
      


    </div>
  )
}
