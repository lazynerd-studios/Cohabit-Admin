"use client";
import HouseSeekerDetails from "@/components/house-seekers/house-seeker-details/HouseSeekerDetails";
import BackIcon from "@/assets/icons/BackIcon";
import { useRouter } from "next/navigation";
import { CustomSwitch as Switch } from "@/lib/AntDesignComponents";
import { useState } from "react";
import AccountModal from "@/components/global/AccountModal";

const Page = () => {
  const { back } = useRouter();
  const [toogle, setToogle] = useState(true);
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="grid grid-cols-1 grid-rows-[10%_90%] w-[98%] mx-auto max-h-screen overflow-y-scroll py-[1%] gap-[0.5rem] md:gap-[1rem]">
        <div className="flex items-center justify-between gap-[0.5rem]">
          <span className="flex items-center gap-[0.5rem]">
            <BackIcon
              onClick={() => {
                back();
              }}
              className="w-[40px] h-[40px] font-[400] text-[15px] cursor-pointer"
            />
            <h4 className="text-[#25324B] text-[18px] md:text-[25px] font-[700]">
              House-seekers Details
            </h4>
          </span>
          <span className="flex flex-col items-end justify-end">
            <p className="text-[14px] font-[400]">Account</p>
            <Switch
              defaultChecked
              checked={toogle}
              onChange={() => {
                setToogle((prev) => !prev);
                setOpen((prev) => !prev);
              }}
            />
          </span>
        </div>
        <HouseSeekerDetails />
      </div>
      <AccountModal open={open} setOpen={setOpen} />
    </>
  );
};

export default Page;
