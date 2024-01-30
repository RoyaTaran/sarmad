"use client";

import { usePathname } from "next/navigation";

import Swal from "sweetalert2";

import { useRouter } from "next/navigation";

import AuthContext from "@/context/outhContext";
import Header from "../../componens/header/Header";

// role: { id: number; title: string }[];
interface IUserState {
  bankCardNumber: any;
  credit: any;
  firstName: any;
  ibanNumber: any;
  id: number;
  image: any;
  lastName: any;
  nationalCode: any;
  phoneNumber: any;
}

import { useEffect, useState } from "react";
import { title } from "process";

function App({ children }: React.PropsWithChildren<{}>) {
  let rout = useRouter();
  useEffect(() => {
    localStorage.getItem("user") &&
      fetch("http://188.34.206.214:88/api/v1/User/UserInfo", {
        method: "post",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("user") || ""
          )}`,
          "Content-Type": "application/json",
        },
      }).then((res) =>
        res.json().then((result) => {
          if (result.isSuccess === true) {
            setUserInfoHandler(result.data);
            setIsLogin(true);
            // rout.push("/")
            console.log(result.data);
          } else {
            Swal.fire({
              text: "کاربر گرامی خطایی رخ داده لطفا دوباره سعی کنید.",
              icon: "error",
            });
            console.log("خطایی رخ داده لطفا دوباره  کنید App.tsx");
          }
        })
      );
  }, []);
  const nullUserInfo = {
    bankCardNumber: null,
    credit: "0",
    firstName: null,
    ibanNumber: null,
    id: 2,
    image: null,
    lastName: null,
    nationalCode: null,
    phoneNumber: "09193444094",
  };

  const pathName = usePathname();
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [token, setToken] = useState<string>("");
  const [userInfo, setUserInfo] = useState<IUserState>(nullUserInfo);

  const setUserInfoHandler: any = (nullUserInfo: IUserState) => {
    setUserInfo(nullUserInfo);
  };

  const login: any = (token: string, role: { id: number; title: string }[]) => {
    console.log(token);
    setToken(token);
    setIsLogin(true);
    localStorage.setItem("user", JSON.stringify(token));
    localStorage.setItem("role", JSON.stringify(role));
  };

  const logout: any = (token: string) => {
    localStorage.getItem("user") && console.log(token);
    setToken("");
    setIsLogin(false);
    localStorage.removeItem("role");
    localStorage.removeItem("user");
    setUserInfo(nullUserInfo);
  };
  return (
    <AuthContext.Provider
      value={{
        isLogin,
        token,
        userInfo,
        setUserInfoHandler,
        login,
        logout,
      }}
    >
      <div>
        <div
          className={`${
            pathName === "/login" ? "d-none" : "block w-[95%]  m-auto"
          }`}
        >
          <Header />
        </div>
        {children}
      </div>
    </AuthContext.Provider>
  );
}

export default App;
