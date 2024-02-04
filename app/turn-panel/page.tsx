"use client";
import { useEffect, useState } from "react";
import { FaUserDoctor } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import { MdOutlineDateRange } from "react-icons/md";

import DatePicker from "react-multi-date-picker";
import { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { useForm } from "react-hook-form";
function DrPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [toggle, setToggle] = useState("SHOWDR");
  const [toggleFrom, setToggleFrom] = useState(false);
  const [fromDay, setFromDay] = useState(1);
  const [fromYear, setFromYear] = useState(1402);
  const [fromMonth, setFromMonth] = useState(1);
  const [toggleTo, setToggleTo] = useState(false);
  const [toDay, setToDay] = useState(1);
  const [toYear, setToYear] = useState(1402);
  const [toMonth, setToMonth] = useState(1);
  const [turnCount, setTurnCount] = useState();
  const [turnMinutes, setTurnMinutes] = useState();
  const [price, setPrice] = useState();
  const [turnPrepayment, setTurnPrepayment] = useState();

  const addCommas = (num: any) =>
    num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const removeNonNumeric = (num: any) => num.toString().replace(/[^0-9]/g, "");
  const Months = [
    { id: "1", value: "1", title: "فروردین" },
    { id: "2", value: "2", title: "اردیبهشت" },
    { id: "3", value: "3", title: "خرداد" },
    { id: "4", value: "4", title: "تیر" },
    { id: "5", value: "5", title: "مرداد" },
    { id: "6", value: "6", title: "شهریور" },
    { id: "7", value: "7", title: "مهر" },
    { id: "8", value: "8", title: "آبان" },
    { id: "9", value: "9", title: "آذر" },
    { id: "10", value: "10", title: "دی" },
    { id: "11", value: "11", title: "بهمن" },
    { id: "12", value: "12", title: "اسفند" },
  ];
  const [week, setWeek]: any = useState([
    { id: "1", value: "1", title: "شنبه", selectStatus: false },
    { id: "2", value: "2", title: "یکشنبه", selectStatus: false },
    { id: "3", value: "3", title: "دوشنبه", selectStatus: false },
    { id: "4", value: "4", title: "سه شنبه", selectStatus: false },
    { id: "5", value: "5", title: "چهار شنبه", selectStatus: false },
    { id: "6", value: "6", title: "پنج شنبه", selectStatus: false },
    { id: "7", value: "7", title: "جمعه", selectStatus: false },
  ]);
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
            //   <div style={{ direction: "rtl" }}>
            //   <DatePicker
            //     calendar={persian}
            //     locale={persian_fa}
            //     onChange={e=>console.log(e)}
            //     // calendarPosition="bottom-right"
            //   />
            // </div>
            // <Calendar calendar={persian} locale={persian_fa} onChange={e=>console.log(e)}/>
            <div className=" w-[95%] main-height-g-4 p-14 m-auto">
              <form action="#">
                <div className="w-[90%] m-auto ">
                  <h2 className="text-xl font-bold py-2">تاریخ نوبت دهی</h2>
                  <div className="flex justify-between  items-center  pr-6">
                    <div className=" flex justify-center gap-6 items-center bg-slate-400 rounded-full px-4 py-2">
                      <span className="text-white">از</span>
                      <input
                        type="text"
                        value={fromDay}
                        placeholder="....."
                        onChange={(e) => setFromDay(+e.target.value)}
                        className="bg-blue-600 rounded-3xl text-white outline-none p-1 indent-8 w-24"
                      />

                      <select
                        name="fromMonth"
                        id="fromMonth"
                        value={fromMonth}
                        onChange={(e) => {
                          e.target.value != "0" &&
                            setFromMonth(+e.target.value);
                        }}
                        className="bg-blue-600 rounded-3xl text-white outline-none p-1 indent-3 w-28"
                      >
                        <>
                          <option value="0">انتخاب ماه</option>
                          {Months.map((month) => (
                            <option key={month.id} value={month.value}>
                              {month.title}
                            </option>
                          ))}
                        </>
                      </select>
                      <input
                        type="text"
                        value={fromYear}
                        placeholder="....."
                        onChange={(e) => setFromYear(+e.target.value)}
                        className="bg-blue-600 rounded-3xl text-white outline-none  p-1 indent-7 w-24"
                      />
                      <div className="text-2xl text-white cursor-pointer relative">
                        <MdOutlineDateRange
                          onClick={() => setToggleFrom((p) => !p)}
                        />
                        {toggleFrom == true && (
                          <div className=" absolute left-0 ">
                            <div>
                              <Calendar
                                calendar={persian}
                                locale={persian_fa}
                                onChange={(e: any) => {
                                  setFromDay(e.day);
                                  setFromMonth(+e.month.number);
                                  setFromYear(e.year);
                                  setToggleFrom(false);
                                }}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <span>تا</span>
                    <div className=" flex justify-center gap-6 items-center bg-slate-400 rounded-full px-4 py-2">
                      <input
                        type="text"
                        value={toDay}
                        placeholder="....."
                        onChange={(e) => setToDay(+e.target.value)}
                        className="bg-blue-600 rounded-3xl text-white outline-none p-1 indent-8 w-24"
                      />

                      <select
                        name="ToMonth"
                        id="ToMonth"
                        value={toMonth}
                        onChange={(e) => {
                          e.target.value != "0" && setToMonth(+e.target.value);
                        }}
                        className="bg-blue-600 rounded-3xl text-white outline-none p-1 indent-3 w-28"
                      >
                        <>
                          <option value="0">انتخاب ماه</option>
                          {Months.map((month) => (
                            <option key={month.id} value={month.value}>
                              {month.title}
                            </option>
                          ))}
                        </>
                      </select>
                      <input
                        type="text"
                        value={toYear}
                        placeholder="....."
                        onChange={(e) => setToYear(+e.target.value)}
                        className="bg-blue-600 rounded-3xl text-white outline-none  p-1 indent-7 w-24"
                      />
                      <div className="text-2xl text-white cursor-pointer relative">
                        <MdOutlineDateRange
                          onClick={() => setToggleTo((p) => !p)}
                        />
                        {toggleTo == true && (
                          <div className=" absolute left-0">
                            <div>
                              <Calendar
                                calendar={persian}
                                locale={persian_fa}
                                onChange={(e: any) => {
                                  setToDay(e.day);
                                  setToMonth(+e.month.number);
                                  setToYear(e.year);
                                  setToggleTo(false);
                                }}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-[90%] m-auto my-10 ">
                  <h2 className="text-xl font-bold py-2">روزهای حضور در مطب</h2>
                  <div className="pr-6">
                    <div className=" flex justify-around items-center  bg-slate-400 rounded-full px-4 py-2">
                      {week.map((day: any, index: any) => (
                        <span
                          className={` text-xl  py-1 cursor-pointer ${
                            day.selectStatus == true
                              ? "text-green-300 border-b-2 border-green-300"
                              : "text-white"
                          }`}
                          key={day.id}
                          onClick={() => {
                            let newWeek = [];
                            for (let i = 0; i < week.length; i++) {
                              if (i == index) {
                                newWeek.push({
                                  id: day.id,
                                  value: day.value,
                                  title: day.title,
                                  selectStatus: !day.selectStatus,
                                });
                              } else {
                                newWeek.push({
                                  id: week[i].id,
                                  value: week[i].value,
                                  title: week[i].title,
                                  selectStatus: week[i].selectStatus,
                                });
                              }
                            }
                            setWeek(newWeek);
                          }}
                        >
                          {day.title}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="w-[90%] m-auto my-10">
                  <div className="pr-6 flex justify-between">
                    <div className="w-[47%]">
                      <h3 className="text-xl font-bold py-2">
                        نوبت های تعیین شده
                      </h3>
                      <div className=" flex justify-center gap-6 items-center bg-slate-400 rounded-full px-4 py-2">
                        <input
                          type="text"
                          value={turnCount}
                          placeholder="20 ...."
                          onChange={(e: any) => setTurnCount(e.target.value)}
                          className="bg-blue-600 rounded-3xl text-white outline-none p-1 indent-8 w-24"
                        />
                        <span className="text-white">نوبت</span>
                        <input
                          type="text"
                          value={turnMinutes}
                          placeholder="15 ..."
                          onChange={(e: any) => setTurnMinutes(e.target.value)}
                          className="bg-blue-600 rounded-3xl text-white outline-none  p-1 indent-7 w-24"
                        />
                        <span className="text-white">دقیقه ای</span>
                      </div>
                    </div>

                    <div className="w-[47%]">
                      <h3 className="text-xl font-bold py-2">هزینه ویزیت</h3>
                      <div className=" flex justify-center gap-6 items-center bg-slate-400 rounded-full px-4 py-2">
                        <div className=" relative">
                          <span className="text-white absolute top-[10%] left-[10%]">
                            (ریال)
                          </span>
                          <input
                            type="text"
                            value={price}
                            placeholder="1,000,000 ..."
                            onChange={(e: any) =>
                              setPrice(
                                addCommas(removeNonNumeric(e.target.value))
                              )
                            }
                            className="bg-blue-600 rounded-3xl text-white outline-none p-1 indent-2  w-40"
                          />
                          {/* <input
                            type="text"
                            value={turnCount}
                            onChange={(e: any) =>
                              setTurnCount(e.target.value.toLocaleString())
                            }
                            className="bg-blue-600 rounded-3xl text-white outline-none p-1  w-28"
                          /> */}
                        </div>
                        <div className=" relative">
                          <span className="text-white absolute top-[10%] left-[10%]">
                            %
                          </span>
                          <span className="text-white pl-1">پیش پرداخت :</span>
                          <input
                            type="text"
                            placeholder="10"
                            value={turnPrepayment}
                            onChange={(e: any) =>
                              setTurnPrepayment(e.target.value)
                            }
                            className="bg-blue-600 rounded-3xl text-white outline-none  p-1 indent-7 w-20"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end w-[80%]  m-auto">
                  <button className=" w-44  rounded-xl bg-blue-700 hover:bg-blue-900 text-blue-50 text-xl font-bold py-2 ">
                    ذخیره
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DrPage;
