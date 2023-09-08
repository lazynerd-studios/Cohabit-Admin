"use client";
import SeeMoreIcon from "@/assets/icons/SeeMoreIcon";
import BarCharts from "./BarChart";
import AreaCharts from "./AreaChart";
import SimpleLineChart from "./TinylineChart";
import LineCharts from "./LineChart";
import { CustomProgress as Progress } from "@/lib/AntDesignComponents";

const DashboardChart1 = () => {
  return (
    <div className="grid grid-cols-[65%_34%] justify-between gap-[0.5rem] w[98%] mxauto">
      <div className="grid grid-cols-[60%_40%] bg-[#FFF] rounded-[8px] shadow-[#32475C8A]/[54%] p-[2%]">
        <div className="w-full grid grid-cols-1 px-[2%]">
          <div className="flex items-start justify-between">
            <span className="flex flex-col gap-[0.3rem]">
              <h5 className="text-[#32475CDE]/[87%]">Total Income</h5>
              <p className="text-[#32475C99]/[60%] text-[16px] font-[400]">
                Yearly statistics overview
              </p>
            </span>
            <SeeMoreIcon />
          </div>
          <div className="max-h[200px]">
            <AreaCharts />
          </div>
        </div>
        <div className="flex flex-col gap-[2rem]">
          <div className="flex items-start justify-between">
            <span className="flex flex-col gap-[0.3rem]">
              <h5 className="text-[#32475CDE]/[87%]">Total Income</h5>
              <p className="text-[#32475C99]/[60%] text-[16px] font-[400]">
                Yearly Report overview
              </p>
            </span>
            <SeeMoreIcon />
          </div>
          <div className="grid grid-cols-1 gap-[0.5rem] pb-[1rem] w-[98%]">
            <div className="bg-[#32475C0A]/[4%] rounded-[6px] p-[3%] flex items-center justify-between gap-[0.5rem]">
              <span className="flex flex-col gap-[0.3rem]">
                <p className="text-[#32475C61]/[38%] text-[14px] font-[400]">
                  Income
                </p>
                <h4 className="text-[#32475CDE]/[87%] text-[20px] font-[500]">
                  NGN42,845
                </h4>
              </span>
              <h6 className="text-[#16DD97] text-[14px] font-[400]">+2.34k</h6>
            </div>
            <div className="bg-[#32475C0A]/[4%] rounded-[6px] p-[3%] flex items-center justify-between gap-[0.5rem]">
              <span className="flex flex-col gap-[0.3rem]">
                <p className="text-[#32475C61]/[38%] text-[14px] font-[400]">
                  Expenses
                </p>
                <h4 className="text-[#32475CDE]/[87%] text-[20px] font-[500]">
                  NGN42,845
                </h4>
              </span>
              <h6 className="text-[#F6513B] text-[14px] font-[400]">-1.15k</h6>
            </div>
            <div className="bg-[#32475C0A]/[4%] rounded-[6px] p-[3%] flex justify-between items-center gap-[0.5rem]">
              <span className="flex flex-col gap-[0.3rem]">
                <p className="text-[#32475C61]/[38%] text-[14px] font-[400]">
                  Profit
                </p>
                <h4 className="text-[#32475CDE]/[87%] text-[20px] font-[500]">
                  NGN42,845
                </h4>
              </span>
              <h6 className="text-[#16DD97] text-[14px] font-[400]">+1.34k</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-[1rem]">
        <div className="grid grid-cols-2 justify-between gap-[1rem] w-full">
          <div className="rounded-[8px] bg-[#FFF] shadow-sm text-center flex flex-col gap-[1rem] p-[2%]">
            <h6 className="text-[#32475C99]/[60%] text-[16px] font-[400]">
              Total House Posted
            </h6>
            <h4 className="text-[24px] font-[500]">42,389</h4>
          </div>
          <div className="rounded-[8px] bg-[#FFF] shadow-sm text-center flex flex-col gap-[1rem] p-[1%]">
            <h6 className="text-[#32475C99]/[60%] text-[16px] font-[400]">
              Total House Posted
            </h6>
            <h4 className="text-[24px] font-[500]">42,389</h4>
          </div>
        </div>
        <div className="p-[2%] bg-[#FFF] shadow-sm flex flex-col rounded-[8px]">
          <h4 className="text-[20px] text-[#32475CDE]/[87%] font-[500]">
            Monthly Income
          </h4>
          <div className="grid grid-cols-[60%_40%] items-center">
            <h4 className="font-[500] text-[24px] text-[#32475CDE]/[87%]">
              NGN 4,234
            </h4>
            <Progress
              percent={25}
              format={(percent) => (
                <div>
                  <p>{percent}%</p>
                  <p className="text-[14px] font-[400] text-[#32475C99]/[60%]">
                    Average
                  </p>
                </div>
              )}
              type="circle"
              strokeColor={"#16DD97"}
              strokeWidth={10}
              className="mx-auto"
              showInfo
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardChart1;
