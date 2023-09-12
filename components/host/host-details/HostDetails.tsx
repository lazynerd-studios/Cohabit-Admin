"use client";
import { ProfileTabs as Tabs } from "@/lib/AntDesignComponents";
import { TabsProps } from "antd";
import HostProfileSection from "@/components/profile/HostProfileSection";
import RecentActivites from "./RecentActivites";
import Messages from "./Messages";
import { useState } from "react";

const HostDetails = () => {
  const [activeKey, setActiveKey] = useState("1");
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: (
        <h4
          className={`text-inherit text-[16px] font-[400] ${
            activeKey === "1" &&
            "px-[15px] py-[5px] bg-[#F0F6E9] rounded-[10px]"
          }`}
        >
          Personal Details
        </h4>
      ),
      children: <HostProfileSection />,
    },
    {
      key: "2",
      label: (
        <h4
          className={`text-inherit text-[16px] font-[400] ${
            activeKey === "2" &&
            "px-[15px] py-[5px] bg-[#F0F6E9] rounded-[10px]"
          }`}
        >
          Recent Activities
        </h4>
      ),
      children: <RecentActivites />,
    },
    {
      key: "3",
      label: (
        <h4
          className={`text-inherit text-[16px] font-[400] ${
            activeKey === "3" &&
            "px-[15px] py-[5px] bg-[#F0F6E9] rounded-[10px]"
          }`}
        >
          Messages
        </h4>
      ),
      children: <Messages />,
    },
  ];
  return (
    <Tabs
      items={items}
      activeKey={activeKey}
      onChange={(e) => {
        setActiveKey(e);
      }}
      defaultActiveKey="1"
      className="bg-[#FFF] profile-tab"
    />
  );
};

export default HostDetails;
