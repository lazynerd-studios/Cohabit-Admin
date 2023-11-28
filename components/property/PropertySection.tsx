"use client";
import Image from "next/image";
import map from "@/assets/map.jpg";

interface IProps {
  data: Record<string, any>;
}
const PropertySection = ({ data }: IProps) => {
  return (
    <div className="grid grid-cols-1 w-full md:mt-[6rem]">
      <div className="p-[0.5rem] border border-[#D6DDEB] px-[20px] py-[13px] flex flex-col gap-[0.3rem]">
        <h4 className="text-[#25324B] text-[16px] md:text-[24px] font-[700]">
          Description
        </h4>
        <p className="text-[12px] md:text-[16px] font-[400] text-[#515B6F]">
          {data?.description}
        </p>
      </div>
      <div className="p-[0.5rem] border border-[#D6DDEB] px-[20px] py-[13px] flex flex-col gap-[0.3rem]">
        <h4 className="text-[#25324B] text-[16px] md:text-[24px] font-[700]">
          Key Features
        </h4>
        <p className="text-[12px] md:text-[16px] font-[400] text-[#515B6F]">
          {data?.features}
        </p>
      </div>
      <div className="p-[0.5rem] border border-[#D6DDEB] px-[20px] py-[13px] flex flex-col gap-[0.3rem]">
        <h4 className="text-[#25324B] text-[16px] md:text-[24px] font-[700]">
          Availability and Rental Terms
        </h4>
        <p className="text-[12px] md:text-[16px] font-[400] text-[#515B6F]">
          {data?.terms}
        </p>
      </div>
      <div className="p-[0.5rem] border border-[#D6DDEB] px-[20px] py-[13px] flex flex-col gap-[0.3rem]">
        <h4 className="text-[#25324B] text-[16px] md:text-[24px] font-[700]">
          Location
        </h4>
        <p className="text-[12px] md:text-[16px] font-[400] text-[#515B6F]">
          {data?.location}
        </p>
      </div>
    </div>
  );
};

export default PropertySection;
