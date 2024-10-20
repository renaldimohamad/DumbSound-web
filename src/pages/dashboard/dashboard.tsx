import { Box, Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
   const navigate = useNavigate();

   const login = () => {
      navigate("/auth/login");
   };

   const register = () => {
      navigate("/payment");
   };

   return (
      <Box>
         <Box
            sx={{
               position: "relative",
               height: "50vh",
               width: "100vw",
               backgroundImage: "url(assets/images/dashboard.png.png)",
               backgroundSize: "cover",
               backgroundPosition: "center",
               color: "white",
               textAlign: "center",
               overflow: "hidden",
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
                  <Stack
                     direction={"row"}
                     alignItems={"center"}
                     justifyContent={"space-between"}
                     spacing={1}
                  >
                     <Stack direction={"row"} alignItems={"center"} spacing={1}>
                        <img
                           src="assets/images/logo-shapes.png"
                           alt="Logo"
                           style={{ width: "30px", height: "30px" }}
                        />
                        <Stack direction={"row"} spacing={0.5}>
                           <Typography
                              sx={{ color: "#EE4622", fontWeight: "bold" }}
                           >
                              DUMB
                           </Typography>
                           <Typography sx={{ fontWeight: "bold" }}>
                              SOUND
                           </Typography>
                        </Stack>
                     </Stack>

                     <Stack direction={"row"} spacing={2}>
                        <Button
                           sx={{
                              border: "1px solid #FFFFFF",
                              width: "120px",
                              color: "#FFFFFF",
                              textTransform: "none",
                           }}
                           onClick={login}
                        >
                           Login
                        </Button>
                        <Button
                           sx={{
                              width: "120px",
                              backgroundColor: "#EE4622",
                              color: "#FFFFFF",
                              textTransform: "none",
                           }}
                           onClick={register}
                        >
                           Register
                        </Button>
                     </Stack>
                  </Stack>
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
                     Connect on DumbSound
                  </Typography>
                  <Stack mt={2}>
                     <Typography
                        sx={{
                           color: "#FFFFFF",
                           fontSize: "20px",
                           lineHeight: "30px",
                        }}
                     >
                        Discovery, Stream, and share a constantly expanding mix
                        of music
                     </Typography>
                     <Typography sx={{ color: "#FFFFFF", fontSize: "20px" }}>
                        from emerging and major artists around the world
                     </Typography>
                  </Stack>
               </Box>
            </Box>
         </Box>
      </Box>
   );
};
