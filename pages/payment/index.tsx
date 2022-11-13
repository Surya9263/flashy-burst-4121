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
  Alert,
  AlertIcon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import Cartitems from "../../components/cart/paycart"
import { ClientNavbar, Footer, UiImage } from "../../components";

import  Link  from "next/link"
import { useState } from "react";
import  Router  from "next/router";


export default function Payment() {

  const [successAlert,setSuccessAlert]=useState(false)
  const { onClose } = useDisclosure()
  const handleClick=()=>{
    setSuccessAlert(true)
    // setTimeout(()=>{
    //   Router.push("/")
    // },2000)
  }
  return (
    <>
      <ClientNavbar />
      <Box w="75%" m="auto" borderTop={"1px solid grey"} mt="150px" mb="20px"></Box>
      <Box w={"75%"}>
      {successAlert && <Alert status='success'>
    <AlertIcon />
    ORDER PLACED SUCCESSFULLY
  </Alert>}
  </Box>
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
          <Flex>
            <Box mt="10px" mb="10px">
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
              
                <Button
                  pt="7"
                  pb="7"
                  pr="5"
                  pl="5"
                  bgColor="black"
                  color="white"
                  onClick={handleClick}
                >
                  PLACE ORDER
                </Button>
              
            </Box>
          </Flex>
        </Box>
        <Box w="40%" borderLeft="1px solid lightgrey">
          <Cartitems />
        </Box>
      </Flex>
      <Modal size={"xs"} isOpen={successAlert} onClose={onClose}>
        <ModalOverlay />
        <ModalContent m={"auto"}>
          <ModalHeader fontFamily={"Neue-Helvetica"}>SUCCESS!</ModalHeader>
          <ModalCloseButton />
          <ModalBody
           fontFamily={"Neue-Helvetica"}>
            <Text fontSize={"13px"}>ORDER PLACED SUCCESSFULLY</Text>
          </ModalBody>

          <ModalFooter>
          <Button onClick={()=>{
            setSuccessAlert(false)
            Router.push("/")
            }} fontSize={"12px"} color={"white"} backgroundColor={"black"} colorScheme={"black"} variant={"outline"} borderRadius={"none"} w={"100%"}>GO TO HOME</Button>
            {/* <Button>Cancel</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Footer />
    </>
  );
}
