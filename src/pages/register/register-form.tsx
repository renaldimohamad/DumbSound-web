import {
   Box,
   Button,
   FormHelperText,
   Input,
   Modal,
   Stack,
   Typography,
} from "@mui/material"
import React, { useContext } from "react"
import {Controller} from "react-hook-form"
import {Link, Navigate} from "react-router-dom"
import {useRegisterFunction} from "../../services/reister/use-register-function"
import {useRegister} from "../../services/reister/use-register"
import {IRegisterForm} from "../../types/register"
import useStore from "../../stores/hook"

const style = {
   position: "absolute",
   top: "50%",
   left: "50%",
   transform: "translate(-50%, -50%)",
   width: 400,
   bgcolor: "background.paper",
   border: '0.2px solid #161616',
   boxShadow: 24,
   p: 4,
}

export const RegisterForm = () => {
   const registerFunc = useRegisterFunction()
   const {control, handleSubmit, reset} = useRegister()
   const handleSubmitForm = async (data: IRegisterForm) => {
      try {
         await registerFunc.register(data)
         reset()
      
      } catch (error) {
         console.log("🚀 ~ handleSubmitForm ~ error:", error)
      }
   }
   const [open, setOpen] = React.useState(false)
   const handleOpen = () => setOpen(true)
   const handleClose = () => setOpen(false)

   return (
      <Box sx={{
         backgroundColor: "red"
      }}>
         <Button onClick={handleOpen} 
               sx={{
                  width: "120px",
                  backgroundColor: "#EE4622",
                  color: "#FFFFFF",
                  textTransform: "none",
               }}
           >Register</Button>
         <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
         >
                     <form onSubmit={handleSubmit(handleSubmitForm, handleClose)}>
            <Box sx={style}>
                        <Stack
                           spacing={2}
                        >
                           <Typography
                              color="white"
                              fontWeight={"bold"}
                              fontSize={25}
                           >
                              Register
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
                              name="fullName"
                              render={({field, fieldState}) => (
                                 <>
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
                              name="gender"
                              render={({field, fieldState}) => (
                                 <>
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
                              name="phone"
                              render={({field, fieldState}) => (
                                 <>
                                    <Input
                                       disableUnderline
                                       placeholder="Phone"
                                       type="number"
                                       sx={{
                                          width: "100%",
                                          border: "2px solid #D2D2D2",
                                          color: "white",
                                          borderRadius: "8px",
                                          padding: "5px",
                                          backgroundColor: "#3A3A3A",
                                          "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button":
                                             {
                                                WebkitAppearance: "none",
                                                margin: 0,
                                             },
                                          "&::-moz-appearance": "textfield",
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
                              name="address"
                              render={({field, fieldState}) => (
                                 <>
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
                                       {...field}
                                       error={!!fieldState.error}
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
                              Register
                           </Button>

                           <Stack direction="row" spacing={0.5}>
                              <Typography color="#D2D2D2">
                                 Already have an account?
                              </Typography>
                              <Link to={"/"}>
                                 <Typography color="white" fontWeight={"bold"}>
                                    Here
                                 </Typography>
                              </Link>
                           </Stack>
                        </Stack>
                  </Box>
              </form>
         </Modal>
         </Box>
   )
}
