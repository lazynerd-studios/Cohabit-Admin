"use client";
import {
  CustomInput as Input,
  AuthButton as Button,
} from "@/lib/AntDesignComponents";
import Link from "next/link";
import BackArrow from "@/assets/icons/BackArrow";
import NextArrow from "@/assets/icons/NextArrow";
import { useState, ChangeEventHandler } from "react";

const ForgotPassword = () => {
  const [formdata, setFormData] = useState({
    email: "",
  });
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.currentTarget;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <div className="grid grid-cols-1 gap-[1.5rem] w-[35%] mx-auto p-[1rem] rounded-[8px] bg-[#FFF] shadow-sm">
      <div className="flex flex-col gap-[0.2rem]">
        <h2 className="text-[24px] font-[400] text-[#32475CDE]/[87%]">
          Forgot Password 🔒
        </h2>
        <p className="text-[#32475C99]/[60%] text-[16px] font-[400]">
          Enter your email and we'll send you instructions to reset your
          password
        </p>
      </div>
      <div className="w-full mx-auto flex flex-col items-start justify-start gap-[0.5rem] relative">
        <Input
          className="floating-input"
          name="email"
          value={formdata.email}
          onChange={handleChange}
          id="email"
          type="email"
        />
        <label
          htmlFor="email"
          className={`text-[#0C1938] text-[16px] font-[700] floating-label ${
            formdata.email && "focusedlabel"
          }`}
        >
          Email
        </label>
      </div>
      <Button className="solid-btn" type="primary">
        SEND
      </Button>
      <div className="w-full mx-auto flex items-center justify-center">
        <BackArrow className="fill-colorPrimary" />
        <Link
          className="text-[16px] font-[400] text-colorPrimary"
          href="/sign-in"
        >
          Back to login
        </Link>
      </div>
      <div className="w-full mx-auto flex items-center justify-center">
        <Link className="text-[16px] font-[400] text-[#40DD7F]" href="/sign-in">
          Request Access
        </Link>
        <NextArrow className="fill-[#40DD7F]" />
      </div>
    </div>
  );
};

export default ForgotPassword;
