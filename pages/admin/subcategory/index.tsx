import Head from 'next/head'
import { useAppDispatch, useAppSelector } from '../../../store/hook'
import {AdminNav} from '../../../components/'
import {
    Box,
    Input, 
    FormLabel,
    Button,
    Text,
    Flex,
    Select

} from "@chakra-ui/react"
import { Category } from '../../../models'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { stringify } from 'querystring'
import { addsubcategory } from '../../../store/subcategory/subCategorySlice'



const subcategory = ()=>{
    const category   =  useAppSelector(store=>store.category)
    const dispatch = useAppDispatch()
    const [subcatInfo, setSubcatInfo] = useState({name:"", cat:""}) 

    const handleChnage = (e:ChangeEvent<HTMLInputElement|HTMLSelectElement>)=>{
            const {name, value} = e.target
            setSubcatInfo({...subcatInfo, [name]:value})
        
    }   

    const addnewSubcategory = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        dispatch(addsubcategory(subcatInfo))
    }

    useEffect(()=>{
        console.log(subcatInfo);
    },[subcatInfo])
    return (
        <Box>
            <Head>
                <title> Subcategory Dashboard </title>
            </Head>

            <Flex>
            <Box w={["250px","250px","20%","20%"]}>     
                  <AdminNav/>
            </Box>
                
                <Box > Add new Sub Category</Box>

                <form onSubmit={addnewSubcategory}>
                    <Flex direction="column" gap="20px">

                    <Select onChange={handleChnage}  name="cat" placeholder='select category'>
                        
                        {category.categories.map((category)=>{
                            return (
                                <option key={category._id} value={category._id}> {category.name} </option>
                            )
                        })}
                    </Select>

                    <Input onChange={handleChnage} type="text" name="name" value={subcatInfo.name} placeholder='Type subcategory name'/>
                    
                    <Button type='submit'> Add New Sub Category </Button>
                    </Flex>
                 </form>

            </Flex>

        </Box>
    )
}

export default subcategory