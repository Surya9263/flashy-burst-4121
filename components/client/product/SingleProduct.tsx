import { Box, Button, Flex, Image ,Text, VStack} from '@chakra-ui/react'
import React, { useState } from 'react'
import { CIproduct } from "../../../interface/client/product.interface";
import { useAppSelector } from '../../../store/hook';
import SupportingImages from './SupportingImages';

export default function SingleProduct({product}:{product:CIproduct}) {


  return (
    <Flex gap="20px" direction={["column", "column","row","row"]}>
              <VStack mb={["15px","15px","60px","60px"]} gap="30px"  px="30px" w={["100%","100%","25%","25%"]} order={["3","3","0","0"]} justify={"end"} align={"start"}>
                   <Box >
                      <Text fontWeight={"800"}>
                            MATERIALS,  CARE<br/> AND ORIGIN
                      </Text>
                    </Box>  

                    <Box >
                      <Text fontWeight={"800"}>
                          MATERIALS
                      </Text>
                    </Box>  

                    <Box w="200px" >
                      <Text>
                        We work with monitoring programmes to ensure compliance with our social, environmental and health and safety standards for our 
                          
                      </Text>
                    </Box> 
                     
              </VStack>
              <Box w={["100%","100%","40%","40%"]} h={['auto','auto', '500px','500px']} overflow={"hidden"} boxSizing='border-box'>
                  <SupportingImages images={product?.supImg||[]}/>
              </Box>

              <Flex direction={"column"} w={["100%","100%","25%","25%"]} gap="30px">
                 <Box fontWeight={"700"} fontSize={["16px","18px","20px","20px"]} w={"60%"} px="20px">
                      {product.name}
                 </Box>
                
                 <Box fontWeight={"400"} fontSize={["16px","18px","20px","16px"]} w={"80%"} px="20px">
                      {product.description}
                 </Box>

                 <Box fontWeight={"700"} fontSize={["16px","18px","20px","16px"]} w={"80%"} px="20px">
                       &#8377;  {product.price}
                 </Box>

                 <Box fontWeight={"700"} fontSize={["16px","18px","20px","16px"]} w={"80%"} px="20px">
                      
                 </Box>

                 <Box fontWeight={"700"} fontSize={["16px","18px","20px","16px"]} w={"80%"} px="20px">
                    <Button colorScheme={"messenger"}>
                      Add o Cart
                    </Button>
                 </Box>
              </Flex>

    </Flex>
  )
}
