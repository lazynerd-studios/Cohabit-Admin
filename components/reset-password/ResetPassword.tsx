"use client";
import {
  AuthButton as Button,
  CustomPasswordInput as PasswordInput,
} from "@/lib/AntDesignComponents";
import BackArrow from "@/assets/icons/BackArrow";
import Link from "next/link";
import { useState, ChangeEventHandler } from "react";

const ResetPassword = () => {
  const [formdata, setFormData] = useState({
    password: "",
    confirmPassword: "",
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
          Reset Password 🔒
        </h2>
        <p className="text-[#32475C99]/[60%] text-[16px] font-[400]">
          Your new password must be different from previously used passwords
        </p>
      </div>
      <div className="w-full mx-auto flex flex-col items-start justify-start gap-[0.5rem] relative">
        <PasswordInput
          name="password"
          value={formdata.password}
          onChange={handleChange}
          className="floating-input"
          id="password"
        />
        <label
          htmlFor="password"
          className={`text-[#0C1938] text-[16px] font-[700] floating-label ${
            formdata.password && "focusedlabel"
          }`}
        >
          New Password
        </label>
      </div>
      <div className="w-full mx-auto flex flex-col items-start justify-start gap-[0.5rem] relative">
        <PasswordInput
          className="floating-input-password"
          id="confirm-password"
          type="password"
          name="confirmPassword"
          value={formdata.confirmPassword}
          onChange={handleChange}
        />
        <label
          htmlFor="confirm-password"
          className={`text-[#0C1938] text-[16px] font-[700] floating-label-password ${
            formdata.confirmPassword && "focusedlabel"
          }`}
        >
          Confirm Password
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
    </div>
  );
};

export default ResetPassword;
