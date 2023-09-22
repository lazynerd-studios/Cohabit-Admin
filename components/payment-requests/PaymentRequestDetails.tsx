const PaymentRequestDetails = () => {
  return (
    <section className="bg-[#FFF] py-[5%] px-[3%] border-y border-[#D6DDEB]">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-[0.5rem] justify-between items-center w-[98%] mx-auto">
        <span className="flex flex-col gap-[0.2rem]">
          <h6 className="text-[#7C88B1] font-[400] text-[12px] md:text-[14px]">
            Full Name
          </h6>
          <h4 className="text-[#25324B] text-[14px] md:text-[16px] font-[700]">
            John Doe
          </h4>
        </span>
        <span className="flex flex-col gap-[0.2rem]">
          <h6 className="text-[#7C88B1] font-[400] text-[12px] md:text-[14px]">
            Fee
          </h6>
          <h4 className="text-[#25324B] text-[14px] md:text-[16px] font-[700]">
            0.00
          </h4>
        </span>
        <span className="flex flex-col gap-[0.2rem]">
          <h6 className="text-[#7C88B1] font-[400] text-[12px] md:text-[14px]">
            Amount
          </h6>
          <h4 className="text-[#25324B] text-[14px] md:text-[16px] font-[700]">
            NGN 200,000.00
          </h4>
        </span>
        <span className="flex flex-col gap-[0.2rem]">
          <h6 className="text-[#7C88B1] font-[400] text-[12px] md:text-[14px]">
            Payment Date
          </h6>
          <h4 className="text-[#25324B] text-[14px] md:text-[16px] font-[700]">
            24 July 2024
          </h4>
        </span>
        <span className="flex flex-col gap-[0.2rem]">
          <h6 className="text-[#7C88B1] font-[400] text-[12px] md:text-[14px]">
            Payment Type
          </h6>
          <h4 className="text-[#25324B] text-[14px] md:text-[16px] font-[700]">
            Bank Transfer
          </h4>
        </span>
        <span className="flex flex-col gap-[0.2rem]">
          <h6 className="text-[#7C88B1] font-[400] text-[12px] md:text-[14px]">
            Status
          </h6>
          <h4 className="text-[#25324B] text-[14px] md:text-[16px] font-[700]">
            Completed
          </h4>
        </span>
      </div>
    </section>
  );
};

export default PaymentRequestDetails;
