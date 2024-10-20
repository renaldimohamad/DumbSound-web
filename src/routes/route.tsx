import { RouteObject } from "react-router-dom";
import RootLayout from "../layout/root-layout";
import Register from "../componnent/register/register";
import AuthLayout from "../layout/AuthLayout";
import { Login } from "../componnent/login";
import { Home } from "../componnent/dashboard";
import { Payment } from "../componnent/payment";
import PaymentLayout from "../layout/payment-layout";
import AddmusicLayout from "../layout/addmusic-layout";
import { AddMusic } from "../componnent/add-musik";
import { AddArtis } from "../componnent/add-artis";
import { AddartisLayout } from "../layout/addartis-layout";
import { TransactionLayout } from "../layout/transaction-layout";
import { Transtraction } from "../componnent/incoming-transaction";

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
   {
      path: "/addmusic",
      element: <AddmusicLayout/>,
      children: [
         {
            path: "addmusic",
            element: <AddMusic/>,
         },
      ],
   },
   {
     path: "/addartis",
     element: <AddartisLayout/>,
     children: [
      {
         path: "addartis",
         element: <AddArtis/>,
      },
     ],
   },
   {
      path: "/transaction",
      element: <TransactionLayout />,
      children: [
         {
            path: "transaction",
            element: <Transtraction />,
         }
      ]
   }
];

export default routes;
