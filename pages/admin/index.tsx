
import Head from 'next/head'
import React,{ChangeEvent, FormEvent, useState} from 'react'
import {
    Box,
    Input, 
    FormLabel,
    Button,
    Text,
    Flex
} from "@chakra-ui/react"
import { useAppDispatch, useAppSelector } from '../../store/hook'
import { addCategory } from '../../store/category/categorySlice'

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
  return (
    <Box>
        <Head>
            <title> ZARA Admin Dashboard </title>
        </Head>

        <Box>
            <Box>Add New Category </Box>
            
            <form onSubmit={hadleAddCategory}>
                <Input onChange={hanfleCatUpdate} type={"text"}  name="categoryName" value={category}/>
                <Button type="submit"> Add Category </Button>
            </form>
        </Box>

    </Box>
  )
}
