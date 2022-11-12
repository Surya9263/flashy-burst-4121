import {Box, Input, Button, Flex, Text, Select, RadioGroup, Stack, Radio, InputGroup, InputLeftAddon, Checkbox} from '@chakra-ui/react'
import React, { ChangeEvent, useState } from 'react'
import { ClientNavbar } from '../../components'

export interface User {
	email: string;
	password: string;
    name: string;
    address: string;
    locality: string;
    phone: string;
    repeat_password: string;
    pincode: string;
    more: string;
    city: string;
    select: string;
    radio: string;
}


export default function SignUp() {

    // const [value, setValue] = React.useState('1')

    const [userCredentials, setUserCredentials] = useState<User>({
		email: '',
		password: '',
        name:"",
        address:"",
        locality: "",
        phone: "",
        repeat_password: "",
        pincode: "",
        more: "",
        city: "",
        select: "",
        radio: "",
	});

    const handleSubmit = async (event: React.SyntheticEvent) => {
        event.preventDefault();
		// if (password !== repeat_password) {
		// 	alert("passwords don't match");
		// 	return;
        // }
            
    }


    function handleChange(e:ChangeEvent<HTMLInputElement>) {
    const {name,value} = e.target
    setUserCredentials({...userCredentials,[name]:value});
    // console.log(userCredentials);
    }
    function handleSelect(e:ChangeEvent<HTMLSelectElement>) {
        const {name,value} = e.target
        setUserCredentials({...userCredentials,[name]:value});
        
    }
    // function handleRadio(e:any) {
    //     const {name,value} = e.target
    //     setUserCredentials({...userCredentials,[name]:value});
        
    // }
    console.log(userCredentials);
  
    return (
        <Box>

            <ClientNavbar />
            <form>
            <Flex  mt={200} ml={200} gap={50}>
                <Box  h={"auto"} w={500} >
                
                    <Text fontSize={22}><b>PERSONAL DETAILS</b></Text>
                    <RadioGroup 
                        // id='radio'
                        // name="radio"
                        // onChange={handleRadio}
                        // value={userCredentials.radio}
                        
                        mt={10}
                     >
                    <Stack direction='row'>
                        <Radio value='PERSONAL'>PERSONAL</Radio>
                        <Radio value='COMPANY'>COMPANY</Radio>
                    </Stack>
                    </RadioGroup>
                    
                    <Input 
                        id='email'
                        type='email'
                        name="email"
                        onChange={handleChange}
                        value={userCredentials.email}
                        required
                        placeholder='E-MAIL' 
                        mt={5} 
                        focusBorderColor="none"
                        borderLeft={"none"} 
                        borderTop={"none"} 
                        borderRight={"none"} 
                        borderRadius={"none"}
                    />
                    
                    <Input 
                        id='password'
                        type='password'
                        name="password"
                        onChange={handleChange}
                        value={userCredentials.password}
                        required
                        placeholder='PASSWORD' 
                        mt={5}
                        focusBorderColor="none"
                        borderLeft={"none"} 
                        borderTop={"none"} 
                        borderRight={"none"} 
                        borderRadius={"none"}
                    />
                    
                    
                    <Input
                        id='name'
                        type='name'
                        name="name"
                        onChange={handleChange}
                        value={userCredentials.name}
                        required 
                        placeholder='NAME' 
                        mt={5}
                        focusBorderColor="none"
                        borderLeft={"none"} 
                        borderTop={"none"} 
                        borderRight={"none"} 
                        borderRadius={"none"}
                    />
                    
                    <Input 
                        id='address'
                        type='address'
                        name="address"
                        onChange={handleChange}
                        value={userCredentials.address}
                        required 
                        placeholder='ADDRESS' 
                        mt={5}
                        focusBorderColor="none"
                        borderLeft={"none"} 
                        borderTop={"none"} 
                        borderRight={"none"} 
                        borderRadius={"none"}
                    />
                    
                    <Input 
                        id='locality'
                        type='locality'
                        name="locality"
                        onChange={handleChange}
                        value={userCredentials.locality}
                        required 
                        placeholder='LOCALITY' 
                        mt={5}
                        focusBorderColor="none"
                        borderLeft={"none"} 
                        borderTop={"none"} 
                        borderRight={"none"} 
                        borderRadius={"none"}
                    />
                    
                    <Select 
                            id='select'
                            // type='select'
                            name="select"
                            onChange={handleSelect}
                            value={userCredentials.select}
                            required 
                            placeholder='Select option'
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
                        <Input 
                        id='phone'
                        type='phone'
                        name="phone"
                        onChange={handleChange}
                        value={userCredentials.phone}
                        required 
                         
                        placeholder='TELEPHONE' 
                        />
                    </InputGroup>
                    

                    <Stack spacing={5} direction='column' mt={5}>
                        <Checkbox size='md' colorScheme='blue'>
                            I WISH TO RECEIVE ZARA NEWS ON MY E-MAIL
                        </Checkbox>
                        <Checkbox colorScheme='blue' >
                            I ACCEPT THE PRIVACY STATEMENT
                        </Checkbox>
                    </Stack>
                    
                    <Input
                        type={"submit"}
                        value="CREATE ACCOUNT"
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
                        />
                        
                    
                
                </Box>

                <Box w={500} mt={155} >
                    <Input 
                        id='repeat_password'
                        type='repeat_password'
                        name="repeat_password"
                        onChange={handleChange}
                        value={userCredentials.repeat_password}
                        required 
                        placeholder='REPEAT PASSWORD' 
                        mt={5}
                        focusBorderColor="none"
                        borderLeft={"none"} 
                        borderTop={"none"} 
                        borderRight={"none"} 
                        borderRadius={"none"}
                    />
                    <Input 
                        id='pincode'
                        type='pincode'
                        name="pincode"
                        onChange={handleChange}
                        value={userCredentials.pincode}
                        required 
                        placeholder='PINCODE' 
                        mt={5}
                        focusBorderColor="none"
                        borderLeft={"none"} 
                        borderTop={"none"} 
                        borderRight={"none"} 
                        borderRadius={"none"}
                    />
                    <Input 
                        id='more'
                        type='more'
                        name="more"
                        onChange={handleChange}
                        value={userCredentials.more}
                         
                        placeholder='MORE INFO (Optional)' 
                        mt={5}
                        focusBorderColor="none"
                        borderLeft={"none"} 
                        borderTop={"none"} 
                        borderRight={"none"} 
                        borderRadius={"none"}
                    />
                    <Input 
                        id='city'
                        type='city'
                        name="city"
                        onChange={handleChange}
                        value={userCredentials.city}
                        required
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
            </form>
            

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
  