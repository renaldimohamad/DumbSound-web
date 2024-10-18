import React from "react";
import { Dashboard } from "../../pages/dashboard/dashboard";
import { Box } from "@mui/material";
import { ListMusic } from "../../pages/dashboard/list-music";

export const Home = () => {
   return (
      <Box flexDirection={"column"}>
         <Dashboard />
         <ListMusic />
      </Box>
   );
};
