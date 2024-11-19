import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes/route";
import useStore from "./stores/hook";
import { api, setAuthToken } from "./lib";
import { useEffect } from "react";

function App() {
   const { setUser } = useStore();
    
  async function checkAuth() {
      const token = localStorage.getItem("token");
      if (!token) {
         return;
      }

      try {
         const res = await api.get("/auth/me", {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         })

         setUser(res.data);
         setAuthToken(token);
      } catch (error) {
         throw error
      }
   }

   useEffect(() => {
      checkAuth();
   }, [])

   return (
      <RouterProvider router={createBrowserRouter(routes)}/>
   )
}

export default App;

