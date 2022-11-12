import React, { ChangeEvent, MouseEvent, useEffect, useState } from 'react'
import {Box, Button, Container, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex,Image,Input,Link,SimpleGrid,Spacer, Stack, Text, useDisclosure,Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,} from "@chakra-ui/react"
import style from "../search/index.module.css"
import { useAppDispatch, useAppSelector } from '../../store/hook'
import { getAllProduct } from '../../store/product/productSlice'
import { ClientNavbar } from '../../components'
import { CIproduct } from '../../interface/client/product.interface'
import { GetServerSideProps } from 'next'
import axios from 'axios'


const trendData=[{
  id:1,
  tValue:"BLAZER"
},{
  id:2,
  tValue:"HEADBAND"
}]

const SearchPage = ({allProducts}:{allProducts:Array<CIproduct>}) => {
  // console.log(allProducts);
  
  const [isShowTrends,setIsShowTrends]=useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef:any = React.useRef()

  const dispatch = useAppDispatch();
    const gproduct = useAppSelector((store) => store.product);
    // const [displaySize, setDisplaySize] =  useState<string>("0")
    const [products,setProducts]=useState<Array<CIproduct>>([])
    const [value,setValue]=useState<string>("")

let filtered:Array<CIproduct>=[];
const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
  setValue(e.target.value);
  
  // console.log(value);
  
  // setProducts(filtered)
}

useEffect(()=>{
  filtered=allProducts.filter((e)=>{
    // console.log(e.pType.name.includes(value));
    
    if(e.pType.name.includes(value.toUpperCase())){
      return e
    }
  })
  // console.log(filtered);
  
  setProducts(filtered)
},[value])

  return (
    <Box>
      <ClientNavbar/>
      <Box w={"100%"} position={"fixed"} top={"120px"}>
    <Flex style={{fontFamily:'Neue-Helvetica'}} m={{lg:"auto"}} ml={{sm:"4"}} w={{lg:"12%",sm:"5%"}} gap={{sm:"10px"}} justifyContent={{sm:"flex-start"}} >
        <Box><Link><Text fontSize={"13px"}>WOMAN</Text></Link></Box>
        <Spacer/>
        <Box><Link><Text fontSize={"13px"}>MAN</Text></Link></Box>
        <Spacer/>
        <Box><Link><Text fontSize={"13px"}>KIDS</Text></Link></Box>
    </Flex>
    <Flex my={{lg:"16",sm:"10"}} mt={{sm:"3"}} mb={{sm:"16"}} ml={{lg:"56",sm:"4"}} w={{lg:"82%"}}>
        <Input value={value} onChange={handleChange} onInput={()=>setIsShowTrends(false)} onFocus={()=>setIsShowTrends(true)} focusBorderColor='black' className={style.searchInput} placeholder='ENTER SEARCH TERMS' _placeholder={{color:"black"}} borderColor="black" variant="flushed"/>
    </Flex>
    {isShowTrends && value=="" && <Stack w={{lg:"40%"}} ml={{lg:"56",sm:"4"}}>
        <Box><Text fontSize={"13px"} as={"b"}>TRENDS</Text></Box>
        {trendData?.map((el)=><Box key={el.id}><Text onClick={(e)=>{
          setValue(el.tValue)
          }} cursor={"pointer"} fontSize={"13px"}>{el.tValue}</Text></Box>)}
         {/* <Box><Text cursor={"pointer"} fontSize={"13px"}>DRESS</Text></Box> */}
        {/* <Box><Text cursor={"pointer"} fontSize={"13px"}>TOP</Text></Box>
        <Box><Text cursor={"pointer"} fontSize={"13px"}>SKIRT</Text></Box>
        <Box><Text cursor={"pointer"} fontSize={"13px"}>BLAZER</Text></Box> */}
    </Stack>}
    <Box mt={"10"}>
      {
        value.length>0 && <SimpleGrid height={"340px"} overflowY={"scroll"} overflowX={"hidden"}  fontSize={{lg:"11px",sm:"13px"}} px={"6"} gap={"10"} columns={{sm:2,md:5,lg:5}}>
        {products && products.map((e)=><Box key={e._id}>
            <Link href={`http://localhost:3000/search/${e._id}`}><Image src={e.mainImg}/></Link>
            <Flex>
              <Link><Text>{e.name}</Text></Link>
              <Spacer/>
              <Text>₹ {e.price}</Text>
            </Flex>
          </Box>)}        
      </SimpleGrid>
      }
    {/* <SimpleGrid height={"500px"} overflowY={"scroll"} overflowX={"hidden"}  fontSize={{lg:"11px",sm:"13px"}} px={"6"} gap={"10"} columns={{sm:2,md:5,lg:5}}>
      {gproduct.products && gproduct.products.map((e)=><Box key={e._id}>
          <Link href={`http://localhost:3000/search/${e._id}`}><Image src={e.mainImg}/></Link>
          <Flex>
            <Link><Text>{e.name}</Text></Link>
            <Spacer/>
            <Text>₹ {e.price}</Text>
          </Flex>
        </Box>)}        
    </SimpleGrid> */}
    </Box>
    </Box>
    {/* <Flex pr={'6'} direction={'row-reverse'} mb={'10'}><Button variant={"outline"} colorScheme={"whiteAlpha"}  size={"sm"} color={"black"} borderRadius={'none'} ref={btnRef} onClick={onOpen}><Text>FILTERS</Text></Button></Flex> */}
    <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size={{"sm":"full",'lg':"xs"}}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>

          <DrawerBody>
          <Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          COLOUR
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      color
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          SIZE
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel py={'10'} pb={4}>
    {gproduct.products?.map((e)=>e.psize?.map((el)=><Text>{el}</Text>))}
    </AccordionPanel>
  </AccordionItem>
</Accordion>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              CANCEL
            </Button>
            <Button colorScheme='blue'>APPLY</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

export default SearchPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  const url = process.env.BASEURL
 
  const res = await axios.get(`http://localhost:3000/api/product`)
  const allProducts = await res.data
    return {
      props: {
        allProducts
      }
    }
  }