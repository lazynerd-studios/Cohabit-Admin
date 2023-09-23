"use client";
import { CustomButton as Button } from "@/lib/AntDesignComponents";

const VerifyEmail = () => {
  return (
    <div className="grid grid-cols-1 gap-[1.5rem] w-[98%] md:w-[35%] mx-auto p-[1rem] rounded-[8px] bg-[#FFF] shadow-sm">
      <div className="flex flex-col gap-[0.2rem]">
        <h2 className="text-[24px] font-[400] text-[#32475CDE]/[87%]">
          Verify your email ✉️
        </h2>
        <p className="text-[#32475C99]/[60%] text-[16px] font-[400]">
          Account activation link sent to your email address: john.doe@email.com
          Please follow the link inside to continue.
        </p>
      </div>
      <Button className="solid-btn" type="primary">
        Skip for now
      </Button>
      <div className="w-full mx-auto gap-[0.2rem] flex items-center justify-center text-[16px] font-[500]">
        <p className="text-[#32475C99]/[60%]">Didn't get the mail?</p>
        <span className="text-colorPrimary">Resend</span>
      </div>
    </div>
  );
};

export default VerifyEmail;
