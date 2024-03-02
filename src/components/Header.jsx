import React from "react";
import { Box, Flex, Text, Button, useColorModeValue, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Header = () => {
  const bg = useColorModeValue("gray.200", "gray.700");
  const color = useColorModeValue("gray.800", "white");

  return (
    <Box bg={bg} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box>
          <Link as={RouterLink} to="/">
            <Text fontSize="lg" fontWeight="bold" color={color}>
              EDUBALTIC
            </Text>
          </Link>
        </Box>
        <Flex alignItems={"center"}>
          <Button as={RouterLink} to="/" variant={"solid"} colorScheme={"blue"} size={"sm"} mr={4}>
            Home
          </Button>
          <Button as={RouterLink} to="/about" variant={"solid"} colorScheme={"blue"} size={"sm"} mr={4}>
            About Us
          </Button>
          <Button as={RouterLink} to="/contact" variant={"solid"} colorScheme={"blue"} size={"sm"}>
            Contact
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
