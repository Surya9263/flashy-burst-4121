import { Box, Flex, Image } from '@chakra-ui/react'
import React, { useState } from 'react'
import { CIproduct } from "../../../interface/client/product.interface";
import { useAppSelector } from '../../../store/hook';
import SupportingImages from './SupportingImages';

export default function SingleProduct({product}:{product:CIproduct}) {


  return (
    <Flex gap="20px">
                <Box>
                  {product.name}
                </Box>
              <SupportingImages images={product.supImg||[]}/>
    </Flex>
  )
}
