import { Box } from '@chakra-ui/react'
import axios from 'axios';
import { GetServerSideProps } from 'next';
import React, { useEffect, useState } from 'react'
import { ClientNavbar, Footer, UiImage } from '../../components';
import { FilterBar, ProductComponent, Slider } from '../../components/client';
import TempNav from '../../components/client/nav/TempNav';
import { IsubCategory } from '../../interface/client/category.interface';
import { CIproduct } from '../../interface/client/product.interface';



import { useAppDispatch, useAppSelector } from "../../store/hook";
import { getAllProduct } from '../../store/product/productSlice';
const WomenNew = ({subcat}:{subcat:IsubCategory}) => {

    const dispatch = useAppDispatch();
    const gproduct = useAppSelector((store) => store.product);
    const [displaySize, setDisplaySize] =  useState<string>("0")
    
    const products = subcat?.products as Array<CIproduct>

    return (
      <Box w="100%">
        <ClientNavbar />
        
        <Box w={"97%"} display="flex" margin={"auto"} mt="100px" flexDirection="row-reverse">
          
        </Box>
        <Box position={"relative"} minH={["100px", "100px", "50px", "50px"]} w={"100%"}>
             <Slider setDisplaySize={setDisplaySize}/>
            <FilterBar/>
        </Box>
        <Box  w={"100%"} display="flex"   flexWrap={"wrap"} >
          <ProductComponent screenSize={displaySize} products={products} path={"/product/"}/>
        </Box>
        <Footer />
      </Box>
    );
}

export default WomenNew


export const getServerSideProps:GetServerSideProps = async (context) => {
  const url = process.env.BASEURL
 
  const res = await axios.get(`${url}/subcategory/636c7f6d411489f3872f3601`)
  const subcat = await res.data
    return {
      props: {
        subcat
      }
    }
  }