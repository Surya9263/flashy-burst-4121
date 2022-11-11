import { Box, Text, Image, Select } from "@chakra-ui/react";
import Link from "next/link";
import { Iproduct } from "../../interface/product.interface";
import Count from "./count";
export default function Cart({ name, price, mainImg, _id }: Iproduct) {
  return (
    <>
      <Box>
        <Box  fontSize={"12px"}  mb="10px" fontWeight="semibold">
          FAUX LEATHER BIKER JACKET
        </Box>
        <Box  display="flex" gap="4">
          <Box >
            <Image
              w={"305px"}
              h={"480px"}
              src="https://static.zara.net/photos///2022/I/0/2/p/3427/300/800/2/w/384/3427300800_6_1_1.jpg?ts=1658819864668"
              alt=".."
            />
          </Box>

          <Box >
            <Box  fontSize={"12px"} color="grey">
              REF 277906/01
            </Box>
            <Box
              
              fontSize={"12px"}
              color="grey"
              mt="12%"
            >
              BLACK
            </Box>
            <Box
              
              fontSize={"12px"}
              color="grey"
              mt="12%"
            >
              SIZE
            </Box>
            <Box
              
              fontSize={"12px"}
              color="grey"
              mt="12%"
            >
              <Count/>
            </Box>
            <Box
              
              fontSize={"12px"}
              color="grey"
              mt="205%"
            >
              ₹ 6590.00
            </Box>

            <Box
              
              fontSize={"12px"}
              color="grey"
              mt="205%"
             // onClick={()=>}
            >
              DELETE
            </Box>
          </Box>
        </Box>
      </Box>
      
        
    </>
  );
}
