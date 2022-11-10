
import Head from 'next/head'
import React,{ChangeEvent, FormEvent, useEffect, useState} from 'react'
import {AdminNav, AdminHeader} from '../../../components/'
import {
    Box,
    Input, 
    FormLabel,
    Button,
    Text,
    Flex
} from "@chakra-ui/react"
import { useAppDispatch, useAppSelector } from '../../../store/hook'
import { addCategory, deleteCategory, getallCategory, updateCategory } from '../../../store/category/categorySlice'

//icons
import {BsFillTrashFill, BsPencilSquare} from "react-icons/bs"
import {FiSave} from 'react-icons/fi'
import {MdOutlineCancel} from 'react-icons/md'
import {GrDocumentUpdate} from 'react-icons/gr'
import { getAllsubcategory } from '../../../store/subcategory/subCategorySlice'

export default function Admin() {

    const dispatch =  useAppDispatch()
    const categorydata = useAppSelector(store=>store.category)
    const [category, setCatogory] = useState<string>("")
    const [catid, setCatId] = useState<string>("")
    const [status, setStatus] =  useState<"add"|"update">("add")

    const hanfleCatUpdate = (e:ChangeEvent<HTMLInputElement>)=>{
        setCatogory(e.target.value)
    }


    const hadleAddCategory = async (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()

        if(category.length>2){
            await dispatch(addCategory(category))
            setCatogory("")
        }
    }
    
    const handleDelCat = (id:string)=>{
        dispatch(deleteCategory(id))
        dispatch(getAllsubcategory("takeitnow"))
        
    }
  
    const handleUpdate = async(id:string, name:any)=>{
        await dispatch(updateCategory({id:id, data:{name:name}}))
        setCatId("")
        setCatogory("")
        setStatus("add")
    }

  return (
    <Box>
        <Head>
            <title> Take it Now Admin Dashboard </title>
        </Head>

       <AdminHeader />

        <Flex px={["15px"]} direction={["column", "column","row","row"]}>
            <Box w={["100%","100%","20%","20%"]}>     
                 <AdminNav/>
            </Box>

            <Flex  w={["100%", "100%","80%","80%"]} direction={["column", "column","row","row"]} gap={"20px"}>
                <Box w={["100%", "100%", "40%","40%"]} border={"1px solid #c95"} px="10px" py="10px" my="20px">
                    <Box py="10px" fontWeight="700">Add New Category </Box>
                    
                    <form onSubmit={hadleAddCategory}>
                        <Flex direction="column" gap="10px"> 
                        <Input colorScheme={"twitter"} variant="outline" border="1px solid #c19" placeholder='type new category name' onChange={hanfleCatUpdate} type={"text"}  name="categoryName" value={category}/>
                       
                       {status==="add"?
                       <Button colorScheme={"twitter"} w="50px" type="submit"> 
                            <FiSave/> 
                        </Button>
                        :
                        <Flex gap="10px">
                            <Button colorScheme={"facebook"} w="50px" onClick={()=>{
                                handleUpdate(catid, category)
                            }}> 
                                <GrDocumentUpdate/>
                            </Button>
                            <Button colorScheme={"orange"} onClick={()=>{
                                setStatus("add")
                                setCatogory("")
                            }}>
                                <MdOutlineCancel/>
                            </Button>
                        </Flex>
                    }
                        
                      
                        </Flex>
                    </form>
                </Box>

                <Flex direction="column" w={["100%","100%", "55%","55%"]}>

                        <Flex key={'titleflex'} gap="20px" border="1px solid #ccc" h="50px" align="center" justify={"center"}>
                           <Text textAlign={"center"} fontWeight={"700"} fontSize={"24px"}> List of All Categories</Text>
                        </Flex>
               
                         {categorydata.categories?.map((category)=>{
                            return (
                                <Flex key={category._id} gap="20px" border="1px solid #ccc" px="20px" py="10px">
                                   <Box w="30%">
                                    {category.name}
                                   </Box>
                                   <Box>
                                        <Button colorScheme={"orange"} onClick={()=>handleDelCat(category._id)}>
                                            <BsFillTrashFill />
                                        </Button>
                                   </Box>
                                   <Box>
                                        <Button colorScheme={"green"} onClick={()=>{
                                            setCatogory(category.name);
                                            setStatus("update");
                                            setCatId(category._id)
                                        }}>
                                            <BsPencilSquare/>
                                        </Button>
                                   </Box>
                                </Flex>
                            )
                         })}               
                </Flex>
            </Flex>

        </Flex>

    </Box>
  )
}
