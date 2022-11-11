import { Box,Text,Image,Select } from "@chakra-ui/react"
import Link from "next/link"
import { Iproduct } from "../../interface/product.interface"
export default function Product({name,price,mainImg,_id}:Iproduct){



    return (
      <>
        <Box >
          <Link href={`/product/${_id}`}>
            <Box >
              <Image
                w={"305px"}
                h={"420px"}
                src="https://static.zara.net/photos///2022/I/0/2/p/3427/300/800/2/w/384/3427300800_6_1_1.jpg?ts=1658819864668"
                alt=".."
              />
            </Box>
          </Link>
          {/* <Box ml="40%" w={"5px"}>
            <Select placeholder="" >
              <option value="option1">Sm</option>
              <option value="option2">M</option>
              <option value="option3">L</option>
              <option value="option1">XL</option>
              <option value="option2">XXL</option>
              <option value="option3">XXL</option>
            </Select>
          </Box> */}
          <Box
            
            display="flex"
            justifyContent="space-between"
            mt="0px"
          >
            <Link href={`/product/${_id}`}>
              <Box  fontSize={"12px"}>
                FAUX LEATHER BIKER JACKET
              </Box>
            </Link>
            <Box  fontSize={"12px"}>
              ₹ 6590.00
            </Box>
          </Box>
        </Box>

        
      </>
    );
}
