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



const subcategory = ()=>{
    const category   =  useAppSelector(store=>store.category)
    
    return (
        <Box>
            <Head>
                <title> Subcategory Dashboard </title>
            </Head>

        <AdminNav/>
            <Flex>
                
                <Box> Add new Sub Category</Box>

                <form>
                    <Flex direction="column" gap="20px">
                    <Select>
                        
                        {category.categories.map((category)=>{
                            return (
                                <option key={category._id} value={category._id}> {category.name} </option>
                            )
                        })}
                    </Select>

                <Input type="text" name="category"/>
                <Button> Add New Sub Category </Button>
                    </Flex>

                </form>
            </Flex>

        </Box>
    )
}

export default subcategory