"use client";

import { usePathname, useRouter } from "next/navigation";

import Swal from "sweetalert2";

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
  let pathName = usePathname();
  useEffect(() => {
    localStorage.setItem("user",JSON.stringify("eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiMDkxOTM0NDQwOTQiLCJzZXNzaW9uSWQiOiI5YTY5NDMzZS1mMzZiLTE0MTAtODY3OS0wMDBjYWRiM2QyOTciLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjIiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOlsiVXNlciIsIkFkbWluIiwiUHJvdmlkZXIiLCJSZWNlcHRpb24iXSwibmJmIjoxNzA5MDQ3NTU2LCJleHAiOjE3MDkwNjU1NTYsImlzcyI6IlJlc2VydmF0aW9uIiwiYXVkIjoiUmVzZXJ2YXRpb24ifQ.QWbdqetKpcaVKK5jFopgFnDVcu5wnb9ywqcpr9fnvnU"))
    // localStorage.removeItem("user")
    const postUserInfoHandler = async () => {
      try {
        const response = await fetch(
          "http://188.34.206.214:88/api/v1/User/UserInfo",
          {
            method: "post",
            headers: {
              Authorization: `Bearer ${JSON.parse(
                localStorage.getItem("user") || ""
              )}`,
              "Content-Type": "application/json",
            },
          }
        );
        // enter you logic when the fetch is successful
        const result = await response.json();
        if (result.isSuccess === true) {
          setUserInfoHandler(result.data);
          setIsLogin(true);
          if (pathName == "/login") {
            rout.push("/");
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "به سرمد خوش آمدید.",
              showConfirmButton: false,
              timer: 2500,
            });
          }
        }
      } catch (error) {
        // enter your logic for when there is an error (ex. error toast)

        console.log("Err", error);
      }
    };
    localStorage.getItem("user") && postUserInfoHandler();

   
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
    // localStorage.setItem("role", JSON.stringify(role));
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
