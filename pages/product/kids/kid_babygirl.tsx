import { Box } from '@chakra-ui/react'
import axios from 'axios';
import { GetServerSideProps } from 'next';
import React, { useEffect, useState } from 'react'
import { ClientNavbar, Footer, UiImage } from '../../../components';
import { FilterBar, ProductComponent, Slider } from '../../../components/client';

import { IsubCategory } from '../../../interface/client/category.interface';
import { CIproduct } from '../../../interface/client/product.interface';
import { useAppDispatch, useAppSelector } from "../../../store/hook";

const KidBabyGirl = ({subcat}:{subcat:IsubCategory}) => {


 
    const [displaySize, setDisplaySize] =  useState<string>("0")
    const products = subcat?.products as Array<CIproduct>
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
          <ProductComponent screenSize={displaySize} products={products} path={"/product/"}/>
        </Box>
        <Footer />
      </Box>
    );
}

export default KidBabyGirl


export const getServerSideProps:GetServerSideProps = async (context) => {
  const url = process.env.BASEURL
 
  const res = await axios.get(`${url}/subcategory/636c892072c59b128b5da060`)
  const subcat = await res.data
    return {
      props: {
        subcat
      }
    }
  }