import { Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { ClientNavbar, Footer, UiImage } from '../../components';
import { FilterBar, ProductComponent, Slider } from '../../components/client';



import { useAppDispatch, useAppSelector } from "../../store/hook";
const productPage = () => {

    const dispatch = useAppDispatch();
    const gproduct = useAppSelector((store) => store.product);
    const [displaySize, setDisplaySize] =  useState<string>("0")

    useEffect(()=>{
        console.log(displaySize);
        
    },[displaySize])
    return (
      <Box>
        <ClientNavbar />
        
        <Box w={"97%"} display="flex" margin={"auto"} mt="100px" flexDirection="row-reverse">
          
        </Box>
        <Box position={"relative"} minH={["200px", "200px", "100px", "100px"]}>
            <Slider setDisplaySize={setDisplaySize}/>
            <FilterBar/>
        </Box>
        <Box border="1px solid red" w={"100%"} display="flex"  mt="20px" flexWrap={"wrap"} >
          {/* <ProductComponent screenSize={displaySize}/> */}
        </Box>
        <Footer />
      </Box>
    );
}

export default productPage