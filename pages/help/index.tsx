import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { ClientNavbar } from '../../components'

export default function Help() {
  return (
    <Box minH={"100vh"} bg="#eee" mt="100px">
        <ClientNavbar/>
        <Box  pt={["40%","40%","20%","18%"]}>
            <Text textAlign={"center"} fontSize={"60px"}>
                Content will be updated soon....
            </Text>
        </Box>
    </Box>
  )
}
