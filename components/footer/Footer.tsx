import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const socialLinks = [
    {
        id:1,
        name:"INSTAGRAM",
        path:"https://www.instagram.com/zara/"
    },
    {
        id:2,
        name:"FACEBOOK",
        path:"https://www.facebook.com/Zara"
    },
    {
        id:3,
        name:"TWITTER",
        path:"https://twitter.com/ZARA"
    },
    {
        id:4,
        name:"PINTEREST",
        path:"https://es.pinterest.com/zaraofficial"
    },
    {
        id:5,
        name:"YOUTUBE",
        path:"http://www.youtube.com/user/zara"
    },
    {
        id:6,
        name:"SPOTIFY",
        path:"https://open.spotify.com/user/r6ivwuv0ebk346hhxo446pbfv"
    }
]

export default function Footer() {
  return (
    <Box>
        <Flex h={"80vh"} justify="center" direction={"column"} align="center" gap="150px" px={["10%"]}>
            <Text textTransform={"uppercase"} fontSize={["20px", "20px", "24px", "24px"]}>
                Join Our Newsletter
            </Text>

            <Flex gap="20px" wrap={"wrap"} justify="center" fontSize={["16px","16px","12px","12px"]} >
                {socialLinks.map((social)=>{
                    return (
                        <a href={social.path} target="_blanck" key={social.id}>
                            <Text> {social.name}</Text>
                        </a>
                    )
                })}
            </Flex>

    </Flex> 
            <Box mb="40px" pl="20px" fontSize={["10px","10px","12px","12px"]}>
                       
                    <Text>
                        NAME AND ADDRESS OF THE MANUFACTURER
                    </Text>
                    <Text>
                        INDESTRIA DE DISENO TEXTILE, S.A. (INDITEX, S,A)
                    </Text>
                    <Text>
                            AVENDIA DE LA DIPUTICATION, EDIFICIO INDITEX, 15143, ARTEXIO (A CORUNA), SPAN
                    </Text>
                
                    </Box>
            </Box>

  )
}
