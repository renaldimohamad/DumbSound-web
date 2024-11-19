import { Navigate, Outlet } from "react-router-dom";
import useStore from "../stores/hook";

const AuthLayout = () => {
   const { isLogin } = useStore(); 

   if (isLogin) {
      return <Navigate to="/home"/>;
   }

   return (
     <>
     <Outlet />
     </>
   ) 
};

export default AuthLayout;
