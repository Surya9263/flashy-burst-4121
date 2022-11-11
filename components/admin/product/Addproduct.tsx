import React, {
    FormEvent,
    ChangeEvent,
    useState,
    useEffect
} from 'react'

import {
    Box,
    Flex,
    Select,
    Input,
    Button,

    // alert Dialog Components
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogCloseButton,
    AlertDialogContent,
    useDisclosure,

    // ALert Components
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,

} from "@chakra-ui/react"
//icons
import {BsFillTrashFill, BsPencilSquare} from "react-icons/bs"
import {FiSave} from 'react-icons/fi'
import {MdOutlineCancel} from 'react-icons/md'
import {GrDocumentUpdate} from 'react-icons/gr'

// Intrerfaces 
import {CIcategory} from '../../../interface/client/category.interface'
import { IaddProduct } from '../../../interface/client/product.interface'
import { useAppDispatch, useAppSelector } from '../../../store/hook'
import { addProduct } from '../../../store/product/productSlice'
import {IpType } from '../../../interface/client/productType'
import {AlertConfirmation} from '../../'

const initialState:IaddProduct = {
    category:"",subCategory:"", pType:"", name:"",price:"", mainImg:"", discription:""
}


export default function Addproduct({categories, catIndex, setCatIndex, productTypes}:{categories:Array<CIcategory>, catIndex:number, setCatIndex:Function, productTypes:Array<IpType>}) {
   
    const dispatch = useAppDispatch()
    const [product, setProduct] = useState(initialState);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [sucessAlrt, setAucessAlrt] = useState<boolean>(false)
    const [errorMsg, setErrorMsg] =  useState<string>("")
    const products = useAppSelector(store=>store.product)
    const [netReqStatus,setNetReqStatus] = useState<number>(0)

  // Functon to perform add request using dispatch for Product
    const handleAddProduct = async () => {
        await dispatch(addProduct(product))
        setNetReqStatus(1)
        setTimeout(()=>{
          setNetReqStatus(0)
        },10000)
    }
  


    // funtion to update product data into state
    const handleProdDataChange = (e:ChangeEvent<HTMLInputElement|HTMLSelectElement>) => {
        const { name, value } = e.target;
        setProduct({...product, [name]:value})
    }
       

useEffect(()=>{
    if(netReqStatus===1){
      if(products.isErro){
        setErrorMsg(products.errorMsg)
        setTimeout(()=>{
          setErrorMsg("")
        },5000)
  
      }else{
        setAucessAlrt(true)
        setProduct(initialState)
        setTimeout(()=>{
          setAucessAlrt(false)
        },5000)
      }
    }
},[products,netReqStatus])

return (
    
<Box  w={"100%"}>
                <Box py="20px" fontWeight="700" textAlign={"center"}> Add New Product </Box>
                
                    <Flex direction="column" gap="10px">
                      <Select onChange={(e)=>{
                        handleProdDataChange(e)
                        setCatIndex(e.target.selectedIndex-1)
                      }} name="category" placeholder="select category" value={product.category}>
                        
                        {categories.map((cat) => {
                          return (
                            <option key={cat._id} value={cat._id}>
                              {cat.name}
                            </option>
                          );
                        })}

                      </Select>

                      <Select onChange={handleProdDataChange} name="subCategory" placeholder="select subcategory" value={product.subCategory}>
                        {categories[catIndex]?.subCategory?.map((subCat)=>{       
                                return (
                                    <option value={subCat._id} key={subCat._id} > 
                                        {subCat.name}
                                    </option>
                                )
                          })}
                      </Select>

                      <Select onChange={handleProdDataChange} name="pType" placeholder="select Product Type" value={product.pType}>
                            {productTypes.map((item)=>{
                              return (
                                categories[catIndex]?._id===item.category._id 
                                &&
                                <option key={item._id} value={item._id}> {item.name} </option>
                              )
                            })}
                       </Select>

                      <Input colorScheme={"twitter"} placeholder="name of product" variant="outline" border="1px solid #c19"
                        onChange={handleProdDataChange} type={"text"} name="name" value={product.name} />

                      <Input colorScheme={"twitter"}
                        variant="outline"
                        placeholder="price of product"
                        border="1px solid #c19"
                        onChange={handleProdDataChange}
                        type={"text"}
                        name="price"
                        value={product.price}
                      />
                      <Input colorScheme={"twitter"} variant="outline" placeholder="image of product" border="1px solid #c19"
                        onChange={handleProdDataChange} type={"text"} name="mainImg" value={product.mainImg}
                      />
                      <Input colorScheme={"twitter"} variant="outline" placeholder="description of product" border="1px solid #c19"
                        onChange={handleProdDataChange} type={"text"} name="discription" value={product.discription} />
                      
                      <Button colorScheme={"twitter"} w="150px" onClick={onOpen}>
                          <FiSave />
                      </Button>

                            {sucessAlrt
                            &&
                            <Alert status='success'>
                                <AlertIcon />
                                <AlertTitle>{"Product Saved Successfully" }</AlertTitle>
                                {/* <AlertDescription> </AlertDescription> */}
                                </Alert>}

                                {errorMsg
                                &&
                                <Alert status='error'>
                                    <AlertIcon />
                                    <AlertTitle>{errorMsg}</AlertTitle>
                                    {/* <AlertDescription> </AlertDescription> */}
                                </Alert>}
    
                          </Flex>

                    <AlertConfirmation excefunc={handleAddProduct} isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
                    
              </Box>  
              
   )

  
    }





