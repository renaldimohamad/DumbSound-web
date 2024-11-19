import { Box, Stack, Typography } from "@mui/material";
import { Navigation } from "../../componnent/common/navigation/navigation";

export const Dashboard = () => {
   return (
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
            <Navigation showNav={false} px={8} py={2} />
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
                     Discovery, Stream, and share a constantly expanding mix of
                     music
                  </Typography>
                  <Typography sx={{ color: "#FFFFFF", fontSize: "20px" }}>
                     from emerging and major artists around the world
                  </Typography>
               </Stack>
            </Box>
         </Box>
      </Box>
   );
};
