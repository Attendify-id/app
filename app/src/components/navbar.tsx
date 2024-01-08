import { AppBar, Box, Button, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

import { useState } from "react";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function NavBar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="fixed" sx={{ zIndex: 801, justifyContent: "space-between", display: "flex", flexGrow: 1, boxShadow: "none" }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <img src="/assets/logo-white.png" alt="logo" width={150} height={50} />
        </Box>
        <div>
          <Tooltip title="Account Settings">
            <Button aria-label="account of current user" sx={{ cursor: "pointer" }} aria-controls="menu-appbar" aria-haspopup="true" onClick={handleMenu} color="inherit">
              <Typography component="label" sx={{ marginRight: "0.5rem", cursor: "pointer" }}>
                MUHAMAD FADLI AQIL
              </Typography>
              <AccountCircle />
            </Button>
          </Tooltip>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            sx={{ top: "2.5rem", boxShadow: "none" }}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>My Account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
}
