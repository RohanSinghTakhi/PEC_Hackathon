import { Box, HStack, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { GrResources } from "react-icons/gr";
import { IoSettingsSharp } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

const Sidenav = () => {
  const location = useLocation();

  const isActiveLink = (link) => {
    return location.pathname === link;
  };

  const navLinks = [
    {
      icon: GrResources,
      text: "Sources",
      link: "/sources", // Ensure you provide a link for the nav
    },
    // Add more nav links here as needed
  ];

  return (
    <Stack
      bg="#161616" // Changed background color
      justify="space-between"
      boxShadow={{
        base: "none",
        lg: "lg",
      }}
      w={{
        base: "full",
        lg: "16rem",
      }}
      h="100vh"
    >
      <Box>
        <Heading textAlign="center" fontSize="20px" as="h1" pt="3.5rem" color="white"> {/* Set Heading color to white */}
          NotifyLM
        </Heading>
        <Box mt="6" mx="3">
          {navLinks.map((nav) => (
            <Link to={nav.link} key={nav.text}>
              <HStack
                bg={isActiveLink(nav.link) ? "#F3F3F7" : "transparent"}
                color={isActiveLink(nav.link) ? "#171717" : "white"} // Set active link text color to white
                borderRadius="10px"
                py="3"
                px="4"
                _hover={{
                  bg: "#2B2B2B",
                  color: "black", // Change text color to black on hover
                }}
              >
                <Icon as={nav.icon} color="white" /> {/* Set icon color to white */}
                <Text fontSize="14px" fontWeight="medium" color="white"> {/* Set text color to white */}
                  {nav.text}
                </Text>
              </HStack>
            </Link>
          ))}
        </Box>
      </Box>

      <Box mt="6" mx="3" mb="6">
        <Link to="/support">
          <HStack
            borderRadius="10px"
            py="3"
            px="4"
            bg={isActiveLink("/setting") ? "#F3F3F7" : "transparent"}
            color={isActiveLink("/setting") ? "#171717" : "white"} // Set text color to white
            _hover={{
              bg: "#2B2B2B",
              color: "black", // Change text color to black on hover
            }}
          >
            <Icon as={IoSettingsSharp} color="white" /> {/* Set icon color to white */}
            <Text fontSize="14px" fontWeight="medium" color="white"> {/* Set text color to white */}
              Setting
            </Text>
          </HStack>
        </Link>
      </Box>
    </Stack>
  );
};

export default Sidenav;
