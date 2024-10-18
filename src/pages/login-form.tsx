import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Input, Stack, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { z } from "zod";

const loginSchema = z.object({
   email: z
      .string()
      .min(1, "Email is required")
      .email("Please enter a valid email"),
   password: z.string().min(6, "Password must be at least 6 characters long"),
});

export const LoginForm = () => {
   const navigate = useNavigate();

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({
      resolver: zodResolver(loginSchema),
   });

   const onSubmit = (data) => {
      console.log("🚀 ~ onSubmit ~ data:", data);

      if (data) {
         setTimeout(() => {
            navigate("/");
         });
      }
   };

   return (
      <>
         <Box
            sx={{
               backgroundColor: "#161616",
               width: "100vw",
               height: "100vh",
            }}
         >
            <Box
               sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
               }}
            >
               <form onSubmit={handleSubmit(onSubmit)}>
                  <Stack
                     spacing={2}
                     width={350}
                     flex={1}
                     justifyContent="center"
                     sx={{
                        height: "100vh",
                     }}
                  >
                     <Typography
                        color="white"
                        fontWeight={"bold"}
                        fontSize={25}
                     >
                        Login
                     </Typography>
                     <Input
                        disableUnderline
                        placeholder="Email"
                        sx={{
                           width: "100%",
                           border: "2px solid #D2D2D2",
                           color: "white",
                           borderRadius: "8px",
                           padding: "5px",
                           backgroundColor: "#3A3A3A",
                        }}
                        {...register("email")}
                     />
                     {errors.email && (
                        <Typography color="red">
                           {errors.email.message?.toString()}
                        </Typography>
                     )}

                     <Input
                        disableUnderline
                        placeholder="Password"
                        type="password"
                        sx={{
                           width: "100%",
                           border: "2px solid #D2D2D2",
                           color: "white",
                           borderRadius: "8px",
                           padding: "5px",
                           backgroundColor: "#3A3A3A",
                        }}
                        {...register("password")}
                     />
                     {errors.password && (
                        <Typography color="red">
                           {errors.password.message?.toString()}
                        </Typography>
                     )}

                     <Button
                        type="submit"
                        variant="contained"
                        sx={{
                           backgroundColor: "#EE4622",
                           textTransform: "none",
                        }}
                     >
                        Login
                     </Button>

                     <Stack direction="row" spacing={0.5}>
                        <Typography color="#D2D2D2">
                           Don't have an account?
                        </Typography>
                        <Stack
                           direction={"row"}
                           spacing={0.5}
                           alignItems={"center"}
                        >
                           <Typography color="#D2D2D2">klik</Typography>

                           <Link to={"/auth/register"}>
                              <Typography color="white"> Here</Typography>
                           </Link>
                        </Stack>
                     </Stack>
                  </Stack>
               </form>
            </Box>
         </Box>
      </>
   );
};
