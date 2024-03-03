import { createContext } from "react";
interface IUserState {
  userId: number;
  firstName: string;
  lastName: string;
  roles: { id: number; title: string }[];
  isSuccess: boolean;
  messageId: number;
  messageEn: any;
  message: any;
}
const AuthContext = createContext({
  isLogin: false,
  token: "",
  userInfo: {},
  setUserInfoHandler: (nullUserInfo: IUserState) => {},
  setProviderInfoSelectionHandler: (providerInfo: any) => {},
  providerInfoSelections: {},
  login: (token: string, role: { id: number; title: string }[]) => {},
  logout: () => {},
});

export default AuthContext;
