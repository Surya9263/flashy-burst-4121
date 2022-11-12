
import {
  Box,
  Image
}from "@chakra-ui/react"
import React,{useState, useRef} from 'react'
import {motion, useScroll} from 'framer-motion'
export default function ImageDispaly({image}:{image:string}) {
  const scrollRef = useRef(null)
  const { scrollYProgress } = useScroll();
  return (
    <Box h="100%">
    
        <Image src={image} h="100%"/>
    </Box>
  )
}
