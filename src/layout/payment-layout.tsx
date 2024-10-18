import { Box } from "@mui/material";
import { Payment } from "../componnent/payment";

const PaymentLayout = () => {
   return (
      <>
         <Box sx={{ height: "100vh", display: "flex" }}>
            <Payment />
         </Box>
      </>
   );
};

export default PaymentLayout;
