"use client";
import Avatar from "@/assets/Avatar.jpg";
import Image from "next/image";
import JpgIcon from "@/assets/icons/JpgIcon";
import { message, UploadProps } from "antd";
import {
  CustomUpload as Upload,
  CustomInlineInput as Input,
  CustomDatePicker as DatePicker,
  CustomSelect as Select,
  CustomButton as Button,
  CustomCheckBox as CheckBox,
} from "@/lib/AntDesignComponents";
import { useState } from "react";

const Tab1 = () => {
  const [check, setCheck] = useState(false);
  const props: UploadProps = {
    name: "file",
    multiple: false,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };
  return (
    <div className="grid grid-cols-1 gap-[0.8rem]">
      <div className="bg-[#FFF] rounded-[8px] p-[2%] grid grid-cols-1 gap-[0.5rem]">
        <div className="flex items-start md:items-center gap-[0.5rem] md:gap-[2rem]">
          <Image
            alt="profile"
            className="h-[6rem] w-[6rem] md:h-fit md:w-fit"
            src={Avatar}
          />
          <Upload {...props}>
            <div className="flex flex-col items-center p-[0.1rem] md:p-[0.5rem]">
              <span className="flex flex-col md:flex-row items-center gap-[0.1rem] text-[10px] md:text-[16px] font-[400]">
                <p className="text-colorPriary text[12px] md:text[16px]">
                  Click to replace or drag and drop
                </p>
              </span>
              <p className="text-[10px] md:text-[14px] font-[400] text-[#7C8493]">
                SVG, PNG, JPG or GIF (max. 400 x 400px).
              </p>
            </div>
          </Upload>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1rem]">
          <span className="relative">
            <label
              htmlFor="last_name"
              className="absolute top-[-25%] left-[2%] z-[10000] bg-[#FFF] p-[0.1%] text-[#32475C99]/[60%] text-[11px] font-[400]"
            >
              First Name
            </label>
            <Input id="first_name" value={"John"} />
          </span>
          <span className="relative">
            <label
              htmlFor="last_name"
              className="absolute top-[-25%] left-[2%] z-[10000] bg-[#FFF] p-[0.1%] text-[#32475C99]/[60%] text-[11px] font-[400]"
            >
              Last Name
            </label>
            <Input id="last_name" value={"John"} />
          </span>
          <span className="relative">
            <label
              htmlFor="last_name"
              className="absolute top-[-25%] left-[2%] z-[10000] bg-[#FFF] p-[0.1%] text-[#32475C99]/[60%] text-[11px] font-[400]"
            >
              Email
            </label>
            <Input id="email" type="email" value={"John"} />
          </span>
          <span className="relative">
            <label
              htmlFor="last_name"
              className="absolute top-[-25%] left-[2%] z-[10000] bg-[#FFF] p-[0.1%] text-[#32475C99]/[60%] text-[11px] font-[400]"
            >
              Phone Number
            </label>
            <Input id="phone" value={"John"} />
          </span>
          <span className="relative">
            <label
              htmlFor="last_name"
              className="absolute top-[-25%] left-[2%] z-[10000] bg-[#FFF] p-[0.1%] text-[#32475C99]/[60%] text-[11px] font-[400]"
            >
              Nationality
            </label>
            <Input id="nationality" value={"Nigerian"} />
          </span>
          <span className="relative">
            <label
              htmlFor="last_name"
              className="absolute top-[-25%] left-[2%] z-[10000] bg-[#FFF] p-[0.1%] text-[#32475C99]/[60%] text-[11px] font-[400]"
            >
              Date of Birth
            </label>
            <DatePicker id="dob" />
          </span>
          <span className="relative">
            <label
              htmlFor="last_name"
              className="absolute top-[-25%] left-[2%] z-[10000] bg-[#FFF] p-[0.1%] text-[#32475C99]/[60%] text-[11px] font-[400]"
            >
              Role
            </label>
            <Select id="role" value={"John"} />
          </span>
        </div>
        <Button type="primary" className="solid-btn w-fit">
          save changes
        </Button>
      </div>
      <div className="bg-[#FFF] rounded-[8px] p-[2%] grid grid-cols-1 gap-[0.5rem]">
        <h4 className="text-[#32475CDE]/[87%] text-[16px] md:text-[20px] font-[500]">
          Deactivate Account
        </h4>
        <span className="flex gap-[0.5rem]">
          <CheckBox
            checked={check}
            onChange={(e) => setCheck(e.target.checked)}
          />
          <label className="text-[10px] md:text-[14px] font-[400] text-[#3A3541DE]/[87%]">
            I confirm this account deactivation
          </label>
        </span>
        <Button className="solid-btn w-fit" type="primary" disabled={!check}>
          Deactivate Account
        </Button>
      </div>
    </div>
  );
};

export default Tab1;
