import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    styles: {
        global: {
            body: {
                bg: 'white', // Set the body background to white
                color: 'black', // Set the text color to black
                fontFamily: 'Arial, sans-serif',
            },
        },
    },
    components: {
        Button: {
            baseStyle: {
                borderRadius: 'md',
            },
            variants: {
                solid: {
                    bg: 'black',
                    color: 'white',
                    _hover: {
                        bg: 'gray.700', // Dark gray on hover
                    },
                },
            },
        },
        Input: {
            baseStyle: {
                bg: 'black',
                color: 'white',
                borderRadius: 'md',
                _placeholder: {
                    color: 'gray.400', // Placeholder text color
                },
            },
            variants: {
                outline: {
                    borderColor: 'gray.300',
                    _hover: {
                        borderColor: 'gray.500',
                    },
                },
            },
        },
    },
});

export default theme;
