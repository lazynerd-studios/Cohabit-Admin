import NextArrow from "@/assets/icons/NextArrow";
import HouseSeekersTable from "./HouseSeekersTable";
import { todayDate } from "@/utils/TodayDate";

const HouseSeekers = () => {
  return (
    <section className="w-[97%] mx-auto grid grid-cols-1 gap-[0.5rem]">
      <div>
        <h2 className="text-colorPrimary text-[24px] font-[700]">
          House-Seekers
        </h2>
        <p className="text-[#32475C99]/[60%] text-[16px] font-[700]">
          Showing your admin metrics for {todayDate}
        </p>
      </div>
      <div className="w[98%] py-[0.5rem] md:py-[1rem] px[2rem] gap-[0.5rem] grid grid-cols-1 md:grid-cols-3 items-center justify-between">
        <div className="bg-[#FFF] flex items-center justify-between gap-[0.3rem] text-[20px] md:text-[48px] font-[700] p-[15px] rounded-[8px] shadow-sm">
          <span className="text-colorPrimary">76</span>
          <span className="text-[18px] text-[#32475CDE]/[87%] font-[400]">
            Total House-Seekers
          </span>
          <NextArrow className="fill-colorPrimary" />
        </div>
        <div className="bg-[#FFF] flex items-center justify-between gap-[0.3rem] text-[20px] md:text-[48px] font-[700] p-[15px] rounded-[8px] shadow-sm">
          <span className="text-colorPrimary">24</span>
          <span className="text-[18px] text-[#32475CDE]/[87%] font-[400]">
            Active House-Seekers
          </span>
          <NextArrow className="fill-colorPrimary" />
        </div>
        <div className="bg-[#FFF] flex items-center justify-between gap-[0.3rem] text-[20px] md:text-[48px] font-[700] p-[15px] rounded-[8px] shadow-sm">
          <span className="text-colorPrimary">76</span>
          <span className="text-[18px] text-[#32475CDE]/[87%] font-[400]">
            Inactive House-Seekers
          </span>
          <NextArrow className="fill-colorPrimary" />
        </div>
      </div>
      <HouseSeekersTable />
    </section>
  );
};

export default HouseSeekers;
