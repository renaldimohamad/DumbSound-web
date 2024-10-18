import { Box, Button, Input, Stack, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";

const registerSchema = z.object({
   email: z
      .string()
      .min(1, "Email is required")
      .email("Please enter a valid email"),
   password: z.string().min(6, "Password must be at least 6 characters long"),
});

export const RegisterForm = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({
      resolver: zodResolver(registerSchema),
   });

   const onSubmit = (data) => {
      console.log("🚀 ~ onSubmit ~ data:", data);
   };

   return (
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
                  <Typography color="white" fontWeight={"bold"} fontSize={25}>
                     Register
                  </Typography>

                  {/* Email Input */}
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

                  {/* Password Input */}
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

                  {/* Full Name Input */}
                  <Input
                     disableUnderline
                     placeholder="Full Name"
                     sx={{
                        width: "100%",
                        border: "2px solid #D2D2D2",
                        color: "white",
                        borderRadius: "8px",
                        padding: "5px",
                        backgroundColor: "#3A3A3A",
                     }}
                     {...register("fullName")}
                  />
                  {errors.fullName && (
                     <Typography color="red">
                        {errors.fullName.message?.toString()}
                     </Typography>
                  )}

                  <Input
                     disableUnderline
                     placeholder="Gender"
                     sx={{
                        width: "100%",
                        border: "2px solid #D2D2D2",
                        color: "white",
                        borderRadius: "8px",
                        padding: "5px",
                        backgroundColor: "#3A3A3A",
                     }}
                     {...register("gender")}
                  />
                  {errors.gender && (
                     <Typography color="red">
                        {errors.gender.message?.toString()}
                     </Typography>
                  )}

                  <Input
                     disableUnderline
                     placeholder="Phone"
                     sx={{
                        width: "100%",
                        border: "2px solid #D2D2D2",
                        color: "white",
                        borderRadius: "8px",
                        padding: "5px",
                        backgroundColor: "#3A3A3A",
                     }}
                     {...register("phone")}
                  />
                  {errors.phone && (
                     <Typography color="red">
                        {errors.phone.message?.toString()}
                     </Typography>
                  )}
                  <Input
                     disableUnderline
                     placeholder="Address"
                     sx={{
                        width: "100%",
                        border: "2px solid #D2D2D2",
                        color: "white",
                        borderRadius: "8px",
                        padding: "5px",
                        backgroundColor: "#3A3A3A",
                     }}
                     {...register("address")}
                  />
                  {errors.address && (
                     <Typography color="red">
                        {errors.address.message?.toString()}
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
                     Register
                  </Button>

                  <Stack direction="row" spacing={0.5}>
                     <Typography color="#D2D2D2">
                        Already have an account?
                     </Typography>
                     <Link to={"/auth/login"}>
                        <Typography color="white" fontWeight={"bold"}>
                           Here
                        </Typography>
                     </Link>
                  </Stack>
               </Stack>
            </form>
         </Box>
      </Box>
   );
};
