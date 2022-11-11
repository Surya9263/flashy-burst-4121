
import React, {
    useState,
    ChangeEvent,
    useEffect

} from 'react'


import {
    Box,
    Text,
    Flex,
    Select,
    Input,
    Button,

     // alert Dialog hook
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
import { useAppDispatch, useAppSelector } from '../../store/hook'

// interfaces 
import {IprodTypeInitState} from '../../interface/client/productType'
import { addProdType } from '../../store/productType/productTypeSclie'
import { CIcategory } from '../../interface/client/category.interface'

import {AlertConfirmation} from '../../components'
const intiState:IprodTypeInitState = {catid:"", typename:""}


export default function AddProductType({categories}:{categories:Array<CIcategory>}) {
    
    const dispatch = useAppDispatch()
    const [producttype, setProductType] = useState<IprodTypeInitState>(intiState)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [netReqStatus,setNetReqStatus] = useState<number>(0)
    const [sucessAlrt, setAucessAlrt] = useState<boolean>(false)
    const [errorMsg, setErrorMsg] =  useState<string>("")
    const ptypes = useAppSelector(store=>store.productType)

  // funtion to update product type data into state
  const handleProductdataChage = (e:ChangeEvent<HTMLInputElement|HTMLSelectElement>)=>{
    const {name, value} =  e.target
    setProductType({...producttype,[name]:value})
        
  }
  
// function to add new productType
async function handleAddProductType(){
  await dispatch(addProdType(producttype))  
  setNetReqStatus(1)
    setTimeout(()=>{
    setNetReqStatus(0)
},10000)
}

useEffect(()=>{
    if(netReqStatus===1){
      if(ptypes.isErro){
        setErrorMsg(ptypes.errorMsg)
        console.log(ptypes.errorMsg);
        
        setTimeout(()=>{
          setErrorMsg("")
        },5000)
  
      }else{
        setAucessAlrt(true)
        setProductType(intiState)
        setTimeout(()=>{
          setAucessAlrt(false)
        },5000)
      }
    }
},[ptypes,netReqStatus])

  return (
    <Box>
               <Text textAlign={"center"}  fontWeight={"700"} fontSize={"20px"} pb="15px"> Add New Product Type </Text>
                  <Flex direction={"column"} gap={"20px"}>
                     
                      <Select name={"catid"} onChange={handleProductdataChage}>
                          {categories?.map((category)=>{
                            return (
                              <option value={category._id} key={category._id}>
                                    {category.name}
                              </option>
                            )
                          })}
                      </Select>

                      <Input type="text" name="typename" placeholder="Type New Product Type" onChange={handleProductdataChage}/>
                      <Button colorScheme={"twitter"} onClick={onOpen} w={"100px"}>
                          <FiSave />
                      </Button>

                      {sucessAlrt
                            &&
                            <Alert status='success'>
                                <AlertIcon />
                                <AlertTitle>{"Type Saved Successfully" }</AlertTitle>
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
                  <AlertConfirmation excefunc={handleAddProductType} isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
            </Box>
  )
}
