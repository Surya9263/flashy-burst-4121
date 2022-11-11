import React from 'react'
import {
    Box,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
    
} from '@chakra-ui/react' 
export default function ScreenSlider({setDisplaySize}:{setDisplaySize:Function}) {
  return (
    <Box w={["90%", "90", "120px", "120px"]} position={["absolute", "absolute", "fixed", "fixed"]} top={["50px", "50px", "100px","100px"]} right={["auto", "auto", "170px","170px"]} left={["5vw", "5vw", "auto","auto"]}>
            <Slider defaultValue={0} min={0} max={200} step={100} w={["100%","100%","100%","100%"]} onChange={(e)=>{
                setDisplaySize(e.toString());
            }}>
            <SliderTrack bg="blackAlpha.800" >
                <Box position='relative' right={10} />
                <SliderFilledTrack bg='black' borderRadius={"50px"}/>
            </SliderTrack>
                    <SliderThumb boxSize={3} bg={"blackAlpha.900"}/>
            </Slider>
    </Box>
  )
}
