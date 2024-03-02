import React from "react";
import { Flex, Box, Heading, Link, IconButton } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <Flex as="header" width="full" align="center" justify="space-between" padding={4} bg="blue.500" color="white">
      <Heading as="h1" size="lg" letterSpacing={"tighter"}>
        Study Abroad
      </Heading>
      <Box>
        <Link px={2} href="/">
          Home
        </Link>
        <Link px={2} href="/services">
          Services
        </Link>
        <Link px={2} href="/contact">
          Contact
        </Link>
        {}
        <IconButton size="md" icon={<FaBars />} aria-label={"Open Menu"} display={{ md: "none" }} />
      </Box>
    </Flex>
  );
};

export default Header;
