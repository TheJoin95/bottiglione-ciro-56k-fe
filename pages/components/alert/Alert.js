import React from "react";
import { chakra, Box, Icon, Flex, useColorModeValue } from "@chakra-ui/react";

import { IoMdCheckmarkCircle, IoMdAlert, BsLightningFill } from "react-icons/io";

const Alert = (props) => {
  const icon = props.color === 'red' ? IoMdAlert : IoMdCheckmarkCircle;
  return (
    <Flex
      position='absolute'
      right='10px'
      top='50px'
      zIndex={999999}
      w="auto"
      bg='transparent'
      // bg={useColorModeValue("#F9FAFB", "gray.600")} // warning, yellow, error, red
      p={50}
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        maxW="sm"
        w="full"
        mx="auto"
        bg={useColorModeValue("white", `${props.color}.800`)}
        shadow="md"
        rounded="lg"
        overflow="hidden"
      >
        <Flex justifyContent="center" alignItems="center" w={12} bg={`${props.color}.500`}>
        {/*<Flex justifyContent="center" alignItems="center" w={12} bg="yellow.500">*/}
          <Icon as={icon} color="white" boxSize={6} />
        </Flex>

        <Box mx={-3} py={2} px={4}>
          <Box mx={3}>
            <chakra.span
              color={useColorModeValue(`${props.color}.500`, `${props.color}.400`)}
              fontWeight="bold"
            >
              {props.title}
            </chakra.span>
            <chakra.p
              color={useColorModeValue(`${props.color}.600`, `${props.color}.200`)}
              fontSize="sm"
            >
              {props.msg}
            </chakra.p>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Alert;