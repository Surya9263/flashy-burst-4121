import {
  Drawer,
  Box,
  Text,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  DrawerCloseButton,
  Button,
  Input,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  useDisclosure,
} from "@chakra-ui/react";
import { MdAdd } from "react-icons/md";
import React  from "react";
 export default function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef: any = React.useRef();
  
  return (
    <>
      <Box
        ref={btnRef}
        border="1px solid black"
        p="4px 10px 4px 10px"
        onClick={onOpen}
      >
        FILTERS
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      COLOUR
                    </Box>
                    <MdAdd />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Box>
                    <Text>Black</Text>
                    <Text>Brown</Text>
                    <Text>Red</Text>
                    <Text>Orange</Text>
                    <Text>Green</Text>
                    <Text>Pink</Text>
                    <Text>Blue</Text>
                  </Box>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      CHARACTERISTICS
                    </Box>
                    <MdAdd />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Box>
                    {" "}
                    <Text> BRIEFCASE </Text>
                    <Text>BUTTON-DOWN</Text>
                    <Text>COLLAR</Text>
                    <Text>CROSSBODY</Text>
                    <Text>BAG</Text>
                    <Text> DENIM</Text>
                    <Text> FORMAL</Text>
                    <Text>HIGH NECK</Text>
                    <Text> HOODED</Text>
                    <Text> BOOTS</Text>
                  </Box>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      FIT
                    </Box>
                    <MdAdd />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Box>
                    {" "}
                    <Text>RELAXED FIT</Text>
                    <Text> CROPPED</Text>
                    <Text>SLIM FIT</Text>
                    <Text>OVERSIZED</Text>
                    <Text>REGULAR</Text>
                    <Text>FIT</Text>
                    <Text>FLARED</Text>
                    <Text>COMFORTABLE </Text>
                    <Text> CARROT</Text>
                  </Box>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      TYPE OF PRODUCT
                    </Box>
                    <MdAdd />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Box>
                    {" "}
                    <Text>SHIRTS</Text>
                    <Text> CARDIGAN</Text>
                    <Text>TROUSERS</Text>
                    <Text>TIE</Text>
                    <Text>BUCKET</Text>
                    <Text>HAT</Text>
                    <Text>BACKPACK</Text>
                    <Text>BOOTS </Text>
                    <Text>WALLETS</Text>
                  </Box>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      TYPE OF SLEEVE
                    </Box>
                    <MdAdd />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Box>
                    {" "}
                    <Text>LONG SLEEVES</Text>
                    <Text>MEDIUM SLEEVES</Text>
                    <Text>SHORT SLEEVES</Text>
                    <Text>SLEEVELESS</Text>
                  </Box>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      SIZE
                    </Box>
                    <MdAdd />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Box>
                    {" "}
                    <Text>Small</Text>
                    <Text>Medium</Text>
                    <Text>Large</Text>
                    <Text>XL</Text>
                    <Text>XXL</Text>
                    <Text>XXL</Text>
                    <Text>XXXL</Text>
                  </Box>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      MATERIALS
                    </Box>
                    <MdAdd />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Box>
                    {" "}
                    <Text> FAUX </Text>
                    <Text>LEATHER</Text>
                    <Text>QUILTED</Text>
                    <Text>SOCK</Text>
                    <Text> MESH</Text>
                    <Text> DENIM </Text>
                    <Text>COTTON</Text>
                    <Text>LEATHER</Text>
                    <Text> DOUBLE-FACED</Text>
                  </Box>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      PRICE
                    </Box>
                    <MdAdd />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Box>
                    {" "}
                    <Slider aria-label="slider-ex-1" defaultValue={0}>
                      <SliderTrack>
                        <SliderFilledTrack />
                      </SliderTrack>
                      <SliderThumb />
                    </Slider>
                  </Box>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
  

// COLOUR

// CHARACTERISTICS

// FIT

// TYPE OF PRODUCT

// TYPE OF SLEEVE

// SIZE

// SIZES FOOTWEAR/ACCESSORIES

// MATERIALS

// PRICE