import { Box } from '@chakra-ui/react'
import React from 'react'
import { ClientNavbar, Footer, UiImage } from '../../components';
import DrawerExample from '../../components/product/drawer';
import Product from '../../components/product/product';
import { useAppDispatch, useAppSelector } from "../../store/hook";
const productPage = () => {
    const dispatch = useAppDispatch();
  const gproduct = useAppSelector((store) => store.product);
    return (
      <Box>
        <ClientNavbar />
        <Box
          
          w={"97%"}
          display="flex"
          margin={"auto"}
          mt="100px"
          flexDirection="row-reverse"
        >
          <Box><DrawerExample/></Box>
        </Box>
        <Box
          
          w={"85%"}
          display="flex"
          margin={"auto"}
          mt="20px"
          flexWrap={"wrap"}
          gap={"16px"}
        >
          <Product {...gproduct.products} />
        </Box>
        <Footer />
      </Box>
    );
}

export default productPage