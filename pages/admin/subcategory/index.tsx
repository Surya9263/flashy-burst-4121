import Head from 'next/head'
import { useAppDispatch, useAppSelector } from '../../../store/hook'
import {AdminNav, AdminHeader} from '../../../components/'
import {
    Box,
    Input, 
    FormLabel,
    Button,
    Text,
    Flex,
    Select

} from "@chakra-ui/react"

import { ChangeEvent, FormEvent, useEffect, useState } from 'react'

import { addsubcategory, deletsubcategory, updatesubcategory } from '../../../store/subcategory/subCategorySlice'
import { getallCategory } from '../../../store/category/categorySlice'

// icons
import {BsFillTrashFill, BsPencilSquare} from "react-icons/bs"
import {FiSave} from 'react-icons/fi'
import {MdOutlineCancel} from 'react-icons/md'
import {GrDocumentUpdate} from 'react-icons/gr'
import { getAllSlides } from '../../../store/homeslide/slideSlice'


const subcategory = ()=>{
    const category   =  useAppSelector(store=>store.category)
    const subcategory = useAppSelector(store=>store.subcategory)
    const dispatch = useAppDispatch()

    const [subcatInfo, setSubcatInfo] = useState({name:"", cat:"", path:""}) 
    const [subcatid, setSubcatid] = useState<string>("")
    const [status, setStatus] =  useState<"add"|"update">("add")


    const handleChnage = (e:ChangeEvent<HTMLInputElement|HTMLSelectElement>)=>{
            const {name, value} = e.target
            setSubcatInfo({...subcatInfo, [name]:value})
    }   

    const addnewSubcategory = async(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        await dispatch(addsubcategory(subcatInfo))
        await dispatch(getallCategory("takeitnow"))
        setSubcatInfo({...subcatInfo,name:""})
    }



    const handleDelete = async(id:string)=>{
        await dispatch(deletsubcategory(id))
        await dispatch(getAllSlides("takeitnow"))
    }

    const handleUpdate = async()=>{       
        await dispatch(updatesubcategory({id:subcatid, data:subcatInfo}))
        setStatus("add")
        setSubcatInfo({...subcatInfo, name:"", cat:"",path:""})
        setSubcatid("")
    }

    return (
        <Box>
            <Head>
                <title> Subcategory Dashboard </title>
            </Head>

            <AdminHeader />
            
            <Flex px={["15px"]} direction={["column", "column","row","row"]}>
           
                <Box w={["100%","100%","20%","20%"]}>     
                    <AdminNav/>
                </Box>
                

                <Flex  w={["100%", "100%","80%","80%"]} direction={["column", "column","row","row"]} gap={"20px"}>
                   
                    <Box w={["100%", "100%", "40%","40%"]} border={"1px solid #c95"} px="10px" py="10px" my="20px">
                        <Box  py="20px" fontWeight="700" textAlign={"center"}> Add new Sub Category</Box>

                        <form onSubmit={addnewSubcategory}>
                            <Flex direction="column" gap="10px">

                            <Select onChange={handleChnage}  name="cat" placeholder='select category'>
                                
                                {category.categories.map((category)=>{
                                    return (
                                        <option key={category._id} value={category._id} > {category.name} </option>
                                    )
                                })}
                            </Select>
                            <Input onChange={handleChnage} type="text" name="path" value={subcatInfo.path} placeholder='Type path name'/>
                            <Input onChange={handleChnage} type="text" name="name" value={subcatInfo.name} placeholder='Type subcategory name'/>
                            
                            {status==="add"?
                                <Button colorScheme={"twitter"} w="50px" type="submit"> 
                                    <FiSave/> 
                                </Button>
                                :
                                <Flex gap="10px">
                                    <Button colorScheme={"facebook"} w="50px" onClick={()=>{
                                       handleUpdate()
                                    }}> 
                                        <GrDocumentUpdate/>
                                    </Button>
                                    <Button colorScheme={"orange"} onClick={()=>{
                                        setStatus("add")
                                        setSubcatInfo({...subcatInfo, name:"", cat:""})
                                    }}>
                                        <MdOutlineCancel/>
                                    </Button>
                                </Flex>
                            }
                            
                            </Flex>
                        </form>
                    </Box>
                    
                    <Flex direction="column" w={["100%","100%", "55%","55%"]} maxH={"90vh"} overflow="scroll">
                        <Flex key={'titleflex'} gap="20px" border="1px solid #ccc" h="50px" align="center" justify={"center"}>
                           <Text textAlign={"center"} fontWeight={"700"} fontSize={"24px"}> List of All Sub Categories</Text>
                        </Flex>

                    {subcategory.subcategories?.map((subcategory)=>{
                        return (
                            <Flex key={subcategory._id} gap="20px" border="1px solid #ccc" px="20px" py="10px">
                                <Box w="20%">
                                {subcategory.catInfo?.name}
                                </Box>
                                <Box w="20%">
                                {subcategory.name}
                                </Box>
                                <Box>
                                    <Button colorScheme={"orange"} onClick={()=>handleDelete(subcategory._id)}>
                                        <BsFillTrashFill />
                                    </Button>
                                </Box>
                                <Box>
                                    <Button colorScheme={"green"} onClick={()=>{
                                        setSubcatInfo({...subcatInfo, name:subcategory.name, cat:subcategory.catInfo._id, path:subcategory.path})
                                        setStatus("update");
                                        setSubcatid(subcategory._id)
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

export default subcategory