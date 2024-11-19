import { createContext, useState } from "react";
import { IUser, TStore } from "../types/store";

interface StoreProps {
  children: React.ReactNode;
}

export const Store = createContext<TStore | null>(null);

export const StoreProvider: React.FC<StoreProps> = ({ children }) => {
  const [user, setUserState] = useState<IUser>({
    id: "",
    email: "",
    fullName: "",
    phone: "",
    address: "",
    gender: "",
  });

  const [isLogin, setIsLogin] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);

  const setUser = (user: IUser) => {
    setUserState(user);
    setIsLogin(true);
  };


  const clearUser = () => {
    setUserState({
      id: "",
      email: "",
      fullName: "",
      phone: "",
      address: "",
      gender: "",
    });
    localStorage.removeItem("token");
    setIsLogin(false);
  };

  return (
    <>
      <Store.Provider value={{ user, isLogin, setUser, clearUser, openLoginModal, setOpenLoginModal }}>{children}</Store.Provider>;
    </>
  );
};