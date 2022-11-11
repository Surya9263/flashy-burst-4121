import { Box, Button } from "@chakra-ui/react";

export default function Count() {
  return (
    <>
      <Box display="flex" h="42px">
        <Box
          bgColor="white"
          fontSize="14px"
          //disabled={qty === 1}
          //onClick={() => HandleCount(id, -1, qty, price, aprice)}
        >
          -
        </Box>
        <Box bgColor="white" fontSize="15px">
          2
        </Box>
        <Box
          bgColor="white"
          fontSize="14px"
         // onClick={() => HandleCount(id, +1, qty, price, aprice)}
        >
          +
        </Box>
      </Box>
    </>
  );
}
