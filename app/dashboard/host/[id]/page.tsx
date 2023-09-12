"use client";
import Registry from "../../registry";
import HostDetails from "@/components/host/host-details/HostDetails";
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
    <Registry>
      <div className="grid grid-cols-1 grid-rows-[10%_90%] w-[98%] mx-auto max-h-screen overflow-y-scroll">
        <div className="flex items-center justify-between gap-[0.5rem]">
          <span className="flex items-center gap-[0.5rem]">
            <BackIcon
              onClick={() => {
                back();
              }}
              className="w-[40px] h-[40px] font-[400] text-[15px] cursor-pointer"
            />
            <h4 className="text-[#25324B] text-[18px] md:text-[25px] font-[700]">
              Host Details
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
        <HostDetails />
      </div>
      <AccountModal open={open} setOpen={setOpen} />
    </Registry>
  );
};

export default Page;
