import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Box,Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  DrawerCloseButton, Button, Divider, Flex, HStack, Image, Link, Radio, RadioGroup, Spacer, Stack, Text, VStack, useDisclosure, Input, Show} from "@chakra-ui/react"
import { GetServerSideProps } from 'next';
import { CIproduct } from '../../interface/client/product.interface';
import { ClientNavbar, Footer } from '../../components';
import DrawerExample from '../../components/cart/drawer';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { addToCart } from '../../store/cart/cartSlice';
import  Router  from 'next/router';
import Loginfooter from '../../components/footer/Loginfooter';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
export interface addCartIterface{
  prodId: string; 
  prodCount: number; 
  color: string; 
  size: string; 
  userId: string; 
  price: number
}

const initialState={
  prodId:"" ,
  prodCount:0 ,
  color:"" ,
  size: "",
  userId:"", 
  price: 0
}

const SingleProduct = ({product}:{product:CIproduct}) => {
  // console.log(product);
  const [isShowSupImg,setIsShowSupImg]=useState(false)
  const [prodColor,setProdColor]=useState("")
  const [mainImg,setMainImg]=useState(product.mainImg)
  const [size,setSize]=useState("")
  const [sizeModal,setSizeModal]=useState(false);
  const [supImgNum,setSupImgNum]=useState(0)

  const [reqStatus,setReqStatus]=useState(0)

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  const dispatch=useAppDispatch()
  const auth=useAppSelector((store)=>store.auth)
  const cart=useAppSelector((store)=>store.cart)

  const handleAddToCart=()=>{
    if(!auth.isAuth){
      Router.push("/signin")
    }else{
      dispatch(addToCart({userId:auth?.userId,prodCount:1,prodId:product._id,color:"red",price:Number(product.price),size:"sm"}))
      setReqStatus(1)   
    }
  }

  useEffect(()=>{
    if(reqStatus==1){
      onOpen();
      setTimeout(()=>{
        setReqStatus(0)
      },5000)    
    }
  },[cart])

  // let supImages=product?.supImg || []
  const handleClickLeft=()=>{
    if(product.supImg){
      if(supImgNum===0){
        setSupImgNum(product.supImg?.length-1)
      }else{
        setSupImgNum(num=>num-1)
      }
      setMainImg(product?.supImg[supImgNum].imglink)
    }
  }
// console.log(mainImg);

  const handleClickRight=()=>{
    if(product.supImg){
      if(supImgNum===product.supImg.length-1){
        setSupImgNum(0)
      }else{
        setSupImgNum(num=>num+1)
      }
      setMainImg(product?.supImg[supImgNum].imglink)
    }
  }

  return (
    <>
      <Box height={"100px"}>
        <ClientNavbar/>
      </Box>
    <Flex align={"center"} fontFamily={"Neue-Helvetica"} justify={"center"} gap="25px" direction={["column", "column","row","row"]}>
        <Box w={["100%","100%","15%","15%"]} order={["3","3","0","0"]}>
            <Stack>
                <Box><Text lineHeight={"18px"} fontSize={"13px"} as={"b"}>MATERIALS, CARE AND ORIGIN</Text></Box>
                <Box my={'52'}><Text lineHeight={"16px"} fontSize={"11px"} as={"b"}>MATERIALS</Text></Box>
                <Box><Text lineHeight={"16px"} fontSize={"13px"}>We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products. </Text></Box>
                <Box><Text lineHeight={"16px"} fontSize={"13px"}>The Green to Wear 2.0 standard aims to minimise the environmental impact of textile manufacturing. To that end, we have developed Inditex’s The List programme, which helps guarantee both that production processes are clean and that our </Text></Box>
                <Box><Link><Text textDecoration={"underline"} lineHeight={"16px"} fontSize={"12px"}>View more</Text></Link></Box>
            </Stack>
        </Box>
        <Box w={["100%","100%","30%","30%"]} h={['auto','auto', '550px','550px']} overflow={"hidden"} boxSizing='border-box'>
          <Flex justify={["center","center","initial","initial"]} onMouseOver={()=>{setIsShowSupImg(true)}} onMouseLeave={()=>setIsShowSupImg(false)} gap={4}>
          <Link><Image id='mainImg' transition={'ease-in-out'} height={{sm:"3xl",lg:"xl"}} src={mainImg}/></Link>
          <Button onClick={handleClickLeft} _hover={{backgroundColor:"rgba(77,77,77,0.2)"}} backgroundColor={"rgba(77,77,77,0.2)"} color={"white"} borderRadius={"none"} top={{lg:"350px",sm:"440px"}} left={{sm:"60px",lg:"509px"}} position={"absolute"}> <AiOutlineLeft/> </Button>
          <Button onClick={handleClickRight} _hover={{backgroundColor:"rgba(77,77,77,0.2)"}} backgroundColor={"rgba(77,77,77,0.2)"} color={"white"} borderRadius={"none"} top={{lg:"350px",sm:"440px"}} left={{lg:"845px",sm:"520px"}} position={"absolute"}> <AiOutlineRight/> </Button>
          <Show breakpoint='(min-width: 768px)'>
          <Stack hidden={!isShowSupImg} spacing={'4'}>
          <Box w='40px' h='50px'><Image cursor={"pointer"} onClick={(e)=>setMainImg(e.currentTarget.src)} src={product.mainImg}/></Box>
            {product.supImg?.map((e)=><Box key={e._id} w='40px' h='auto'><Image cursor={"pointer"} onClick={()=>setMainImg(e.imglink)} src={e.imglink}/></Box>)}
        </Stack>
        </Show>
        </Flex>
        </Box>
        <Flex direction={"column"} w={["100%","100%","18%","18%"]} >
          <Box>
            <Text as={'b'} fontSize={"18px"}>{product.name}</Text>
          </Box>
          <Box>
            <Text fontSize={"13px"}>{product.description}</Text>
          </Box>
          <RadioGroup defaultValue='2' py={"4"}>
              <Stack spacing={5} direction='row'>
                <Radio onChange={(e)=>setProdColor(e.target.value)} colorScheme={"purple"} backgroundColor='purple' value='RED'>
                </Radio>
                <Radio onChange={(e)=>setProdColor(e.target.value)} colorScheme={"grey"} backgroundColor='grey' value='GREY'>
                </Radio>
                <Radio onChange={(e)=>setProdColor(e.target.value)} colorScheme={"pink"} backgroundColor='pink' value='PINK'>
                </Radio>
              </Stack>
          </RadioGroup>
          <Text fontSize={"11px"}>{prodColor}</Text>
          <Text fontSize={"11px"}>₹ {product.price}.00</Text>
          <Text color={"grey"} fontSize={"10px"}>MRP incl. of all taxes</Text>
          <Box my={2}  border={"1px solid"} borderTop={"none"}></Box>
          {size==""?<Box>
          <Text onClick={(e)=>setSize(e.currentTarget.innerText)} _hover={{backgroundColor:"rgb(240,240,240)"}} cursor={"pointer"} fontSize={"11px"}>XS</Text>
          <Text onClick={(e)=>setSize(e.currentTarget.innerText)}  _hover={{backgroundColor:"rgb(240,240,240)"}} cursor={"pointer"} my={"2"} fontSize={"11px"}>S</Text>
          <Text onClick={(e)=>setSize(e.currentTarget.innerText)}  _hover={{backgroundColor:"rgb(240,240,240)"}} cursor={"pointer"}   fontSize={"11px"}>M</Text>
          <Text onClick={(e)=>setSize(e.currentTarget.innerText)}  _hover={{backgroundColor:"rgb(240,240,240)"}} cursor={"pointer"} my={"2"} fontSize={"11px"}>L</Text>
          <Text onClick={(e)=>setSize(e.currentTarget.innerText)}  _hover={{backgroundColor:"rgb(240,240,240)"}} cursor={"pointer"} fontSize={"11px"}>XL</Text>
          </Box>:<Box><Text _hover={{backgroundColor:"rgb(240,240,240)"}} cursor={"pointer"} fontSize={"11px"}>{size}</Text></Box>}
          <Box my={2} border={"1px solid"} borderTop={"none"}></Box>
          <Flex py={4} justify={"space-between"}>
            <Text fontSize={"11px"}>FIND YOUR SIZE</Text>
            <Text fontSize={"11px"}>SIZE GUIDE</Text>
          </Flex>
          {size==""?<Button onClick={()=>setSizeModal(true)} fontSize={"12px"} color={"white"} backgroundColor={"black"} colorScheme={"black"} variant={"outline"} borderRadius={"none"} w={"100%"}>ADD TO BAG</Button>:<Button onClick={handleAddToCart} fontSize={"12px"} color={"white"} backgroundColor={"black"} colorScheme={"black"} variant={"outline"} borderRadius={"none"} w={"100%"}>ADD TO BAG</Button>}
          
        </Flex>
      <Modal size={"xs"} closeOnOverlayClick={false} isOpen={sizeModal} onClose={onClose}>
        <ModalOverlay />
        <ModalContent m={"auto"}>
          <ModalHeader fontFamily={"Neue-Helvetica"}>WARNING</ModalHeader>
          <ModalCloseButton />
          <ModalBody fontFamily={"Neue-Helvetica"}>
            <Text fontSize={"13px"}>YOU MUST SELECT A SIZE</Text>
          </ModalBody>

          <ModalFooter>
          <Button onClick={()=>setSizeModal(false)} fontSize={"12px"} color={"white"} backgroundColor={"black"} colorScheme={"black"} variant={"outline"} borderRadius={"none"} w={"100%"}>CLOSE</Button>
            {/* <Button>Cancel</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
      <DrawerExample isOpen={isOpen} onClose={onClose} onOpen={onOpen}/>
    </Flex>
    <Footer/>
    <Loginfooter/>
    </>
  )
}

// export const getServerSideProps = async (context) => {
//   const url = process.env.BASEURL
//   console.log(context.params);
  
//   const res = await axios.get(`${url}${context?.params?.id}`)
//   const product = res.data  
//   return {
//     props: {
//       product,
//     },
//   }
// }
// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const url = process.env.BASEURL
//   console.log(context.params);
  
//   const res:AxiosResponse<CIproduct> = await axios.get(`${url}${context?.params?.id}`)
//   const product = res.data  
//   return {
//     props: {
//       product,
//     },
//   }
// }

export default SingleProduct

export const getServerSideProps: GetServerSideProps = async (context) => {
  const url = process.env.BASEURL
  const res = await axios.get(`${url}/product/${context?.params?.id}`)
  const product = await res.data
    return {
      props: {
        product
      }
    }
  }

