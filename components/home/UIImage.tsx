import React,{useRef,useContext, useEffect}from 'react'
import { motion, useInView } from 'framer-motion'
import {insideview, outside} from '../../styles/global'
import { Islide } from '../../interface/client/category.interface'
import { Box, Image } from '@chakra-ui/react'
import Link from 'next/link'
import { colorContext } from '../../context/ColorContext'


export default function UiImage({slide}:{slide:Islide}) {
    const scrollRef = useRef(null)
    const inviewImage  = useInView(scrollRef)

  return (
    <Box  mx="auto">
        <Link href={slide.navigateUrl}>
            <Image w={"100%"}  h={["60vh","60vh","auto","auto"]} ref={scrollRef} style={inviewImage?insideview:outside} src={slide.imgurl} key={slide._id} id={slide._id}/>
        </Link>
    </Box>
  )
}
