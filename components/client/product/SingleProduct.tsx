import { Box, Button, Flex, Image } from '@chakra-ui/react'
import React, { useState } from 'react'
import { CIproduct } from "../../../interface/client/product.interface";
import { useAppSelector } from '../../../store/hook';
import SupportingImages from './SupportingImages';

export default function SingleProduct({product}:{product:CIproduct}) {


  return (
    <Flex gap="20px" direction={["column", "column","row","row"]}>
              <Box w={["100%","100%","30%","30%"]} order={["3","3","0","0"]}>

              </Box>
              <Box w={["100%","100%","30%","30%"]} h={['auto','auto', '470px','470px']} overflow={"hidden"} boxSizing='border-box'>
                  <SupportingImages images={product.supImg||[]}/>
              </Box>

              <Flex direction={"column"} w={["100%","100%","30%","30%"]} >
                 <Box fontWeight={"700"} fontSize={["16px","18px","20px","16px"]} w={"80%"} px="20px">
                      {product.name}
                 </Box>
                
                 <Box fontWeight={"700"} fontSize={["16px","18px","20px","16px"]} w={"80%"} px="20px">
                      {product.description}
                 </Box>

                 <Box fontWeight={"700"} fontSize={["16px","18px","20px","16px"]} w={"80%"} px="20px">
                      Price : {product.price}
                 </Box>

                 <Box fontWeight={"700"} fontSize={["16px","18px","20px","16px"]} w={"80%"} px="20px">
                    <Button>
                      Add o Cart
                    </Button>
                 </Box>
              </Flex>

    </Flex>
  )
}
