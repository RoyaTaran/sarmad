"use client";
import Header from "@/componens/header/Header";

import { IoMdList } from "react-icons/io";
import { FaStar } from "react-icons/fa";

import { useForm } from "react-hook-form";
function TurnRatingPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <section className="w-[90%] mx-auto">
      <section className=" w-[85%] m-auto main-height-g-4 ">
        <div className="flex justify-start gap-2 text-sm-g text-xl bold mt-10">
          <div className="text-2xl text-blue-500">
            {" "}
            <IoMdList />
          </div>
          <span>فیلتر</span>
        </div>
        <div className="flex justify-between main-height-g-4">
          <div className=" main-height-g-4 w-[35%]">
            <section className="w-[95%] mx-aouto main-height-g-4 border-2 border-blue-600 rounded-lg bg-blue-100">
              <form onSubmit={handleSubmit((data) => console.log(data))}>
                <div className="flex flex-col justify-around w-full main-height-g-4 ">
                  <div className="w-[90%] mx-auto">
                    <label htmlFor="Title" className="px-2">
                      تخصص / فوق تخصص
                    </label>
                    <select
                      {...register("Title", { required: true })}
                      className="w-full outline-none bg-white rounded-lg p-2 text-sm-g border-2 mt-1 border-blue-400"
                    >
                      <option value="">
                        تخصص مورد نظر را انتخاب کنید ....
                      </option>
                      <option value="Mrs">متخصص مغز و اعصاب</option>
                      <option value="Miss">متخصص روانشناسی</option>
                      <option value="Dr">متخصص گوش حلق بینی</option>
                    </select>
                  </div>

                  <div className="w-[90%] mx-auto">
                    <label htmlFor="Title" className="px-2">
                      خدمات
                    </label>
                    <select
                      {...register("Title", { required: true })}
                      className="w-full outline-none bg-white rounded-lg p-2 text-sm-g border-2 mt-1 border-blue-400"
                    >
                      <option value="">
                        خدمات مورد نظر را انتخاب کنید ....
                      </option>
                      <option value="Mrs">متخصص مغز و اعصاب</option>
                      <option value="Miss">متخصص روانشناسی</option>
                      <option value="Dr">متخصص گوش حلق بینی</option>
                    </select>
                  </div>

                  <div className="w-[90%] mx-auto flex justify-between">
                    <div className="w-[65%]">
                      {" "}
                      <label htmlFor="Title" className="px-2">
                        شهر
                      </label>
                      <select
                        {...register("Title", { required: true })}
                        className="w-full outline-none bg-white rounded-lg p-2 text-sm-g border-2 mt-1 border-blue-400"
                      >
                        <option value="">شهر ....</option>
                        <option value="Mrs">زنجان</option>
                        <option value="Miss">تهران</option>
                        <option value="Dr">مشهد</option>
                      </select>
                    </div>
                    <div className="w-[30%]">
                      {" "}
                      <label htmlFor="Title" className="px-2">
                        منطقه
                      </label>
                      <select
                        {...register("Title", { required: true })}
                        className="w-full outline-none bg-white rounded-lg p-2 text-sm-g border-2 mt-1 border-blue-400"
                      >
                        <option value="">منطقه ....</option>
                        <option value="Mrs">اعتمادیه</option>
                        <option value="Miss">کوچه مشکی</option>
                        <option value="Dr">آزادگان</option>
                        <option value="2">نصر</option>
                      </select>
                    </div>
                  </div>

                  <div className="w-[90%] mx-auto">
                    <label htmlFor="Title" className="px-2">
                      بیمه
                    </label>
                    <select
                      {...register("Title", { required: true })}
                      className="w-full outline-none bg-white rounded-lg p-2 text-sm-g border-2 mt-1 border-blue-400"
                    >
                      <option value="">
                        بیمه مورد نظر را انتخاب کنید ....
                      </option>
                      <option value="Mrs">ایران</option>
                      <option value="Miss">تامین اجتماعی</option>
                      <option value="Dr">خدمات درمانی</option>
                    </select>
                  </div>

                  <div className="w-[90%] mx-auto">
                    <label htmlFor="Title" className="px-2">
                      جنسیت
                    </label>
                    <select
                      {...register("Title", { required: true })}
                      className="w-full outline-none bg-white rounded-lg p-2 text-sm-g border-2 mt-1 border-blue-400"
                    >
                      <option value="">
                        جنسیت مورد نظر را انتخاب کنید ....
                      </option>
                      <option value="Mrs">مرد</option>
                      <option value="Miss">زن</option>
                    </select>
                  </div>

                  <div className="rounded-lg w-[90%] mx-auto">
                    <button
                      type="submit"
                      className="bg-blue-600 rounded-lg w-full p-2 text-lg text-blue-50 hover:bg-blue-800"
                    >
                      ارسال
                    </button>
                  </div>
                </div>
              </form>
            </section>
          </div>
          <div
            dir="ltr"
            className=" main-height-g-4 w-[65%] overflow-y-scroll scroll-m-0"
          >
            <div className="w-[97%] m-auto rounded-xl  border-2 border-blue-600 h-64 my-3 p-8">
              <div className="flex  justify-around py-5 gap-12">
                <div className="">
                  <p>
                    <span>شماره نظام</span> : <span>123456</span>
                  </p>
                  <p className="py-3">
                    <span>تعداد مشاوره ها</span> : <span>110</span>
                  </p>
                  <p>
                    <span>تجربه در سرمد</span> : <span>11 ماه</span>
                  </p>
                </div>
                <div className="flex justify-start gap-2 text-sm-g ">
                  <div className="text-right  pt-3">
                    <p>دکتر موسوی</p>
                    <p>متخصص پوست و مو</p>
                    <p className="flex text-right gap-1 py-2 text-yellow-400">
                      <span className="flex">
                        <p>5</p> <p>از </p> <p>5</p>
                      </span>
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </p>
                  </div>
                  <div className="w-28 h-28 border-2 border-blue-700 rounded-full">
                    <img
                      src="/images/404.jpg"
                      alt="doctor-img"
                      className="w-full h-full overflow-hidden rounded-full"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-around ">
                <button className="border-2 border-blue-500 rounded-lg py-1 px-1  text-slate-700 hover:text-slate-950 hover:bg-blue-100 ">
                  نظرات کاربران
                </button>
                <button className="border-2 border-blue-500 rounded-lg py-1 px-1  text-slate-700 hover:text-slate-950 hover:bg-blue-100 ">
                  قرارداد با بیمه(دارد/ندارد)
                </button>
                <button className="border-2 border-blue-500 rounded-lg py-1 px-1  text-slate-700 hover:text-slate-950 hover:bg-blue-100 ">
                  مشاوره با پزشک
                </button>
              </div>
            </div>
            <div className="w-[97%] m-auto rounded-xl  border-2 border-blue-600 h-64 my-3 p-8">
              <div className="flex  justify-around py-5 gap-12">
                <div className="">
                  <p>
                    <span>شماره نظام</span> : <span>123456</span>
                  </p>
                  <p className="py-3">
                    <span>تعداد مشاوره ها</span> : <span>110</span>
                  </p>
                  <p>
                    <span>تجربه در سرمد</span> : <span>11 ماه</span>
                  </p>
                </div>
                <div className="flex justify-start gap-2 text-sm-g ">
                  <div className="text-right  pt-3">
                    <p>دکتر موسوی</p>
                    <p>متخصص پوست و مو</p>
                    <p className="flex text-right gap-1 py-2 text-yellow-400">
                      <span className="flex">
                        <p>5</p> <p>از </p> <p>5</p>
                      </span>
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </p>
                  </div>
                  <div className="w-28 h-28 border-2 border-blue-700 rounded-full">
                    <img
                      src="/images/404.jpg"
                      alt="doctor-img"
                      className="w-full h-full overflow-hidden rounded-full"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-around ">
                <button className="border-2 border-blue-500 rounded-lg py-1 px-1  text-slate-700 hover:text-slate-950 hover:bg-blue-100 ">
                  نظرات کاربران
                </button>
                <button className="border-2 border-blue-500 rounded-lg py-1 px-1  text-slate-700 hover:text-slate-950 hover:bg-blue-100 ">
                  قرارداد با بیمه(دارد/ندارد)
                </button>
                <button className="border-2 border-blue-500 rounded-lg py-1 px-1  text-slate-700 hover:text-slate-950 hover:bg-blue-100 ">
                  مشاوره با پزشک
                </button>
              </div>
            </div>
            <div className="w-[97%] m-auto rounded-xl  border-2 border-blue-600 h-64 my-3 p-8">
              <div className="flex  justify-around py-5 gap-12">
                <div className="">
                  <p>
                    <span>شماره نظام</span> : <span>123456</span>
                  </p>
                  <p className="py-3">
                    <span>تعداد مشاوره ها</span> : <span>110</span>
                  </p>
                  <p>
                    <span>تجربه در سرمد</span> : <span>11 ماه</span>
                  </p>
                </div>
                <div className="flex justify-start gap-2 text-sm-g ">
                  <div className="text-right  pt-3">
                    <p>دکتر موسوی</p>
                    <p>متخصص پوست و مو</p>
                    <p className="flex text-right gap-1 py-2 text-yellow-400">
                      <span className="flex">
                        <p>5</p> <p>از </p> <p>5</p>
                      </span>
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </p>
                  </div>
                  <div className="w-28 h-28 border-2 border-blue-700 rounded-full">
                    <img
                      src="/images/404.jpg"
                      alt="doctor-img"
                      className="w-full h-full overflow-hidden rounded-full"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-around ">
                <button className="border-2 border-blue-500 rounded-lg py-1 px-1  text-slate-700 hover:text-slate-950 hover:bg-blue-100 ">
                  نظرات کاربران
                </button>
                <button className="border-2 border-blue-500 rounded-lg py-1 px-1  text-slate-700 hover:text-slate-950 hover:bg-blue-100 ">
                  قرارداد با بیمه(دارد/ندارد)
                </button>
                <button className="border-2 border-blue-500 rounded-lg py-1 px-1  text-slate-700 hover:text-slate-950 hover:bg-blue-100 ">
                  مشاوره با پزشک
                </button>
              </div>
            </div>
            <div className="w-[97%] m-auto rounded-xl  border-2 border-blue-600 h-64 my-3 p-8">
              <div className="flex  justify-around py-5 gap-12">
                <div className="">
                  <p>
                    <span>شماره نظام</span> : <span>123456</span>
                  </p>
                  <p className="py-3">
                    <span>تعداد مشاوره ها</span> : <span>110</span>
                  </p>
                  <p>
                    <span>تجربه در سرمد</span> : <span>11 ماه</span>
                  </p>
                </div>
                <div className="flex justify-start gap-2 text-sm-g ">
                  <div className="text-right  pt-3">
                    <p>دکتر موسوی</p>
                    <p>متخصص پوست و مو</p>
                    <p className="flex text-right gap-1 py-2 text-yellow-400">
                      <span className="flex">
                        <p>5</p> <p>از </p> <p>5</p>
                      </span>
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </p>
                  </div>
                  <div className="w-28 h-28 border-2 border-blue-700 rounded-full">
                    <img
                      src="/images/404.jpg"
                      alt="doctor-img"
                      className="w-full h-full overflow-hidden rounded-full"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-around ">
                <button className="border-2 border-blue-500 rounded-lg py-1 px-1  text-slate-700 hover:text-slate-950 hover:bg-blue-100 ">
                  نظرات کاربران
                </button>
                <button className="border-2 border-blue-500 rounded-lg py-1 px-1  text-slate-700 hover:text-slate-950 hover:bg-blue-100 ">
                  قرارداد با بیمه(دارد/ندارد)
                </button>
                <button className="border-2 border-blue-500 rounded-lg py-1 px-1  text-slate-700 hover:text-slate-950 hover:bg-blue-100 ">
                  مشاوره با پزشک
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default TurnRatingPage;