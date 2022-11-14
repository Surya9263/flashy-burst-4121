import { Box, Flex, Image,Text,Button } from '@chakra-ui/react'
import Link from 'next/link';
import React from 'react'
import { ClientNavbar } from '../../components'
import { deleteCartItem } from '../../store/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '../../store/hook';

export default function OrderHistory() {
    const cartItems = useAppSelector(store=>store.cart.cartItems);
    const dispatch= useAppDispatch()
    const handleRemove = (id:string)=>{
        dispatch(deleteCartItem(id))
    }
  return (
    <Box>
        <ClientNavbar />
        <Box h={"100px"}>

        </Box>
        <Box px="50px" mt="20px" mb="20px">
        <Link href={"/cart"}>
              <Button colorScheme={"blackAlpha"} bg={"#000"} borderRadius={"0"} px="30px">
                 Go Back to Cart
              </Button>
            </Link>
        </Box>
        <Flex direction={"row"} gap="20px" wrap={"wrap"} justify={"center"}>
            {cartItems.map((item)=>{
                return (
                   <>
                   {item.orderplaced
                   &&
                   <Box w={["80%", "40%", "30%", "20%"]} boxShadow={'lg'} p="10px">
                    <Flex px="20px" gap="10px" w={"100%"}  >
                        <Box w={"150px"}>
                            <Image src={item.prodId.mainImg}/>
                        </Box>
                        <Box w={"150px"}>
                           <Text pt="5px">Price : {item.price} </Text>
                           <Text pt="5px">Quantity : {item.prodCount} </Text>
                           <Text pt="5px">Total price : {item.prodCount*item.price} </Text>
                        </Box>
                   </Flex>

                   <Button px="20px" mt="20px" colorScheme={"blackAlpha"} borderRadius={"0"} onClick={()=>handleRemove(item._id)}> Remove  </Button>
                   </Box>
                   }
                   </>
                )
            })}
        </Flex>
    </Box>
  )
}
