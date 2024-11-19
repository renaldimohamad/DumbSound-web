import {
   Box,
   Button,
   FormHelperText,
   Input,
   Modal,
   Stack,
   Typography,
} from "@mui/material"
import React from "react"
import {Controller, SubmitHandler} from "react-hook-form"
import {Link} from "react-router-dom"
import {ILoginForm} from "../../types/login"
import {useLogin} from "../../services/login/use-login"
import {useLoginFunction} from "../../services/login/use-login-function"
import {toast} from "react-toastify"

const style = {
   position: "absolute",
   top: "50%",
   left: "50%",
   transform: "translate(-50%, -50%)",
   width: 400,
   bgcolor: "background.paper",
   border: "0.2px solid #161616",
   boxShadow: 40,
   p: 4,
}

export const LoginForm = () => {
   const loginFunc = useLoginFunction()
   const {control, handleSubmit, reset} = useLogin()

   const handleSubmitForm: SubmitHandler<ILoginForm> = async (data) => {
      try {
         await loginFunc.login(data.email, data.password)

         reset()
      } catch (error) {
         console.log(
            "🚀 ~ consthandleSubmitForm:SubmitHandler<ILoginForm>= ~ error:",
            error
         )
         toast.error("Login failed. Please try again.")
      }
   }

   const onError = (errors: any) => {
      console.log("🚀 ~ onError ~ errors:", errors)
   }

   const [open, setOpen] = React.useState(false)
   const handleOpen = () => setOpen(true)
   const handleClose = () => setOpen(false)

   return (
      <div>
         <Button
            onClick={handleOpen}
            sx={{
               border: "1px solid #FFFFFF",
               width: "120px",
               color: "#FFFFFF",
               textTransform: "none",
            }}
         >
            Login
         </Button>
         <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
         >
            <form onSubmit={handleSubmit(handleSubmitForm, onError)}>
               <Box sx={style}>
                  <Stack spacing={2}>
                     <Typography
                        color="white"
                        fontWeight={"bold"}
                        fontSize={25}
                     >
                        Login
                     </Typography>
                     <Controller
                        control={control}
                        name="email"
                        render={({field, fieldState}) => (
                           <>
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
                                 {...field}
                                 error={!!fieldState.error}
                              />
                              <FormHelperText color="red">
                                 {fieldState.error?.message}
                              </FormHelperText>
                           </>
                        )}
                     />
                     <Controller
                        control={control}
                        name="password"
                        render={({field, fieldState}) => (
                           <>
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
                                 {...field}
                              />
                              <FormHelperText color="red">
                                 {fieldState.error?.message}
                              </FormHelperText>
                           </>
                        )}
                     />
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
               </Box>
            </form>
         </Modal>
      </div>
   )
}
