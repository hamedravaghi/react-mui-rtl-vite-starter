import { Outlet } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Pattern from "../assets/images/pattern.png";

const AuthLayout = () => {
  return (
    <Box
      style={{
        width: "100vw",
        height: "100vh",
        // backgroundColor: "yellow",
        backgroundImage: `url(${Pattern})`,
      }}
    >
      <Typography>this is AuthLayout</Typography>
      <Typography>this is AuthLayout</Typography>
      <Typography>this is AuthLayout</Typography>
      <Outlet />
    </Box>
  );
};

export default AuthLayout;
