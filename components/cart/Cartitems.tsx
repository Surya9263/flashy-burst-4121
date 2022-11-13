import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { deleteCartItem, getUserCartItems, updateCartItemCount } from '../../store/cart/cartSlice'
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
useEffect(()=>{

},[cartItems])

    const handleProdCount=(id:string,count:number)=>{
      dispatch(updateCartItemCount({id:id,count:count}))
    }

const handleDelete=(id:string)=>{
  dispatch(deleteCartItem(id))
}

  return (
    <Box>
        {cartItems.cartItems?.map((e)=><Box my={"10"} fontSize={"11px"}>
             {!e.orderplaced 
             &&
             <>
             <Text as={"b"}>{e.prodId?.name}</Text>
             <Flex gap={"20px"} mt={'2'}>
               <Box w={"60%"}>
                 <Image src={e.prodId?.mainImg}/>
               </Box>
               <Box color={"grey"} w={"25%"}>
                 <Text mb={"4"}>BLACK</Text>
                 <Text mb={'4'}>M</Text>
                 <Flex gap={"5px"} mb={'20'} align={"center"}>
                 <Button onClick={()=>handleProdCount(e._id,e.prodCount-1)} disabled={e.prodCount===1} backgroundColor={"white"}>-</Button>
                 <Text>{e.prodCount}</Text>
                 <Button onClick={()=>handleProdCount(e._id,e.prodCount+1)} backgroundColor={"white"}>+</Button>
                 </Flex>
                 <Text>₹ {e.price}.00</Text>
                 
                 <Text mt={"2"}>TOTAL : ₹ {e.price*e.prodCount}.00</Text>
                 <Button onClick={()=>handleDelete(e._id)} mt={"24"} variant={"link"}><Text fontSize={"11px"} color={"gray"}>DELETE</Text></Button>
               </Box>
             </Flex>
             </>
             }
    </Box>)}
    </Box>
  )
}

export default Cartitems