"use client";
import { useEffect, useState } from "react";
import { IoMdTime } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import { Upload } from "upload-js";
import BounceLoader from "react-spinners/BounceLoader";

import Swal from "sweetalert2";

import { useForm } from "react-hook-form";
function UserPanelPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [toggle, setToggle] = useState("SHOWUSER");
  const [imgs, setImgs]: any = useState();
  let [loading, setLoading] = useState(false);
  let [color, setColor] = useState("dark");
  const RegexPassword = /^(09)(14|12|19|35|36|37|38|39|32|21|10)\d{7}$/;
  const upload = Upload({ apiKey: "free" });

  async function insertImgHandler(event: any) {
    const [file] = event.target.files;
    const { fileUrl } = await upload.uploadFile(file);
    console.log(`File uploaded: ${fileUrl}`);
    localStorage.getItem("user") &&
      fetch("http://188.34.206.214:88/api/v1/User/UpdateImage", {
        method: "post",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("user") || ""
          )}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fileUrl),
      }).then((res) =>
        res.json().then((result) => {
          if (result.isSuccess === true) {
            console.log("2500000000000000", result);
            setImgs(result.data.image);
          } else {
          }
        })
      );
  }
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
            console.log("14000000000", result);
            // setImgs(result.data.image)
          } else {
          }
        })
      );
  }, []);

  const userInfoSaveHandler = (data: any) => {
    const userUpdateInfo = {
      firstName: data.firstName,
      lastName: data.lastName,
      nationalCode: data.nationalCode,
      ibanNumber: data.ibanNumber,
      bankCardNumber: data.bankCardNumber,
    };
    if (localStorage.getItem("user")) {
      fetch("http://188.34.206.214:88/api/v1/User/UpdateInfo", {
        method: "post",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("user") || ""
          )}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userUpdateInfo),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.isSuccess == true) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "اطلاعات با موفقیت ذخیره شد",
              showConfirmButton: false,
              timer: 2500,
            });
          } else {
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: "خطایی رخ داده لطفا دوباره امتهان نمایید.",
              showConfirmButton: false,
              timer: 2500,
            });
          }
        });
    }
  };

  return (
    <div>
      <div className=" flex justify-center w-[95%] mx-auto border-2 border-blue-400 rounded-xl main-height-g bg-blue-100 mt-10">
        <div className=" w-[6%] border-l-2 border-blue-500 main-height-g-4 m-auto">
          <div
            className={`w-[65%] m-auto mb-7 ${
              toggle === "SHOWUSER" ? " border-b-2 border-blue-500" : ""
            }`}
            onClick={() => setToggle("SHOWUSER")}
          >
            <div className="w-full text-4xl text-slate-500 hover:text-slate-600 border-2 border-slate-500 hover:border-slate-600 rounded-full py-2 mb-1 cursor-pointer flex justify-center">
              {" "}
              <FaUserAlt />
            </div>
          </div>

          <div
            className="w-[65%] m-auto   mb-7"
            onClick={() => setToggle("SHOWTIME")}
          >
            <div
              className={`w-full text-7xl text-slate-500 hover:text-slate-600   cursor-pointer flex justify-center ${
                toggle === "SHOWTIME" ? " border-b-2 border-blue-500" : ""
              }`}
            >
              {" "}
              <IoMdTime />
            </div>
          </div>
        </div>
        <div className=" w-[94%] border-r-2 border-blue-500 main-height-g-4 m-auto">
          {toggle === "SHOWUSER" && (
            <div className=" w-[95%] main-height-g-4 m-auto flex justify-between">
              <div className="w-[75%] main-height-g-4 relative ">
                <form className="" onSubmit={handleSubmit(userInfoSaveHandler)}>
                  <section className=" grid grid-cols-2  mt-32 ">
                    {/* 1 */}
                    <div className="relative mx-4">
                      <p className="absolute top-3 right-5 bg-blue-100 text-blue-600 px-1">
                        نام
                      </p>
                      <input
                        className="py-3 rounded-lg border-2 border-blue-600 outline-none text-sm text-blue-800 mt-6 bg-blue-100 w-full indent-3"
                        {...register("firstName", {
                          required: true,
                        })}
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-sm-g mt-1">
                          نام کاربری حداقل 3 حرف و اعداد و حروف انگلیسی میباشد.
                        </p>
                      )}
                    </div>
                    {/* 2*/}
                    <div className="relative mx-4">
                      <p className="absolute top-3 right-5 bg-blue-100 text-blue-600 px-1">
                        نام خانوادگی
                      </p>
                      <input
                        className="py-3 rounded-lg border-2 border-blue-600 outline-none text-sm text-blue-800 mt-6 bg-blue-100 w-full indent-3"
                        {...register("lastName", {
                          required: true,
                        })}
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-sm-g mt-1">
                          نام کاربری حداقل 3 حرف و اعداد و حروف انگلیسی میباشد.
                        </p>
                      )}
                    </div>
                    {/* 3*/}
                    <div className="relative mx-4">
                      <p className="absolute top-3 right-5 bg-blue-100 text-blue-600 px-1">
                        کد ملی
                      </p>
                      <input
                        className="py-3 rounded-lg border-2 border-blue-600 outline-none text-sm text-blue-800 mt-6 bg-blue-100 w-full indent-3"
                        {...register("nationalCode", {
                          required: true,
                        })}
                      />
                      {errors.nationalCode && (
                        <p className="text-red-500 text-sm-g mt-1">
                          نام کاربری حداقل 3 حرف و اعداد و حروف انگلیسی میباشد.
                        </p>
                      )}
                    </div>
                  </section>
                  {/* 11 */}
                  <div className="relative mx-4">
                    <p className="absolute top-3 right-5 bg-blue-100 text-blue-600 px-1">
                      شماره IBAN
                    </p>
                    <input
                      className="py-3 rounded-lg border-2 border-blue-600 outline-none text-sm text-blue-800 mt-6 bg-blue-100 w-full indent-3"
                      {...register("ibanNumber", {
                        required: true,
                      })}
                    />
                    {errors.ibanNumber && (
                      <p className="text-red-500 text-sm-g mt-1">
                        نام کاربری حداقل 3 حرف و اعداد و حروف انگلیسی میباشد.
                      </p>
                    )}
                  </div>
                  {/* 12 */}
                  <div className="relative mx-4">
                    <p className="absolute top-3 right-5 bg-blue-100 text-blue-600 px-1">
                      شماره حساب /کارت
                    </p>
                    <input
                      className="py-3 rounded-lg border-2 border-blue-600 outline-none text-sm text-blue-800 mt-6 bg-blue-100 w-full indent-3"
                      {...register("bankCardNumber", {
                        required: true,
                      })}
                    />
                    {errors.bankCardNumber && (
                      <p className="text-red-500 text-sm-g mt-1">
                        نام کاربری حداقل 3 حرف و اعداد و حروف انگلیسی میباشد.
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className=" w-44 absolute left-[-30%] bottom-[25%] rounded-xl bg-blue-700 hover:bg-blue-900 text-blue-50 text-xl font-bold py-2 "
                  >
                    ذخیره
                  </button>
                </form>
              </div>
              <div className="w-[20%] main-height-g-4">
                <div className="w-44 h-44 bg-blue-700 rounded-full mx-auto flex justify-center items-center text-9xl text-white cursor-pointer relative ">
                  <label className="w-5 h-5 bg-white rounded-full text-blue-700 absolute top-[5%] right-[14%] border-2 border-blue-800 flex justify-center items-center">
                    <input
                      type="file"
                      onChange={insertImgHandler}
                      className=" hidden"
                    />

                    <FiPlus />
                  </label>
                  {loading ? (
                    <BounceLoader
                      color={color}
                      // loading={loading}
                      size={150}
                      aria-label="Loading Spinner"
                      data-testid="loader"
                    />
                  ) : imgs ? (
                    <img
                      src={imgs}
                      alt=""
                      className="w-44 h-44 rounded-full mx-auto flex justify-center items-center"
                    />
                  ) : (
                    <FaUser />
                  )}
                </div>
              </div>
            </div>
          )}
          {toggle === "SHOWTIME" && (
            <div className="bg-red-50 w-[95%] main-height-g-4 m-auto"></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserPanelPage;
