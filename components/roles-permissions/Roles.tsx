import { todayDate } from "@/utils/TodayDate";
import RolesTable from "./RolesTable";

const Roles = () => {
  return (
    <section className="w-[97%] mx-auto grid grid-cols-1 gap-[0.5rem]">
      <div>
        <h2 className="text-colorPrimary text-[16px] md:text-[24px] font-[700]">
          Total users with their roles and permission
        </h2>
        <p className="text-[#32475C99]/[60%] text-[12px] md:text-[16px] font-[700]">
          Showing your admin metrics for {todayDate}
        </p>
      </div>
      <RolesTable />
    </section>
  );
};

export default Roles;
