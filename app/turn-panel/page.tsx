"use client";
import { useState } from "react";
import { FaUserDoctor } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";

import { useForm } from "react-hook-form";
function DrPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [toggle, setToggle] = useState("SHOWDR");
  const RegexPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  return (
    <div>
      <div className=" flex justify-center w-[95%] mx-auto border-2 border-blue-400 rounded-xl main-height-g bg-blue-100 mt-10">
        <div className=" w-[6%] border-l-2 border-blue-500 main-height-g-4 m-auto">
          <div
            className={`w-[65%] m-auto mb-7 ${
              toggle === "SHOWDR" ? " border-b-2 border-blue-500" : ""
            }`}
            onClick={() => setToggle("SHOWDR")}
          >
            <div className="w-full text-4xl text-slate-500 hover:text-slate-600 border-2 border-slate-500 hover:border-slate-600 rounded-full py-2 mb-1 cursor-pointer flex justify-center">
              {" "}
              <FaUserDoctor />
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
          {toggle === "SHOWDR" && (
            <div className=" w-[95%] main-height-g-4 m-auto flex justify-between">
              <div className="w-[75%] main-height-g-4 relative ">
                <form
                  className=""
                  onSubmit={handleSubmit((data) => console.log(data))}
                >
                  <section className=" grid grid-cols-2 ">
                    {/* 1 */}
                    <div className="relative mx-4">
                      <p className="absolute top-3 right-5 bg-blue-100 text-blue-600 px-1">
                        نام
                      </p>
                      <input
                        className="py-3 rounded-lg border-2 border-blue-600 outline-none text-sm text-blue-800 mt-6 bg-blue-100 w-full indent-3"
                        {...register("userName", {
                          required: true,
                          pattern: RegexPassword,
                        })}
                      />
                      {errors.userName && (
                        <p className="text-red-500 text-sm-g mt-1">
                          نام کاربری حداقل 3 حرف و اعداد و حروف انگلیسی میباشد.
                        </p>
                      )}
                    </div>
                    {/* 2 */}
                    <div className="relative mx-4">
                      <p className="absolute top-3 right-5 bg-blue-100 text-blue-600 px-1">
                        نام خانوادگی
                      </p>
                      <input
                        className="py-3 rounded-lg border-2 border-blue-600 outline-none text-sm text-blue-800 mt-6 bg-blue-100 w-full indent-3"
                        {...register("userName", {
                          required: true,
                          pattern: RegexPassword,
                        })}
                      />
                      {errors.userName && (
                        <p className="text-red-500 text-sm-g mt-1">
                          نام کاربری حداقل 3 حرف و اعداد و حروف انگلیسی میباشد.
                        </p>
                      )}
                    </div>
                    {/* 3 */}
                    <div className="relative mx-4">
                      <p className="absolute top-3 right-5 bg-blue-100 text-blue-600 px-1">
                        تاریخ تولد
                      </p>
                      <input
                        className="py-3 rounded-lg border-2 border-blue-600 outline-none text-sm text-blue-800 mt-6 bg-blue-100 w-full indent-3"
                        {...register("userName", {
                          required: true,
                          pattern: RegexPassword,
                        })}
                      />
                      {errors.userName && (
                        <p className="text-red-500 text-sm-g mt-1">
                          نام کاربری حداقل 3 حرف و اعداد و حروف انگلیسی میباشد.
                        </p>
                      )}
                    </div>
                    {/* 4 */}
                    <div className="relative mx-4">
                      <p className="absolute top-3 right-5 bg-blue-100 text-blue-600 px-1">
                        کد ملی
                      </p>
                      <input
                        className="py-3 rounded-lg border-2 border-blue-600 outline-none text-sm text-blue-800 mt-6 bg-blue-100 w-full indent-3"
                        {...register("userName", {
                          required: true,
                          pattern: RegexPassword,
                        })}
                      />
                      {errors.userName && (
                        <p className="text-red-500 text-sm-g mt-1">
                          نام کاربری حداقل 3 حرف و اعداد و حروف انگلیسی میباشد.
                        </p>
                      )}
                    </div>
                    {/* 5 */}
                    <div className="relative mx-4">
                      <p className="absolute top-3 right-5 bg-blue-100 text-blue-600 px-1">
                        شماره همراه
                      </p>
                      <input
                        className="py-3 rounded-lg border-2 border-blue-600 outline-none text-sm text-blue-800 mt-6 bg-blue-100 w-full indent-3"
                        {...register("userName", {
                          required: true,
                          pattern: RegexPassword,
                        })}
                      />
                      {errors.userName && (
                        <p className="text-red-500 text-sm-g mt-1">
                          نام کاربری حداقل 3 حرف و اعداد و حروف انگلیسی میباشد.
                        </p>
                      )}
                    </div>
                    {/* 6 */}
                    <div className="relative mx-4">
                      <p className="absolute top-3 right-5 bg-blue-100 text-blue-600 px-1">
                        تخصص
                      </p>
                      <input
                        className="py-3 rounded-lg border-2 border-blue-600 outline-none text-sm text-blue-800 mt-6 bg-blue-100 w-full indent-3"
                        {...register("userName", {
                          required: true,
                          pattern: RegexPassword,
                        })}
                      />
                      {errors.userName && (
                        <p className="text-red-500 text-sm-g mt-1">
                          نام کاربری حداقل 3 حرف و اعداد و حروف انگلیسی میباشد.
                        </p>
                      )}
                    </div>
                    {/* 7 */}
                    <div className="relative mx-4">
                      <p className="absolute top-3 right-5 bg-blue-100 text-blue-600 px-1">
                        کد نظام پزشکی
                      </p>
                      <input
                        className="py-3 rounded-lg border-2 border-blue-600 outline-none text-sm text-blue-800 mt-6 bg-blue-100 w-full indent-3"
                        {...register("userName", {
                          required: true,
                          pattern: RegexPassword,
                        })}
                      />
                      {errors.userName && (
                        <p className="text-red-500 text-sm-g mt-1">
                          نام کاربری حداقل 3 حرف و اعداد و حروف انگلیسی میباشد.
                        </p>
                      )}
                    </div>
                    {/* 8 */}
                    <div className="relative mx-4">
                      <p className="absolute top-3 right-5 bg-blue-100 text-blue-600 px-1">
                        سابقه
                      </p>
                      <input
                        className="py-3 rounded-lg border-2 border-blue-600 outline-none text-sm text-blue-800 mt-6 bg-blue-100 w-full indent-3"
                        {...register("userName", {
                          required: true,
                          pattern: RegexPassword,
                        })}
                      />
                      {errors.userName && (
                        <p className="text-red-500 text-sm-g mt-1">
                          نام کاربری حداقل 3 حرف و اعداد و حروف انگلیسی میباشد.
                        </p>
                      )}
                    </div>
                  </section>
                  <div className="relative mt-6">
                    <p className="absolute top-3 right-5 bg-blue-100 text-blue-600 px-1">
                      توضیحات
                    </p>
                    <textarea
                      name=""
                      rows={8}
                      cols={100}
                      className="py-3 rounded-lg border-2 border-blue-600 outline-none text-sm text-blue-800 mt-6 bg-blue-100 w-full indent-3"
                    ></textarea>
                    {/* <input
                        className="py-3 rounded-lg border-2 border-blue-600 outline-none text-sm text-blue-800 mt-6 bg-blue-100 w-full indent-3"
                        {...register("userName", {
                          required: true,
                          pattern: RegexPassword,
                        })}
                      />
                      {errors.userName && (
                        <p className="text-red-500 text-sm-g mt-1">
                          نام کاربری حداقل 3 حرف و اعداد و حروف انگلیسی میباشد.
                        </p>
                      )} */}
                  </div>
                  <button
                    type="submit"
                    className=" w-44 absolute left-[-30%] bottom-[10%] rounded-xl bg-blue-700 hover:bg-blue-900 text-blue-50 text-xl font-bold py-2 "
                  >
                    ذخیره
                  </button>
                </form>
              </div>
              <div className="w-[20%] main-height-g-4">
                <div className="w-44 h-44 bg-blue-700 rounded-full mx-auto flex justify-center items-center text-9xl text-white cursor-pointer relative ">
                  <div className="w-5 h-5 bg-white rounded-full text-blue-700 absolute top-[5%] right-[14%] border-2 border-blue-800 flex justify-center items-center">
                    <FiPlus />
                  </div>{" "}
                  <FaUser />
                </div>
              </div>
            </div>
          )}
          {toggle === "SHOWTIME" && (
            <div className="bg-red-200 w-[95%] main-height-g-4 m-auto"></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DrPage;
