import React,{
    ChangeEvent,
    useState,
    useEffect
} from 'react'
import {
    Box, 
    Text,
    Select, 
    Flex,
    Button,
    Input,
    useDisclosure,


      // ALert Components
      Alert,
      AlertIcon,
      AlertTitle,
      AlertDescription,


} from '@chakra-ui/react'

// interfaces 
import {CIproduct} from '../../interface/client/product.interface'

//icons
import {BsFillTrashFill, BsPencilSquare} from "react-icons/bs"
import {FiSave} from 'react-icons/fi'
import {MdOutlineCancel} from 'react-icons/md'
import {GrDocumentUpdate} from 'react-icons/gr'
import { useAppDispatch, useAppSelector } from '../../store/hook'
import {AlertConfirmation} from '../'
import { CIcategory } from '../../interface/client/category.interface'
import { IsupImageAdd } from '../../interface/client/supportingImage.interface'
import { addSupImg } from '../../store/supimageslice/supportImageSlice'

const initState:IsupImageAdd = {
  cid:"",
  scid:"",
  prodid:"",
  imglink:""
}
export default function AddNewImage({categories,products}:{categories:Array<CIcategory>, products:Array<CIproduct>}) {

    const {isOpen, onOpen, onClose} = useDisclosure()
    const [catIndex, setCatIndex] = useState<number>(-1)
    const [scatIndex, setSubcatIndex] = useState<string>("")
    const [imagedata, setImagedata] = useState<IsupImageAdd>(initState)

    const [netReqStatus,setNetReqStatus] = useState<number>(0)
    
    const [successAlrt, setSuccessAlrt] = useState<boolean>(false)

    const [errorMsg, setErrorMsg] =  useState<string>("")

    const supimage = useAppSelector(store=>store.supImage)

    const dispatch = useAppDispatch()

    const handleImageChanges = (e:ChangeEvent<HTMLInputElement|HTMLSelectElement>)=>{
        const {name, value} = e.target;
        setImagedata({...imagedata, [name]:value})
 
    }

    const handleAddImage= async()=>{
        setNetReqStatus(1)
        await dispatch(addSupImg({prodid:imagedata.prodid, imglink:imagedata.imglink}))    
        
        setTimeout(()=>{
          setNetReqStatus(0)
      },10000)
    }


  
useEffect(()=>{
  if(netReqStatus===1){
    
    if(supimage.isErro){
      setErrorMsg(supimage.errorMsg)
      setSuccessAlrt(false)
      
      setTimeout(()=>{
        setErrorMsg("")
      },5000)
    }else{
      setSuccessAlrt(true)
      setErrorMsg("")
      setImagedata(initState)
      setTimeout(()=>{
        setSuccessAlrt(false)
      },5000)
    }
  }

},[supimage])


  return (
    <Box>
          <Text textAlign={"center"}  fontWeight={"700"} fontSize={"20px"} pb="15px"> Add New Image </Text>
          
              <Flex direction={"column"} gap={"20px"}>
                  
                  <Select name={"cid"} value={imagedata.cid} onChange={(e)=>{
                      handleImageChanges(e)                     
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

                  <Select name={"scid"} value={imagedata.scid} onChange={(e)=>{                    
                      handleImageChanges(e)   
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

                  <Select name={"prodid"} value={imagedata.prodid} onChange={handleImageChanges} placeholder="Select product">
                            {products?.map((product)=>{
                              return (
                               
                               scatIndex === product?.subCategory?._id && <option key={product._id} value={product._id}>
                                      {product.name}
                                </option>
                              )
                            })}
                  </Select>

                  <Input type="text" name="imglink" placeholder="Type New Product Type" value={imagedata.imglink} onChange={handleImageChanges}/>
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

              <AlertConfirmation excefunc={handleAddImage} isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
            </Box>
  )
}
