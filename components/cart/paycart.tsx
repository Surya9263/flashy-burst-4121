import { Box, Button,Spacer,Input, Flex, Image, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import {
  deleteCartItem,
  getUserCartItems,
  updateCartItemCount,
} from "../../store/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "../../store/hook";

const Cartitems = () => {
  const cartItems = useAppSelector((store) => store.cart);
  const auth = useAppSelector((store) => store.auth);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (auth.isAuth) {
      dispatch(getUserCartItems(auth.userId));
    }
  }, [auth]);
  useEffect(() => {
    console.log(cartItems.cartItems);
  }, [cartItems]);
  
  function calculateTotal() {
    return cartItems.cartItems?.reduce((sum, elem) => sum + elem.price, 0);
  }
  return (
    <Box>
      <Box ml="5">
        <Box mt="7px"></Box>
        {cartItems.cartItems?.map((e) => (
          <Box display="flex" justifyContent="space-between" mt="20px">
            <Box display="flex">
              <Box color="mineralgreen">
                <Image h="50px" w="50px" src={e.prodId?.mainImg} alt="..." />
              </Box>
              <Box w="200px" color="mineralgreen">
                <Text fontSize="15" fontWeight="semibold">
                  {e.prodId?.name}
                </Text>
                <Text fontSize="10">Black</Text>
              </Box>
            </Box>
            <Box>{e.prodCount}</Box>
            <Box color="mineralgreen">₹{e.price}</Box>
          </Box>
        ))}
        <Box mt="10px">
          <Box mt="5"></Box>
          <hr />
        </Box>
        <Flex columnGap="3">
          <Input mt="4" placeholder="Giftcards or discount code" />
          <Input mb="5" w="150px" mt="4" placeholder="Apply" />
        </Flex>
        <hr />
        <Flex>
          <Box p="4">
            <Text>Subtotal</Text>
          </Box>
          <Spacer />
          <Box p="4">
            <text> ₹ {calculateTotal()}.00</text>
          </Box>
        </Flex>
        <Flex>
          <Box p="4">
            <Text>Shipping charge</Text>
          </Box>
          <Spacer />
          <Box p="4">
            <Text>$ 2.00</Text>
          </Box>
        </Flex>
        <hr />
        <Flex>
          <Box p="4">
            <Text>Total</Text>
          </Box>
          <Spacer />
          <Box p="4">
            <Text fontWeight="semibold" fontSize="20">
              ₹ {calculateTotal() + 2}.00
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Cartitems;
