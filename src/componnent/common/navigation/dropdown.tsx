import {useState} from "react"
import {
   Menu,
   MenuItem,
   IconButton,
   Divider,
   Typography,
   Box,
   Avatar,
   Stack,
} from "@mui/material"
import useStore from "../../../stores/hook"
import { Link } from "react-router-dom"
export const Dropdown = () => {
   const { clearUser } = useStore()
   const [anchorEl, setAnchorEl] = useState(null)
   const open = Boolean(anchorEl)

   const handleClick = (event: any) => {
      setAnchorEl(event.currentTarget)
   }

   const handleClose = () => {
      setAnchorEl(null)
   }

   return (
      <Box >
         <IconButton
            aria-controls={open ? "dropdown-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
         > 
            <Avatar
               src="public/assets/images/Ellipse 1.png"
               sx={{width: 50, height: 50}}
            />
         </IconButton>

         <Menu
            id="dropdown-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
               "aria-labelledby": "dropdown-button",
            }}
            PaperProps={{
               sx: {
                  backgroundColor: "#333",
                  color: "#fff",
                  borderRadius: "8px",
                  boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
                  width: "10%"
               },
            }}
         >
            <Box sx={{
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
               flexDirection: "column"
            }}>
         <MenuItem
         onClick={handleClose}
         sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            fontSize: "25px",
            "&:hover": {backgroundColor: "rgba(255, 255, 255, 0.1)"},
            width: "100%",
            marginRight: "28%",
         }}>
           <Link to={"/payment"}>
               <Stack direction={"row"} gap={"15px"}>
               <img src="public/assets/images/bill.png" alt="" width={"22px"} height={"22px"}/>
               <Typography color={"#FFFF"} fontWeight={"bold"}>Pay</Typography>
               </Stack>
               </Link>
         </MenuItem>
            <MenuItem
               onClick={handleClose}
               sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  gap: "10px",
                  fontSize: "25px",
                  "&:hover": {backgroundColor: "rgba(255, 255, 255, 0.1)"},
               }}
            >
               
               <Link to={"/addmusic"}>
               <Stack direction={"row"} gap={"15px"}>
               <img src="public/assets/images/add-music.png" alt="" width={"22px"} height={"22px"}/>
               <Typography color={"#FFFF"} fontWeight={"bold"}>Add Music</Typography>
               </Stack>
               </Link>
               
            </MenuItem>

            <MenuItem
               onClick={handleClose}
               sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  justifyContent: "center",
                  width: "100%",
                  marginRight: "8%",
                  "&:hover": {backgroundColor: "rgba(255, 255, 255, 0.1)"},
               }}
            >
               <Link to="/addartis"> 
               <Stack direction={"row"} gap={"15px"}>
               <img src="public/assets/images/add-artis.png" alt="" width={"22px"} height={"22px"} />
               <Typography color="#FFFF" fontWeight={"bold"}>Add Artis</Typography>
                  </Stack> 
               </Link>
            </MenuItem>

            <Divider sx={{borderColor: "#A8A8A8", borderWidth: "1px", width: "100%"}} />
            <MenuItem
               onClick={handleClose}
               sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  justifyContent: "center",
                  width: "100%",
                  marginRight: "15%",
                  fontSize: "25px",
                  "&:hover": {backgroundColor: "rgba(255, 255, 255, 0.1)"},
               }}
            >
               <Stack direction={"row"} gap={"15px"}>
               <img src="assets/images/logout.png" alt="" width={"22px"} height={"22px"}/>
               <Typography onClick={() => clearUser()} fontWeight={"bold"}>Logout</Typography>
               </Stack>
            </MenuItem>
            </Box>
         </Menu>
      </Box>
   )
}
