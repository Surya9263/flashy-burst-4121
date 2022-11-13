import { Box } from "@chakra-ui/react";
import React, { useEffect, useState,useContext } from "react";
import { ClientNavbar, Footer, UiImage } from "../../components";
import Cart from "../../components/cart/cart";
import Cartitems from "../../components/cart/Cartitems";
import DrawerExample from "../../components/cart/drawer";
import Link from "next/link";

import { useAppDispatch, useAppSelector } from "../../store/hook";
import { cartContxt } from "../../context/CartCItemContext";
const cartPage = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((store) => store.cart.cartItems);
  const {cartItem} = useContext(cartContxt)
  const [totalAmount,setTotalAmount]=useState(0)
  useEffect(()=>{
    let total=0;
    
    let unorder = cartItems.filter((item)=>{
      return !item.orderplaced
    })
    
    for(let i=0;i<unorder.length;i++){
      let temp=unorder[i].price*unorder[i].prodCount
      total=total+temp;
    }
    setTotalAmount(total)
  },[totalAmount,cartItems])

  const orderPendingItems = cartItems?.filter((item)=>{
    return item.orderplaced===false
   })
  return (
    <Box>
      <ClientNavbar />
      <Box w={"85%"} display="flex" margin={"auto"} mt="200px" gap="20px">
        <Box fontWeight={"semibold"} fontSize={"20px"}>
          CART({cartItem})
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
      <Box
        display="flex"
        margin="auto"
        w="99%"
        flexDirection={"row-reverse"}
        position="fixed"
        bottom="0"
      >
        <Box
          w="20%"
          h="45px"
          pt="7px"
          textAlign={"center"}
          color="white"
          backgroundColor={"black"}
          fontWeight="semibold"
        >
          <Link href="/payment"> CONTINUE</Link>
        </Box>

        <Box w="15%" textAlign={"center"}>
          <Box textAlign={"center"} fontSize="12px" fontWeight={"semibold"}>
            TOTAL ₹ {totalAmount}.00
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
