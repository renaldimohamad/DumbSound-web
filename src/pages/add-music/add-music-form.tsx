import { Icon } from "@iconify/react/dist/iconify.js";
import {
   Box,
   Button,
   FormControl,
   Input,
   InputAdornment,
   InputLabel,
   MenuItem,
   Select,
   Stack,
   Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AddMusicForm = () => {
   const [age, setAge] = React.useState("");
   const navigate = useNavigate();

   const addMusic = () => {
      navigate("/addartis");
   };

   const handleChange = (event: any) => {
      setAge(event.target.values as string);
   };

   return (
      <>
         <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            flexDirection={"column"}
            mt={4}
            gap={3}
         >
            <Typography
               textAlign={"left"}
               fontWeight={"bold"}
               width={"80%"}
               fontSize={24}
               mb={5}
            >
               Add Music
            </Typography>
            <Stack
               direction={"row"}
               spacing={3}
               width={"100%"}
               display={"flex"}
               justifyContent={"center"}
               alignItems={"center"}
            >
               <Input
                  disableUnderline
                  placeholder="Input your account number"
                  sx={{
                     width: "64%",
                     border: "2px solid #D2D2D2",
                     color: "white",
                     borderRadius: "5px",
                     padding: "5px",
                     backgroundColor: "#3A3A3A",
                  }}
                  inputProps={{
                     style: {
                        paddingLeft: "10px",
                     },
                  }}
               />
               <Input
                  type="file"
                  disableUnderline
                  placeholder="Attach Thumbnail"
                  sx={{
                     width: "14.2%",
                     border: "2px solid #D2D2D2",
                     color: "white",
                     borderRadius: "5px",
                     padding: "5px",
                     backgroundColor: "#3A3A3A",
                     display: "none",
                  }}
                  inputProps={{
                     accept: "image/*",
                     style: {
                        paddingLeft: "10px",
                     },
                  }}
                  id="file-upload-input"
               />

               <label
                  htmlFor="file-upload-input"
                  style={{
                     display: "flex",
                     alignItems: "center",
                     border: "2px solid #D2D2D2",
                     borderRadius: "5px",
                     backgroundColor: "#3A3A3A",
                     padding: "5px",
                     cursor: "pointer",
                     width: "14.2%",
                     color: "white",
                  }}
               >
                  <Stack
                     direction={"row"}
                     justifyContent={"space-between"}
                     alignItems="center"
                     width="100%"
                     padding={"3px"}
                  >
                     <Typography>Attack File</Typography>
                     <InputAdornment position="end">
                        <Stack sx={{ alignItems: "center" }}>
                           <img
                              src="assets/images/Frame.png"
                              alt="file"
                              style={{
                                 color: "#B2B2B2",
                                 width: "20px",
                                 height: "25px",
                                 marginLeft: "5px",
                              }}
                           />
                        </Stack>
                     </InputAdornment>
                  </Stack>
               </label>
            </Stack>
            <Input
               disableUnderline
               placeholder="Input your account number"
               sx={{
                  width: "80%",
                  border: "2px solid #D2D2D2",
                  color: "white",
                  borderRadius: "5px",
                  padding: "5px",
                  backgroundColor: "#3A3A3A",
               }}
               inputProps={{
                  style: {
                     paddingLeft: "10px",
                  },
               }}
            />

            <Box sx={{ width: "80%" }}>
               <FormControl fullWidth>
                  <InputLabel
                     variant="standard"
                     id="demo-simple-select-label"
                     sx={{
                        color: "#8C8C8C",
                        top: "50%",
                        transform: "translateY(-50%)",
                        px: 2,
                        zIndex: 1,
                     }}
                  >
                     Single
                  </InputLabel>
                  <Select
                     sx={{
                        color: "white",
                        border: "2px solid #D2D2D2",
                        borderRadius: "5px",
                        backgroundColor: "#3A3A3A",
                        height: "46px",
                        "& .MuiSelect-select": {
                           padding: "12px 14px",
                           display: "flex",
                           alignItems: "center",
                        },
                     }}
                     labelId="demo-simple-select-label"
                     id="demo-simple-select"
                     value={age}
                     label="Age"
                     onChange={handleChange}
                  >
                     <MenuItem value={10}>Ten</MenuItem>
                     <MenuItem value={20}>Twenty</MenuItem>
                     <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
               </FormControl>
            </Box>

            <Box
               width={"80%"}
               sx={{
                  display: "flex",
               }}
            >
               <Input
                  disableUnderline
                  placeholder="Attach Thumbnail"
                  sx={{
                     width: "14.2%",
                     border: "2px solid #D2D2D2",
                     color: "white",
                     borderRadius: "5px",
                     padding: "5px",
                     backgroundColor: "#3A3A3A",
                  }}
                  inputProps={{
                     style: {
                        paddingLeft: "10px",
                     },
                  }}
               />
            </Box>

            <Button
               onClick={addMusic}
               variant="outlined"
               sx={{
                  backgroundColor: "#F58033",
                  borderRadius: "5px",
                  width: "15%",
                  color: "white",
                  textTransform: "none",
                  mt: 1,
               }}
            >
               Add Song
            </Button>
         </Box>
      </>
   );
};
