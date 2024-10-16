import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Sidenav from "./Sidenav";
import TopNav from "./TopNav";

const DashboardLayout = ({ title, children }) => {
  return (
    <Flex h="100vh" style={{backgroundColor:"#2B2B2B"}}> {/* Set height of Flex to 100vh */}
      {/* Sidebar */}
      <Box
        display={{
          base: "none", // Hide sidebar on smaller screens
          lg: "flex",   // Show sidebar on large screens
        }}
      >
        <Sidenav />
      </Box>

      {/* Main Content */}
      <Box flexGrow={1}>
        {/* Top Navigation Bar */}
        <TopNav title={title} />

        {/* Page Content */}
        <Box
          overflowX="hidden"
          overflowY="auto"
          h="calc(100vh - 88px)" // Adjust height to avoid overlap with TopNav
          
          maxW="100%"
        >
          {children}
        </Box>
      </Box>
    </Flex>
  );
};

export default DashboardLayout;
