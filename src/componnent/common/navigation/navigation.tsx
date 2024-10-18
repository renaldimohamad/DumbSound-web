import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";

export const Navigation = () => {
   return (
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
               <Typography sx={{ color: "#EE4622", fontWeight: "bold" }}>
                  DUMB
               </Typography>
               <Typography sx={{ fontWeight: "bold" }}>SOUND</Typography>
            </Stack>
         </Stack>

         <Stack direction={"row"} spacing={2}>
            <Avatar
               src="public/assets/images/Ellipse 1.png"
               sx={{ width: 50, height: 50 }}
            />
         </Stack>
      </Stack>
   );
};
