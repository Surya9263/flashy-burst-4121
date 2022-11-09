import { Flex,Box } from '@chakra-ui/react'
import React from 'react'
import { AdminNav } from '../../../components'

export default function ProductP() {
  return (
    <div>
      <Flex>
        <Box w={["250px","250px","20%","20%"]}>     
                  <AdminNav/>
        </Box>

      </Flex>
    </div>
  )
}
