import NextArrow from "@/assets/icons/NextArrow";
import HostTable from "./HostTable";

const Host = () => {
  return (
    <section className="w-[97%] mx-auto grid grid-cols-1 gap-[0.5rem]">
      <div>
        <h2 className="text-colorPrimary text-[16px] md:text-[24px] font-[700]">
          Hosts
        </h2>
        <p className="text-[#32475C99]/[60%] text-[12px] md:text-[16px] font-[700]">
          Showing your admin metrics for July 16,2023 - July 25,2023
        </p>
      </div>
      <div className="w[98%] py-[0.5rem] md:py-[1rem] px[2rem] gap-[0.5rem] grid grid-cols-1 md:grid-cols-3 items-center justify-between">
        <div className="bg-[#FFF] flex items-center justify-between gap-[0.3rem] text-[20px] md:text-[48px] font-[700] p-[15px] rounded-[8px] shadow-sm">
          <span className="text-colorPrimary">76</span>
          <span className="text-[18px] text-[#32475CDE]/[87%] font-[400]">
            Total Host
          </span>
          <NextArrow className="fill-colorPrimary" />
        </div>
        <div className="bg-[#FFF] flex items-center justify-between gap-[0.3rem] text-[20px] md:text-[48px] font-[700] p-[15px] rounded-[8px] shadow-sm">
          <span className="text-colorPrimary">24</span>
          <span className="text-[18px] text-[#32475CDE]/[87%] font-[400]">
            Active Host
          </span>
          <NextArrow className="fill-colorPrimary" />
        </div>
        <div className="bg-[#FFF] flex items-center justify-between gap-[0.3rem] text-[20px] md:text-[48px] font-[700] p-[15px] rounded-[8px] shadow-sm">
          <span className="text-colorPrimary">76</span>
          <span className="text-[18px] text-[#32475CDE]/[87%] font-[400]">
            Inactive Host
          </span>
          <NextArrow className="fill-colorPrimary" />
        </div>
      </div>
      <HostTable />
    </section>
  );
};

export default Host;
