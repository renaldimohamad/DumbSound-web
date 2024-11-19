export interface IStoreState {
  user: IUser;
  isLogin: boolean;
}
export interface IStoreAction {
  setUser: (user: IUser) => void;
  clearUser: () => void;
  openLoginModal: boolean;
  setOpenLoginModal: (open: boolean) => void;
}

export interface IUser {
  profile?: Iprofile;
  id: String;
  email: String;
  fullName: String;
  phone: String;
  address: String;
  gender: String;
}

export interface IProfile {
  avatar: String;
  banner: String;
  bio: string;
}

export type TStore = IStoreState & IStoreAction;