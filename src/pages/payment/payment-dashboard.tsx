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
                  }}
               >
                        <Navigation 
                    bgColor={"#1F1F1F"}
                    px={8}
                    py={1}
                    boxShadow={"3px 4px 15px black"}/>
                
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
                     <Box
                        sx={{
                           display: "flex",
                           flexDirection: "center",
                           justifyContent: "center",
                           alignItems: "center",
                           gap: 1,
                        }}
                     >
                        <Typography
                           sx={{
                              color: "#FFFFFF",
                              fontSize: "18px",
                           }}
                        >
                           Bayar sekarang dan nikmati streaming music yang
                           kekinian dari
                        </Typography>

                        <Stack direction={"row"}>
                           <Typography
                              sx={{
                                 color: "#EE4622",
                                 fontWeight: "bold",
                                 fontSize: "18px",
                              }}
                           >
                              DUMB
                           </Typography>
                           <Typography
                              sx={{ fontWeight: "bold", fontSize: 18 }}
                           >
                              SOUND
                           </Typography>
                        </Stack>
                     </Box>
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
                                 sx={{
                                    color: "#EE4622",
                                    fontWeight: "bold",
                                    fontSize: 18,
                                 }}
                              >
                                 DUMB
                              </Typography>
                              <Typography
                                 sx={{ fontWeight: "bold", fontSize: 18 }}
                              >
                                 SOUND
                              </Typography>
                           </Stack>
                           <Typography>:</Typography>

                           <Typography
                              sx={{ fontWeight: "bold", fontSize: 18 }}
                           >
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
