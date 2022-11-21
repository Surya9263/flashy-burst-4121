import { Box,Flex, Image } from '@chakra-ui/react'
import Link from 'next/link';
import React ,{useRef}from 'react'
import { CIproduct } from "../../../interface/client/product.interface";
import { motion, useInView } from 'framer-motion'
import { insideview, outside } from '../../../styles/global';
export default function ProductCard({product, text, path}:{product:CIproduct, text:boolean, path:string}) {
  const scrollRef = useRef(null)
  const inviewImage  = useInView(scrollRef)
  return (
    <Link href={`/search/${product._id}`} >
        <Flex  direction={"column"} ref={scrollRef} style={inviewImage?insideview:outside} >
            <Image src={product.mainImg}  w={["90vw","100%","100%","100%"]} h="90%"/>
            {text
            && 
            <Flex justify={"space-between"} px="10px" py="10px">
                <Box as="h1" fontSize={["12px","12px","16px","18px"]}> {product.name} </Box>
                <Box as="h1" fontSize={["12px","12px","16px","18px"]}>&#x20B9; {product.price} </Box>
            </Flex>
            }
        </Flex>
    </Link>
  )
}
