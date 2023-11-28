import EmailIcon from "@/assets/icons/EmailIcon";
import PhoneIcon from "@/assets/icons/PhoneIcon";
import LanguageIcon from "@/assets/icons/LanguageIcon";

interface IProps {
  data?: Record<string, any>;
}
const ProfileSection2: React.FC<IProps> = ({ data }: IProps) => {
  return (
    <div className="flex flex-col gap-[0.5rem] w-full md:w-[95%] mx-auto">
      <div className="py-[1rem] border border-[#D6DDEB] px-[20px] flex flex-col gap-[0.3rem]">
        <h4 className="text-[#25324B] text-[16px] md:text-[20px] font-[700]">
          Additional Details
        </h4>
        <div className="grid grid-cols-[15%_85%] gap-[0.2rem]">
          <EmailIcon className="self-start" />
          <span className="flex flex-col gap-[0.3rem] text-[16px] font-[400]">
            <h5 className="text-[#7C8493]">Email</h5>
            <p className="text-[#25324B]">{data?.email}</p>
          </span>
        </div>
        <div className="grid grid-cols-[15%_85%] gap-[0.2rem]">
          <PhoneIcon className="self-start" />
          <span className="flex flex-col gap-[0.3rem] text-[16px] font-[400]">
            <h5 className="text-[#7C8493]">Phone</h5>
            <p className="text-[#25324B]">{data?.phone === null ? data?.phone : "No phone number"}</p>
          </span>
        </div>
        <div className="grid grid-cols-[15%_85%] gap-[0.2rem]">
          <LanguageIcon className="self-start" />
          <span className="flex flex-col gap-[0.3rem] text-[16px] font-[400]">
            <h5 className="text-[#7C8493]">Languages</h5>
            <p className="text-[#25324B]">{data?.languages === null ? data?.languages : "No languages"}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection2;
