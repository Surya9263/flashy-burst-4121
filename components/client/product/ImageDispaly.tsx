
import {
  Box,
  Image
}from "@chakra-ui/react"
import React,{useState, useRef} from 'react'
import {motion, useScroll,useInView} from 'framer-motion'
import { insideview, outside } from "../../../styles/global"
export default function ImageDispaly({image}:{image:string}) {
  const scrollRef = useRef(null)
  const viewImage = useInView(scrollRef)

  return (
    <Box h="100%" ref="scrollRef" style={viewImage?insideview:outside}>
        <Image src={image} h="100%"/>
    </Box>
  )
}
