import { IRegisterForm } from "../../types/register";
import * as authAsync from "../../lib/call/auth";


export const useRegisterFunction = () => {
   const register = async (body: IRegisterForm) => {
      try {
         const res = await authAsync.register(body);
         console.log(res);

         return res;
      } catch (error) {
         console.log(error);
      }
   };

   return {
      register,
   };
};