import { CustomSteps as Steps } from "@/lib/AntDesignComponents";

const RecentActivites = () => {
  const items = [
    {
      title: "Attempted payment for an apartment",
      description: "Date: Thu Nov 4,2021 9:05AM",
    },
    {
      title: "Messaged a hosts (john doe)",
      description: "Date: Thu Nov 4,2021 9:05AM",
    },
    {
      title: "Message a house-seekers (john doe)",
      description: "Date: Thu Nov 4,2021 9:05AM",
    },
    {
      title: "Message a house-seekers (john doe)",
      description: "Date: Thu Nov 4,2021 9:05AM",
    },
    {
      title: "Message a house-seekers (john doe)",
      description: "Date: Thu Nov 4,2021 9:05AM",
    },
  ];
  return (
    <section className="p-[0.5rem] border border-[#D6DDEB] px-[20px] py-[13px] flex flex-col gap-[0.3rem]">
      <span className="flex flex-col gap-[0.3rem]">
        <h4 className="text-[#25324B] text-[18px] font-[700]">
          Recent Activities
        </h4>
        <p className="text-[#7C8493] text-[16px] font-[400]">
          This information can not be created and edited
        </p>
      </span>
      <Steps
        progressDot
        current={items.length}
        items={items}
        direction="vertical"
        size="small"
      />
    </section>
  );
};

export default RecentActivites;
