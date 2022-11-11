import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import { IsupImage } from '../../../interface/client/supportingImage.interface'

export default function SupportingImages({images}:{images:Array<IsupImage>}) {
    console.log(images);
    
  return (
    <Box>
        <Image src={images[0]?.imglink} />
    </Box>
  )
}
