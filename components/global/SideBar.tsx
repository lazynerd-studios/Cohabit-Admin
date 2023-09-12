"use client";
import type { MenuProps } from "antd";
import { CustomMenu as Menu } from "@/lib/AntDesignComponents";
import HomeIcon from "@/assets/icons/HomeIcon";
import UserIcon from "@/assets/icons/UserIcon";
import SettingsIcon from "@/assets/icons/SettingsIcon";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/logo.svg";
import user from "@/assets/user.svg";
import { usePathname } from "next/navigation";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const Title = () => <Image className="mxauto py-[0.5rem]" alt="" src={Logo} />;

const SideBar = () => {
  const [active, setActive] = useState("/dashboard");
  const path = usePathname();
  const items: MenuProps["items"] = useMemo(
    () => [
      getItem(
        <Link href="/dashboard">Dashboard</Link>,
        "/dashboard",
        <HomeIcon
          className={`${
            path === "/dashboard" ? "stroke-colorPrimary" : "stroke-[#7C8493]"
          } h-[18px]`}
        />
      ),

      getItem(
        <Link href="/dashboard/house-seekers">House-Seekers</Link>,
        "/dashboard/house-seekers",
        <UserIcon
          className={`${
            path.includes("house-seekers")
              ? "stroke-colorPrimary"
              : "stroke-[#7C8493]"
          } h-[18px]`}
        />
      ),
      getItem(
        <Link href="/dashboard/host">Hosts</Link>,
        "/dashboard/host",
        <UserIcon
          className={`${
            path.includes("host") ? "stroke-colorPrimary" : "stroke-[#7C8493]"
          } h-[18px]`}
        />
      ),
      getItem(
        <Link href="/dashboard/houses-posted">Houses Posted</Link>,
        "/dashboard/houses-posted",
        <UserIcon
          className={`${
            path.includes("houses-posted")
              ? "stroke-colorPrimary"
              : "stroke-[#7C8493]"
          } h-[18px]`}
        />
      ),
      getItem(
        <Link href="/dashboard/payment-requests">Payment Request</Link>,
        "/dashboard/payment-requests",
        <SettingsIcon
          className={`${
            path.includes("payment-requests")
              ? "stroke-colorPrimary"
              : "stroke-[#7C8493]"
          } h-[18px]`}
        />
      ),
      getItem(
        <Link href="/dashboard/admin">Admin</Link>,
        "/dashboard/admin",
        <SettingsIcon
          className={`${
            path.includes("admin") ? "stroke-colorPrimary" : "stroke-[#7C8493]"
          } h-[18px]`}
        />
      ),
      getItem(
        <Link href="/dashboard/roles-permission">Roles and Permission</Link>,
        "/dashboard/roles-permission",
        <UserIcon
          className={`${
            path.includes("roles-permission")
              ? "stroke-colorPrimary"
              : "stroke-[#7C8493]"
          } h-[18px]`}
        />
      ),
      getItem(
        <Link href="/dashboard/charges">Charges</Link>,
        "/dashboard/charges",
        <UserIcon
          className={`${
            path.includes("charges")
              ? "stroke-colorPrimary"
              : "stroke-[#7C8493]"
          } h-[18px]`}
        />
      ),
      { type: "divider" },
      getItem(
        <Link href="/dashboard/settings">Settings</Link>,
        "/dashboard/settings",
        <SettingsIcon
          className={`${
            path.includes("settings")
              ? "stroke-colorPrimary"
              : "stroke-[#7C8493]"
          } h-[18px]`}
        />
      ),
    ],
    [path]
  );
  useEffect(() => {
    const rel = path.split("/");
    setActive(() => {
      if (rel[2]) return "/" + rel[1] + "/" + rel[2];
      else return "/" + rel[1];
    });
  }, [path]);
  const onClick: MenuProps["onClick"] = (e) => {
    setActive(e.key);
  };

  return (
    <div className="grid grid-cols-1 grid-rows-[5%_75%_15%] md:grid-rows-[10%_75%_15%] border-solid border-r-[1px] border-[#D6DDEB] bg-[#F8F8FD] max-h-screen overflow-y-hidden">
      <Title />
      <Menu
        onClick={onClick}
        defaultSelectedKeys={[active]}
        selectedKeys={[active]}
        activeKey={active}
        items={items}
      />
      <div className="grid md:grid-cols-[20%_80%] mx-auto justify-between w-[80%] items-center gap-[1rem] py-[1rem]">
        <Image alt="user" src={user} />
        <div className="md:flex flex-col hidden">
          <h4 className="text-[#202430] text-[18px] font-[600]">Jake Gyll</h4>
          <p className="text-[#202430] text-opacity-[0.5] text-[14px] font-[400]">
            jakegyll@email.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
