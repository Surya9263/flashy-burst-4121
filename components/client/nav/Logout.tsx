import React,{useContext} from 'react'
import {
    Button,
      //modal
      Modal,
      ModalOverlay,
      ModalContent,
      ModalHeader,
      ModalFooter,
      ModalBody,
      ModalCloseButton,
      useDisclosure
}from "@chakra-ui/react"
import { useAppDispatch } from '../../../store/hook'
import { logout } from '../../../store/auth/authSlice'
import { clearCart } from '../../../store/cart/cartSlice'

    import Router from 'next/router'
import { cartContxt } from '../../../context/CartCItemContext'
export default function Logout({isOpen, onClose,onOpen}:{isOpen:boolean, onClose:VoidFunction,onOpen:VoidFunction}) {
  const distapch = useAppDispatch()
  const {updateState} = useContext(cartContxt);
  const handleLogout=()=>{
    console.log(Router);
    
    distapch(logout())
    distapch(clearCart())
    updateState()
    onClose()
}

  return (
    <Modal isOpen={isOpen} onClose={onClose} >
    <ModalOverlay />
    <ModalContent  borderRadius="none">
      <ModalHeader>Confirm Logout</ModalHeader>
      <ModalCloseButton />
      <ModalBody >
         do you really want to logout?
      </ModalBody>  

      <ModalFooter>
        <Button colorScheme='blue' mr={3} onClick={onClose}>
          Cancel
        </Button>
        <Button colorScheme='orange' onClick={()=>handleLogout()}>
            Logout
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
  )
}
