import { Box, Flex, Text } from "@chakra-ui/react"

export default function Loginfooter(){
    return(
        <Box w={"100%"}>
            <Flex w={"100%"} flexWrap={"wrap"} justify={"center"} align={"center"} gap={50} mt={200} px="35px" direction={['column', 'column','row','row']} >
                <Box w={["40%","40%","20%","20%"]}>
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
                </Box>
                <Box w={["40%","40%","20%","20%"]}>
                <Text><b>FOLLOW US</b></Text>
                    <Text>NEWSLETTER</Text>
                    <Text>INSTAGRAM</Text>
                    <Text>FACEBOOK</Text>
                    <Text>TWITTER</Text>
                    <Text>PINTEREST</Text>
                    <Text>YOUTUBE</Text>
                    
                </Box>
                <Box w={["40%","40%","20%","20%"]}>
                <Text><b>COMPANY</b></Text>
                    <Text>ABOUT US</Text>
                    <Text>JOIN LIFE</Text>
                    <Text>OFFICES</Text>
                    <Text>STORES</Text>
                    <Text>WORK WITH US</Text>
                    
                </Box>
                <Box w={["40%","40%","20%","20%"]}>
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



