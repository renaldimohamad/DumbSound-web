import { Outlet } from "react-router-dom";

const AuthLayout = () => {
   // const { isLogin } = useStore();

   // if (isLogin) {
   //    return <Navigate to="/" />;
   // }
   return <Outlet />;
};

export default AuthLayout;
