import { Box, Button, Flex, Input, Select } from "@chakra-ui/react";
import React, { ChangeEvent, useState } from 'react'
import { AdminNav } from "../../../components";
import { useAppSelector } from "../../../store/hook";


const SlideHome = ()=>{
    const category = useAppSelector(store=>store.category)
    const slide = useAppSelector(store=>store.slide)
    const subcategory = useAppSelector(store=>store.subcategory)
    
    const [subcatInfo, setSubcatInfo] = useState({catid:"", subcatid:"",urltype:"", imgurl:"", navurl:""}) 
    const [cetIndex, setCatIndex] =  useState("")

    console.log(category.categories)
    console.log(slide.slides)
    console.log(subcategory.subcategories)
    


    const handleChnage = (e:ChangeEvent<HTMLInputElement|HTMLSelectElement>)=>{
        const {name, value} = e.target
        setSubcatInfo({...subcatInfo, [name]:value})
    } 



    return(
        <Box>
            <Flex>
                <Box w={["250px","250px","20%","20%"]}>
                    <AdminNav />
                </Box>

                <Box w="300px" pt="50px">
                    <form>
                        <Flex direction={"column"} gap="20px">
                            <Box fontWeight={"700"} textAlign={"center"}> Add New Slide </Box>
                            <Select placeholder="Select Category">
                                {category.categories.map((cat)=>{
                                    return (
                                        <option value={cat._id} key={cat._id}> {cat.name}</option>
                                    )
                                })}
                            </Select>

                            <Select placeholder="Select Sub Category">
                               
                            </Select>
                            <Select placeholder="Select Url Type">
                                <option value="video"> Video </option>
                                <option value="image"> Image </option>
                            </Select>
                            <Input type={"text"} placeholder="Type URL of Image"/>
                            <Input type={"text"} placeholder="Type Navigation URL"/>
                            <Button colorScheme={"twitter"}> Save Slide </Button>
                        </Flex>

                    </form>
                </Box>
            </Flex>
        </Box>
    )
  
}

export default SlideHome