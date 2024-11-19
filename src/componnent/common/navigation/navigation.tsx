import {  Box, Stack, Typography } from "@mui/material";
import useStore from "../../../stores/hook";
import { Dropdown } from "./dropdown";
import { LoginForm } from "../../../pages/login/login-form";
import { RegisterForm } from "../../../pages/register/register-form";

export const Navigation = ({ bgColor, px, py, boxShadow }: any) => {
   const { isLogin } = useStore();
   
   return (
      <>
      <Stack
         direction={"row"}
         alignItems={"center"}
         justifyContent={"space-between"}
         spacing={1}
         sx={{
            backgroundColor: bgColor,
            py: py,
            px: px,
            boxShadow: boxShadow,
         }}
      >
         <Stack direction={"row"} alignItems={"center"} spacing={1}>
            <img
               src="assets/images/logo-shapes.png"
               alt="Logo"
               style={{ width: "30px", height: "30px" }}
            />
            <Stack direction={"row"}>
               <Typography sx={{ color: "#EE4622", fontWeight: "bold" }}>
                  DUMB
               </Typography>
               <Typography sx={{ fontWeight: "bold" }}>SOUND</Typography>
            </Stack>
         </Stack>

         <Stack direction={"row"} spacing={2}>
            {isLogin ? (
               <Dropdown />
            ) : (
               <>
                  <LoginForm />
                  <RegisterForm />
               </>
            )}
         </Stack>
      </Stack>
      </>
   );
};
