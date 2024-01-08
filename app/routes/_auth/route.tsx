import { Container } from "@mui/material";
import { Outlet } from "@remix-run/react";

export default function AuthLayout() {
  return (
    <Container
      sx={{
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Outlet />
    </Container>
  );
}
