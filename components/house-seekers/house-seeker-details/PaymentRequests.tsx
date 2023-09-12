import Image from "next/image";
import room from "@/assets/room.jpg";

const PaymentRequests = () => {
  const arr = [1, 1];
  return (
    <div className="grid grid-cols-1 w-full">
      <div className="flex flex-col gap-[0.5rem]">
        {arr.map(() => (
          <div className="p-[0.5rem] border border-[#D6DDEB] px-[20px] py-[13px] flex flexcol gap-[2rem]">
            <Image alt="avatar" src={room} />
            <div className="flex flex-col gap-[0.5rem]">
              <span className="flex gap-[0.5rem]">
                <h6 className="text-[#32475C99]/[60%] text-[16px] font-[700]">
                  Apartment Type:
                </h6>
                <p className="text-[#32475C99]/[60%] text-[16px] font-[400]">
                  One Bedroom
                </p>
              </span>
              <span className="flex gap-[0.5rem]">
                <h6 className="text-[#32475C99]/[60%] text-[16px] font-[700]">
                  Amount:
                </h6>
                <p className="text-[#32475C99]/[60%] text-[16px] font-[400]">
                  NGN 200,000
                </p>
              </span>
              <span className="flex gap-[0.5rem]">
                <h6 className="text-[#32475C99]/[60%] text-[16px] font-[700]">
                  Status:
                </h6>
                <p className="text-[#32475C99]/[60%] text-[16px] font-[400]">
                  Pending
                </p>
              </span>
              <span className="flex gap-[0.5rem]">
                <h6 className="text-[#32475C99]/[60%] text-[16px] font-[700]">
                  Payment date:
                </h6>
                <p className="text-[#32475C99]/[60%] text-[16px] font-[400]">
                  21st April 2023
                </p>
              </span>
              <span className="flex gap-[0.5rem]">
                <h6 className="text-[#32475C99]/[60%] text-[16px] font-[700]">
                  Payment Type:
                </h6>
                <p className="text-[#32475C99]/[60%] text-[16px] font-[400]">
                  Bank Transfer
                </p>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentRequests;
