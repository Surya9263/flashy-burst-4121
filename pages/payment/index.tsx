import {
  Image,
  Box,
  Flex,
  Text,
  Spacer,
  Input,
  Checkbox,
  Select,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import Cartitems from "../../components/cart/paycart"
import { ClientNavbar, Footer, UiImage } from "../../components";

import  Link  from "next/link"


export default function Payment() {
  return (
    <>
      <ClientNavbar />
      <Box w="75%" m="auto" borderTop={"1px solid grey"} mt="150px" mb="20px"></Box>
      <Flex w="75%" margin={"auto"} columnGap="50px" flexWrap={"wrap"}>
        <Box w={["80%", "55%"]} mt="5px">
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink as={Link} href="/">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink as={Link} href="/cart">
                Cart
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink>Payment</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Box mt="5px" border="1px solid lightgrey">
            <Text fontWeight="semibold" ml="40%">
              Express checkout
            </Text>
            <Flex columnGap="3">
              <Image
                ml="5px"
                w={["100px", "100px", "100px", "150px", "140px"]}
                h={"50px"}
                src="https://tse4.mm.bing.net/th?id=OIP.yNPGB2x2imgUBR0tFfKfrgHaDf&pid=Api&P=0"
                alt="..."
                borderRadius={"8px"}
              />
              <Image
                w={["100px", "100px", "100px", "150px", "150px"]}
                h={"50px"}
                src="https://tse2.mm.bing.net/th?id=OIP.r-s5nlVROPkkrvffGbwVEQHaDt&pid=Api&P=0"
                alt="..."
                borderRadius={"8px"}
              />
              <Image
                w={["100px", "100px", "100px", "150px", "150px"]}
                h={"50px"}
                src="https://tse3.mm.bing.net/th?id=OIP.A-Vh9Dd2avtFsjUtpEspcAHaDi&pid=Api&P=0"
                alt="..."
                borderRadius={"8px"}
              />
              <Image
                w={["100px", "100px", "100px", "150px", "140px"]}
                h={"50px"}
                src="https://a57.foxnews.com/a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2018/09/640/320/1862/1048/paypal-logo-big.jpg?ve=1&tl=1?ve=1&tl=1"
                alt="..."
                borderRadius={"8px"}
              />
            </Flex>
          </Box>
          <Box w="48%" mt="10">
            <hr />
          </Box>
          <Text ml="49%" mt="-3">
            OR
          </Text>
          <Box w="47%" ml="53%" mt="-2">
            <hr />
          </Box>
          <Flex>
            <Box p="4">
              <Text fontWeight="semibold" fontSize="20">
                Contact information
              </Text>
            </Box>
            <Spacer />
            <Box p="4">
              <Text mt="2" fontSize="14">
                {/* Already have an account? <Link href="/signIn"> Log in</Link>{" "} */}
              </Text>
            </Box>
          </Flex>
          <Input placeholder="Email" />
          <Checkbox mt="3"> Email me with news and offers</Checkbox>
          <Text mt="5" fontWeight="semibold" fontSize="20">
            Shipping address
          </Text>
          <Select mt="4" placeholder="Select country/region">
            <option value="option1">USA</option>
            <option value="option2">India</option>
            <option value="option3">UK</option>
          </Select>
          <Flex columnGap="3">
            <Input mt="4" placeholder="First Name" />
            <Input mt="4" placeholder="Last Name" />
          </Flex>
          <Input mt="4" placeholder="Company" />
          <Input mt="4" placeholder="Address" />
          <Input mt="4" placeholder="Apartment,suite,etc." />
          <Flex columnGap="3">
            <Input mt="4" placeholder="City" />
            <Input mt="4" placeholder="State" />
            <Input mt="4" placeholder="ZIP code" />
          </Flex>

          <Input mt="4" placeholder="Phone" />
          <Flex>
            <Box p="4">
              <Link href="/cart">
                <Text fontWeight="semibold" fontSize="20">
                  Return to cart
                </Text>
              </Link>
            </Box>
            <Spacer />
            <Box p="4">
              <Link href="/">
                <Button
                  pt="7"
                  pb="7"
                  pr="5"
                  pl="5"
                  bgColor="black"
                  color="white"
                  onClick={() => alert("order successfully placed")}
                >
                  Continue to shipping
                </Button>
              </Link>
            </Box>
          </Flex>
        </Box>
        <Box w="40%" borderLeft="1px solid lightgrey">
          <Cartitems />
        </Box>
      </Flex>
      <Footer />
    </>
  );
}
