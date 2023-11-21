"use client";
import NextArrow from "@/assets/icons/NextArrow";
import DashboardChart1 from "./DashboardChart1";
import DashboardChart2 from "./DashboardChart2";
import { useEffect, useState } from "react";
import { useGetDashboardStatsQuery } from "@/redux/api/adminApi";
import { Spinner } from "../Spinner";
import { useAppDispatch } from "@/redux/hooks";
import { SET_DASHBOARD } from "@/redux/slice/dashboardSlice";
import { todayDate } from "@/utils/TodayDate";

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const { data: stats, isSuccess, isError, error, isLoading } = useGetDashboardStatsQuery({});
  const [statsData, setStatsData] = useState<Record<string, any>>({});
  useEffect(() => {
    if (isSuccess) {
      setStatsData(stats?.data);
      dispatch(SET_DASHBOARD(stats?.data));
    }
    if (isError) {
      console.log(error);
    }
  }, [dispatch, error, isError, isSuccess, stats]);

  const totalApartments = Number(statsData?.total_houses_posted) + Number(statsData?.total_houses_verified);

  return (
    <section className="w-[97%] mx-auto grid grid-cols-1 gap-[0.5rem]">
      <div>
        <h2 className="text-colorPrimary text-[16px] md:text-[24px] font-[700]">
          Welcome Admin
        </h2>
        <p className="text-[#32475C99]/[60%] text-[12px] md:text-[16px] font-[700]">
          Showing your admin metrics for {todayDate}
        </p>
      </div>
      {
        isLoading ? <Spinner /> : <div className="w[98%] py-[0.5rem] md:py-[1rem] px[2rem] gap-[0.5rem] grid grid-cols-1 md:grid-cols-3 items-center justify-between">
          <div className="bg-[#FFF] flex items-center justify-between gap-[0.3rem] text-[20px] md:text-[48px] font-[700] p-[15px] rounded-[8px] shadow-sm">
            <span className="text-colorPrimary">{totalApartments}</span>
            <span className="text-[18px] text-[#32475CDE]/[87%] font-[400]">
              View apartments
            </span>
            <NextArrow className="fill-colorPrimary" />
          </div>
          <div className="bg-[#FFF] flex items-center justify-between gap-[0.3rem] text-[20px] md:text-[48px] font-[700] p-[15px] rounded-[8px] shadow-sm">
            <span className="text-colorPrimary">{statsData?.hosts}</span>
            <span className="text-[18px] text-[#32475CDE]/[87%] font-[400]">
              Total Hosts
            </span>
            <NextArrow className="fill-colorPrimary" />
          </div>
          <div className="bg-[#FFF] flex items-center justify-between gap-[0.3rem] text-[20px] md:text-[48px] font-[700] p-[15px] rounded-[8px] shadow-sm">
            <span className="text-colorPrimary">{statsData?.active_users}</span>
            <span className="text-[18px] text-[#32475CDE]/[87%] font-[400]">
              Active Users
            </span>
            <NextArrow className="fill-colorPrimary" />
          </div>
        </div>
      }
      <DashboardChart1 />
      <DashboardChart2 />
    </section>
  );
};

export default Dashboard;
