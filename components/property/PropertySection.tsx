"use client";
import Image from "next/image";
import map from "@/assets/map.jpg";

const PropertySection = () => {
  return (
    <div className="grid grid-cols-1 w-full md:mt-[6rem]">
      <div className="p-[0.5rem] border border-[#D6DDEB] px-[20px] py-[13px] flex flex-col gap-[0.3rem]">
        <h4 className="text-[#25324B] text-[16px] md:text-[24px] font-[700]">
          Description
        </h4>
        <p className="text-[12px] md:text-[16px] font-[400] text-[#515B6F]">
          Welcome to your new home! This delightful 3-bedroom house, nestled in
          a peaceful and family-friendly neighborhood, offers comfort,
          convenience, and a warm sense of community. With its appealing curb
          appeal and well-maintained exterior, this property is sure to capture
          your heart from the moment you step inside.
        </p>
      </div>
      <div className="p-[0.5rem] border border-[#D6DDEB] px-[20px] py-[13px] flex flex-col gap-[0.3rem]">
        <h4 className="text-[#25324B] text-[16px] md:text-[24px] font-[700]">
          Key Features
        </h4>
        <ol className="list-decimal list-inside">
          <li className="text-[12px] md:text-[16px] font-[400] text-[#515B6F]">
            Spacious Living Areas: The interior boasts a generous open-concept
            layout, creating an inviting and airy atmosphere. The living room is
            bathed in natural light, creating a perfect space for relaxation and
            entertainment.
          </li>
          <li className="text-[12px] md:text-[16px] font-[400] text-[#515B6F]">
            Modern Kitchen: The well-appointed kitchen is equipped with modern
            appliances, ample storage, and a breakfast bar, making meal
            preparation a breeze. Whether you're an experienced cook or just
            enjoy the occasional culinary adventure, this kitchen has everything
            you need.
          </li>
          <li className="text-[12px] md:text-[16px] font-[400] text-[#515B6F]">
            Cozy Bedrooms: The three bedrooms are thoughtfully designed to
            provide a peaceful retreat after a long day. Each room features
            comfortable space, built-in closets, and large windows that bring in
            plenty of natural light.
          </li>
          <li className="text-[12px] md:text-[16px] font-[400] text-[#515B6F]">
            Updated Bathrooms: The house boasts recently renovated bathrooms,
            featuring elegant fixtures and tasteful finishes that exude a
            spa-like ambiance.
          </li>
          <li className="text-[12px] md:text-[16px] font-[400] text-[#515B6F]">
            Pet-Friendly: Your four-legged friends are welcome here! The
            property's pet-friendly policy allows for furry companions to share
            in the comfort of your new home.
          </li>
        </ol>
      </div>
      <div className="p-[0.5rem] border border-[#D6DDEB] px-[20px] py-[13px] flex flex-col gap-[0.3rem]">
        <h4 className="text-[#25324B] text-[16px] md:text-[24px] font-[700]">
          Availability and Rental Terms
        </h4>
        <ol className="list-decimal list-inside">
          <li className="text-[12px] md:text-[16px] font-[400] text-[#515B6F]">
            Monthly Rent: NGN 70,000.
          </li>
          <li className="text-[12px] md:text-[16px] font-[400] text-[#515B6F]">
            Security Deposit: One month's rent
          </li>
          <li className="text-[12px] md:text-[16px] font-[400] text-[#515B6F]">
            Lease Duration: 12 months (flexible options available)
          </li>
          <li className="text-[12px] md:text-[16px] font-[400] text-[#515B6F]">
            You can share apartment or co-working space with someone
          </li>
        </ol>
      </div>
      <div className="p-[0.5rem] border border-[#D6DDEB] px-[20px] py-[13px] flex flex-col gap-[0.3rem]">
        <h4 className="text-[#25324B] text-[16px] md:text-[24px] font-[700]">
          Location
        </h4>
        <Image alt="map" src={map} />
      </div>
    </div>
  );
};

export default PropertySection;
