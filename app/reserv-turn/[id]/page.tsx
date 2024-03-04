"use client";
import { useContext, useEffect, useState } from "react";
import AuthContext from "@/context/outhContext";

import { useRouter } from "next/navigation";

import { FaStar } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

interface IProviderState {
  bankCardNumber: any;
  credit: any;
  firstName: any;
  ibanNumber: any;
  id: number;
  image: any;
  lastName: any;
  nationalCode: any;
  phoneNumber: any;
  roles: any;
  sectionId: any;
  sectionTitle: any;
}

function HealthPage() {
  const week = [
    "شنبه",
    "یکشنبه",
    "دوشنبه",
    "سه شنبه",
    "چهار شنبه",
    "پنج شنبه",
    "جمعه",
  ];

  const [reservation, setReservation] = useState([
    { time: "8:00", reserveStatus: "FALSE" },
    { time: "8:15", reserveStatus: "FALSE" },
    { time: "8:30", reserveStatus: "FALSE" },
    { time: "8:45", reserveStatus: "FALSE" },
    { time: "9:00", reserveStatus: "FALSE" },
    { time: "9:15", reserveStatus: "FALSE" },
    { time: "9:30", reserveStatus: "FALSE" },
    { time: "9:45", reserveStatus: "FALSE" },
    { time: "10:00", reserveStatus: "FALSE" },
    { time: "10:15", reserveStatus: "FALSE" },
    { time: "10:30", reserveStatus: "FALSE" },
    { time: "10:45", reserveStatus: "FALSE" },
    { time: "11:00", reserveStatus: "FALSE" },
    { time: "11:15", reserveStatus: "FALSE" },
    { time: "11:30", reserveStatus: "FALSE" },
    { time: "11:45", reserveStatus: "FALSE" },
    { time: "12:00", reserveStatus: "TRUE" },
    { time: "12:15", reserveStatus: "FALSE" },
    { time: "12:30", reserveStatus: "FALSE" },
    { time: "12:45", reserveStatus: "TRUE" },
    { time: "13:00", reserveStatus: "FALSE" },
    { time: "13:15", reserveStatus: "FALSE" },
    { time: "13:30", reserveStatus: "FALSE" },
    { time: "13:45", reserveStatus: "FALSE" },
    { time: "14:00", reserveStatus: "FALSE" },
    { time: "14:15", reserveStatus: "FALSE" },
    { time: "14:30", reserveStatus: "FALSE" },
    { time: "14:45", reserveStatus: "FALSE" },
    { time: "15:00", reserveStatus: "FALSE" },
    { time: "15:15", reserveStatus: "FALSE" },
    { time: "15:30", reserveStatus: "FALSE" },
    { time: "15:45", reserveStatus: "NOTTIME" },
    { time: "16:00", reserveStatus: "FALSE" },
    { time: "16:15", reserveStatus: "FALSE" },
    { time: "16:30", reserveStatus: "FALSE" },
    { time: "16:45", reserveStatus: "FALSE" },
    { time: "17:00", reserveStatus: "FALSE" },
    { time: "17:15", reserveStatus: "FALSE" },
    { time: "17:30", reserveStatus: "NOTTIME" },
    { time: "17:45", reserveStatus: "FALSE" },
    { time: "18:00", reserveStatus: "TRUE" },
    { time: "18:15", reserveStatus: "FALSE" },
    { time: "18:30", reserveStatus: "FALSE" },
    { time: "18:45", reserveStatus: "FALSE" },
    { time: "19:00", reserveStatus: "TRUE" },
    { time: "19:15", reserveStatus: "FALSE" },
    { time: "19:30", reserveStatus: "TRUE" },
    { time: "19:45", reserveStatus: "FALSE" },
    { time: "20:00", reserveStatus: "FALSE" },
    { time: "20:15", reserveStatus: "FALSE" },
    { time: "20:30", reserveStatus: "FALSE" },
    { time: "20:45", reserveStatus: "FALSE" },
    { time: "21:00", reserveStatus: "NOTTIME" },
    { time: "21:15", reserveStatus: "FALSE" },
    { time: "21:30", reserveStatus: "FALSE" },
    { time: "21:45", reserveStatus: "TRUE" },
  ]);
  const [weekToogle, setWeekToogle] = useState(0);
  const [providerInfo, setProviderInfo]: any = useState();

  const rout = useRouter();
  const authContetext = useContext(AuthContext);
  useEffect(() => {
    return () => {
      setProviderInfo(authContetext.providerInfoSelections);
    };
  });
  console.log("providerInfo", providerInfo);
  const resHandler = () => {
    console.log(11111);
  };
  return (
    <>
      <div dir="ltr" className="border-2 border-blue-600 rounded-xl w-[90%] mx-auto bg-blue-300 p-6 my-3 relative">
        <div
          className=" absolute top-[1%] left-[2%] cursor-pointer text-blue-700 text-3xl hover:text-blue-950"
          onClick={() => {
            rout.push("/turn-rating");
          }}
        >
          <FaRegArrowAltCircleLeft />
        </div>
        <div className="w-full main-height-g-6 bg-white mt-8 rounded-xl">
          <div className="relative rounded-xl">
            <div className=" absolute bottom-[-3%] left-[42%] w-52 h-9">
              <input
                type="date"
                className="bg-slate-600 text-white rounded-3xl outline-none px-3 py-1"
              />
            </div>
            <div className=" absolute w-28 h-28 border-4 border-blue-600 bg-blue-200 rounded-full top-[-20%] left-[45%] z-10">
              <img
                src="../images/dr.png"
                alt="doctor"
                className="rounded-full w-full h-full   cursor-pointer"
              />
            </div>
            <div className="w-full h-64 clip-path-g bg-slate-600 rounded-b-3xl rounded-t-xl ">
              <div
                id="bg-img"
                className="w-full  h-44 rounded-b-3xl linear-gradient-g  rounded-t-xl "
              >
                <div className=" w-[40%] m-auto h-44 flex flex-col justify-end">
                  <div className=" w-full h-28 flex justify-between text-white">
                    <div className="">
                      <div>
                        <span>شماره نظام</span> : <span>123456</span>
                      </div>
                      <div className="py-2">
                        <span>تعداد مشاوره ها</span> : <span>110</span>
                      </div>
                      <div>
                        <span>تجربه در سرمد</span> : <span>11 ماه</span>
                      </div>
                    </div>
                    <div className="text-end">
                      <div>
                        دکتر {providerInfo && providerInfo.firstName}{" "}
                        {providerInfo && providerInfo.lastName}
                      </div>
                      <div className="py-2">
                        متخصص {providerInfo && providerInfo.sectionTitle}
                      </div>
                      <div className="flex text-right gap-1 py-2 text-yellow-400">
                        <span className="flex">
                          <div>5</div> <div>از </div> <div>5</div>
                        </span>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" text-white text-center  text-sm pt-2">
                بعد از انتخاب تاریخ و ساعت مورد نظر روی رزرو نوبت کلیک کنید
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full h-60 mt-2">
            <div className="w-[10%] border-r-2 border-blue-600">
              {week.map((day, index) => (
                <div
                  className="text-slate-600 my-2  w-[80%] mx-auto cursor-pointer text-center hover:text-slate-950 "
                  key={index}
                  onClick={() => setWeekToogle(index)}
                >
                  <span
                    className={` text-sm ${
                      weekToogle == index ? "border-b-2 border-blue-500" : ""
                    }`}
                  >
                    {day}
                  </span>
                </div>
              ))}
            </div>
            <div className="w-[90%] border-l-2  border-blue-600 py-2 px-6 ">
              <div className="grid grid-cols-8 gap-x-5 ">
                {reservation.map((res, index) => (
                  <div
                    key={index}
                    className={` rounded-2xl my-1 text-center text-sm  ${
                      res.reserveStatus == "TRUE"
                        ? "bg-green-400 text-white"
                        : res.reserveStatus == "NOTTIME"
                        ? "bg-gray-500 text-white"
                        : "border-2 border-blue-600 cursor-pointer hover:bg-blue-100"
                    }`}
                    onClick={resHandler}
                  >
                    {res.time}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-3">
          <button className="bg-blue-800 text-white px-8 py-1 rounded-2xl hover:bg-blue-900">
            رزرو نوبت
          </button>
        </div>
      </div>
    </>
  );
}

export default HealthPage;
