import { Box, Container } from "@mui/system";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";

const Layout = () => {
  return (
    <Box>
      <Container>
        <Header />
        <Outlet />
      </Container>
    </Box>
  );
};

export default Layout;
