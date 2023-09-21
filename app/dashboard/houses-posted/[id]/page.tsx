"use client";
import Registry from "../../registry";
import BackIcon from "@/assets/icons/BackIcon";
import { useRouter } from "next/navigation";
import Property from "@/components/property/Property";

const Page = () => {
  const { back } = useRouter();
  return (
    <Registry>
      <div className="grid grid-cols-1 grid-rows-[10%_90%] w-[98%] mx-auto max-h-screen overflow-y-scroll py-[1%] gap-[1rem]">
        <div className="flex items-center justify-between gap-[0.5rem]">
          <span className="flex items-center gap-[0.5rem]">
            <BackIcon
              onClick={() => {
                back();
              }}
              className="w-[40px] h-[40px] font-[400] text-[15px] cursor-pointer"
            />
            <h4 className="text-[#25324B] text-[18px] md:text-[25px] font-[700]">
              House Details
            </h4>
          </span>
        </div>
        <Property />
      </div>
    </Registry>
  );
};

export default Page;
