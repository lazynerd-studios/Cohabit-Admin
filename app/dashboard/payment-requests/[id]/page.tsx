"use client";
import BackIcon from "@/assets/icons/BackIcon";
import { useRouter } from "next/navigation";
import PaymentRequestDetails from "@/components/payment-requests/PaymentRequestDetails";
const Page = () => {
  const { back } = useRouter();
  return (
    <div className="grid grid-cols-1 grid-rows-[10%_90%] w-[98%] mx-auto max-h-screen overflow-y-scroll py-[1%] gap-[1rem]">
      <div className="flex items-center justify-between gap-[0.5rem]">
        <span className="flex items-center gap-[0.5rem]">
          <BackIcon
            onClick={() => {
              back();
            }}
            className="w-[40px] h-[40px] font-[400] text-[15px] cursor-pointer"
          />
          <h4 className="text-[#25324B] text-[18px] md:text-[25px] font-[700]">
            Payment Request Details
          </h4>
        </span>
      </div>
      <PaymentRequestDetails />
    </div>
  );
};

export default Page;
