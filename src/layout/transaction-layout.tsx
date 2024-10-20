import { Box } from "@mui/material";
import { Transtraction } from "../componnent/incoming-transaction";

export const TransactionLayout = () => {
  return (
    <>
      <Box sx={{ height: "100vh", display: "flex" }}>
        <Transtraction />
      </Box>
    </>
  );
};
