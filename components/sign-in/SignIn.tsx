"use client";
import {
  CustomInput as Input,
  CustomPasswordInput as PasswordInput,
  CustomCheckBox as Checkbox,
  AuthButton as Button,
} from "@/lib/AntDesignComponents";
import { ChangeEventHandler, useState } from "react";
import Link from "next/link";

const SignIn = () => {
  const [formdata, setFormData] = useState({ email: "", password: "" });
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.currentTarget;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <div className="grid grid-cols-1 gap-[1.5rem] w-[98%] md:w-[35%] mx-auto p-[1rem] rounded-[8px] bg-[#FFF] shadow-sm">
      <div className="flex flex-col gap-[0.2rem]">
        <h2 className="text-[24px] font-[400] text-[#32475CDE]/[87%]">
          Welcome to Co-habit! 👋🏻
        </h2>
        <p className="text-[#32475C99]/[60%] text-[16px] font-[400]">
          Please sign-in to your account
        </p>
      </div>
      <div className="w-full mx-auto flex flex-col items-start justify-start gap-[0.5rem] relative">
        <Input
          name="email"
          onChange={handleChange}
          value={formdata?.email}
          className="floating-input"
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
      <div className="w-full mx-auto flex flex-col items-start justify-start gap-[0.5rem] relative">
        <PasswordInput
          className="floating-input"
          id="password"
          type="password"
          name="password"
          onChange={handleChange}
          value={formdata?.password}
        />
        <label
          htmlFor="password"
          className={`text-[#0C1938] text-[16px] font-[700] floating-label ${
            formdata.password && "focusedlabel"
          }`}
        >
          password
        </label>
      </div>
      <div className="w-full mx-auto flex items-center justify-between">
        <div className="mxauto flex items-center justify-start gap-[0.3rem]">
          <Checkbox className="text-[20px]" id="check" />
          <label
            htmlFor="check"
            className="text-colorPrimary text-[14px] font-[400] pr-[1rem]"
          >
            Remember me
          </label>
        </div>
        <Link href="reset-password">Forgot Password?</Link>
      </div>
      <Button className="solid-btn" type="primary">
        LOGIN
      </Button>
    </div>
  );
};

export default SignIn;
