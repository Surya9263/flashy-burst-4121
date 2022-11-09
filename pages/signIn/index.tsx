import {Box, Input, Button, Flex, Text, LinkBox} from '@chakra-ui/react'
import Link from 'next/link';



export default function Login() {

  
    return (
        <Box>
            
            <Flex gap={200} mt={200} ml={200}>
                <Box  h={"auto"} w={250} >
                    <Text fontSize={22}><b>LOG IN</b></Text>
                    <Input 
                        placeholder='E-MAIL' 
                        mt={10} 
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
                    <Text 
                        fontSize={9} 
                        mt={10}
                        >
                        HAVE YOU FORGOTTEN YOUR PASSWORD?
                    </Text>
                    <Button
                        fontSize={18} 
                        mt={50}
                        size='md'
                        height='45px'
                        width='250px'
                        border='0'
                        bg={"black"}
                        color={"white"}
                        borderRadius={"none"}
                        variant='none'
                        >
                        LOG IN
                    </Button>
                </Box>

                <Box h={400} w={400}>
                    <Text fontSize={22}><b>REGISTER</b></Text>
                    <Text 
                        fontSize={14} 
                        mt={5}
                        >
                        IF YOU STILL DON'T HAVE A <b>ZARA.COM</b> ACCOUNT, USE THIS OPTION TO ACCESS THE REGISTRATION FORM.
                        <br></br>
                        BY GIVING US YOUR DETAILS, PURCHASING IN <b>ZARA.COM</b> WILL BE FASTER AND AN ENJOYABLE EXPERIENCE.
                    </Text>

                    <Button
                        fontSize={18} 
                        mt={140}
                        size='md'
                        height='45px'
                        width='300px'
                        border='0'
                        bg={"black"}
                        color={"white"}
                        borderRadius={"none"}
                        variant='none'
                        >
                        <Link href="/pages/signup/index.tsx">CREATE ACCOUNT</Link>
                    </Button>
                    
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
  