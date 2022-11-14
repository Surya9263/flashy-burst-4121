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
export default function ConfirmationModel({isOpen, onClose,onOpen,ActionText, ActionMsg,actionTitle, handlerFunc}:{isOpen:boolean, onClose:VoidFunction,onOpen:VoidFunction,ActionText:string,ActionMsg:string,actionTitle:string,handlerFunc:Function}) {
  const distapch = useAppDispatch()

 

  return (
    <Modal isOpen={isOpen} onClose={onClose} >
    <ModalOverlay />
    <ModalContent  borderRadius="none">
      <ModalHeader>{actionTitle}</ModalHeader>
      <ModalCloseButton />
      <ModalBody >
            {ActionMsg}
      </ModalBody>  

      <ModalFooter>
        <Button colorScheme='blue' mr={3} onClick={onClose}>
          Cancel
        </Button>
        <Button colorScheme='orange' onClick={()=>handlerFunc()}>
            {ActionText}
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
  )
}
