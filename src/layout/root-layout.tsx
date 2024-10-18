import { Box } from "@mui/material";
import { Home } from "../componnent/dashboard";

const RootLayout = () => {
   return (
      <>
         <Box sx={{ height: "100vh", display: "flex" }}>
            <Home />
         </Box>
      </>
   );
};

export default RootLayout;
