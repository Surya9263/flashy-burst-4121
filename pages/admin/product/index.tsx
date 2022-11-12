import { Flex, Box, Input, FormLabel, Button,Select, Text } from "@chakra-ui/react";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Addproduct, AdminHeader, AdminNav, AddProductType, AddNewImage, UpdateProductIntData, UpdateProduct} from '../../../components'
import { useAppDispatch, useAppSelector } from "../../../store/hook";
//icons
import {BsFillTrashFill, BsPencilSquare} from "react-icons/bs"
import {FiSave} from 'react-icons/fi'
import {MdOutlineCancel} from 'react-icons/md'
import {GrDocumentUpdate} from 'react-icons/gr'

import {
  addProduct,
  deleteProduct,
  getAllProduct,
} from "../../../store/product/productSlice";
import Head from "next/head";
import { addProdType, getAllProdType } from "../../../store/productType/productTypeSclie";
import { IaddProduct } from "../../../interface/client/product.interface";

const initialState:IaddProduct = {
  category:"",subCategory:"", pType:"", name:"",price:"", mainImg:"", discription:""
}


export default function ProductP() {
  const dispatch = useAppDispatch();
  const category = useAppSelector((store) => store.category);
  const subcategory= useAppSelector((store) => store.subcategory)
  const ptypes = useAppSelector((store) => store.productType)
  const prodcoll = useAppSelector((store) => store.product)
  const [catIndex, setCatIndex] =  useState<number>(-1)
  // state to maintaine producttype data
  const [status, setStatus]  = useState(false);
  const [product, setProduct] = useState(initialState);

  const handleProductyDelete = (id:string)=>{
      dispatch(deleteProduct(id))
  }

  const handleProductyupdate = (id:string)=>{
    setStatus(true)
  }
  return (
    <Box>
      <Head>
        <title> Take it Now Admin Dashboard </title>
      </Head>
      <AdminHeader />

      <Flex  px={["15px"]} direction={["column", "column","row","row"]}>
        <Box w={["100%","100%","20%","20%"]}>
          <AdminNav />
        </Box>

        <Flex  w={["100%", "100%","80%","80%"]} direction={["column", "column","row","row"]} gap={"20px"}>

        <Box  w={["100%", "100%", "50%","40%"]} border={"1px solid #c95"} px="10px" py="10px" my="20px">
          <Addproduct categories={category.categories} catIndex={catIndex} setCatIndex={setCatIndex} productTypes={ptypes.productTypes}/>
        </Box>

          <Box w={["100%", "100%","60%","60%"]}>
            <Box border={"1px solid #ccc"} px="20px" py="10px"> 
              <AddProductType categories={category.categories}/>
            </Box>

            <Box border={"1px solid #ccc"} px="20px" py="10px" mt="10px">
            <AddNewImage categories={category.categories} products={prodcoll.products}/>
            </Box>
           
        </Box>
        </Flex>
      </Flex>

      <Flex  px={["15px"]} direction={["column", "column","row","row"]}>
            <Box   w={["100%","100%", "50%", "50%"]}>
                <UpdateProductIntData categories={category.categories} products={prodcoll.products}/>
            </Box>
           
      </Flex>

      <Flex gap={"10px"} direction="column" mt="30px">

      <Flex  border="1px solid #ccc" px="20px">
                   <Box w="20%">
                    Product ID
                    </Box>
                    <Box w="20%">
                    Product Name
                    </Box>

                    <Box w="20%">
                    Category Name
                    </Box>

                    <Box w="20%">
                     Subcategory Name
                    </Box>

                    <Box w="20%">
                    Product Type
                    </Box>

                    <Box>
                      Delete
                    </Box>
                    <Box>
                      Edit
                    </Box>


              </Flex>

          {prodcoll?.products.map((product)=>{
            return (
              <Flex key={product._id} border="1px solid #ccc" px="20px">
                   <Box w="20%">
                      {product._id}
                    </Box>
                    <Box w="20%">
                      {product.name}
                    </Box>

                    <Box w="20%">
                      {product.category?.name}
                    </Box>

                    <Box w="20%">
                      {product.subCategory?.name}
                    </Box>

                    <Box w="20%">
                      {product?.pType?.name}
                    </Box>

                    <Button colorScheme={"orange"} onClick={()=>handleProductyDelete(product._id)}>
                      <BsFillTrashFill/>
                    </Button>
                    <Button colorScheme={"green"} onClick={()=>handleProductyupdate(product._id)}>
                      <BsPencilSquare/>
                    </Button>

              </Flex>
            )
          })}
      </Flex>
    </Box>
  );
}
