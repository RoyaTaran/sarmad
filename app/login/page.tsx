"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useState, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import DotLoader from "react-spinners/DotLoader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import AuthContext from "@/context/outhContext";

import Swal from "sweetalert2";

function LoginPage() {
  const [toggle, setToggle] = useState(1);
  const [mobileNumber, setMobileNumber] = useState("");
  const [time, setTime] = useState(1);
  const [countEnterCode, setCountEnterCode] = useState(0);
  const [disable, setDisable] = useState(false);

  const router = useRouter();
  const authContext = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const insertMobileHandler = (data: any, e: any) => {
    e.preventDefault();
    e.target.reset();
    console.log("data>", data);
    fetch(
      `http://188.34.206.214:88/api/v1/AuthSimple/UserSignUp?phoneNumber=${data.mobileNumber}`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      if (res.status === 200) {
        console.log("res.status", res.status);
        setMobileNumber(data.mobileNumber);
        setToggle(5);
        setTime(120);
        setCountEnterCode(0);
        setDisable(false);
      } else {
        toast("لطفا شماره خود را دوباره وارد نمایید.");
        console.log("res.status", res.status);
      }
    });
  };
  const insertCodeHandler = (data: any, e: any) => {
    e.preventDefault();
    e.target.reset();
    console.log("data>", data);

    const mobileAndCodeObj = {
      phoneNumber: mobileNumber,
      code: data.code,
    };
    fetch("http://188.34.206.214:88/api/v1/AuthSimple/OtpLogin", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mobileAndCodeObj),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("result>>>>>>>>", result);
        if (result.isSuccess == true) {
          let data = result.data;
          let token = data.token;
          let role = data.roles;
          authContext.login(token, role);
          router.push("/");
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "به سرمد خوش آمدید",
            showConfirmButton: false,
            timer: 2500,
          });
        } else {
          console.log("کد تایید صحیح نمی باشد");
          setCountEnterCode((p) => p + 1);
          if (countEnterCode == 2) {
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: "کد تایید را 3 بار اشتباه وارد نمودید.",
              showConfirmButton: false,
              timer: 2500,
            });
            setDisable(true);
            setTime(1)
          } else {
            toast("کد فعال سازی اشتباه وارد شده است.");
          }
        }
      });
  };
  const RegexMobile = /^(09)(14|12|19|35|36|37|38|39|32|21|10)\d{7}$/;
  var RegexCode = /^[a-zA-Z0-9]*$/;
  return (
    <>
      <section className="w-full bg-blue-600 h-screen flex justify-center items-center">
        <section
          id="wrapper-login"
          className="bg-blue-100  rounded-2xl w-[90%] h-[95%] md:h-[80%] m-auto relative sm:w-[60%] md:w-[40%] xl:w-[25%] flex flex-col items-center justify-start px-5"
        >
          {toggle === 5 && (
            <>
              <span
                className=" absolute top-[4%] left-[4%] text-blue-600 cursor-pointer hover:text-blue-800 text-3xl"
                onClick={() => {
                  setToggle(1);
                }}
              >
                <FaArrowAltCircleLeft />
              </span>
              <div className="absolute bottom-[5%] right-[5%]">
                {" "}
                <CountdownCircleTimer
                  isPlaying
                  duration={time}
                  size={120}
                  colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                  colorsTime={[7, 5, 2, 0]}
                  onComplete={() => {
                    setToggle(1);
                  }}
                >
                  {({ remainingTime }) => remainingTime}
                </CountdownCircleTimer>
              </div>
            </>
          )}

          {/* logo */}
          <h1 className="text-8xl py-3 text-blue-900 cursor-pointer text-center font-bold">
            سرمد
          </h1>
          {/*title*/}
          <div className="flex flex-col items-center text-blue-500">
            <h1 className="text-3xl font-bold tracking-widest">
              <span>{toggle === 1 ? "ورود" : toggle === 5 ? "تایید" : ""}</span>{" "}
              <span className="px-2">
                {toggle === 1 ? "کاربر" : toggle === 5 ? "کد " : ""}
              </span>
            </h1>
            <h2 className="font-thin font-mono  italic tracking-widest-g">
              <span>
                {" "}
                {toggle === 1 ? "HI" : toggle === 5 ? "CONFIRMATION" : ""}
              </span>
              <span className="pe-5 ">
                {toggle === 1 ? "USER" : toggle === 5 ? "CODE" : ""}
              </span>
            </h2>
          </div>
          {toggle === 1 ? (
            <>
              <h3 className="w-full text-start pb-2 text-xl text-slate-600">
                سلام !
              </h3>
              <h4 className="w-full text-start pb-2 text-xl text-slate-600">
                لطفا شماره موبایل خود را وارد نمایید
              </h4>

              <form
                className="w-full"
                onSubmit={handleSubmit(insertMobileHandler)}
              >
                <div id="mobileNumber" className="relative my-2">
                  <p className="absolute top-3 right-5 bg-blue-100 text-blue-600 px-1">
                    شماره موبایل
                  </p>
                  <input
                    className="py-5 rounded-lg border-2 border-blue-600 outline-none  text-blue-800 mt-6 bg-blue-100 w-full indent-3"
                    {...register("mobileNumber", {
                      required: true,
                      pattern: RegexMobile,
                    })}
                    placeholder="...09"
                  />
                  {errors.mobileNumber && (
                    <p className="text-red-500 text-sm-g mt-1">
                      شماره موبایل صحیح نمی باشد لطفا شماره موبایل معتبر وارد
                      نمایید.
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-blue-700 hover:bg-blue-900 text-blue-50 text-xl font-bold py-5 mt-3"
                >
                  ورود
                </button>
              </form>
            </>
          ) : toggle === 5 ? (
            <>
              <h3 className="w-full text-start pt-5 pr-3 text-slate-700">
                {`کد ارسالی به شماره ${mobileNumber} را وارد نمایید`}
              </h3>

              <form
                className="w-full"
                onSubmit={handleSubmit(insertCodeHandler)}
              >
                <div id="mobileNumber" className="relative mb-2">
                  <p className="absolute top-3 right-5 bg-blue-100 text-blue-600 px-1">
                    کد تایید
                  </p>

                  <input
                    className="py-5 rounded-lg border-2 border-blue-600 outline-none  text-blue-800 mt-6 bg-blue-100 w-full indent-3"
                    {...register("code", {
                      required: true,
                      pattern: RegexCode,
                    })}
                    placeholder="...12345"
                  />
                  {errors.code && (
                    <p className="text-red-500 text-sm-g mt-1">
                      کد تایید الزامی میباشد.
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className={`w-full rounded-xl text-blue-50 text-xl font-bold py-5 mt-3 ${
                    countEnterCode < 3
                      ? " bg-blue-700 hover:bg-blue-900"
                      : "bg-red-700"
                  }`}
                  disabled={disable}
                >
                  {`${
                    countEnterCode < 3
                      ? "تایید"
                      : "کد فعالسازی 3 بار اشتباه وارد شده."
                  }`}
                </button>
              </form>
            </>
          ) : (
            ""
          )}

          {/* back Home Login */}

          <section
            id="back-home-login"
            className=" absolute bottom-10 right-[45%] "
          >
            <Link
              href="/"
              className="flex justify-center items-center gap-2 text-slate-600 hover:text-slate-950"
            >
              <span className=" text-sm-g  md:text-sm 2xl:text-lg">
                بازگشت به صفحه اصلی
              </span>
              <span className="text-2xl">
                <FaArrowCircleLeft />
              </span>
            </Link>
          </section>
        </section>
        <div className="text-center">
          <ToastContainer className="text-sm-g " />
        </div>
      </section>
    </>
  );
}

export default LoginPage;
//setFile(URL.createObjectURL(event.target.files[0]));
{
  {
    /* <div className="h-screen bg-blue-100 flex justify-center items-center">
    <DotLoader
      color={"blue"}
      loading={true}
      size={150}
      speedMultiplier={1}
    />
  </div> */
  }
  /* <section>
            {toggle !== 5 && (
              <ul className="w-[90%] m-auto mt-3 bg-slate-400 flex justify-around text-3xl  py-2 rounded-full">
                <li
                  className={`${
                    toggle === 1
                      ? "bg-blue-500 text-slate-50 hover:bg-blue-50 "
                      : "text-slate-800 bg-slate-50"
                  } p-2 rounded-full cursor-pointer  hover:text-blue-500`}
                  onClick={() => setToggle(1)}
                >
                  <FaUser />
                </li>
                <li
                  className={`${
                    toggle === 2
                      ? "bg-blue-500 text-slate-50 hover:bg-blue-50 "
                      : "text-slate-800 bg-slate-50"
                  } p-2 rounded-full cursor-pointer  hover:text-blue-500`}
                  onClick={() => setToggle(2)}
                >
                  <RiAdminFill />
                </li>
                <li
                  className={`${
                    toggle === 3
                      ? "bg-blue-500 text-slate-50 hover:bg-blue-50 "
                      : "text-slate-800 bg-slate-50"
                  } p-2 rounded-full cursor-pointer  hover:text-blue-500`}
                  onClick={() => setToggle(3)}
                >
                  <FaUserDoctor />
                </li>
                <li
                  className={`${
                    toggle === 4
                      ? "bg-blue-500 text-slate-50 hover:bg-blue-50 "
                      : "text-slate-800 bg-slate-50"
                  } p-2 rounded-full cursor-pointer  hover:text-blue-500`}
                  onClick={() => setToggle(4)}
                >
                  <FaUserNurse />
                </li>
              </ul>
            )}
            <div
              className={`flex flex-col items-center pt-6 text-blue-500 ${
                toggle === 5 && "pt-20"
              }`}
            >
              <h1 className="text-3xl font-bold tracking-widest">
                <span>
                  {toggle === 1 || toggle === 2 || toggle === 3 || toggle === 4
                    ? "ورود"
                    : toggle === 5
                    ? "بازیابی"
                    : ""}
                </span>{" "}
                <span className="px-2">
                  {toggle === 1
                    ? "کاربر"
                    : toggle === 2
                    ? "مدیر"
                    : toggle === 3
                    ? "پزشک"
                    : toggle === 4
                    ? "پذیرش"
                    : toggle === 5
                    ? "حساب"
                    : ""}
                </span>
              </h1>
              <h2 className="font-thin font-mono  italic tracking-widest-g">
                <span>
                  {" "}
                  {toggle === 1 || toggle === 2 || toggle === 3 || toggle === 4
                    ? "HI"
                    : toggle === 5
                    ? "ACCOUNT"
                    : ""}
                </span>
                <span className="pe-5 ">
                  {toggle === 1
                    ? "USER"
                    : toggle === 2
                    ? "ADMIN"
                    : toggle === 3
                    ? "DOCTOR"
                    : toggle === 4
                    ? "RECEPTION"
                    : toggle === 5
                    ? "RECOVERY"
                    : ""}
                </span>
              </h2>
            </div>
            {toggle !== 5 && (
              <section className="w-[90%] m-auto">
                <form
                  className=""
                  onSubmit={handleSubmit((data) => console.log(data))}
                >
                  <div id="userName" className="relative">
                    <p className="absolute top-3 right-5 bg-blue-100 text-blue-600 px-1">
                      نام کاربری
                    </p>
                    <input
                      className="py-3 rounded-lg border-2 border-blue-600 outline-none text-sm text-blue-800 mt-6 bg-blue-100 w-full indent-3"
                      {...register("userName", {
                        required: true,
                        pattern: RegexEnglishData,
                      })}
                      placeholder="نام کاربری مورد نظر ..."
                    />
                    {errors.userName && (
                      <p className="text-red-500 text-sm-g mt-1">
                        نام کاربری حداقل 3 حرف و اعداد و حروف انگلیسی میباشد.
                      </p>
                    )}
                  </div>
                  {togglePassword === "SHOWPASSWORD" && (
                    <div id="password-off" className="relative">
                      <p className="absolute top-3 right-5 bg-blue-100 text-blue-600 px-1">
                        رمز عبور
                      </p>
                      <div
                        className=" absolute top-[50%] left-3 text-2xl  text-blue-500 hover:text-blue-800 cursor-pointer"
                        onClick={() => setTogglePassword("HIDEPASSWORD")}
                      >
                        <IoEye />
                      </div>
                      <input
                        className="py-3 rounded-lg border-2 border-blue-600 outline-none text-sm text-blue-800 mt-6 bg-blue-100 w-full indent-3"
                        type="password"
                        {...register("password", {
                          required: true,
                          pattern: RegexPassword,
                        })}
                        placeholder="رمز عبور مورد نظر ..."
                      />
                      {errors.password && (
                        <p className="text-red-500 text-sm-g mt-1">
                          گذرواژه باید حداقل 6 کاراکتر و شامل حروف بزرگ و کوچک
                          انگلیسی و عدد باشد
                        </p>
                      )}
                    </div>
                  )}
                  {togglePassword === "HIDEPASSWORD" && (
                    <div id="password-on" className="relative">
                      <p className="absolute top-3 right-5 bg-blue-100 text-blue-600 px-1">
                        رمز عبور
                      </p>
                      <div
                        className=" absolute top-[50%] left-3 text-2xl  text-blue-500 hover:text-blue-800 cursor-pointer"
                        onClick={() => setTogglePassword("SHOWPASSWORD")}
                      >
                        <IoMdEyeOff />
                      </div>
                      <input
                        className="py-3 rounded-lg border-2 border-blue-600 outline-none text-sm text-blue-800 mt-6 bg-blue-100 w-full indent-3"
                        type="text"
                        {...register("password", {
                          required: true,
                          pattern: RegexPassword,
                        })}
                        placeholder="رمز عبور مورد نظر ..."
                      />
                      {errors.password && (
                        <p className="text-red-500 text-sm-g mt-1">
                          گذرواژه باید حداقل 6 کاراکتر و شامل حروف بزرگ و کوچک
                          انگلیسی و عدد باشد
                        </p>
                      )}
                    </div>
                  )}
                  <div className="flex justify-between  items-center text-sm text-blue-500 py-3">
                    <p
                      className=" border-b-2 border-blue-500 cursor-pointer "
                      onClick={() => setToggle(5)}
                    >
                      رمز عبور را فراموش کردم
                    </p>
                    <p className="flex justify-end gap-1 items-center cursor-pointer">
                      <span>مرا به خاطر بسپار</span>{" "}
                      <input type="checkbox" w-1 />
                    </p>
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-blue-700 hover:bg-blue-900 text-blue-50 text-xl font-bold py-2 mt-3"
                  >
                    ورود
                  </button>
                </form>
              </section>
            )}

            {toggle === 5 && (
              <section className="w-[90%] m-auto">
                <form
                  className=""
                  onSubmit={handleSubmit((data) => console.log(data))}
                >
                  <div id="userName" className="relative">
                    <p className="absolute top-3 right-5 bg-blue-100 text-blue-600 px-1">
                      شماره همراه
                    </p>
                    <input
                      className="py-3 rounded-lg border-2 border-blue-600 outline-none text-sm text-blue-800 mt-6 bg-blue-100 w-full indent-3"
                      {...register("userName", {
                        required: true,
                        pattern: RegexMobile,
                      })}
                      placeholder="0912111 ..."
                    />
                    {errors.userName && (
                      <p className="text-red-500 text-sm-g mt-1">
                        شماره موبایل صحیح نیست.
                      </p>
                    )}
                  </div>

                  <div id="password-off" className="relative">
                    <p className="absolute top-3 right-5 bg-blue-100 text-blue-600 px-1">
                      کد ارسال شده
                    </p>
                 
                    <input
                      className="py-3 rounded-lg border-2 border-blue-600 outline-none text-sm text-blue-800 mt-6 bg-blue-100 w-full indent-3"
                      type="password"
                      {...register("password", {
                        required: true,
                      })}
                      placeholder="12345 ..."
                    />
                    {errors.password && (
                      <p className="text-red-500 text-sm-g mt-1">
                        ورود کد ارسال الزامی میباشد.
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-blue-700 hover:bg-blue-900 text-blue-50 text-xl font-bold py-3 mt-3"
                  >
                    ثبت
                  </button>
                </form>
              </section>
            )}
          </section> */
}
