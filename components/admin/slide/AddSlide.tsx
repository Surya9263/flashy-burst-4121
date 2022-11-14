import React,{useState} from 'react'
import { Box, Button, Flex, Input, Select,Text } from "@chakra-ui/react";
import { CIcategory } from '../../../interface/client/category.interface';

// Icons
import {BsFillTrashFill, BsPencilSquare} from "react-icons/bs"
import {FiSave} from 'react-icons/fi'
import {MdOutlineCancel} from 'react-icons/md'
import {GrDocumentUpdate} from 'react-icons/gr'
import {GrView} from 'react-icons/gr'
import { addSlideinitState, addslideinterface } from '../../../pages/admin/slide';

export default function AddSlide({handleSaveSlide, handleChnage, categories, handleUpdate,status,setStatus,setSlideId,setSlideData, slidedata}:{handleSaveSlide:Function,setStatus:Function,handleChnage:Function, setSlideData:Function,categories:Array<CIcategory>, handleUpdate:VoidFunction,setSlideId:Function,slidedata:addslideinterface,status:string}) {
    const [catIndex, setCatIndex] =  useState<number>(-1)

  return (
    <Box  w={["100%", "100%", "50%","40%"]} border={"1px solid #c95"} px="10px" py="10px" my="20px">
                        
        <Box py="20px" fontWeight="700" textAlign={"center"}> Add New Slide </Box>
        
        <form onSubmit={(e)=>handleSaveSlide(e)}>
            <Flex direction={"column"} gap="20px">
                <Select value={slidedata.category} name="category" placeholder="Select Category" onChange={(e)=>{
                                setCatIndex(e.target.selectedIndex-1)
                                handleChnage(e)
                            }}>
                    {categories.map((cat)=>{
                    
                        return (
                            <option value={cat._id} key={cat._id} > 
                                {cat.name}
                            </option>
                        )
                    })}
                </Select>

                <Select name="subcategory" value={slidedata.subcategory} placeholder="Select Sub Category" onChange={(e)=>handleChnage(e)} >
                    {categories[catIndex]?.subCategory?.map((subCat)=>{       
                            return (
                                <option value={subCat._id} key={subCat._id} > 
                                    {subCat.name}
                                </option>
                            )
                        })}
                </Select>
                <Select value={slidedata.urlType} name="urlType"  placeholder="Select Url Type" onChange={(e)=>handleChnage(e)}>
                    <option value="video"> Video </option>
                    <option value="image"> Image </option>
                </Select>
                <Input name="imgurl" type={"text"} placeholder="Type URL of Image" onChange={(e)=>handleChnage(e)} value={slidedata.imgurl}/>
                <Input name="navigateUrl" type={"text"} placeholder="Type Navigation URL" onChange={(e)=>handleChnage(e)} value={slidedata.navigateUrl}/>
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
                        setSlideData(addSlideinitState)
                        setSlideId("")
                    }}>
                        <MdOutlineCancel/>
                    </Button>
                </Flex>
                }

            </Flex>

        </form>
    </Box>
  )
}
