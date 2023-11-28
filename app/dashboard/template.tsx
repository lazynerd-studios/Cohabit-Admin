"use client";
import SideBar from "@/components/global/SideBar";
import Header from "@/components/header/Header";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
const Registry = ({ children }: { children: React.ReactNode }) => {
  const { push } = useRouter();
  const token = useAppSelector((state) => state?.userData?.token);

  useEffect(() => {
    if (!token) {
      push("/");
    }
  }, [push, token])
  return (
    <div className="grid grid-cols-[20%_80%] h-screen min-h-screen max-h-screen overflow-hidden">
      <SideBar />
      <div className="bg-[#F5F5F9] w-full overflow-y-scroll">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Registry;
