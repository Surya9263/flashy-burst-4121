import {Box, Input, Button, Flex, Text, Select, RadioGroup, Stack, Radio, InputGroup, InputLeftAddon, Checkbox} from '@chakra-ui/react'
import React from 'react'



export default function SignUp() {

    const [value, setValue] = React.useState('1')

  
    return (
        <Box>
            
            <Flex  mt={200} ml={200} gap={50}>
                <Box  h={"auto"} w={500} >
                    <Text fontSize={22}><b>PERSONAL DETAILS</b></Text>
                    <RadioGroup onChange={setValue} value={value} mt={10}>
                    <Stack direction='row'>
                        <Radio value='1'>PERSONAL</Radio>
                        <Radio value='2'>COMPANEY</Radio>
                    </Stack>
                    </RadioGroup>
                    <Input 
                        placeholder='E-MAIL' 
                        mt={5} 
                        focusBorderColor="none"
                        borderLeft={"none"} 
                        borderTop={"none"} 
                        borderRight={"none"} 
                        borderRadius={"none"}
                    />
                    
                    <Input 
                        placeholder='PASSWORD' 
                        mt={5}
                        focusBorderColor="none"
                        borderLeft={"none"} 
                        borderTop={"none"} 
                        borderRight={"none"} 
                        borderRadius={"none"}
                    />
                    
                    
                    <Input 
                        placeholder='NAME' 
                        mt={5}
                        focusBorderColor="none"
                        borderLeft={"none"} 
                        borderTop={"none"} 
                        borderRight={"none"} 
                        borderRadius={"none"}
                    />
                    
                    <Input 
                        placeholder='ADDRESS' 
                        mt={5}
                        focusBorderColor="none"
                        borderLeft={"none"} 
                        borderTop={"none"} 
                        borderRight={"none"} 
                        borderRadius={"none"}
                    />
                    
                    <Input 
                        placeholder='LOCALITY' 
                        mt={5}
                        focusBorderColor="none"
                        borderLeft={"none"} 
                        borderTop={"none"} 
                        borderRight={"none"} 
                        borderRadius={"none"}
                    />
                    
                    <Select placeholder='Select option'
                            mt={5}
                            focusBorderColor="none"
                            borderLeft={"none"} 
                            borderTop={"none"} 
                            borderRight={"none"} 
                            borderRadius={"none"} 
                        >
                        <option value='MAHARASHTRA'>MAHARASHTRA</option>
                        <option value='HIMACHAL PRADESH'>HIMACHAL PRADESH</option>
                        <option value='BIHAR'>BIHAR</option>
                    </Select>

                    <InputGroup 
                            mt={5}
                            borderRadius={"none"}
                            borderColor="none"
                            >
                        <InputLeftAddon children='+91' />
                        <Input type='tel' placeholder='TELEPHONE' />
                    </InputGroup>

                    <Stack spacing={5} direction='column' mt={5}>
                        <Checkbox size='md' colorScheme='blue'>
                            I WISH TO RECEIVE ZARA NEWS ON MY E-MAIL
                        </Checkbox>
                        <Checkbox colorScheme='blue' >
                            I ACCEPT THE PRIVACY STATEMENT
                        </Checkbox>
                    </Stack>
                    
                    <Button
                        fontSize={18} 
                        mt={50}
                        size='md'
                        height='45px'
                        width='500px'
                        border='0'
                        bg={"black"}
                        color={"white"}
                        borderRadius={"none"}
                        variant='none'
                        >
                        CREATE ACCOUNT
                    </Button>
                </Box>

                <Box w={500} mt={155} >
                    <Input 
                        placeholder='REPEAT PASSWORD' 
                        mt={5}
                        focusBorderColor="none"
                        borderLeft={"none"} 
                        borderTop={"none"} 
                        borderRight={"none"} 
                        borderRadius={"none"}
                    />
                    <Input 
                        placeholder='PINCODE' 
                        mt={5}
                        focusBorderColor="none"
                        borderLeft={"none"} 
                        borderTop={"none"} 
                        borderRight={"none"} 
                        borderRadius={"none"}
                    />
                    <Input 
                        placeholder='MORE INFO (Optional)' 
                        mt={5}
                        focusBorderColor="none"
                        borderLeft={"none"} 
                        borderTop={"none"} 
                        borderRight={"none"} 
                        borderRadius={"none"}
                    />
                    <Input 
                        placeholder='CITY' 
                        mt={5}
                        focusBorderColor="none"
                        borderLeft={"none"} 
                        borderTop={"none"} 
                        borderRight={"none"} 
                        borderRadius={"none"}
                    />
                </Box>
            </Flex>

            <Flex gap={50} mt={200} ml={200}>
                <Box>
                    <Text><b>HELP</b></Text>
                    <Text>SHOP AT ZARA.COM</Text>
                    <Text>PRODUCT</Text>
                    <Text>GIFT CARD</Text>
                    <Text>PAYMENT</Text>
                    <Text>SHIPPING</Text>
                    <Text>EXCHANGES AND RETURNS</Text>
                    <Text>SHOPS AND COMPANY</Text>
                    <Text>CLOTHES COLLECTION PROGRAMME</Text>
                    <Text>MY ACCOUNT</Text>
                </Box>
                <Box>
                <Text><b>FOLLOW US</b></Text>
                    <Text>NEWSLETTER</Text>
                    <Text>INSTAGRAM</Text>
                    <Text>FACEBOOK</Text>
                    <Text>TWITTER</Text>
                    <Text>PINTEREST</Text>
                    <Text>YOUTUBE</Text>
                    
                </Box>
                <Box>
                <Text><b>COMPANY</b></Text>
                    <Text>ABOUT US</Text>
                    <Text>JOIN LIFE</Text>
                    <Text>OFFICES</Text>
                    <Text>STORES</Text>
                    <Text>WORK WITH US</Text>
                    
                </Box>
                <Box>
                <Text><b>POLICIES</b></Text>
                    <Text>PRIVACY POLICY</Text>
                    <Text>PURCHASE CONDITIONS</Text>
                    <Text>GIFT CARD CONDITIONS</Text>
                    <Text>COOKIES SETTINGS</Text>
                    
                </Box>
            </Flex>
        </Box>
    )
  }
  