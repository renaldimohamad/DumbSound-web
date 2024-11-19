import { RouteObject } from "react-router-dom";
import RootLayout from "../layout/root-layout";
import Register from "../componnent/register/register";
import AuthLayout from "../layout/AuthLayout";
import { Login } from "../componnent/login";
import { Home } from "../componnent/dashboard";
import PaymentLayout from "../layout/payment-layout";
import AddmusicLayout from "../layout/addmusic-layout";
import { AddartisLayout } from "../layout/addartis-layout";
import { TransactionLayout } from "../layout/transaction-layout";

const routes: RouteObject[] = [
   {
      path: "/home",
      element: <Home />,
   },
   {
      path: "/",
      element: <RootLayout />,
      children: [
         {
            path: "payment",
            element: <PaymentLayout/>
         },
         {
            path: "addmusic",
            element: <AddmusicLayout/>
         },
         {
            path: "addartis",
            element: <AddartisLayout/>
         },
         {
            path: "/transaction",
            element: <TransactionLayout/>
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
];

export default routes;