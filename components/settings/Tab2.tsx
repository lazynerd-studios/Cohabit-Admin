import {
  CustomPasswordInput as Input,
  CustomButton as Button,
} from "@/lib/AntDesignComponents";

const Tab2 = () => {
  return (
    <div className="bg-[#FFF] rounded-[8px] p-[2%] grid grid-cols-1 gap-[0.5rem]">
      <h4 className="text-[#32475CDE]/[87%] text-[18px] md:text-[20px] font-[500]">
        Change Password
      </h4>
      <div className="grid grid-cols-1 gap-[1rem]">
        <span className="relative w-full md:w-[40%]">
          <label
            htmlFor="password"
            className="absolute top-[-25%] left-[2%] z-[10000] bg-[#FFF] p-[0.1%] text-[#32475C99]/[60%] text-[11px] font-[400]"
          >
            New Password
          </label>
          <Input id="password" />
        </span>
        <span className="relative w-full md:w-[40%]">
          <label
            htmlFor="confirm_password"
            className="absolute top-[-25%] left-[2%] z-[10000] bg-[#FFF] p-[0.1%] text-[#32475C99]/[60%] text-[11px] font-[400]"
          >
            Confirm Password
          </label>
          <Input id="confirm_password" />
        </span>
      </div>
      <span>
        <h5 className="text-[#32475C99]/[60%] text-[14px] md:text-[16px] font-[700]">
          Password Requirements
        </h5>
        <ul>
          <li className="text-[#32475C99]/[60%] md:text-[16px] text-[12px] font-[400]">
            Minimum 8 characters long - the more, the better
          </li>
          <li className="text-[#32475C99]/[60%] text-[12px] md:text-[16px] font-[400]">
            At least one lowercase character
          </li>
          <li className="text-[#32475C99]/[60%] text-[12px] md:text-[16px] font-[400]">
            At least one number, symbol, or whitespace character
          </li>
        </ul>
      </span>
      <Button className="solid-btn w-fit" type="primary">
        save changes
      </Button>
    </div>
  );
};

export default Tab2;
