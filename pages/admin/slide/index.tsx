import { Box, Flex, Input } from "@chakra-ui/react";
import React from 'react'
import { AdminNav } from "../../../components";


const SlideHome = ()=>{
       
    return(
        <Box>
            <Flex>
                <Box w={["250px","250px","20%","20%"]}>
                    <AdminNav />
                </Box>

                <Box>
                    <form >
                        <Flex>
                            <Input type={"text"} />
                        </Flex>
                    </form>
                </Box>
            </Flex>
        </Box>
    )
  
}

export default SlideHome