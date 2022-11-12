import { Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { ClientNavbar, Footer, UiImage } from '../../components';
import { FilterBar, ProductComponent, Slider } from '../../components/client';
import TempNav from '../../components/client/nav/TempNav';



import { useAppDispatch, useAppSelector } from "../../store/hook";
import { getAllProduct } from '../../store/product/productSlice';
const WomenShoes = () => {

    const dispatch = useAppDispatch();
    const gproduct = useAppSelector((store) => store.product);
    const [displaySize, setDisplaySize] =  useState<string>("0")

useEffect(()=>{
    if(gproduct.products.length===0){
        dispatch(getAllProduct("takeitnow"))   
    }
},[])

    return (
      <Box border={"1px solid red"} w="100%">
        <ClientNavbar />
        
        <Box w={"97%"} display="flex" margin={"auto"} mt="100px" flexDirection="row-reverse">
          
        </Box>
        <Box position={"relative"} minH={["100px", "100px", "50px", "50px"]} w={"100%"}>
             <Slider setDisplaySize={setDisplaySize}/>
            <FilterBar/>
        </Box>
        <Box  w={"100%"} display="flex"   flexWrap={"wrap"} >
          <ProductComponent screenSize={displaySize} products={gproduct.products} path={"/product/"}/>
        </Box>
        <Footer />
      </Box>
    );
}

export default WomenShoes