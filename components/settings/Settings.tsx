"use client";
import { useState } from "react";
import type { TabsProps } from "antd";
import { CustomTabs as Tabs } from "@/lib/AntDesignComponents";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";

const Settings = () => {
  const [activeKey, setActiveKey] = useState("1");
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: (
        <h4
          className={`text-inherit text-[16px] font-[400] ${
            activeKey === "1" &&
            "px-[15px] py-[5px] bg-[#010886] rounded-[8px] text-[#FFF]"
          }`}
        >
          Account
        </h4>
      ),
      children: <Tab1 />,
    },
    {
      key: "2",
      label: (
        <h4
          className={`text-inherit text-[16px] font-[400] ${
            activeKey === "2" &&
            "px-[15px] py-[5px] bg-[#010886] rounded-[8px] text-[#FFF]"
          }`}
        >
          Security
        </h4>
      ),
      children: <Tab2 />,
    },
  ];
  return (
    <div className="w-[98%] mx-auto py-[1rem] flex flex-col gap-[0.5rem]">
      <Tabs
        defaultActiveKey="1"
        onChange={(e) => {
          setActiveKey(e);
        }}
        activeKey={activeKey}
        items={items}
      />
    </div>
  );
};

export default Settings;
