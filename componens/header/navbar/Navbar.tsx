"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import AuthContext from "@/context/outhContext";

import Swal from "sweetalert2";

import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { ImExit } from "react-icons/im";

function Navbar() {
  const authData: any = useContext(AuthContext);
  const [showProfile, setShowProfile] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isProvider, setIsProvider] = useState(false);
  const [isReception, setIsReception] = useState(false);

  const pathName = usePathname();
  const rout = useRouter();
  useEffect(() => {
    async function getUserInfo() {
      if (localStorage.getItem("user")) {
        let response = await fetch(
          "http://188.34.206.214:88/api/v1/User/UserInfo",
          {
            method: "post",
            headers: new Headers({
              Authorization: `Bearer ${JSON.parse(
                localStorage.getItem("user") || ""
              )}`,
              "Content-Type": "application/json",
            }),
          }
        );
        if (response.status == 200) {
          let result: any = await response.json();
          let isUsers = result.data.roles.some(
            (role: any) => role.title == "User"
          );
          let isAdmins = result.data.roles.some(
            (role: any) => role.title == "Admin"
          );
          let isProviders = result.data.roles.some(
            (role: any) => role.title == "Provider"
          );
          let isReceptions = result.data.roles.some(
            (role: any) => role.title == "Reception"
          );
          setIsUser(isUsers);
          setIsReception(isReceptions);
          setIsAdmin(isAdmins);
          setIsProvider(isProviders);

          /////کد های قابل قبول 9 خط کد کامنت شده میباشد و 4 خط کد بالا نیز باید کامنت شوند

          // isAdmins == true
          //   ? setIsAdmin(isAdmins)
          //   : isReceptions == true
          //   ? setIsReception(isReceptions)
          //   : isProviders == true
          //   ? setIsProvider(isProviders)
          //   : isUsers == true
          //   ? setIsUser(isUsers)
          //   : "";
        } else {
          console.log(response.status);
        }
      }
    }
    getUserInfo();
  }, []);

  const exiteHandler = () => {
    Swal.fire({
      title: "خروج ؟",
      text: "آیا از خروج از سایت اطمینان دارید؟",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "بله , خروج",
      cancelButtonText: "خیر , انصراف",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        rout.push("/");
        localStorage.getItem("user") &&
          authData.logout(JSON.parse(localStorage.getItem("user") || ""));
      }
    });
  };
  return (
    <nav className="d-none sm:block max-width m-auto pt-3 ">
      <div className="flex justify-center  w-full">
        <div className="w-[100%]   rounded-full m-auto bg-blue-600">
          <div className="flex gap-2 items-center h-full ps-10  text-white font-bold">
            <Link href="/">
              <p className="flex-none text-3xl py-2 italic ">پنل سرمد</p>
            </Link>
            <div className="grow py-2 bg-blue-400 rounded-full">
              <div className="flex justify-around items-center pt-1">
                <div className="w-[65%] ">
                  <ul className="flex  justify-around text-lg ">
                    <div>
                      <Link href="/about">
                        <li className="hover:text-blue-700">درباره ما</li>
                      </Link>
                    </div>
                    <div>
                      <Link href="contact">
                        <li className="hover:text-blue-700">تماس با ما</li>
                      </Link>
                    </div>
                    <div>
                      <Link href="/health-magazine">
                        <li className="hover:text-blue-700">مجله سلامت</li>
                      </Link>
                    </div>
                  </ul>
                </div>
                <div className="flex justify-center items-center gap-2 pe-2 md:pe-10 w-[35%] relative ">
                  {!authData.isLogin ? (
                    <Link href="/login">
                      <span className="bg-blue-100 px-5 py-1 cursor-pointer rounded-full text-blue-800 hover:text-blue-100 hover:bg-blue-800">
                        ورود/ثبت نام
                      </span>
                    </Link>
                  ) : (
                    <>
                      <div
                        className="text-sm text-white pb-6 cursor-pointer hover:text-blue-700 hover:font-bold"
                        // onClick={() => setShowProfile((p) => !p)}
                        onMouseEnter={() => setShowProfile(true)}
                        onMouseLeave={() => setShowProfile(false)}
                      >
                        <span>سلام </span>
                        <span>
                          {authData.userInfo.firstName == null
                            ? "کاربر جدید "
                            : `${
                                authData.userInfo.firstName.slice(0, 15) + " "
                              }`}
                        </span>
                        <span>به سرمد خوش آمدی</span>
                      </div>
                      <div className=" w-16 h-16 rounded-full bg-blue-800 borde-4 border-blue-300">
                        {authData.userInfo.image && (
                          <img
                            src={`${authData.userInfo.image}`}
                            alt="user-img"
                          />
                        )}
                      </div>
                      {showProfile && (
                        <div
                          className=" absolute  top-[70%] z-50  left-[35%] p-6 bg-blue-300 rounded-lg w-60  border-2 border-blue-400"
                          onMouseEnter={() => setShowProfile(true)}
                          onMouseLeave={() => setShowProfile(false)}
                        >
                          <div className=" relative">
                            {isUser && (
                              <>
                                {pathName === "/user-panel" ? (
                                  <ul>
                                    {/* <h4 className="pb-4">پنل کاربری</h4> */}
                                    <Link href="/">
                                      <div className=" cursor-pointer hover:text-blue-700 flex pb-4 gap-1 items-center">
                                        <div className="text-xl">
                                          <MdKeyboardDoubleArrowLeft />
                                        </div>
                                        <li>بازگشت به صفحه اصلی </li>
                                      </div>
                                    </Link>
                                  </ul>
                                ) : (
                                  <ul>
                                    <Link href="/user-panel">
                                      <div className=" cursor-pointer hover:text-blue-700 flex pb-4 gap-1 items-center">
                                        <div className="text-xl">
                                          <MdKeyboardDoubleArrowLeft />
                                        </div>
                                        <li>ورود به پنل کاربری</li>
                                      </div>
                                    </Link>
                                    {/* <div className=" cursor-pointer hover:text-blue-700 flex pb-4 gap-1 items-center">
                            <div className="text-xl">
                              <MdKeyboardDoubleArrowLeft />
                            </div>
                            <li>تکمیل اطلاعات</li>
                          </div>
                          <div className=" cursor-pointer hover:text-blue-700 flex pb-4 gap-1 items-center">
                            <div className="text-xl">
                              <MdKeyboardDoubleArrowLeft />
                            </div>
                            <li>تکمیل اطلاعات</li>
                          </div> */}
                                  </ul>
                                )}
                              </>
                            )}
                            {isAdmin && (
                              <ul>
                                <div className=" cursor-pointer hover:text-blue-700 flex pb-4 gap-1 items-center">
                                  <div className="text-xl">
                                    <MdKeyboardDoubleArrowLeft />
                                  </div>
                                  <li>ورود به پنل مدیریت</li>
                                </div>
                                {/* <div className=" cursor-pointer hover:text-blue-700 flex pb-4 gap-1 items-center">
                                <div className="text-xl">
                                  <MdKeyboardDoubleArrowLeft />
                                </div>
                                <li>تکمیل اطلاعات</li>
                              </div>
                              <div className=" cursor-pointer hover:text-blue-700 flex pb-4 gap-1 items-center">
                                <div className="text-xl">
                                  <MdKeyboardDoubleArrowLeft />
                                </div>
                                <li>تکمیل اطلاعات</li>
                              </div> */}
                              </ul>
                            )}
                            {isProvider && (
                              <>
                                {pathName === "/turn-panel" ? (
                                  <ul>
                                    {/* <h4 className="pb-4">پنل پزشکی</h4> */}
                                    <Link href="/">
                                      <div className=" cursor-pointer hover:text-blue-700 flex pb-4 gap-1 items-center">
                                        <div className="text-xl">
                                          <MdKeyboardDoubleArrowLeft />
                                        </div>
                                        <li>بازگشت به صفحه اصلی </li>
                                      </div>
                                    </Link>
                                  </ul>
                                ) : (
                                  <ul>
                                    <Link href="/turn-panel">
                                      <div className=" cursor-pointer hover:text-blue-700 flex pb-4 gap-1 items-center">
                                        <div className="text-xl">
                                          <MdKeyboardDoubleArrowLeft />
                                        </div>
                                        <li>ورود به پنل نوبت دهی</li>
                                      </div>
                                    </Link>
                                    {/* <div className=" cursor-pointer hover:text-blue-700 flex pb-4 gap-1 items-center">
                          <div className="text-xl">
                            <MdKeyboardDoubleArrowLeft />
                          </div>
                          <li>تکمیل اطلاعات</li>
                        </div>
                        <div className=" cursor-pointer hover:text-blue-700 flex pb-4 gap-1 items-center">
                          <div className="text-xl">
                            <MdKeyboardDoubleArrowLeft />
                          </div>
                          <li>تکمیل اطلاعات</li>
                        </div> */}
                                  </ul>
                                )}
                              </>
                            )}
                            {isReception && (
                              <ul>
                                <div className=" cursor-pointer hover:text-blue-700 flex pb-4 gap-1 items-center">
                                  <div className="text-xl">
                                    <MdKeyboardDoubleArrowLeft />
                                  </div>
                                  <li>ورود به پنل پذیرش</li>
                                </div>
                                {/* <div className=" cursor-pointer hover:text-blue-700 flex pb-4 gap-1 items-center">
                                <div className="text-xl">
                                  <MdKeyboardDoubleArrowLeft />
                                </div>
                                <li>تکمیل اطلاعات</li>
                              </div>
                              <div className=" cursor-pointer hover:text-blue-700 flex pb-4 gap-1 items-center">
                                <div className="text-xl">
                                  <MdKeyboardDoubleArrowLeft />
                                </div>
                                <li>تکمیل اطلاعات</li>
                              </div> */}
                              </ul>
                            )}

                            <div
                              className=" absolute flex justify-center items-center text-slate-700 hover:text-slate-950 left-0 bottom-[-25%] cursor-pointer gap-1"
                              onClick={exiteHandler}
                            >
                              <h5>خروج</h5>
                              <div className="text-lg">
                                <ImExit />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
