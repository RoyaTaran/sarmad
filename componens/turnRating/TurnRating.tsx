"use client";
import { useRouter } from "next/navigation";

import Swal from "sweetalert2";
import AuthContext from "@/context/outhContext";
import { useContext } from "react";

import { BsHospital } from "react-icons/bs";
export default function TurnRating() {
  const rout = useRouter();

  const authData = useContext(AuthContext);

  const turnRatingToggleHandler = () => {
    authData.isLogin === true
      ? rout.push("/turn-rating")
      : Swal.fire({
          text: "کاربر گرامی قبل از ورود به سایت نمی توانید نوبت بگیرید.",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "ورود / ثبت نام",
          cancelButtonText: "انصراف",
        }).then((result) => {
          if (result.isConfirmed) {
            rout.push("/login")
          }
        });
  };
  return (
    <div>
      {/* <Link href="/turn-rating"> */}
      <div onClick={turnRatingToggleHandler}>
        <BsHospital />
      </div>
      {/* </Link> */}
      {/* <Link href="/turn-rating"> */}
      <p className="text-2xl" onClick={turnRatingToggleHandler}>
        نوبت دهی
      </p>
      {/* </Link> */}
    </div>
  );
}
