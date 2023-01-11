import { Box, Container } from "@mui/system";
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Box>
      <Container>
        <Outlet />
      </Container>
    </Box>
  );
};

export default Layout;
