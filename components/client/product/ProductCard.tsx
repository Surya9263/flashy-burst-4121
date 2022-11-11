import { Box,Flex, Image } from '@chakra-ui/react'
import Link from 'next/link';
import React from 'react'
import { CIproduct } from "../../../interface/client/product.interface";

export default function ProductCard({product, text, path}:{product:CIproduct, text:boolean, path:string}) {
  return (
    <Link href={`${path}${product._id}`}>
        <Flex direction={"column"} >
            <Image src={product.mainImg}  w={["80vw","500px","100%","100%"]}/>
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
