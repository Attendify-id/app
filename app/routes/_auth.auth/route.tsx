import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { FormEvent, useState } from "react";
import AlertDialog from "~/src/components/alertDialog";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Auth - Attendify" },
    {
      name: "description",
      content:
        "Attendify is an online attendance application designed to simplify attendance management for companies or institutions. This application streamlines the process of recording employee or event participant attendance with high efficiency and accuracy.",
    },
  ];
};

export default function AuthPage() {
  const [isValidateUsername, setIsValidateUsername] = useState<string>("");
  const [isValidatePassword, setIsValidatePassword] = useState<string>("");
  const [isUsername, setIsUsername] = useState<string>("");
  const [isPassword, setIsPassword] = useState<string>("");
  const [isOpen, setIsOpenDialog] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const Validate = (username: string, password: string): boolean => {
    if (username == "") {
      setIsValidateUsername("this field is required");
    } else if (username.length > 16) {
      setIsValidateUsername("max 16 character");
    } else if (username.length < 6) {
      setIsValidateUsername("min 6 character");
    }
    if (password == "") {
      setIsValidatePassword("this field is required");
    } else if (password.length < 6) {
      setIsValidatePassword("min 6 character");
    } else if (password.length > 16) {
      setIsValidatePassword("max 16 character");
    }
    if (username == "" || password == "" || username.length < 6 || username.length > 16 || password.length < 6 || password.length > 16) {
      return false;
    }
    return true;
  };

  const submitHandler = () => {
    const validate = Validate(isUsername, isPassword);
    if (validate) {
      setIsLoading(true);

      //Simulate Login
      setTimeout(() => {
        setIsLoading(false);
        setIsOpenDialog(true);
      }, 2000);
    }
  };

  const handleClose = () => {
    setIsOpenDialog(false);
  };

  return (
    <>
      <AlertDialog title="Warning" content="Username or Password is wrong" open={isOpen} handleClose={handleClose} />
      <Stack sx={{ display: "flex", width: "100%", alignItems: "center" }}>
        <Box>
          <img src="/assets/logo.png" width={250} height={80} alt="logo attendify" />
        </Box>
        <Typography variant="h5" component="h1" mb="2rem" sx={{ fontFamily: "poppins", fontSize: "25px", color: "gray.500" }}>
          Sign In
        </Typography>
        <Stack spacing={2}>
          <TextField
            onChange={(e) => {
              setIsUsername(e.target.value), setIsValidateUsername("");
            }}
            error={isValidateUsername ? true : false}
            helperText={isValidateUsername}
            label="Username"
            variant="outlined"
            required
            disabled={isLoading}
            sx={{ width: "400px" }}
          />
          <TextField
            onChange={(e) => {
              setIsPassword(e.target.value), setIsValidatePassword("");
            }}
            error={isValidatePassword ? true : false}
            helperText={isValidatePassword}
            label="Password"
            type="password"
            variant="outlined"
            required
            disabled={isLoading}
            sx={{ width: "400px", paddingBottom: "0.5rem" }}
          />
          <Button onClick={submitHandler} type="submit" variant="contained" disableElevation disabled={isLoading} sx={{ paddingY: "0.7rem", borderRadius: "10px", boxShadow: "none" }}>
            Sign In
          </Button>
        </Stack>
      </Stack>
    </>
  );
}
