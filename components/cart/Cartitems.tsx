import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { getUserCartItems } from '../../store/cart/cartSlice'
import { useAppDispatch, useAppSelector } from '../../store/hook'


const Cartitems = () => {
    const cartItems=useAppSelector((store)=>store.cart)
    const auth=useAppSelector((store)=>store.auth)
    const dispatch=useAppDispatch()
    useEffect(()=>{
      if(auth.isAuth){
        dispatch(getUserCartItems(auth.userId))
      }
    },[auth])

  return (
    <Box>
        {cartItems.cartItems?.map((e)=><Box pl={'4'} fontSize={"11px"}>
              <Text as={"b"}>{e.prodId?.name}</Text>
              <Flex gap={"20px"} mt={'6'}>
                <Box w={"60%"}>
                  <Image src={e.prodId?.mainImg}/>
                </Box>
                <Box color={"grey"} w={"20%"}>
                  <Text mb={"4"}>BLACK</Text>
                  <Text mb={'24'}>M</Text>
                  <Text>₹ {e.price}.00</Text>
                </Box>
              </Flex>
    </Box>)}
    </Box>
  )
}

export default Cartitems