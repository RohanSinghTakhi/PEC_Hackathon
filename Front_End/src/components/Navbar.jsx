import React from 'react';
import { Box, Flex, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Navbar = ({ user, logout }) => {
    return (
        <Flex justifyContent="space-between" alignItems="center" p={4} bg="white" boxShadow="sm">
            <Text fontSize="xl" color="black">My App</Text>
            <Box>
                {user ? (
                    <Flex alignItems="center">
                        <Text color="black" mr={3}>{user.username}</Text>
                        <Button onClick={logout} variant="solid">Logout</Button>
                    </Flex>
                ) : (
                    <Box>
                        <Button variant="outline" colorScheme="black" as={Link} to="/login" mr={3}>Login</Button>
                        <Button variant="outline" colorScheme="black" as={Link} to="/register">Register</Button>
                    </Box>
                )}
            </Box>
        </Flex>
    );
};

export default Navbar;
