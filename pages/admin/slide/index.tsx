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
import AddSlide from "../../../components/admin/slide/AddSlide";

export interface addslideinterface {
    category:string, subcategory:string,urlType:string, imgurl:string, navigateUrl:string
} 

export const addSlideinitState:addslideinterface = {
    category:"", subcategory:"",urlType:"", imgurl:"", navigateUrl:""
}
const SlideHome = ()=>{
    const dispatch =  useAppDispatch()
    
    const category = useAppSelector(store=>store.category)
    const slide = useAppSelector(store=>store.slide)
    const subcategory = useAppSelector(store=>store.subcategory)
    

    const [slidedata, setSlideData] = useState<addslideinterface>(addSlideinitState) 
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
        setSlideData(addSlideinitState)
        
    }

    const handledelte = async(id:string)=>{
        await dispatch(deletSlide(id))
    }

    const handleUpdate = async()=>{
        console.log(slidedata,slideId)
        await dispatch(updateSlide({id:slideId, data:slidedata}))       
        setStatus("add")
        setSlideData({...slidedata, category:"", subcategory:"",urlType:"", imgurl:"", navigateUrl:""})
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

                    <AddSlide status={status} handleSaveSlide={handleSaveSlide} handleChnage={handleChnage} categories={category.categories} handleUpdate={handleUpdate} setStatus={setStatus}setSlideId={setSlideId}setSlideData={setSlideData} slidedata={slidedata}/>
                    <Box w={["100%", "100%","60%","60%"]}>

                        <Flex direction="column"  maxH={"90vh"} overflow="scroll" minW="320px">
                            
                            <Flex key={'titleflex'} gap="20px"  h="50px" align="center" justify={"center"} minW={["200%","200%","150%","150%"]}>
                            <Text textAlign={"center"} fontWeight={"700"} fontSize={"24px"}> Slids List </Text>
                            </Flex>

                            {slide.slides?.map((slide)=>{
                                return (
                                    <Flex key={slide._id} gap="20px" border="1px solid #ccc" px="20px" py="10px" minW={["200%","200%","150%","150%"]} >
                                        <Box w="20%"> {slide.category?.name}</Box>
                                        <Box w="20%"> {slide.subcategory?.name}</Box>
                                        <Box> {slide.urlType}</Box>
                                        <Box> {slide.navigateUrl}</Box>
                                        <Box w="250px"> {slide.imgurl}</Box>
                                                                              
                                        <Button colorScheme={"orange"} onClick={()=>handledelte(slide._id)} p={"0"}>
                                            <BsFillTrashFill fontSize={"20px"}/>
                                        </Button>

                                        <Button colorScheme={"green"} p={"0"} onClick={()=>{
                                            setStatus("update")
                                            setSlideData({...slidedata, category:slide.category._id, subcategory:slide.subcategory._id,urlType:slide.urlType, imgurl:slide.imgurl, navigateUrl:slide.navigateUrl})
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