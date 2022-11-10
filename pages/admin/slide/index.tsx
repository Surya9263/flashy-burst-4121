import { Box, Button, Flex, Input, Select,Text } from "@chakra-ui/react";

import React, { ChangeEvent, FormEvent, useState } from 'react'
import { AdminNav, AdminHeader } from "../../../components";
import { addSlide, deletSlide, updateSlide } from "../../../store/homeslide/slideSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hook";

import {BsFillTrashFill, BsPencilSquare} from "react-icons/bs"
import {FiSave} from 'react-icons/fi'
import {MdOutlineCancel} from 'react-icons/md'
import {GrDocumentUpdate} from 'react-icons/gr'
import {GrView} from 'react-icons/gr'

const SlideHome = ()=>{
    const dispatch =  useAppDispatch()
    
    const category = useAppSelector(store=>store.category)
    const slide = useAppSelector(store=>store.slide)
    const subcategory = useAppSelector(store=>store.subcategory)
    

    const [slidedata, setSlideData] = useState({catid:"", subcatid:"",urltype:"", imgurl:"", navurl:""}) 
    const [catIndex, setCatIndex] =  useState<number>(-1)
   
    const [slideId, setSlideId] = useState<string>("")
    const [status, setStatus] =  useState<"add"|"update">("add")


    const handleChnage = (e:ChangeEvent<HTMLInputElement|HTMLSelectElement>)=>{
        const {name, value} = e.target
        setSlideData({...slidedata, [name]:value})
        console.log(slidedata);
        
        
    } 


    const handleSaveSlide = async(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()       
        await dispatch(addSlide(slidedata))  
        console.log(slide);
        
    }

    const handledelte = async(id:string)=>{
        await dispatch(deletSlide(id))
    }

    const handleUpdate = async()=>{
        await dispatch(updateSlide({id:slideId, data:slidedata}))
        setStatus("add")
        setSlideData({...slidedata, catid:"", subcatid:"",urltype:"", imgurl:"", navurl:""})
        setSlideId("")
    }

    return(
        <Box>
             <AdminHeader />
           
            <Flex  px={["15px"]} direction={["column", "column","row","row"]}>
                <Box w={["100%","100%","20%","20%"]}>
                    <AdminNav />
                </Box>

                <Flex  w={["100%", "100%","80%","80%"]} direction={["column", "column","row","row"]} gap={"20px"}>

                    <Box  w={["100%", "100%", "50%","40%"]} border={"1px solid #c95"} px="10px" py="10px" my="20px">
                        
                        <Box py="20px" fontWeight="700" textAlign={"center"}> Add New Slide </Box>
                        
                        <form onSubmit={handleSaveSlide}>
                            <Flex direction={"column"} gap="20px">
                                <Select name="catid" placeholder="Select Category" onChange={(e)=>{
                                                setCatIndex(e.target.selectedIndex-1)
                                                handleChnage(e)
                                            }}>
                                    {category.categories.map((cat)=>{
                                    
                                        return (
                                            <option value={cat._id} key={cat._id} > 
                                                {cat.name}
                                            </option>
                                        )
                                    })}
                                </Select>

                                <Select name="subcatid" placeholder="Select Sub Category" onChange={handleChnage} >
                                    {category.categories[catIndex]?.subCategory?.map((subCat)=>{       
                                            return (
                                                <option value={subCat._id} key={subCat._id} > 
                                                    {subCat.name}
                                                </option>
                                            )
                                        })}
                                </Select>
                                <Select name="urltype" placeholder="Select Url Type" onChange={handleChnage}>
                                    <option value="video"> Video </option>
                                    <option value="image"> Image </option>
                                </Select>
                                <Input name="imgurl" type={"text"} placeholder="Type URL of Image" onChange={handleChnage} value={slidedata.imgurl}/>
                                <Input name="navurl" type={"text"} placeholder="Type Navigation URL" onChange={handleChnage} value={slidedata.navurl}/>
                                {/* <Button colorScheme={"twitter"} type="submit"> Save Slide </Button> */}

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
                                        setSlideData({...slidedata, catid:"", subcatid:"",urltype:"", imgurl:"", navurl:""})
                                        setSlideId("")
                                    }}>
                                        <MdOutlineCancel/>
                                    </Button>
                                </Flex>
                                }

                            </Flex>

                        </form>
                    </Box>

                    <Box w={["100%", "100%","60%","60%"]}>

                        <Flex direction="column"  maxH={"90vh"} overflow="scroll" minW="320px">
                            
                            <Flex key={'titleflex'} gap="20px" border="1px solid #ccc" h="50px" align="center" justify={"center"}>
                            <Text textAlign={"center"} fontWeight={"700"} fontSize={"24px"}> Slids List </Text>
                            </Flex>

                            {slide.slides?.map((slide)=>{
                                return (
                                    <Flex key={slide._id} gap="20px" border="1px solid #ccc" px="20px" py="10px">
                                        <Box w="20%"> {slide.category?.name}</Box>
                                        <Box w="20%"> {slide.subcategory?.name}</Box>
                                        <Box> {slide.urlType}</Box>
                                        <Box> {slide.navigateUrl}</Box>
                                        <Box> {slide.imgurl}</Box>
                                                                              
                                        <Button colorScheme={"orange"} onClick={()=>handledelte(slide._id)} p={"0"}>
                                            <BsFillTrashFill fontSize={"20px"}/>
                                        </Button>

                                        <Button colorScheme={"green"} p={"0"} onClick={()=>{
                                            setStatus("update")
                                            setSlideData({...slidedata, catid:slide.category._id, subcatid:slide.subcategory._id,urltype:slide.urlType, imgurl:slide.imgurl, navurl:slide.navigateUrl})
                                            setSlideId(slide._id)
                                        }}>
                                            <BsPencilSquare/>
                                        </Button>
                                        <Button colorScheme={"cyan"} p={"0"}>
                                            <GrView/>
                                        </Button>
                                    </Flex>
                                )
                            })}
                        </Flex>
                    </Box>

                </Flex>
                

                

            </Flex>
        </Box>
    )
  
}

export default SlideHome