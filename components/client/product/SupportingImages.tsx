import { Box, Flex, Image ,Button} from '@chakra-ui/react'
import React,{useState, useRef} from 'react'
import { IsupImage } from '../../../interface/client/supportingImage.interface'
import {AiOutlineClose} from "react-icons/ai"
import ImageDispaly from './ImageDispaly'
export default function SupportingImages({images}:{images:Array<IsupImage>}) {
  const [imgIndex, setImgIndex] =  useState<number>(0)
  const [zoom, setZoom] = useState<boolean>(false)

  const style = zoom?{position:"fixed", transform:"scale(5)"}:{position:"relative", transform:"scale(1)"}
  return (
    <Box h={["auto","auto","100%","100%"]} overflowX="hidden" >
        
            <Flex gap="10px" direction={["column","column","row","row"]}>
                <Box transition={"all .5s ease-in"} mx="auto">
                    <Image  src={images[imgIndex]?.imglink} h={["auto","auto","470px","470px"]} w="100%" _hover={{cursor:"pointer"}} />  
                </Box>
                <Flex direction={["row","row","column","column"]} gap="5px" justify={"center"}>
                    {images.map((img,i)=>{
                      return (
                        <Image src={img.imglink} w="30px" _hover={{cursor:"pointer"}} onClick={()=>{
                          setImgIndex(i)
                        }} onMouseOver={()=>{
                          setImgIndex(i)
                        }} />
                      )
                    })}
                </Flex>
            </Flex>
       
       {/* <Button variant={"outline"} colorScheme={"facebook"} position={"fixed"} top={"100px"} right={"20%"}>
          <AiOutlineClose />
       </Button>
     */}
    </Box>
  )
}
