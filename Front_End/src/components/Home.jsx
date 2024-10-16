// src/components/Home.js
import React from 'react';
import {
    Box,
    Button,
    Heading,
    Text,
    Stack,
    SimpleGrid,
    Flex,
    Container,
} from '@chakra-ui/react';

const Home = () => {
    return (
        <Container maxW="container.xl" py={10}>
            <Box textAlign="center" mb={12}>
                <Heading as="h1" size="4xl" mb={4}>
                    Welcome to Our Platform
                </Heading>
                <Text fontSize="lg" color="gray.600" mb={6}>
                    Discover the power of Generative AI to elevate your experience.
                </Text>
                <Button colorScheme="blue" size="lg">
                    Get Started
                </Button>
            </Box>

            <Stack spacing={10}>
                <Heading as="h2" size="2xl" textAlign="center">
                    Features
                </Heading>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
                    <Feature
                        title="AI-Powered Insights"
                        description="Utilize our advanced AI tools to gain insights that matter."
                    />
                    <Feature
                        title="Seamless Integration"
                        description="Integrate our services with your existing workflows effortlessly."
                    />
                    <Feature
                        title="User-Friendly Interface"
                        description="Enjoy a clean and intuitive interface designed for efficiency."
                    />
                </SimpleGrid>
            </Stack>

            <Flex as="footer" justify="center" mt={12} py={4}>
                <Text color="gray.500">
                    &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
                </Text>
            </Flex>
        </Container>
    );
};

const Feature = ({ title, description }) => (
    <Box
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="md"
        p={5}
        textAlign="center"
        _hover={{ boxShadow: 'lg', transition: '0.2s' }}
    >
        <Heading as="h3" size="lg" mb={3}>
            {title}
        </Heading>
        <Text color="gray.600">{description}</Text>
    </Box>
);

export default Home;
