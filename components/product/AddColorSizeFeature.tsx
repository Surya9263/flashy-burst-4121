import { 
    Box,
    Flex, 
    Select,
    Text,
    Input, 
    Button,
    useDisclosure,

     // ALert Components
      Alert,
      AlertIcon,
      AlertTitle,
      AlertDescription,

} from '@chakra-ui/react'
import React,{
    ChangeEvent,
    useState,
    useEffect
} from 'react'
// interfaces 
import {CIproduct} from '../../interface/client/product.interface'

//icons
import {BsFillTrashFill, BsPencilSquare} from "react-icons/bs"
import {FiSave} from 'react-icons/fi'
import {MdOutlineCancel} from 'react-icons/md'
import {GrDocumentUpdate} from 'react-icons/gr'

import { useAppDispatch, useAppSelector } from '../../store/hook'
import {AlertConfirmation} from '../'
import { IupdateProductIntData } from '../../interface/client/product.interface'
import { CIcategory } from '../../interface/client/category.interface'
import { updateProduct } from '../../store/product/productSlice'

const initState:IupdateProductIntData = {
  catid:"",
  scatid:"",
  pid:"",
  type:"",
  data:""
}

export default function AddColor({categories, products}:{categories:Array<CIcategory>, products:Array<CIproduct>}) {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const [catIndex, setCatIndex] = useState<number>(-1)
    const [scatIndex, setSubcatIndex] = useState<string>("")

    const [netReqStatus,setNetReqStatus] = useState<number>(0)
    const [successAlrt, setSuccessAlrt] = useState<boolean>(false)
    const [errorMsg, setErrorMsg] =  useState<string>("")

    const dispatch = useAppDispatch()
    const productData = useAppSelector(store=>store.product)

    const [updateData, setUpdateData] = useState<IupdateProductIntData>(initState)


   const handldataChange = (e:ChangeEvent<HTMLInputElement|HTMLSelectElement>) =>{
        const {name, value} = e.target;
        setUpdateData({...updateData, [name]:value})
   }
    

   const handleUpdateProduct = ()=>{
          if(!updateData.type||!updateData.data||!updateData.pid){
            setSuccessAlrt(false)
            setErrorMsg("Required fields are missing")
              setTimeout(()=>{
                setErrorMsg("")
              },5000)
              return;
          }
          dispatch(updateProduct({type:updateData.type, id:updateData.pid, data:updateData.data}))
          setNetReqStatus(1)
          setTimeout(()=>{
            setNetReqStatus(0)
          },5000)
        }
   
useEffect(()=>{
    if(netReqStatus===1){
      
      if(productData.isErro){
        setErrorMsg(productData.errorMsg)
        setSuccessAlrt(false)
        
        setTimeout(()=>{
          setErrorMsg("")
        },5000)
      }else{
        setSuccessAlrt(true)
        setErrorMsg("")
        setUpdateData(initState)
        setTimeout(()=>{
          setSuccessAlrt(false)
        },5000)
      }
    }
  
  },[productData,netReqStatus])


  return (
    <Box>
          <Text textAlign={"center"}  fontWeight={"700"} fontSize={"20px"} pb="15px"> ADD Color | Size | Feature </Text>
          
              <Flex direction={"column"} gap={"10px"}>
                  
                  <Select name={"catid"} value={updateData.catid} onChange={(e)=>{
                      handldataChange(e)                     
                      setCatIndex(e.target.selectedIndex-1)
                  }} placeholder="Select category">
                      {categories?.map((category)=>{
                        return (
                          <option value={category._id} key={category._id}>
                                {category.name}
                          </option>
                        )
                      })}
                  </Select>

                  <Select name={"scatid"} value={updateData.scatid} onChange={(e)=>{                    
                      handldataChange(e)   
                      setSubcatIndex(e.target.value)                  
                  }} placeholder="Select subcategory">
                        {categories[catIndex]?.subCategory?.map((subCat)=>{       
                                return (
                                    <option value={subCat._id} key={subCat._id} > 
                                        {subCat.name}
                                    </option>
                                )
                          })}
                  </Select>

                  <Select name={"pid"} value={updateData.pid} onChange={handldataChange} placeholder="Select product">
                            {products?.map((product)=>{
                              return (
                               scatIndex === product?.subCategory?._id && <option key={product._id} value={product._id}>
                                      {product.name}
                                </option>
                              )
                            })}
                  </Select>


                  <Select name={"type"} value={updateData.type} onChange={handldataChange} placeholder="Select Type">
                      <option value="color">Color</option>
                      <option value="size">Size</option>
                      <option value="feature">Feture</option>
                  </Select>

                  <Input type="text" name="data" placeholder="Type new value" value={updateData.data} onChange={handldataChange}/>
                  <Button colorScheme={"twitter"} w={"120px"} onClick={onOpen}>
                      <FiSave />
                  </Button>

                  {successAlrt===true
                        &&
                  <Alert status='success'>
                      <AlertIcon />
                      <AlertTitle>{"Type Saved Successfully" }</AlertTitle>
                      {/* <AlertDescription> </AlertDescription> */}
                  </Alert>}

                  {errorMsg!==""
                  &&
                  <Alert status='error'>
                      <AlertIcon />
                      <AlertTitle>{errorMsg}</AlertTitle>
                      {/* <AlertDescription> </AlertDescription> */}
                  </Alert>}
              </Flex>

              <AlertConfirmation excefunc={handleUpdateProduct} isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
            </Box>
  )
}
