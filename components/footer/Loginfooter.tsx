import { Box, Flex, Text } from "@chakra-ui/react"

export default function Loginfooter(){
    return(
        <Box w={"100%"} bg="#eee" py="10px" pb="50px">
            <Flex  w={"100%"} flexWrap={"wrap"} justify={"center"} align={"center"}  mt={50} px="30px" direction={"row"} >
                
                <Flex direction={"column"} gap="10px" w={["40%","40%","20%","20%"]} minH="400px">
                    <Text><b>HELP</b></Text>
                    <Text>SHOP AT ZARA.COM</Text>
                    <Text>PRODUCT</Text>
                    <Text>GIFT CARD</Text>
                    <Text>PAYMENT</Text>
                    <Text>SHIPPING</Text>
                    <Text>EXCHANGES AND RETURNS</Text>
                    <Text>SHOPS AND COMPANY</Text>
                    <Text>CLOTHES COLLECTION </Text>
                    <Text>MY ACCOUNT</Text>
                </Flex>
                <Flex direction={"column"} gap="10px" w={["40%","40%","20%","20%"]}  minH="400px">
                <Text><b>FOLLOW US</b></Text>
                    <Text>NEWSLETTER</Text>
                    <Text>INSTAGRAM</Text>
                    <Text>FACEBOOK</Text>
                    <Text>TWITTER</Text>
                    <Text>PINTEREST</Text>
                    <Text>YOUTUBE</Text>
                    
                </Flex>
                <Flex direction={"column"} gap="10px" w={["40%","40%","20%","20%"]} minH="400px">
                <Text><b>COMPANY</b></Text>
                    <Text>ABOUT US</Text>
                    <Text>JOIN LIFE</Text>
                    <Text>OFFICES</Text>
                    <Text>STORES</Text>
                    <Text>WORK WITH US</Text>
                    
                </Flex>
                <Flex direction={"column"} gap="10px" w={["40%","40%","20%","15%"]} minH="400px">
                <Text><b>POLICIES</b></Text>
                    <Text>PRIVACY POLICY</Text>
                    <Text>PURCHASE CONDITIONS</Text>
                    <Text>GIFT CARD CONDITIONS</Text>
                    <Text>COOKIES SETTINGS</Text>
                    
                </Flex>
            </Flex>
            <Text pt="20px" borderTop={"1px solid #ccc"} fontWeight={"bold"} mt="0px" textAlign={"center"}>  Copyright &copy; All Rights Reserved by Takeitnow </Text>
        </Box>
    )
}



