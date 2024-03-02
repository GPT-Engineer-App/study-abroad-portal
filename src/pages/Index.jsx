import React from "react";
import { Box, Container, Flex, Heading, Text, Button, Image, VStack, HStack, Icon, SimpleGrid, useColorModeValue, Link, Stack, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { FaGlobeAmericas, FaGraduationCap, FaHandsHelping, FaRegEnvelope } from "react-icons/fa";

const Index = () => {
  const bg = useColorModeValue("gray.100", "gray.700");
  const color = useColorModeValue("gray.700", "gray.100");

  return (
    <Box>
      <Container maxW="container.xl">
        {/* Hero Section */}
        <Flex align="center" justify="center" py={20} direction={{ base: "column", md: "row" }}>
          <VStack align="start" spacing={5} mb={{ base: 12, md: 0 }}>
            <Heading as="h1" size="xl">
              Explore the World of Education
            </Heading>
            <Text fontSize="lg" color={color}>
              Kickstart your international study journey with our expert guidance and resources.
            </Text>
            <Button colorScheme="blue" size="lg" leftIcon={<FaGlobeAmericas />}>
              Get Started
            </Button>
          </VStack>
          <Image src="https://images.unsplash.com/photo-1604808621558-b09365436e51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdHVkeSUyMGFicm9hZHxlbnwwfHx8fDE3MDkzOTQ2NzB8MA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="500px" objectFit="cover" alt="Study Abroad" ml={{ md: 10 }} />
        </Flex>

        {/* Services Section */}
        <VStack spacing={10} py={10}>
          <Heading as="h2" size="lg">
            Our Services
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <ServiceBox icon={FaGraduationCap} title="University Admissions" description="Get into your dream university with our personalized admission counseling." />
            <ServiceBox icon={FaHandsHelping} title="Visa Assistance" description="Navigate the visa application process with ease with our expert advice." />
            <ServiceBox icon={FaGlobeAmericas} title="Travel Arrangements" description="We'll help you plan your study abroad experience, from flights to accommodation." />
          </SimpleGrid>
        </VStack>

        {/* Contact Section */}
        <Flex align="center" direction="column" bg={bg} py={20} mt={10}>
          <Heading as="h3" size="lg" mb={6}>
            Contact Us
          </Heading>
          <Stack spacing={4} maxW="lg">
            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="message">
              <FormLabel>Message</FormLabel>
              <Textarea />
            </FormControl>
            <Button leftIcon={<FaRegEnvelope />} colorScheme="blue" variant="solid">
              Send Message
            </Button>
          </Stack>
        </Flex>

        {/* Footer Section */}
        <Box py={10}>
          <Text align="center" color={color}>
            © {new Date().getFullYear()} Study Abroad, Inc. All rights reserved.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

const ServiceBox = ({ icon, title, description }) => (
  <VStack spacing={3} align="start">
    <Icon as={icon} w={10} h={10} color="blue.500" />
    <Heading as="h4" size="md">
      {title}
    </Heading>
    <Text color="gray.600">{description}</Text>
  </VStack>
);

export default Index;
