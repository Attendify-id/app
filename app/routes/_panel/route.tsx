import { Box, Container, Toolbar } from "@mui/material";
import { Outlet } from "@remix-run/react";
import BreadcrumbsLayout from "~/src/components/breadcrumbsLayout";
import NavBar from "~/src/components/navbar";
import Sidebar from "~/src/components/sidebar";

export default function PanelLayout() {
  return (
    <Box display="flex">
      <NavBar />
      <Sidebar />
      <Box component="main" flexGrow={1} p={1}>
        <Toolbar />
        <Container maxWidth="xl">
          <BreadcrumbsLayout />
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
}
