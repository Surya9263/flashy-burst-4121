import { Box,Text,Image,Select, Flex } from "@chakra-ui/react"
import Link from "next/link"
import { CIproduct } from "../../../interface/client/product.interface";
import ProductCard from "./ProductCard";
export default function Product({screenSize, products,path}:{screenSize:string, products:Array<CIproduct>, path:string}){

  // done remove this variable it is required to display products
  let start = 0
   
    return (
      <Box w={"100%"}>

        {screenSize==="0" ? 
        <Flex w={"100%"} direction="column" gap="20px"py="20px" >
          {products.map((item, i)=>{
            if(i===start){
              start = i+3
              return (
                  <Flex minH="250px"  mx="20px" key={item._id} justify={"center"}>
                      <ProductCard product={item} text={true} path={path} />
                  </Flex>
              )
            }
              if(i===start-2)
              {
              return (
                <Flex key={item._id} minH="250px" minW="100%" gap="23px" justify={"center"}>
                  { 
                  (products[start-1] && products[start-2]) ?
                    <Flex justify={"center"} direction={["column","column","row","row"]}>
                       <Box w={["90%","90%","40%","40%"]} mx="auto">
                            <ProductCard product={products[start-1]} text={true} path={path} />
                       </Box>
                       <Box w={["90%","90%","40%","40%"]} mx="auto">
                            <ProductCard product={products[start-2]} text={true} path={path} />
                       </Box>
                    </Flex>
                    :products[start-1]?
                    <Flex w={["90%","90%","40%","40%"]}>
                          <ProductCard product={products[start-1]} text={true} path={path} />
                    </Flex>
                    :products[start-2]?
                    <Flex w={["90%","90%","40%","40%"]}>
                         
                         <ProductCard product={products[start-2]} text={true} path={path} />
                    </Flex>
                    : null
                  }
                    
                </Flex>
                )
              }
              
          })}
        </Flex>
        :screenSize==="100" ?
        <Flex gap="20px" wrap={"wrap"} justify={"center"}>
                {products.map((item,i)=>{
                  return (
                    <Box key={item._id} minH={"150px"} w={["45vw","45vw","40vw", "22vw"]}>
                         <ProductCard product={item} text={true} path={path} />
                    </Box>
                  )
                })}
        </Flex>
        :
        <Flex gap="10px" wrap={"wrap"} justify={"center"}>
                {products.map((item,i)=>{
                  return (
                    <Box key={item._id} minH={"150px"} w={["20vw","20vw","16vw", "13vw"]} >
                        <ProductCard product={item} text={false} path={path} />
                    </Box>
                  )
                })}
        </Flex>
    }
      </Box>
    );
}
