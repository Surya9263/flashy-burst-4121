import { Box,Text,Image,Select } from "@chakra-ui/react"
import Link from "next/link"
import { Iproduct } from "../../interface/product.interface"
export default function Product({name,price,mainImg,_id}:Iproduct){



    return (
      <>
        <Box border="1px solid black">
          <Link href={`/product/${_id}`}>
            <Box border="1px solid black">
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
            border="1px solid black"
            display="flex"
            justifyContent="space-between"
            mt="0px"
          >
            <Link href={`/product/${_id}`}>
              <Box border="1px solid black" fontSize={"12px"}>
                FAUX LEATHER BIKER JACKET
              </Box>
            </Link>
            <Box border="1px solid black" fontSize={"12px"}>
              ₹ 6590.00
            </Box>
          </Box>
        </Box>

        <Box border="1px solid black">
          <Link href={`/product/${_id}`}>
            <Box border="1px solid black">
              <Image
                w={"305px"}
                h={"420px"}
                src="https://static.zara.net/photos///2022/I/0/2/p/3427/300/800/2/w/384/3427300800_6_1_1.jpg?ts=1658819864668"
                alt=".."
              />
            </Box>
          </Link>
          <Box textAlign={"center"}>+</Box>
          <Box
            border="1px solid black"
            display="flex"
            justifyContent="space-between"
            mt="20px"
          >
            <Link href={`/product/${_id}`}>
              <Box border="1px solid black" fontSize={"12px"}>
                FAUX LEATHER BIKER JACKET
              </Box>
            </Link>
            <Box border="1px solid black" fontSize={"12px"}>
              ₹ 6590.00
            </Box>
          </Box>
        </Box>
        <Box border="1px solid black">
          <Link href={`/product/${_id}`}>
            <Box border="1px solid black">
              <Image
                w={"305px"}
                h={"420px"}
                src="https://static.zara.net/photos///2022/I/0/2/p/3427/300/800/2/w/384/3427300800_6_1_1.jpg?ts=1658819864668"
                alt=".."
              />
            </Box>
          </Link>
          <Box textAlign={"center"}>+</Box>
          <Box
            border="1px solid black"
            display="flex"
            justifyContent="space-between"
            mt="20px"
          >
            <Link href={`/product/${_id}`}>
              <Box border="1px solid black" fontSize={"12px"}>
                FAUX LEATHER BIKER JACKET
              </Box>
            </Link>
            <Box border="1px solid black" fontSize={"12px"}>
              ₹ 6590.00
            </Box>
          </Box>
        </Box>
        <Box border="1px solid black">
          <Link href={`/product/${_id}`}>
            <Box border="1px solid black">
              <Image
                w={"305px"}
                h={"420px"}
                src="https://static.zara.net/photos///2022/I/0/2/p/3427/300/800/2/w/384/3427300800_6_1_1.jpg?ts=1658819864668"
                alt=".."
              />
            </Box>
          </Link>
          <Box textAlign={"center"}>+</Box>
          <Box
            border="1px solid black"
            display="flex"
            justifyContent="space-between"
            mt="20px"
          >
            <Link href={`/product/${_id}`}>
              <Box border="1px solid black" fontSize={"12px"}>
                FAUX LEATHER BIKER JACKET
              </Box>
            </Link>
            <Box border="1px solid black" fontSize={"12px"}>
              ₹ 6590.00
            </Box>
          </Box>
        </Box>
        <Box border="1px solid black">
          <Link href={`/product/${_id}`}>
            <Box border="1px solid black">
              <Image
                w={"305px"}
                h={"420px"}
                src="https://static.zara.net/photos///2022/I/0/2/p/3427/300/800/2/w/384/3427300800_6_1_1.jpg?ts=1658819864668"
                alt=".."
              />
            </Box>
          </Link>
          <Box textAlign={"center"}>+</Box>
          <Box
            border="1px solid black"
            display="flex"
            justifyContent="space-between"
            mt="20px"
          >
            <Link href={`/product/${_id}`}>
              <Box border="1px solid black" fontSize={"12px"}>
                FAUX LEATHER BIKER JACKET
              </Box>
            </Link>
            <Box border="1px solid black" fontSize={"12px"}>
              ₹ 6590.00
            </Box>
          </Box>
        </Box>
      </>
    );
}
