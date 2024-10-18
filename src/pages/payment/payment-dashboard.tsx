import { Box, Stack, Typography } from "@mui/material";
import { Navigation } from "../../componnent/common/navigation/navigation";
import { PaymentForm } from "./payment-form";

export const PaymentDashboard = () => {
   return (
      <Box>
         <Box
            sx={{
               backgroundColor: "#161616",
               height: "100vh",
               width: "100vw",
               color: "white",
               textAlign: "center",
            }}
         >
            <Box
               sx={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  zIndex: 1,
               }}
            />
            <Box sx={{ position: "relative", zIndex: 2 }}>
               <Box
                  sx={{
                     flexDirection: "column",
                     gap: "10px",
                     py: 3,
                     px: 3,
                  }}
               >
                  <Navigation />
               </Box>
               <Box
                  sx={{
                     display: "flex",
                     justifyContent: "center",
                     alignItems: "center",
                     flexDirection: "column",
                     height: "100px",
                     textAlign: "center",
                     mt: 10,
                  }}
               >
                  <Typography
                     sx={{
                        fontSize: "40px",
                        fontWeight: 400,
                        color: "#FFFFFF",
                     }}
                  >
                     Premium
                  </Typography>
                  <Stack mt={5}>
                     <Typography
                        sx={{
                           color: "#FFFFFF",
                           fontSize: "20px",
                           lineHeight: "30px",
                        }}
                     >
                        Bayar sekarang dan nikmati streaming music yang kekinian
                     </Typography>
                     <Box
                        sx={{
                           display: "flex",
                           justifyContent: "center",
                           alignItems: "center",
                           textAlign: "center",
                        }}
                     >
                        <Stack direction={"row"} mt={2} spacing={0.5}>
                           <Stack direction={"row"}>
                              <Typography
                                 sx={{ color: "#EE4622", fontWeight: "bold" }}
                              >
                                 DUMB
                              </Typography>
                              <Typography sx={{ fontWeight: "bold" }}>
                                 SOUND
                              </Typography>
                           </Stack>
                           <Typography>:</Typography>

                           <Typography sx={{ fontWeight: "bold" }}>
                              0981312323
                           </Typography>
                        </Stack>
                     </Box>
                  </Stack>
               </Box>
               <PaymentForm />
            </Box>
         </Box>
      </Box>
   );
};
