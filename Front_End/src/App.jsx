import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ChakraProvider, useToast } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Auth from './components/Auth';
import Home from './components/Home';
import Register from './components/Register';
import theme from './theme';
import useAuth from './hooks/useAuth'; // Custom hook for auth

const App = () => {
    const { user, login, register, logout } = useAuth();
    const toast = useToast(); // Using Chakra UI's toast

    const handleRegister = async (username, password, email) => {
        const success = await register(username, password, email);
        if (success) {
            toast({
                title: 'Registration successful!',
                description: "Please log in to your account.",
                status: 'success',
                duration: 3000,
                isClosable: true,
            });
        }
    };

    return (
        <ChakraProvider theme={theme}>
            <Router>
                <Navbar user={user} logout={logout} />
                <Routes>
                    <Route path="/register" element={user ? <Navigate to="/home" /> : <Register onRegister={handleRegister} />} />
                    <Route path="/login" element={user ? <Navigate to="/home" /> : <Auth onLogin={login} />} />
                    <Route path="/home" element={user ? <Home /> : <Navigate to="/login" />} />
                    <Route path="/" element={<Navigate to="/login" />} />
                </Routes>
            </Router>
        </ChakraProvider>
    );
};

export default App;
