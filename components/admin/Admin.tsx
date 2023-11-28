import { todayDate } from "@/utils/TodayDate";
import AdminTable from "./AdminTable";

const Admin = () => {
  return (
    <section className="w-[97%] mx-auto grid grid-cols-1 gap-[0.5rem]">
      <div>
        <h2 className="text-colorPrimary text-[16px] md:text-[24px] font-[700]">
          Admin
        </h2>
        <p className="text-[#32475C99]/[60%] text-[12px] md:text-[16px] font-[700]">
          Showing your admin metrics for {todayDate}
        </p>
      </div>
      <AdminTable />
    </section>
  );
};

export default Admin;
