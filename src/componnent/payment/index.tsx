import React from "react";
import { Navigation } from "../common/navigation/navigation";
import { Box } from "@mui/material";
import { PaymentDashboard } from "../../pages/payment/payment-dashboard";

export const Payment = () => {
   return (
      <Box>
         <PaymentDashboard />
      </Box>
   );
};
