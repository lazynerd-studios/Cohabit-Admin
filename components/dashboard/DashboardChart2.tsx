import SeeMoreIcon from "@/assets/icons/SeeMoreIcon";
import BarChart from "./BarChart";
import SimpleLineChart from "./TinylineChart";
import LineCharts from "./LineChart";
import ArrowUp from "@/assets/icons/ArrowUp";
import { CustomRate as Rate } from "@/lib/AntDesignComponents";

const DashboardChart2 = () => {
  return (
    <div className="grid grid-cols-3 gap-[0.5rem] w[98%] mxauto">
      <div className="w-full grid grid-cols-1 p-[2%] bg-[#FFF] rounded-[8px] shadow-[#32475C8A]/[54%]">
        <div className="flex items-start justify-between">
          <span className="flex flex-col gap-[0.3rem]">
            <h5 className="text-[#32475CDE]/[87%] text-[20px] font-[500]">
              Overview & Sales Activity
            </h5>
            <p className="text-[#32475C99]/[60%] text-[16px] font-[400]">
              Check out each column for more details
            </p>
          </span>
          <SeeMoreIcon />
        </div>
        <div className="min-h-[300px] min-w-[300px] h-[300px] w-[300px] flex items-start justify-start self-stretch">
          <BarChart />
        </div>
      </div>
      <div className="w-full grid grid-cols-1 p-[2%] bg-[#FFF] rounded-[8px] shadow-[#32475C8A]/[54%]">
        <div className="flex items-start justify-between">
          <span className="flex flex-col gap-[0.3rem]">
            <h5 className="text-[#32475CDE]/[87%] text-[20px] font-[500]">
              Conversion Rate
            </h5>
            <p className="text-[#32475C99]/[60%] text-[16px] font-[400]">
              Compared To Last Month
            </p>
          </span>
          <SeeMoreIcon />
        </div>
        <div className="grid grid-cols-1 gap-[0.5rem]">
          <div className="grid grid-cols-[70%_30%]">
            <span className="flex items-center">
              <h4 className="text-[#32475CDE]/[87%] text-[32px] font-[500]">
                8.72%
              </h4>
              <p className="text-[#71DD37] text-[14px] font-[400]">+4.8%</p>
            </span>
            <SimpleLineChart />
          </div>
          <div className="grid grid-cols-1 gap-[0.2rem]">
            <div className="flex justify-between items-center p-[2%]">
              <span className="flex flex-col items-start">
                <h6 className="text-[#32475CDE]/[87%] text-[16px] font-[400]">
                  Impressions
                </h6>
                <p className="text-[#32475C61]/[38%] text-[14px] font-[400]">
                  12.4k Visits
                </p>
              </span>
              <span className="flex">
                <ArrowUp />
                <p className="text-[#32475C99]/[60%] text-[14px] font-[400]">
                  12.8%
                </p>
              </span>
            </div>
            <div className="flex justify-between items-center p-[2%]">
              <span className="flex flex-col items-start">
                <h6 className="text-[#32475CDE]/[87%] text-[16px] font-[400]">
                  Rented
                </h6>
                <p className="text-[#32475C61]/[38%] text-[14px] font-[400]">
                  12 House Rented
                </p>
              </span>
              <span className="flex">
                <ArrowUp />
                <p className="text-[#32475C99]/[60%] text-[14px] font-[400]">
                  8.3%
                </p>
              </span>
            </div>
            <div className="flex justify-between items-center p-[2%]">
              <span className="flex flex-col items-start justify-start">
                <h6 className="text-[#32475CDE]/[87%] text-[16px] font-[400]">
                  Checkout
                </h6>
                <p className="text-[#32475C61]/[38%] text-[14px] font-[400]">
                  21 Product checkout
                </p>
              </span>
              <span className="flex">
                <ArrowUp />
                <p className="text-[#32475C99]/[60%] text-[14px] font-[400]">
                  9.12%
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 p-[2%] bg-[#FFF] rounded-[8px] shadow-[#32475C8A]/[54%]">
        <div className="flex items-start justify-between">
          <span className="flex flex-col gap-[0.3rem]">
            <h5 className="text-[#32475CDE]/[87%] text-[20px] font-[500]">
              Conversion Rate
            </h5>
            <p className="text-[#32475C99]/[60%] text-[16px] font-[400]">
              Compared To Last Month
            </p>
          </span>
        </div>
        <div className="grid grid-cols-1 gap-[0.5rem]">
          <div>
            <span className="flex items-center justify-start gap-[1rem]">
              <h4 className="text-[48px] font-[700] text-[#32475CDE]/[87%]">
                4.0
              </h4>
              <Rate value={4.0} />
            </span>
            <span className="flex items-center justify-start gap-[1rem]">
              <h6 className="bg-[#666CFF1F]/[12%] text-[#696CFF] rounded-[6px] text-[12px] font-[400] p-[1%]">
                +5.0
              </h6>
              <p className="text-[#32475C99]/[60%] text-[14px] font-[400]">
                Points from last month
              </p>
            </span>
          </div>
          <LineCharts />
        </div>
      </div>
    </div>
  );
};

export default DashboardChart2;
