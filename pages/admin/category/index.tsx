
import Head from 'next/head'
import React,{ChangeEvent, FormEvent, useEffect, useState} from 'react'
import {AdminNav} from '../../../components/'
import {
    Box,
    Input, 
    FormLabel,
    Button,
    Text,
    Flex
} from "@chakra-ui/react"
import { useAppDispatch, useAppSelector } from '../../../store/hook'
import { addCategory, deleteCategory, getallCategory } from '../../../store/category/categorySlice'

export default function Admin() {

    const dispatch =  useAppDispatch()
    const categorydata = useAppSelector(store=>store.category)
    const [category, setCatogory] = useState<string>("")


    const hanfleCatUpdate = (e:ChangeEvent<HTMLInputElement>)=>{
        setCatogory(e.target.value)
    }


    const hadleAddCategory = async (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()

        if(category.length>2){
            await dispatch(addCategory(category))
            console.log(categorydata);
        }
    }
    
    const handleDelCat = (id:string)=>{
        dispatch(deleteCategory(id))
    }
  



  return (
    <Box>
        <Head>
            <title> Take it Now Admin Dashboard </title>
        </Head>

        <AdminNav/>

        <Flex px={["15px"]}>
            <Box w="45%">
                <Box py="10px" fontWeight="700">Add New Category </Box>
                
                <form onSubmit={hadleAddCategory}>
                    <Flex direction="column" gap="10px"> 
                    <Input colorScheme={"twitter"} variant="outline" border="1px solid #c19" onChange={hanfleCatUpdate} type={"text"}  name="categoryName" value={category}/>
                    <Button colorScheme={"twitter"} w="150px" type="submit"> Add Category </Button>
                    </Flex>
                </form>

                <Flex direction="column">

                        <Flex key={'titleflex'} gap="20px" border="1px solid #ccc" h="50px" align="centerḍ ">
                            <Box w="30%">
                                Category Name
                            </Box>
                            <Box>
                                Delete
                            </Box>
                            <Box>
                                View
                            </Box>
                        </Flex>
               
                         {categorydata.categories?.map((category)=>{
                            return (
                                <Flex key={category._id} gap="20px" border="1px solid #ccc">
                                   <Box w="30%">
                                    {category.name}
                                   </Box>
                                   <Box>
                                        <Button colorScheme={"orange"} onClick={()=>handleDelCat(category._id)}>Del</Button>
                                   </Box>
                                   <Box>
                                        <Button colorScheme={"orange"}>view</Button>
                                   </Box>
                                </Flex>
                            )
                         })}               
                </Flex>
            </Box>

            <Box w="45%">
                
            </Box>

        </Flex>

    </Box>
  )
}
