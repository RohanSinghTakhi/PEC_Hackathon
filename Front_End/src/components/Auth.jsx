// src/components/Auth.js
import React, { useState } from 'react';
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Heading,
    useToast,
} from '@chakra-ui/react';

const Auth = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const toast = useToast();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const success = await onLogin(username, password);
        if (!success) {
            toast({
                title: 'Login failed.',
                description: "Check your credentials and try again.",
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        }
    };

    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="100vh"
            backgroundColor="white"
        >
            <Box
                p={8}
                borderRadius="md"
                boxShadow="lg"
                width="400px"
                backgroundColor="white"
                border="1px solid black"
            >
                <Heading as="h2" size="lg" textAlign="center" mb={6}>
                    Login
                </Heading>
                <form onSubmit={handleSubmit}>
                    <FormControl mb={4} isRequired>
                        <FormLabel htmlFor="username">Username</FormLabel>
                        <Input
                            id="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            borderColor="black"
                            _hover={{ borderColor: 'gray.600' }}
                            _focus={{ borderColor: 'blue.400', boxShadow: '0 0 0 1px blue.400' }}
                        />
                    </FormControl>
                    <FormControl mb={4} isRequired>
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <Input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            borderColor="black"
                            _hover={{ borderColor: 'gray.600' }}
                            _focus={{ borderColor: 'blue.400', boxShadow: '0 0 0 1px blue.400' }}
                        />
                    </FormControl>
                    <Button
                        type="submit"
                        width="full"
                        backgroundColor="black"
                        color="white"
                        _hover={{ backgroundColor: 'gray.700' }}
                    >
                        Login
                    </Button>
                </form>
            </Box>
        </Box>
    );
};

export default Auth;
