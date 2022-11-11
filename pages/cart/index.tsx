import { Box } from "@chakra-ui/react";
import React from "react";
import { ClientNavbar, Footer, UiImage } from "../../components";
import Cart from "../../components/cart/cart";
import DrawerExample from "../../components/cart/drawer";

import { useAppDispatch, useAppSelector } from "../../store/hook";
const cartPage = () => {
  const dispatch = useAppDispatch();
  const gproduct = useAppSelector((store) => store.product);
  return (
    <Box>
      <ClientNavbar />
      <Box
        border="1px solid black"
        w={"80%"}
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
        <Box><DrawerExample/></Box>
      </Box>
      <Box
        border="1px solid black"
        w={"80%"}
        display="flex"
        margin={"auto"}
        mt="20px"
        flexWrap={"wrap"}
        gap={"16px"}
      >
        <Cart {...gproduct.products} />
      </Box>
      <Footer />
    </Box>
  );
};

export default cartPage;
