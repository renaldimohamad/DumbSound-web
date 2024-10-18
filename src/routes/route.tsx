import { RouteObject } from "react-router-dom";
import RootLayout from "../layout/root-layout";
import Register from "../componnent/register/register";
import AuthLayout from "../layout/AuthLayout";
import { Login } from "../componnent/login";
import { Home } from "../componnent/dashboard";
import { Payment } from "../componnent/payment";
import PaymentLayout from "../layout/payment-layout";

const routes: RouteObject[] = [
   {
      path: "/",
      element: <RootLayout />,
      children: [
         {
            index: true,
            element: <>Home</>,
         },
         {
            path: "/register",
            element: <Register />,
         },
         {
            path: "/login",
            element: <Login />,
         },
         {
            path: "/home",
            element: <Home />,
         },
      ],
   },
   {
      path: "/auth",
      element: <AuthLayout />,
      children: [
         {
            path: "register",
            element: <Register />,
         },
         {
            path: "login",
            element: <Login />,
         },
      ],
   },
   {
      path: "/payment",
      element: <PaymentLayout />,
      children: [
         {
            path: "payment",
            element: <Payment />,
         },
      ],
   },
];

export default routes;
