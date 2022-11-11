import {
  Drawer,
  Box,
  Text,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
 
  DrawerCloseButton,
  Button,
  
  useDisclosure,
} from "@chakra-ui/react";
import Link from 'next/link'
import { MdAdd } from "react-icons/md";
import React from "react";
export default function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef: any = React.useRef();

  return (
    <>
      <Box
        ref={btnRef}
        border="1px solid black"
        p="4px 10px 4px 10px"
        onClick={onOpen}
      >
        Cart
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <Link href="/cart">
            <DrawerHeader>CART</DrawerHeader>
          </Link>

          <DrawerBody>

          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Continue shopping
            </Button>
            <Button colorScheme="blue">Go to checkout</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

