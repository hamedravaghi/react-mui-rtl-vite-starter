import { Outlet } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const MainLayout = () => {
  return (
    <Box>
      <Typography>this is MainLayout</Typography>
      <Outlet />
    </Box>
  );
};

export default MainLayout;
