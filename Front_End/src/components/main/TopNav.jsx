import {
  Box,
  HStack,
  Heading,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { FaBars, FaUserTie } from "react-icons/fa";
import { Link } from "react-router-dom";

const TopNav = ({ title, onOpen }) => {
  return (
    <Box px="4" style={{ marginLeft: "3px" }} bg="#161616"> {/* Changed background color */}
      <HStack maxW="70rem" h="16" justify="space-between" mx="auto">
        <Icon
          as={FaBars}
          onClick={onOpen}
          display={{
            base: "block",
            lg: "none",
          }}
          color="white" // Set the icon color to white
        />
        <Heading fontWeight="medium" fontSize="28px" color="white"> 
          {title}
        </Heading>

        <Menu>
          <MenuButton>
            <Icon as={FaUserTie} fontSize="24px" color="white" /> 
          </MenuButton>
          <MenuList>
            <MenuItem color="black">Support</MenuItem> 
            <Link to="/">
              <MenuItem color="black">Logout</MenuItem> 
            </Link>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default TopNav;
