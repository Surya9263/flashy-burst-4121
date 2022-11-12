import { Box } from "@chakra-ui/react";
import React from "react";
import { ClientNavbar, Footer, UiImage } from "../../components";
import Cart from "../../components/cart/cart";
import Cartitems from "../../components/cart/Cartitems";
import DrawerExample from "../../components/cart/drawer";

import { useAppDispatch, useAppSelector } from "../../store/hook";
const cartPage = () => {
  const dispatch = useAppDispatch();
  const gproduct = useAppSelector((store) => store.product);
  return (
    <Box>
      <ClientNavbar />
      <Box
        
        w={"85%"}
        display="flex"
        margin={"auto"}
        mt="200px"
        gap="20px"
      >
        <Box fontWeight={"semibold"} fontSize={"20px"}>
          CART
        </Box>
        <Box fontSize={"20px"} color="grey">
          FAVOURITES ⍌
        </Box>
        <Box>
        </Box>
      </Box>
      <Box
        
        w={"85%"}
        display="flex"
        margin={"auto"}
        mt="20px"
        flexWrap={"wrap"}
        gap={"32px"}
      >
        <Cartitems/>
      </Box>
      <Box display="flex" margin="auto" w="99%" flexDirection={"row-reverse"} position= "fixed"
  bottom= "0">
        <Box
          w="20%"
          h="45px"
          pt="7px"
          
          textAlign={"center"}
          color="white"
          backgroundColor={"black"}
          fontWeight="semibold"
        >
          CONTINUE
        </Box>
        <Box w="15%"  textAlign={"center"}>
          <Box textAlign={"center"} fontSize="12px" fontWeight={"semibold"}>
            TOTAL 2900.00
          </Box>
          <Box textAlign={"center"} fontSize="9px">
            INCLUDING GST
          </Box>
          <Box textAlign={"center"} fontSize="9px">
            * EXCL SHIPPING COST
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default cartPage;
