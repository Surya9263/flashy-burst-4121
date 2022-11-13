import React, { ChangeEvent, useEffect, useState } from 'react'
import {Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex,Image,Input,SimpleGrid,Spacer, Stack, Text, useDisclosure,Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  CloseButton,} from "@chakra-ui/react"
import style from "../search/index.module.css"
import { useAppDispatch, useAppSelector } from '../../store/hook'
// import { getAllProduct } from '../../store/product/productSlice'
import { ClientNavbar, Footer } from '../../components'
import { CIproduct } from '../../interface/client/product.interface'
import { GetServerSideProps } from 'next'
import axios from 'axios'
import Link from 'next/link'
import Loginfooter from '../../components/footer/Loginfooter'


const trendData=[
{
  id:1,
  tValue:"BLAZER",
  type:"WOMAN"
},
{
  id:2,
  tValue:"HEADBAND",
  type:"WOMAN"
},
{
  id:3,
  tValue:"DRESS",
  type:"WOMAN"
},
{
  id:4,
  tValue:"SHIRT",
  type:"WOMAN"
},
{
  id:5,
  tValue:"Hoodie",
  type:"MAN"
},
{
  id:6,
  tValue:"shirt",
  type:"MAN"
},
{
  id:7,
  tValue:"sweatshirt",
  type:"MAN"
},
{
  id:8,
  tValue:"blazer",
  type:"MAN"
},
{
  id:9,
  tValue:"jacket",
  type:"KIDS"
},
{
  id:10,
  tValue:"DRESS",
  type:"KIDS"
},
{
  id:11,
  tValue:"jumpsuit",
  type:"KIDS"
},
]

const types=["WOMAN","MAN","KIDS"]

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
    const [currCat,setCurrCat]=useState("WOMAN")

let filtered:Array<CIproduct>=[];
const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
  setValue(e.target.value);
  
  // console.log(value);
  
  // setProducts(filtered)
}

useEffect(()=>{
  filtered=allProducts.filter((e)=>{
    // console.log(e.pType.name.includes(value));
    
    if(e.pType.name.toUpperCase().includes(value.toUpperCase()) && e.category.name===currCat){
      return e
    }
  })
  // console.log(filtered);
  
  setProducts(filtered)
},[value])

  return (
    <Box>
      <ClientNavbar/>
      <Box w={"100%"} position={"relative"} top={"120px"}>
    <Flex style={{fontFamily:'Neue-Helvetica'}} m={{lg:"auto"}} ml={{sm:"4"}} w={{lg:"12%",sm:"5%"}} gap={{sm:"10px"}} justifyContent={{sm:"flex-start"}} >
      {types?.map((el)=><Box key={el}><Text style={el===currCat?{fontWeight:"bold"}:{fontWeight:"normal"}} cursor={"pointer"}  onClick={(e)=>{
        setCurrCat(e.currentTarget.innerText)
        }} fontSize={"13px"}>{el}</Text></Box>)}
    </Flex>
    <Flex my={{lg:"16",sm:"10"}} mt={{sm:"3"}} mb={{sm:"16"}} ml={{lg:"56",sm:"4"}} w={{lg:"82%"}}>
        <Input value={value} onChange={handleChange} onInput={()=>setIsShowTrends(false)} onFocus={()=>setIsShowTrends(true)} focusBorderColor='black' className={style.searchInput} placeholder='ENTER SEARCH TERMS' _placeholder={{color:"black"}} borderColor="black" variant="flushed"/>
        {value!==""?<CloseButton onClick={()=>setValue("")}/>:<></>}
    </Flex>
    {isShowTrends && value=="" && <Stack w={{lg:"40%"}} ml={{lg:"56",sm:"4"}}>
        <Box><Text fontSize={"13px"} as={"b"}>TRENDS</Text></Box>
        {trendData?.map((el)=>{
          if(el.type===currCat){
            return(
              <Box key={el.id}><Text onClick={(e)=>{
                
              setValue(el.tValue)
              }} cursor={"pointer"} fontSize={"13px"}>{el.tValue.toUpperCase()}</Text></Box>
              )
          }
          })
        }
    </Stack>}
    <Box mt={"10"}>
      {
        value.length>0 && <SimpleGrid height={"450px"} overflowY={"scroll"} overflowX={"hidden"}  fontSize={{lg:"11px",sm:"13px"}} px={"6"} gap={"10"} columns={{sm:2,md:5,lg:5}}>
        {products && products.map((e)=><Box key={e._id}>
            <Link href={`/search/${e._id}`}><Image src={e.mainImg}/></Link>
            <Flex>
              <Link href={`/search/${e._id}`}><Text>{e.name}</Text></Link>
              <Spacer/>
              <Text>₹ {e.price}</Text>
            </Flex>
          </Box>)}        
      </SimpleGrid>
      }
    </Box>
    </Box>
    {/* <Drawer
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
      </Drawer> */}
      <Footer/>
      <Loginfooter/>
    </Box>
  )
}

export default SearchPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  const url = process.env.BASEURL
 
  const res = await axios.get(`${url}/product`)
  const allProducts = await res.data
    return {
      props: {
        allProducts
      }
    }
  }