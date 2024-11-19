import {Box} from "@mui/material"
import useStore from "../stores/hook"
import {Navigate, Outlet} from "react-router-dom"

const RootLayout = () => {
   const {isLogin} = useStore()

   if (!isLogin) {
      return <Navigate to="/home"/>
   }
   return (
      <Box>
            <Outlet />
      </Box>
   )
}

export default RootLayout
