import React from 'react'
import {
    Button,
    Flex,
     // alert Dialog Components
     AlertDialog,
     AlertDialogBody,
     AlertDialogFooter,
     AlertDialogHeader,
     AlertDialogCloseButton,
     AlertDialogContent,
     useDisclosure,
 
} from "@chakra-ui/react"

export default function AlertConfirmation({excefunc, isOpen,onOpen, onClose }:{excefunc:Function, isOpen:boolean, onOpen:Function, onClose:any}) {
    
    const cancelRef = React.useRef<any|null>()

  return (
    <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>

                    <AlertDialogContent>
                    <AlertDialogHeader>Save Changes?</AlertDialogHeader>
                    <AlertDialogCloseButton />
                    <AlertDialogBody>
                        Are you sure you want to save?.
                    </AlertDialogBody>

                    <AlertDialogFooter>

                        <Flex gap={"10px"}>
                            <Button colorScheme='blue' ml={3} onClick={()=>{
                                excefunc()
                                onClose()
                            }}>
                                Yes
                            </Button>

                            <Button ref={cancelRef} onClick={onClose}>
                                No
                            </Button>
                        </Flex>
                       
                    </AlertDialogFooter>
                </AlertDialogContent>
                </AlertDialog>
  )
}
