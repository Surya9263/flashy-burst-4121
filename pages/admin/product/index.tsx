import { Flex, Box, Input, FormLabel, Button,Select, Text } from "@chakra-ui/react";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { AdminNav } from '../../../components'
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import {
  addProduct,
  deleteProduct,
  getAllProduct,
} from "../../../store/product/productSlice";
import Head from "next/head";
export default function ProductP() {
  const dispatch = useAppDispatch();
  const category = useAppSelector((store) => store.category);
  const subcategory= useAppSelector((store) => store.subcategory)
  const gproduct = useAppSelector((store) => store.product)
  const [product, setProduct] = useState({
    name: "",
    price: "",
    mainImg: "",
    description: "",
    color: "",
    subCategory: "",
    category:"",
    supImg:"",
    pType:"",
    pSize:""
  });

  const handleProUpdate = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };   

  const handleAddProduct = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
      await dispatch(addProduct(product));
      console.log(product);
    
  };

  const handleDel = (id: string) => {
     dispatch(deleteProduct(id));
  };
  
  
  
  
  return (
    <Box>
      <Head>
        <title> Take it Now Admin Dashboard </title>
      </Head>

      <Flex px={["15px"]}>
        <Box w={["250px", "250px", "20%", "20%"]}>
          <AdminNav />
        </Box>
        <Box w="45%">
          <Box py="10px" fontWeight="700">
            Add New Product{" "}
          </Box>

          <form onSubmit={handleAddProduct}>
            <Flex direction="column" gap="10px">
              <Select
                onChange={handleProUpdate}
                name="category"
                placeholder="select category"
              >
                {category.categories.map((category) => {
                  return (
                    <option key={category._id} value={category._id}>
                      {" "}
                      {category.name}{" "}
                    </option>
                  );
                })}
              </Select>
              <Select
                onChange={handleProUpdate}
                name="subCategory"
                placeholder="select subcategory"
              >
                {subcategory.subcategories.map((category) => {
                  return (
                    <option key={category._id} value={category._id}>
                      {" "}
                      {category.name}{" "}
                    </option>
                  );
                })}
              </Select>
              <Input
                colorScheme={"twitter"}
                placeholder="name of product"
                variant="outline"
                border="1px solid #c19"
                onChange={handleProUpdate}
                type={"text"}
                name="name"
                value={product.name}
              />
              <Input
                colorScheme={"twitter"}
                variant="outline"
                placeholder="price of product"
                border="1px solid #c19"
                onChange={handleProUpdate}
                type={"text"}
                name="price"
                value={product.price}
              />
              <Input
                colorScheme={"twitter"}
                variant="outline"
                placeholder="image of product"
                border="1px solid #c19"
                onChange={handleProUpdate}
                type={"text"}
                name="mainImg"
                value={product.mainImg}
              />
              <Input
                colorScheme={"twitter"}
                variant="outline"
                placeholder="supportive image of product"
                border="1px solid #c19"
                onChange={handleProUpdate}
                type={"text"}
                name="supImg"
                value={product.supImg}
              />
              <Input
                colorScheme={"twitter"}
                variant="outline"
                placeholder="description of product"
                border="1px solid #c19"
                onChange={handleProUpdate}
                type={"text"}
                name="description"
                value={product.description}
              />
              <Input
                colorScheme={"twitter"}
                variant="outline"
                placeholder="color of product"
                border="1px solid #c19"
                onChange={handleProUpdate}
                type={"text"}
                name="color"
                value={product.color}
              />
              <Input
                colorScheme={"twitter"}
                variant="outline"
                placeholder="type of product"
                border="1px solid #c19"
                onChange={handleProUpdate}
                type={"text"}
                name="pType"
                value={product.pType}
              />
              <Input
                colorScheme={"twitter"}
                variant="outline"
                placeholder="size of product"
                border="1px solid #c19"
                onChange={handleProUpdate}
                type={"text"}
                name="pSize"
                value={product.pSize}
              />
              <Button colorScheme={"twitter"} w="150px" type="submit">
                {" "}
                Add Product{" "}
              </Button>
            </Flex>
          </form>

          <Flex direction="column">
            <Flex
              key={"titleflex"}
              gap="20px"
              border="1px solid #ccc"
              h="50px"
              align="centerḍ "
            >
              <Box w="30%">Product Name</Box>
              <Box>Delete</Box>
              <Box>View</Box>
            </Flex>

            {gproduct.products?.map((product) => {
              return (
                <Flex key={product._id} gap="20px" border="1px solid #ccc">
                  <Box w="30%">{product.name}</Box>
                  <Box>
                    <Button
                      colorScheme={"orange"}
                      onClick={() => handleDel(product._id)}
                    >
                      Del
                    </Button>
                  </Box>
                  <Box>
                    <Button colorScheme={"orange"}>view</Button>
                  </Box>
                </Flex>
              );
            })}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
