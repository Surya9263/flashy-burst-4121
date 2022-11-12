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
  Flex,
  Image,
} from "@chakra-ui/react";
import Link from 'next/link'
import { MdAdd } from "react-icons/md";
import React from "react";
import Cartitems from "./Cartitems";
export default function DrawerExample({isOpen, onOpen, onClose}:{isOpen:boolean, onOpen:VoidFunction, onClose:VoidFunction}) {
  const btnRef: any = React.useRef();

  // return (
  //   <>
  //     <Box
  //       ref={btnRef}
  //       border="1px solid black"
  //       p="4px 10px 4px 10px"
  //       onClick={onOpen}
  //     >
  //       Cart
  //     </Box>
  //     <Drawer
  //       isOpen={isOpen}
  //       placement="right"
  //       onClose={onClose}
  //       finalFocusRef={btnRef}
  //     >
  //       <DrawerOverlay />
  //       <DrawerContent>
  //         <DrawerCloseButton />
  //         <Link href="/cart">
  //           <DrawerHeader>CART</DrawerHeader>
  //         </Link>

  //         <DrawerBody>

  //         </DrawerBody>

  //         <DrawerFooter>
  //           <Button variant="outline" mr={3} onClick={onClose}>
  //             Continue shopping
  //           </Button>
  //           <Button colorScheme="blue">Go to checkout</Button>
  //         </DrawerFooter>
  //       </DrawerContent>
  //     </Drawer>
  //   </>
  // );

  return(
    <Drawer
        size={"sm"}
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>CART</DrawerHeader>

          <DrawerBody>
            <Cartitems/>
          </DrawerBody>

          <DrawerFooter px={'10'}>
          <Link href={"/cart"}><Button fontSize={"12px"} color={"white"} backgroundColor={"black"} colorScheme={"black"} variant={"outline"} borderRadius={"none"} w={"100%"}>GO TO BASKET</Button></Link>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
  )
}

