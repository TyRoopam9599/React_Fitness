import React from "react";
import { Box, Stack, Typography, Link } from "@mui/material";
import Logo from "../assets/icons/logo.png";

const Footer = () => (
  <Box
    sx={{
      backgroundColor: "#f5f5f5",
      padding: "20px",
      textAlign: "center",
      borderTop: "1px solid #ccc",
      mt:"80px"
    }}
  >
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      <img
        src={Logo}
        alt="logo"
        style={{ width: "100px", height: "100px", borderRadius: 50 }}
      />
    </Stack>
    <Typography variant="body2" color="textSecondary">
      © {new Date().getFullYear()} Fitness Club. All rights reserved.
    </Typography>
    <Typography variant="body2" color="textSecondary" mt={1}>
      Built with{" "}
      <Link
        href="https://reactjs.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        React
      </Link>{" "}
      and{" "}
      <Link href="https://mui.com/" target="_blank" rel="noopener noreferrer">
        Material-UI
      </Link>
      .
    </Typography>
  </Box>
);

export default Footer;
