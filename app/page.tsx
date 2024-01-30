import Typewriters from "@/componens/typewriter/Typewriters";
import TurnRating from "@/componens/turnRating/TurnRating";

import { BiSolidPhoneCall } from "react-icons/bi";
import { FaUserDoctor } from "react-icons/fa6";
import { FaRocketchat } from "react-icons/fa";

export default function Home() {

  return (
    <>
      <div className=" h-screen w-[95%]  m-auto">
        <div className="flex justify-center items-center">
          <section className="max-width  m-auto h-93vh-g  d-none sm:block">
            <section className="flex flex-col lg:flex-row gap-1 w-full  h-93vh-g  m-auto">
              <section className=" lg:h-93vh-g ">
                <img
                  src="/images/3763028_prev_ui.png"
                  alt="doctor-sarmad"
                  className=" lg:h-93vh-g "
                />
              </section>
              <section className="flex flex-col justify-center items-center ">
                <div className="w-[100%] md:w[95%]">
                  {" "}
                  <h1 className=" sm:text-6xl lg:text-7xl  text-blue-700 font-bold ">
                    پنل سرمد
                  </h1>
                  <h2 className="text-lg md:text-2xl w-[100%] text-blue-500 py-5">
                    <Typewriters />
                  </h2>
                </div>
                <section>
                  <ul className="grid grid-cols-2 gap-4">
                    <div className="text-3xl text-blue-400 border-4 border-blue-400 rounded-2xl py-2 px-10">
                      <li className="flex flex-col items-center gap-3 cursor-pointer hover:text-blue-500">
                        <BiSolidPhoneCall />
                        <p className="text-2xl">مشاوره تلفنی</p>
                      </li>
                    </div>
                    <div className="text-3xl text-blue-400 border-4 border-blue-400 rounded-2xl py-2 px-10">
                      <li className="flex flex-col items-center gap-3 cursor-pointer hover:text-blue-500">
                        <FaRocketchat />
                        <p className="text-2xl">مشاوره متنی</p>
                      </li>
                    </div>
                    <div className="text-3xl text-blue-400 border-4 border-blue-400 rounded-2xl py-2 px-10">
                      <li className="flex flex-col items-center gap-3 cursor-pointer hover:text-blue-500">
                        <TurnRating />
                      </li>
                    </div>
                    <div className="text-3xl text-blue-400 border-4 border-blue-400 rounded-2xl py-2 px-10">
                      <li className="flex flex-col items-center gap-3 cursor-pointer hover:text-blue-500">
                        <FaUserDoctor />
                        <p className="text-2xl">پزشکان</p>
                      </li>
                    </div>
                  </ul>
                </section>
              </section>
            </section>
          </section>
        </div>
      </div>
    </>
  );
}

{
  /* <nav className="d-none sm:block max-width h-16 pb-6 w-16 hover:font-bold w-60 h-96 borde-4 gap-1 border-blue-300 top-[115%] top-[70%]  left-[35%] left-0 bottom-[-25%]  z-50  w-50 pb-4 ">
        <div className="flex justify-center  w-full mt-2">
          <div className="w-[100%]  lg:w-[95%] xl:w-[85%]   rounded-full m-auto bg-blue-600">
            <div className="flex gap-2 ps-10  text-white font-bold">
              <Link href="/">
                <p className="flex-none text-3xl py-2 italic ">پنل سرمد</p>
              </Link>
              <div className="grow py-2 bg-blue-400 rounded-full">
                <div className="flex justify-around pt-1">
                  <div className="w-[65%] md:w-[70%] lg:w-[80%]">
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
                  <div className="flex justify-end pe-2 md:pe-10 w-[35%] md:w-[30%] lg:w-[20%] ">
                    <Link href="/login">
                      <span className="bg-blue-100 px-5 py-1 cursor-pointer rounded-full text-blue-800 hover:text-blue-100 hover:bg-blue-800">
                        ورود/ثبت نام
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav> */
}
