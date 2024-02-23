"use client";
import { useEffect, useRef, useState } from "react";
import { FaUserDoctor } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import { MdOutlineDateRange } from "react-icons/md";
import { RiInsertColumnLeft } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";

import BounceLoader from "react-spinners/BounceLoader";

import { compareAsc, format, newDate } from "date-fns-jalali";
var moment = require("moment-jalaali");

import Swal from "sweetalert2";

import { Upload } from "upload-js";

import DatePicker from "react-multi-date-picker";
import { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { useForm } from "react-hook-form";
import local from "next/font/local";
function DrPage() {
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let weekDayObj: any = [
    {
      id: "1",
      workingTimeId: -1,
      title: "شنبه",
      timWorkDeys: [],
      showWorkingDateTimwModal: "0",
      timeZeroShow: true,
    },
    {
      id: "2",
      workingTimeId: -1,
      title: "یکشنبه",
      timWorkDeys: [],
      showWorkingDateTimwModal: "0",
      timeZeroShow: true,
    },
    {
      id: "3",
      workingTimeId: -1,
      title: "دوشنبه",
      timWorkDeys: [],
      showWorkingDateTimwModal: "0",
      timeZeroShow: true,
    },
    {
      id: "4",
      workingTimeId: -1,
      title: "سه شنبه",
      timWorkDeys: [],
      showWorkingDateTimwModal: "0",
      timeZeroShow: true,
    },
    {
      id: "5",
      workingTimeId: -1,
      title: "چهارشنبه",
      timWorkDeys: [],
      showWorkingDateTimwModal: "0",
      timeZeroShow: true,
    },
    {
      id: "6",
      workingTimeId: -1,
      title: "پنجشنبه",
      timWorkDeys: [],
      showWorkingDateTimwModal: "0",
      timeZeroShow: true,
    },
    {
      id: "7",
      workingTimeId: -1,
      title: "جمعه",
      timWorkDeys: [],
      showWorkingDateTimwModal: "0",
      timeZeroShow: true,
    },
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
  const [weekDay, setWeekDay]: any = useState(weekDayObj);
  const [reRenderWeekDay, setReRenderWeekDay] = useState(false);
  const [reRenderWeek2Day, setReRenderWeek2Day] = useState(false);
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
  const [sections, setSections]: any = useState([]);
  const [sectionId, setSectionId]: any = useState([]);
  const [imgs, setImgs]: any = useState();
  let [loading, setLoading] = useState(false);
  let [color, setColor] = useState("dark");
  const [experienceYear, setExperienceYear] = useState();
  const [depositAmount, setDepositAmount] = useState();
  const [reserveAmount, setReserveAmount] = useState();

  const workingTimeForRef: any = useRef();
  const workingTimeToRef: any = useRef();
  const workingTimeMinutesForRef: any = useRef();
  const workingTimeMinutesToRef: any = useRef();
  const workingTimeForRef2: any = useRef();
  const workingTimeToRef2: any = useRef();
  const workingTimeMinutesForRef2: any = useRef();
  const workingTimeMinutesToRef2: any = useRef();
  const workingTimeForRef3: any = useRef();
  const workingTimeToRef3: any = useRef();
  const workingTimeMinutesForRef3: any = useRef();
  const workingTimeMinutesToRef3: any = useRef();
  const workingTimeForRef4: any = useRef();
  const workingTimeToRef4: any = useRef();
  const workingTimeMinutesForRef4: any = useRef();
  const workingTimeMinutesToRef4: any = useRef();

  const addCommas = (num: any) =>
    num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const removeNonNumeric = (num: any) => num.toString().replace(/[^0-9]/g, "");
  useEffect(() => {}, [reRenderWeek2Day]);

  useEffect(() => {
    const getSection = async () => {
      try {
        const response = await fetch(
          "http://188.34.206.214:88/api/v1/Provider/Section",
          {
            headers: {
              Authorization: `Bearer ${JSON.parse(
                localStorage.getItem("user") || ""
              )}`,
              "Content-Type": "application/json",
            },
          }
        );
        const result = await response.json();
        console.log("result.data", result.data);
        setSections(result.data);
        // enter you logic when the fetch is successful
      } catch (error) {
        // enter your logic for when there is an error (ex. error toast)

        console.log("Err", error);
      }
    };
    localStorage.getItem("user") && getSection();
  }, []);
  useEffect(() => {
    return () => {
      const getWorkingTimeHandler = async () => {
        try {
          const response = await fetch(
            "http://188.34.206.214:88/api/v1/Provider/GetMyWorkingTimePlan",
            {
              headers: {
                Authorization: `Bearer ${JSON.parse(
                  localStorage.getItem("user") || ""
                )}`,
                "Content-Type": "application/json",
              },
            }
          );
          const result = await response.json();
          console.log("result.data", result.data);

          if (result.isSuccess == true) {
            let newWeekDay = weekDayObj;
            if (result.data && result.data.length > 0) {
              for (let i = 0; i < newWeekDay.length; i++) {
                let newKey: any = newWeekDay[i].timWorkDeys;
                for (let j = 0; j < result.data.length; j++) {
                  if (newWeekDay[i].id == result.data[j].dayId) {
                    newKey = [...newKey, ...result.data[j].timePeriods];
                    newWeekDay[i].workingTimeId = result.data[j].id;
                  }
                }
                if (newKey.length > 0) {
                  newWeekDay[i].timWorkDeys = newKey;
                  newWeekDay[i].timeZeroShow = false;
                }
              }
            }
            setWeekDay(newWeekDay);
          }
          // enter you logic when the fetch is successful
        } catch (error) {
          // enter your logic for when there is an error (ex. error toast)

          console.log("Err", error);
        }
      };
      localStorage.getItem("user") && getWorkingTimeHandler();
    };
  }, [reRenderWeekDay]);
  const upload = Upload({ apiKey: "free" });
  async function insertImgHandler(event: any) {
    const [file] = event.target.files;
    const { fileUrl } = await upload.uploadFile(file);
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
            setImgs(result.data.image);
          } else {
          }
        })
      );
  }

  const userInfoSaveHandler = (data: any) => {
    const userUpdateInfo = {
      firstName: data.firstName,
      lastName: data.lastName,
      nationalCode: data.nationalCode,
      ibanNumber: data.ibanNumber,
      bankCardNumber: data.bankCardNumber,
    };
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
  };
  const updateManyFildProviderHandler = (e: any) => {
    e.preventDefault();
    const updateManyInfoProvider = {
      sectionId,
      experienceYear,
      depositAmount,
      reserveAmount,
    };
    fetch("http://188.34.206.214:88/api/v1/Provider/UpdateProviderSetting", {
      method: "put",
      headers: {
        Authorization: `Bearer ${JSON.parse(
          localStorage.getItem("user") || ""
        )}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateManyInfoProvider),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.isSuccess == true) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "اطلاعات با موفقیت ویرایش شد",
            showConfirmButton: false,
            timer: 2500,
          });
        } else {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "خطایی رخ داده لطفا دوباره سعی نمایید.",
            showConfirmButton: false,
            timer: 2500,
          });
        }
      });
  };

  const sendProviderInfoAndTimeWorkingHandler = (e: any) => {
    e.preventDefault();
    let workingTimes: any = [];
    week.map(
      (day: any) =>
        day.selectStatus == true &&
        workingTimes.push({
          dayId: day.id,
          timePeriods: [
            {
              timeFrom: moment(
                `${fromYear}/${fromMonth}/${fromDay}`,
                "jYYYY/jM/jD"
              ).format("YYYY-M-D"),
              timeTo: moment(
                `${toYear}/${toMonth}/${toDay}`,
                "jYYYY/jM/jD"
              ).format("YYYY-M-D"),
            },
          ],
        })
    );
    fetch("http://188.34.206.214:88/api/v1/Provider/SetProviderWorkingTimes", {
      method: "post",
      headers: {
        Authorization: `Bearer ${JSON.parse(
          localStorage.getItem("user") || ""
        )}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(workingTimes),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.isSuccess == true) {
          // Swal.fire({
          //   position: "top-end",
          //   icon: "success",
          //   title: "اطلاعات با موفقیت ذخیره شد",
          //   showConfirmButton: false,
          //   timer: 2500,
          // });
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
    const updateManyInfoProvider = {
      depositAmount,
      reserveAmount,
    };
    fetch("http://188.34.206.214:88/api/v1/Provider/UpdateProviderSetting", {
      method: "put",
      headers: {
        Authorization: `Bearer ${JSON.parse(
          localStorage.getItem("user") || ""
        )}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateManyInfoProvider),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.isSuccess == true) {
          // Swal.fire({
          //   position: "top-end",
          //   icon: "success",
          //   title: "اطلاعات با موفقیت ویرایش شد",
          //   showConfirmButton: false,
          //   timer: 2500,
          // });
        } else {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "خطایی رخ داده لطفا دوباره سعی نمایید.",
            showConfirmButton: false,
            timer: 2500,
          });
        }
      });
  };

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
            onClick={() => setToggle("SHOWTIMEWORK")}
          >
            <div
              className={`w-full text-7xl text-slate-500 hover:text-slate-600   cursor-pointer flex justify-center ${
                toggle === "SHOWTIMEWORK" ? " border-b-2 border-blue-500" : ""
              }`}
            >
              {" "}
              <img
                src="/images/working-hours-icon.png"
                alt="working-hours-icon"
                className="opacity-50 hover:opacity-65"
              />
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
              <div className="w-[75%]  relative ">
                <form className="" onSubmit={handleSubmit(userInfoSaveHandler)}>
                  <section className=" grid grid-cols-2">
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
                    className=" w-44 absolute left-[10%] bottom-[37%] rounded-xl bg-blue-700 hover:bg-blue-900 text-blue-50 text-xl font-bold py-2 "
                  >
                    ذخیره
                  </button>
                </form>
                <h3 className="text-xl text-blue-800 font-bold mt-10 py-3">
                  ویرایش اطلاعات تکمیلی پزشک
                </h3>
                <form>
                  <section className=" grid grid-cols-2 ">
                    {/* "1" */}
                    <div className="relative mx-4">
                      <p className="absolute top-3 right-5 bg-blue-100 text-blue-600 px-1">
                        انتخاب تخصص
                      </p>
                      <select
                        name="sectionId"
                        id="sectionId"
                        value={sectionId}
                        onChange={(e) => {
                          e.target.value != "0" && setSectionId(e.target.value);
                        }}
                        className="py-3 rounded-lg border-2 border-blue-600 outline-none text-sm text-blue-800 mt-6 bg-blue-100 w-full indent-3"
                      >
                        <>
                          <option value="0">تخصص خود راانتخاب نمایید</option>
                          {sections.map((section: any) => (
                            <option key={section.id} value={section.id}>
                              {section.title}
                            </option>
                          ))}
                        </>
                      </select>
                    </div>
                    {/* "2" */}
                    <div className="relative mx-4">
                      <p className="absolute top-3 right-5 bg-blue-100 text-blue-600 px-1">
                        تجربه در سرمد(سال)
                      </p>
                      <input
                        type="text"
                        value={experienceYear}
                        placeholder="مقدار تجربه در سرمد به سال"
                        onChange={(e: any) => setExperienceYear(e.target.value)}
                        className="py-3 rounded-lg border-2 border-blue-600 outline-none text-sm text-blue-800 mt-6 bg-blue-100 w-full indent-3"
                      />
                    </div>
                    {/* "3" */}
                    <div className="relative mx-4">
                      <p className="absolute top-3 right-5 bg-blue-100 text-blue-600 px-1">
                        مبلغ ویزیت (ریال)
                      </p>
                      <input
                        type="text"
                        value={reserveAmount}
                        placeholder="مقدار حق ویزیت به ریال ..."
                        onChange={(e: any) => setReserveAmount(e.target.value)}
                        className="py-3 rounded-lg border-2 border-blue-600 outline-none text-sm text-blue-800 mt-6 bg-blue-100 w-full indent-3"
                      />
                    </div>
                    {/* "4" */}
                    <div className="relative mx-4">
                      <p className="absolute top-3 right-5 bg-blue-100 text-blue-600 px-1">
                        پیش پرداخت (%)
                      </p>
                      <input
                        type="text"
                        value={depositAmount}
                        placeholder="مقدار بیعانه به درصد ... "
                        onChange={(e: any) => setDepositAmount(e.target.value)}
                        className="py-3 rounded-lg border-2 border-blue-600 outline-none text-sm text-blue-800 mt-6 bg-blue-100 w-full indent-3"
                      />
                    </div>
                  </section>

                  <button
                    type="submit"
                    className=" w-44 absolute left-[10%] bottom-[-2%]  rounded-xl bg-blue-700 hover:bg-blue-900 text-blue-50 text-xl font-bold py-2 "
                    onClick={updateManyFildProviderHandler}
                  >
                    ویرایش
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

          {toggle === "SHOWTIMEWORK" && (
            <div className=" w-[95%] main-height-g-4 m-auto flex flex-col ">
              {weekDay.map((day: any, index: any) => (
                <>
                  <div key={day.id} className="border-b-2 border-blue-300 py-4">
                    <div className=" flex  text-blue-700 relative ">
                      {day.showWorkingDateTimwModal &&
                        day.showWorkingDateTimwModal == 1 && (
                          <div
                            className={`absolute z-10 modal-working-time-date right-[-10%] ${
                              day.id == 1
                                ? "top-[-300%]"
                                : day.id == 2
                                ? "top-[-515%]"
                                : day.id == 3
                                ? "top-[-730%]"
                                : day.id == 4
                                ? "top-[-945%]"
                                : day.id == 5
                                ? "top-[-1160%]"
                                : day.id == 6
                                ? "top-[-1375%]"
                                : "top-[-1580%]"
                            } `}
                          >
                            <div className="w-full h-full">
                              {`WorkingTime Modal ${day.id}`}
                              <div className=" min-h-96 max-w-[40%] mx-auto my-36 rounded-lg bg-white border-2 border-blue-200 shadow-2xl">
                                <div className="text-red-700 hover:text-red-900 text-3xl p-4 flex justify-end cursor-pointer ">
                                  <IoCloseSharp
                                    onClick={() => {
                                      let newWeekDay = weekDay;
                                      for (
                                        let i = 0;
                                        i < newWeekDay.length;
                                        i++
                                      ) {
                                        if (newWeekDay[i].id == day.id) {
                                          newWeekDay[
                                            i
                                          ].showWorkingDateTimwModal = "0";
                                        }
                                      }
                                      setWeekDay(newWeekDay);
                                      setReRenderWeek2Day((p) => !p);
                                    }}
                                  />
                                </div>
                                <div>
                                  <h3 className="text-blue-950 font-bold text-center text-xl ">{`تعیین تاریخ و تعداد نوبت برای ساعت ${day.timWorkDeys[0].timeFrom.slice(
                                    14,
                                    16
                                  )} : ${day.timWorkDeys[0].timeFrom.slice(
                                    11,
                                    13
                                  )} تا ${day.timWorkDeys[0].timeTo.slice(
                                    14,
                                    16
                                  )} : ${day.timWorkDeys[0].timeTo.slice(
                                    11,
                                    13
                                  )} روز ${day.title}`}</h3>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      {day.timWorkDeys.length > 0 && (
                        <button
                          className=" absolute top-0 left-[4%] border-none bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded-lg"
                          onClick={() => {
                            Swal.fire({
                              title: "حذف زمان ؟",
                              text: `آیا از حذف ساعت های  ${day.title} اطمینان دارید ؟`,
                              icon: "warning",
                              showCancelButton: true,
                              confirmButtonColor: "#3085d6",
                              cancelButtonColor: "#d33",
                              confirmButtonText: "بله , حذف شود",
                              cancelButtonText: "خیر , انصراف",
                              reverseButtons: true,
                            }).then((result) => {
                              if (result.isConfirmed) {
                                const deleteWorkingTimeHandler = async () => {
                                  try {
                                    const response = await fetch(
                                      `http://188.34.206.214:88/api/v1/Provider/DeleteWorkingTimes/${day.workingTimeId}`,
                                      {
                                        method: "delete",
                                        headers: {
                                          Authorization: `Bearer ${JSON.parse(
                                            localStorage.getItem("user") || ""
                                          )}`,
                                          "Content-Type": "application/json",
                                        },
                                      }
                                    );
                                    const data = await response.json();
                                    // enter you logic when the fetch is successful
                                    if (data.isSuccess == true) {
                                      Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: data.message,
                                        showConfirmButton: false,
                                        timer: 2000,
                                      });
                                      setReRenderWeekDay((p) => !p);
                                    }
                                  } catch (error) {
                                    // enter your logic for when there is an error (ex. error toast)

                                    console.log("Err", error);
                                  }
                                };

                                deleteWorkingTimeHandler();
                              }
                            });
                          }}
                        >
                          حذف
                        </button>
                      )}
                      <div className=" w-20">{day.title}</div>{" "}
                      {day.timeZeroShow === true ? (
                        <div
                          className=" absolute cursor-pointer top-[10%] right-[6%] text-white bg-blue-600 text-xl rounded-3xl px-1"
                          onClick={() => {
                            let newWeekDay = [];
                            for (let i = 0; i < weekDay.length; i++) {
                              if (i == index) {
                                newWeekDay.push({
                                  id: day.id,
                                  title: day.title,
                                  timWorkDeys: day.timWorkDeys,
                                  timeZeroShow: !day.timeZeroShow,
                                });
                              } else {
                                newWeekDay.push({
                                  id: weekDay[i].id,
                                  title: weekDay[i].title,
                                  timWorkDeys: weekDay[i].timWorkDeys,
                                  timeZeroShow: weekDay[i].timeZeroShow,
                                });
                              }
                            }
                            setWeekDay(newWeekDay);
                          }}
                        >
                          +
                        </div>
                      ) : (
                        <div className=" relative">
                          <div className="flex">
                            <div className="text-sm bg-blue-600 flex items-center  text-white p-1 rounded-lg ">
                              از ساعت
                              <input
                                type="text"
                                className=" outline-none w-7 rounded-xl bg-blue-600 indent-2"
                                placeholder="..."
                                ref={workingTimeMinutesForRef}
                                value={
                                  day &&
                                  day.timWorkDeys[0] &&
                                  day.timWorkDeys[0].timeFrom &&
                                  day.timWorkDeys[0].timeFrom.slice(14, 16)
                                }
                              />
                              :
                              <input
                                type="text"
                                className=" outline-none w-7 rounded-xl bg-blue-600 indent-2"
                                placeholder="..."
                                ref={workingTimeForRef}
                                value={
                                  day &&
                                  day.timWorkDeys[0] &&
                                  day.timWorkDeys[0].timeFrom &&
                                  day.timWorkDeys[0].timeFrom.slice(11, 13)
                                }
                              />
                              تا ساعت
                              <input
                                type="text"
                                className=" outline-none w-7 rounded-xl bg-blue-600 indent-2"
                                placeholder="..."
                                ref={workingTimeMinutesToRef}
                                value={
                                  day &&
                                  day.timWorkDeys[0] &&
                                  day.timWorkDeys[0].timeTo &&
                                  day.timWorkDeys[0].timeTo.slice(14, 16)
                                }
                              />
                              :
                              <input
                                type="text"
                                className=" outline-none w-7 rounded-xl bg-blue-600 indent-2"
                                placeholder="..."
                                ref={workingTimeToRef}
                                value={
                                  day &&
                                  day.timWorkDeys[0] &&
                                  day.timWorkDeys[0].timeTo &&
                                  day.timWorkDeys[0].timeTo.slice(11, 13)
                                }
                              />
                            </div>
                            {day.timWorkDeys.length >= 1 && (
                              <div className=" relative">
                                <div
                                  className=" flex items-center text-blue-600  text-2xl cursor-pointer hover:scale-125 relative"
                                  onClick={() => {
                                    let newWeekDay = weekDay;
                                    for (
                                      let i = 0;
                                      i < newWeekDay.length;
                                      i++
                                    ) {
                                      if (newWeekDay[i].id == day.id) {
                                        newWeekDay[
                                          i
                                        ].showWorkingDateTimwModal = 1;
                                      }
                                    }
                                    setWeekDay(newWeekDay);
                                    setReRenderWeek2Day((p) => !p);
                                  }}
                                >
                                  <RiInsertColumnLeft />
                                </div>
                              </div>
                            )}
                          </div>
                          {day.timWorkDeys.length == 0 && (
                            <div className="flex flex-col gap-1 absolute top-[-55%] left-[-5%] ">
                              <div
                                className=" text-xl cursor-pointer"
                                onClick={() => {
                                  let WTT = workingTimeToRef.current.value;
                                  let WTF = workingTimeForRef.current.value;
                                  let WTMF =
                                    workingTimeMinutesForRef.current.value;
                                  let WTMT =
                                    workingTimeMinutesToRef.current.value;
                                  let workingTimeFor =
                                    Number(WTF) * 60 + Number(WTMF);
                                  let workingTimeTo =
                                    Number(WTT) * 60 + Number(WTMT);

                                  if (
                                    workingTimeForRef &&
                                    workingTimeForRef.current &&
                                    WTMF &&
                                    WTMF >= 0 &&
                                    WTMF < 60 &&
                                    WTMT &&
                                    WTMT >= 0 &&
                                    WTMT < 60 &&
                                    WTF &&
                                    WTF > 0 &&
                                    WTF < 24 &&
                                    WTT &&
                                    WTT > 0 &&
                                    WTT < 24 &&
                                    workingTimeTo > workingTimeFor
                                  ) {
                                    let timeFrom;
                                    let timeFromMinutes;
                                    let timeTo;
                                    let timeToMinutes;

                                    if (WTF < 10 && WTF.length == 1) {
                                      timeFrom = `0${WTF}`;
                                    } else if (WTF < 24) {
                                      timeFrom = WTF;
                                    } else {
                                      timeFrom = "00";
                                    }
                                    if (WTMF < 10 && WTMF.length == 1) {
                                      timeFromMinutes = `0${WTMF}`;
                                    } else if (WTMF < 60) {
                                      timeFromMinutes = WTMF;
                                    } else {
                                      timeFromMinutes = "00";
                                    }

                                    if (WTT < 10 && WTT.length == 1) {
                                      timeTo = `0${WTT}`;
                                    } else if (WTT < 24) {
                                      timeTo = WTT;
                                    } else {
                                      timeTo = "00";
                                    }
                                    if (WTMT < 10 && WTMT.length == 1) {
                                      timeToMinutes = `0${WTMT}`;
                                    } else if (WTMT < 60) {
                                      timeToMinutes = WTMT;
                                    } else {
                                      timeToMinutes = "00";
                                    }
                                    const timWorkObj = {
                                      dayId: day.id,
                                      timePeriods: [
                                        {
                                          timeFrom: `2024-02-18T${timeFrom}:${timeFromMinutes}:01.733Z`,
                                          timeTo: `2024-02-18T${timeTo}:${timeToMinutes}:00.733Z`,
                                        },
                                      ],
                                    };
                                    const postWorkingTimeHandler = async () => {
                                      try {
                                        const response = await fetch(
                                          "http://188.34.206.214:88/api/v1/Provider/AddProviderWorkingTimes",
                                          {
                                            method: "POST",
                                            headers: {
                                              Authorization: `Bearer ${JSON.parse(
                                                localStorage.getItem("user") ||
                                                  ""
                                              )}`,
                                              "Content-Type":
                                                "application/json",
                                            },
                                            body: JSON.stringify(timWorkObj),
                                          }
                                        );
                                        const data = await response.json();
                                        // enter you logic when the fetch is successful
                                        if (data.isSuccess == true) {
                                          Swal.fire({
                                            position: "top-end",
                                            icon: "success",
                                            title: data.message,
                                            showConfirmButton: false,
                                            timer: 2000,
                                          });
                                          setReRenderWeekDay((p) => !p);
                                        }
                                      } catch (error) {
                                        // enter your logic for when there is an error (ex. error toast)

                                        console.log("Err", error);
                                      }
                                    };

                                    postWorkingTimeHandler();
                                  } else {
                                    Swal.fire({
                                      position: "top-end",
                                      icon: "error",
                                      title:
                                        " کاربر گرامی لطفا ساعت ها را به درستی وارد نمایید",
                                      showConfirmButton: false,
                                      timer: 2000,
                                    });
                                  }
                                }}
                              >
                                +
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                      {/* 2 */}
                      {day.timeZeroShow === false &&
                        day.timWorkDeys.length >= 1 && (
                          <div className=" relative mr-6 ">
                            <div className="text-sm bg-blue-600 flex items-center  text-white p-1 rounded-lg">
                              از ساعت
                              <input
                                type="text"
                                className=" outline-none w-7 rounded-xl bg-blue-600 indent-2"
                                placeholder="..."
                                ref={workingTimeMinutesForRef2}
                                value={
                                  day &&
                                  day.timWorkDeys[1] &&
                                  day.timWorkDeys[1].timeFrom &&
                                  day.timWorkDeys[1].timeFrom.slice(14, 16)
                                }
                              />
                              :
                              <input
                                type="text"
                                className=" outline-none w-7 rounded-xl bg-blue-600 indent-2"
                                placeholder="..."
                                ref={workingTimeForRef2}
                                value={
                                  day &&
                                  day.timWorkDeys[1] &&
                                  day.timWorkDeys[1].timeFrom &&
                                  day.timWorkDeys[1].timeFrom.slice(11, 13)
                                }
                              />
                              تا ساعت
                              <input
                                type="text"
                                className=" outline-none w-7 rounded-xl bg-blue-600 indent-2"
                                placeholder="..."
                                ref={workingTimeMinutesToRef2}
                                value={
                                  day &&
                                  day.timWorkDeys[1] &&
                                  day.timWorkDeys[1].timeTo &&
                                  day.timWorkDeys[1].timeTo.slice(14, 16)
                                }
                              />
                              :
                              <input
                                type="text"
                                className=" outline-none w-7 rounded-xl bg-blue-600 indent-2"
                                placeholder="..."
                                ref={workingTimeToRef2}
                                value={
                                  day &&
                                  day.timWorkDeys[1] &&
                                  day.timWorkDeys[1].timeTo &&
                                  day.timWorkDeys[1].timeTo.slice(11, 13)
                                }
                              />
                            </div>
                            {/* 2 */}
                            {day.timWorkDeys.length == 1 && (
                              <div className="flex flex-col gap-1 absolute top-[-55%] left-[-5%] ">
                                <div
                                  className=" text-xl cursor-pointer"
                                  onClick={() => {
                                    let WTT = workingTimeToRef2.current.value;
                                    let WTF = workingTimeForRef2.current.value;
                                    let WTMF =
                                      workingTimeMinutesForRef2.current.value;
                                    let WTMT =
                                      workingTimeMinutesToRef2.current.value;
                                    let workingTimeFor =
                                      Number(WTF) * 60 + Number(WTMF);
                                    let workingTimeTo =
                                      Number(WTT) * 60 + Number(WTMT);
                                    if (
                                      workingTimeForRef2 &&
                                      workingTimeForRef2.current &&
                                      WTMF &&
                                      WTMF >= 0 &&
                                      WTMF < 60 &&
                                      WTMT &&
                                      WTMT >= 0 &&
                                      WTMT < 60 &&
                                      WTF &&
                                      WTF > 0 &&
                                      WTF < 24 &&
                                      WTT &&
                                      WTT > 0 &&
                                      WTT < 24 &&
                                      workingTimeTo > workingTimeFor
                                    ) {
                                      let timeFrom;
                                      let timeFromMinutes;
                                      let timeTo;
                                      let timeToMinutes;

                                      if (WTF < 10 && WTF.length == 1) {
                                        timeFrom = `0${WTF}`;
                                      } else if (WTF < 24) {
                                        timeFrom = WTF;
                                      } else {
                                        timeFrom = "00";
                                      }
                                      if (WTMF < 10 && WTMF.length == 1) {
                                        timeFromMinutes = `0${WTMF}`;
                                      } else if (WTMF < 60) {
                                        timeFromMinutes = WTMF;
                                      } else {
                                        timeFromMinutes = "00";
                                      }

                                      if (WTT < 10 && WTT.length == 1) {
                                        timeTo = `0${WTT}`;
                                      } else if (WTT < 24) {
                                        timeTo = WTT;
                                      } else {
                                        timeTo = "00";
                                      }
                                      if (WTMT < 10 && WTMT.length == 1) {
                                        timeToMinutes = `0${WTMT}`;
                                      } else if (WTMT < 60) {
                                        timeToMinutes = WTMT;
                                      } else {
                                        timeToMinutes = "00";
                                      }
                                      const timWorkObj = {
                                        dayId: day.id,
                                        timePeriods: [
                                          {
                                            timeFrom: `2024-02-18T${timeFrom}:${timeFromMinutes}:01.733Z`,
                                            timeTo: `2024-02-18T${timeTo}:${timeToMinutes}:00.733Z`,
                                          },
                                        ],
                                      };
                                      const postWorkingTimeHandler =
                                        async () => {
                                          try {
                                            const response = await fetch(
                                              "http://188.34.206.214:88/api/v1/Provider/AddProviderWorkingTimes",
                                              {
                                                method: "POST",
                                                headers: {
                                                  Authorization: `Bearer ${JSON.parse(
                                                    localStorage.getItem(
                                                      "user"
                                                    ) || ""
                                                  )}`,
                                                  "Content-Type":
                                                    "application/json",
                                                },
                                                body: JSON.stringify(
                                                  timWorkObj
                                                ),
                                              }
                                            );
                                            const data = await response.json();
                                            // enter you logic when the fetch is successful
                                            if (data.isSuccess == true) {
                                              Swal.fire({
                                                position: "top-end",
                                                icon: "success",
                                                title: data.message,
                                                showConfirmButton: false,
                                                timer: 2000,
                                              });
                                              setReRenderWeekDay((p) => !p);
                                            }
                                          } catch (error) {
                                            // enter your logic for when there is an error (ex. error toast)

                                            console.log("Err", error);
                                          }
                                        };

                                      postWorkingTimeHandler();
                                    } else {
                                      Swal.fire({
                                        position: "top-end",
                                        icon: "error",
                                        title:
                                          "کاربر گرامی لطفا ساعت ها را به درستی وارد نمایید",
                                        showConfirmButton: false,
                                        timer: 2000,
                                      });
                                    }
                                  }}
                                >
                                  +
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      {/* 3 */}
                      {day.timeZeroShow === false &&
                        day.timWorkDeys.length >= 2 && (
                          <div className=" relative mr-6 ">
                            <div className="text-sm bg-blue-600 flex items-center  text-white p-1 rounded-lg">
                              از ساعت
                              <input
                                type="text"
                                className=" outline-none w-7 rounded-xl bg-blue-600 indent-2"
                                placeholder="..."
                                ref={workingTimeMinutesForRef3}
                                value={
                                  day &&
                                  day.timWorkDeys[2] &&
                                  day.timWorkDeys[2].timeFrom &&
                                  day.timWorkDeys[2].timeFrom.slice(14, 16)
                                }
                              />
                              :
                              <input
                                type="text"
                                className=" outline-none w-7 rounded-xl bg-blue-600 indent-2"
                                placeholder="..."
                                ref={workingTimeForRef3}
                                value={
                                  day &&
                                  day.timWorkDeys[2] &&
                                  day.timWorkDeys[2].timeFrom &&
                                  day.timWorkDeys[2].timeFrom.slice(11, 13)
                                }
                              />
                              تا ساعت
                              <input
                                type="text"
                                className=" outline-none w-7 rounded-xl bg-blue-600 indent-2"
                                placeholder="..."
                                ref={workingTimeMinutesToRef3}
                                value={
                                  day &&
                                  day.timWorkDeys[2] &&
                                  day.timWorkDeys[2].timeTo &&
                                  day.timWorkDeys[2].timeTo.slice(14, 16)
                                }
                              />
                              :
                              <input
                                type="text"
                                className=" outline-none w-7 rounded-xl bg-blue-600 indent-2"
                                placeholder="..."
                                ref={workingTimeToRef3}
                                value={
                                  day &&
                                  day.timWorkDeys[2] &&
                                  day.timWorkDeys[2].timeTo &&
                                  day.timWorkDeys[2].timeTo.slice(11, 13)
                                }
                              />
                            </div>
                            {day.timWorkDeys.length == 2 && (
                              <div className="flex flex-col gap-1 absolute top-[-55%] left-[-5%] ">
                                <div
                                  className=" text-xl cursor-pointer"
                                  onClick={() => {
                                    let WTT = workingTimeToRef3.current.value;
                                    let WTF = workingTimeForRef3.current.value;
                                    let WTMF =
                                      workingTimeMinutesForRef3.current.value;
                                    let WTMT =
                                      workingTimeMinutesToRef3.current.value;
                                    let workingTimeFor =
                                      Number(WTF) * 60 + Number(WTMF);
                                    let workingTimeTo =
                                      Number(WTT) * 60 + Number(WTMT);

                                    if (
                                      workingTimeForRef3 &&
                                      workingTimeForRef3.current &&
                                      WTMF &&
                                      WTMF >= 0 &&
                                      WTMF < 60 &&
                                      WTMT &&
                                      WTMT >= 0 &&
                                      WTMT < 60 &&
                                      WTF &&
                                      WTF > 0 &&
                                      WTF < 24 &&
                                      WTT &&
                                      WTT > 0 &&
                                      WTT < 24 &&
                                      workingTimeTo > workingTimeFor
                                    ) {
                                      let timeFrom;
                                      let timeFromMinutes;
                                      let timeTo;
                                      let timeToMinutes;

                                      if (WTF < 10 && WTF.length == 1) {
                                        timeFrom = `0${WTF}`;
                                      } else if (WTF < 24) {
                                        timeFrom = WTF;
                                      } else {
                                        timeFrom = "00";
                                      }
                                      if (WTMF < 10 && WTMF.length == 1) {
                                        timeFromMinutes = `0${WTMF}`;
                                      } else if (WTMF < 60) {
                                        timeFromMinutes = WTMF;
                                      } else {
                                        timeFromMinutes = "00";
                                      }

                                      if (WTT < 10 && WTT.length == 1) {
                                        timeTo = `0${WTT}`;
                                      } else if (WTT < 24) {
                                        timeTo = WTT;
                                      } else {
                                        timeTo = "00";
                                      }
                                      if (WTMT < 10 && WTMT.length == 1) {
                                        timeToMinutes = `0${WTMT}`;
                                      } else if (WTMT < 60) {
                                        timeToMinutes = WTMT;
                                      } else {
                                        timeToMinutes = "00";
                                      }
                                      const timWorkObj = {
                                        dayId: day.id,
                                        timePeriods: [
                                          {
                                            timeFrom: `2024-02-18T${timeFrom}:${timeFromMinutes}:01.733Z`,
                                            timeTo: `2024-02-18T${timeTo}:${timeToMinutes}:00.733Z`,
                                          },
                                        ],
                                      };
                                      const postWorkingTimeHandler =
                                        async () => {
                                          try {
                                            const response = await fetch(
                                              "http://188.34.206.214:88/api/v1/Provider/AddProviderWorkingTimes",
                                              {
                                                method: "POST",
                                                headers: {
                                                  Authorization: `Bearer ${JSON.parse(
                                                    localStorage.getItem(
                                                      "user"
                                                    ) || ""
                                                  )}`,
                                                  "Content-Type":
                                                    "application/json",
                                                },
                                                body: JSON.stringify(
                                                  timWorkObj
                                                ),
                                              }
                                            );
                                            const data = await response.json();
                                            // enter you logic when the fetch is successful
                                            if (data.isSuccess == true) {
                                              Swal.fire({
                                                position: "top-end",
                                                icon: "success",
                                                title: data.message,
                                                showConfirmButton: false,
                                                timer: 2000,
                                              });
                                              setReRenderWeekDay((p) => !p);
                                            }
                                          } catch (error) {
                                            // enter your logic for when there is an error (ex. error toast)

                                            console.log("Err", error);
                                          }
                                        };

                                      postWorkingTimeHandler();
                                    } else {
                                      Swal.fire({
                                        position: "top-end",
                                        icon: "error",
                                        title:
                                          "کاربر گرامی لطفا ساعت ها را به درستی وارد نمایید",
                                        showConfirmButton: false,
                                        timer: 2000,
                                      });
                                    }
                                  }}
                                >
                                  +
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      {/* 4 */}
                      {day.timeZeroShow === false &&
                        day.timWorkDeys.length >= 3 && (
                          <div className=" relative mr-6 ">
                            <div className="text-sm bg-blue-600 flex items-center  text-white p-1 rounded-lg">
                              از ساعت
                              <input
                                type="text"
                                className=" outline-none w-7 rounded-xl bg-blue-600 indent-2"
                                placeholder="..."
                                ref={workingTimeMinutesForRef4}
                                value={
                                  day &&
                                  day.timWorkDeys[3] &&
                                  day.timWorkDeys[3].timeFrom &&
                                  day.timWorkDeys[3].timeFrom.slice(14, 16)
                                }
                              />
                              :
                              <input
                                type="text"
                                className=" outline-none w-7 rounded-xl bg-blue-600 indent-2"
                                placeholder="..."
                                ref={workingTimeForRef4}
                                value={
                                  day &&
                                  day.timWorkDeys[3] &&
                                  day.timWorkDeys[3].timeFrom &&
                                  day.timWorkDeys[3].timeFrom.slice(11, 13)
                                }
                              />
                              تا ساعت
                              <input
                                type="text"
                                className=" outline-none w-7 rounded-xl bg-blue-600 indent-2"
                                placeholder="..."
                                ref={workingTimeMinutesToRef4}
                                value={
                                  day &&
                                  day.timWorkDeys[3] &&
                                  day.timWorkDeys[3].timeTo &&
                                  day.timWorkDeys[3].timeTo.slice(14, 16)
                                }
                              />
                              :
                              <input
                                type="text"
                                className=" outline-none w-7 rounded-xl bg-blue-600 indent-2"
                                placeholder="..."
                                ref={workingTimeToRef4}
                                value={
                                  day &&
                                  day.timWorkDeys[3] &&
                                  day.timWorkDeys[3].timeTo &&
                                  day.timWorkDeys[3].timeTo.slice(11, 13)
                                }
                              />
                            </div>
                            {day.timWorkDeys.length == 3 && (
                              <div className="flex flex-col gap-1 absolute top-[-55%] left-[-5%] ">
                                <div
                                  className=" text-xl cursor-pointer"
                                  onClick={() => {
                                    let WTT = workingTimeToRef4.current.value;
                                    let WTF = workingTimeForRef4.current.value;
                                    let WTMF =
                                      workingTimeMinutesForRef4.current.value;
                                    let WTMT =
                                      workingTimeMinutesToRef4.current.value;
                                    let workingTimeFor =
                                      Number(WTF) * 60 + Number(WTMF);
                                    let workingTimeTo =
                                      Number(WTT) * 60 + Number(WTMT);

                                    if (
                                      workingTimeForRef4 &&
                                      workingTimeForRef4.current &&
                                      WTMF &&
                                      WTMF >= 0 &&
                                      WTMF < 60 &&
                                      WTMT &&
                                      WTMT >= 0 &&
                                      WTMT < 60 &&
                                      WTF &&
                                      WTF > 0 &&
                                      WTF < 24 &&
                                      WTT &&
                                      WTT > 0 &&
                                      WTT < 24 &&
                                      workingTimeTo > workingTimeFor
                                    ) {
                                      let timeFrom;
                                      let timeFromMinutes;
                                      let timeTo;
                                      let timeToMinutes;

                                      if (WTF < 10 && WTF.length == 1) {
                                        timeFrom = `0${WTF}`;
                                      } else if (WTF < 24) {
                                        timeFrom = WTF;
                                      } else {
                                        timeFrom = "00";
                                      }
                                      if (WTMF < 10 && WTMF.length == 1) {
                                        timeFromMinutes = `0${WTMF}`;
                                      } else if (WTMF < 60) {
                                        timeFromMinutes = WTMF;
                                      } else {
                                        timeFromMinutes = "00";
                                      }

                                      if (WTT < 10 && WTT.length == 1) {
                                        timeTo = `0${WTT}`;
                                      } else if (WTT < 24) {
                                        timeTo = WTT;
                                      } else {
                                        timeTo = "00";
                                      }
                                      if (WTMT < 10 && WTMT.length == 1) {
                                        timeToMinutes = `0${WTMT}`;
                                      } else if (WTMT < 60) {
                                        timeToMinutes = WTMT;
                                      } else {
                                        timeToMinutes = "00";
                                      }
                                      const timWorkObj = {
                                        dayId: day.id,
                                        timePeriods: [
                                          {
                                            timeFrom: `2024-02-18T${timeFrom}:${timeFromMinutes}:01.733Z`,
                                            timeTo: `2024-02-18T${timeTo}:${timeToMinutes}:00.733Z`,
                                          },
                                        ],
                                      };
                                      const postWorkingTimeHandler =
                                        async () => {
                                          try {
                                            const response = await fetch(
                                              "http://188.34.206.214:88/api/v1/Provider/AddProviderWorkingTimes",
                                              {
                                                method: "POST",
                                                headers: {
                                                  Authorization: `Bearer ${JSON.parse(
                                                    localStorage.getItem(
                                                      "user"
                                                    ) || ""
                                                  )}`,
                                                  "Content-Type":
                                                    "application/json",
                                                },
                                                body: JSON.stringify(
                                                  timWorkObj
                                                ),
                                              }
                                            );
                                            const data = await response.json();
                                            // enter you logic when the fetch is successful
                                            if (data.isSuccess == true) {
                                              Swal.fire({
                                                position: "top-end",
                                                icon: "success",
                                                title: data.message,
                                                showConfirmButton: false,
                                                timer: 2000,
                                              });
                                              setReRenderWeekDay((p) => !p);
                                            }
                                          } catch (error) {
                                            // enter your logic for when there is an error (ex. error toast)

                                            console.log("Err", error);
                                          }
                                        };

                                      postWorkingTimeHandler();
                                    } else {
                                      Swal.fire({
                                        position: "top-end",
                                        icon: "error",
                                        title:
                                          "کاربر گرامی لطفا ساعت ها را به درستی وارد نمایید",
                                        showConfirmButton: false,
                                        timer: 2000,
                                      });
                                    }
                                  }}
                                >
                                  +
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                    </div>{" "}
                  </div>
                </>
              ))}
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
                            value={reserveAmount}
                            placeholder="1,000,000 ..."
                            onChange={(e: any) =>
                              setReserveAmount(
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
                            value={depositAmount}
                            onChange={(e: any) =>
                              setDepositAmount(e.target.value)
                            }
                            className="bg-blue-600 rounded-3xl text-white outline-none  p-1 indent-7 w-20"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end w-[80%]  m-auto">
                  <button
                    className=" w-44  rounded-xl bg-blue-700 hover:bg-blue-900 text-blue-50 text-xl font-bold py-2 "
                    onClick={sendProviderInfoAndTimeWorkingHandler}
                  >
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
