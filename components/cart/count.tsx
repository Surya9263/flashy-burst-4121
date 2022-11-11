import { Box, Button } from "@chakra-ui/react";

export default function Count() {
  return (
    <>
      <Box display="flex">
        <Box
          fontSize="14px"
          p="1px 7px 1px 7px"
          //   onClick={() => }
        >
          -
        </Box>
        <Box p="1px 7px 1px 7px" fontSize="14px">
          1
        </Box>
        <Box
          p="1px 7px 1px 7px"
          fontSize="14px"
          //   onClick={() => }
        >
          +
        </Box>
      </Box>
    </>
  );
}
