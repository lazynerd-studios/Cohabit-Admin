/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import room from "@/assets/room.jpg";

import { CustomCarousel as Carousel } from "@/lib/AntDesignComponents";
import ProfileSection2 from "./ProfileSection2";
import { useEffect, useState } from "react";
import { useGetAdminUserQuery } from "@/redux/api/adminApi";

const ProfileSection = () => {
  const [seekerId, setSeekerId] = useState<string>("");

  useEffect(() => {
    const userId = sessionStorage.getItem("houseSeekerId");
    if (userId) {
      setSeekerId(userId);
    }
  }, [])

  const { data, isSuccess, isError, error } = useGetAdminUserQuery({ id: seekerId });
  const [user, setUser] = useState<Record<string, any>>({});
  useEffect(() => {
    if (isSuccess) {
      setUser(data?.data);
      console.log(data);
    }
    if (isError) {
      console.log(error);
    }
  }, [data, error, isError, isSuccess]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-[70%_30%] w-full md:py-[1rem]">
      <div className="flex flex-col gap-[0.5rem]">
        <div className="p-[0.5rem] border border-[#D6DDEB] px-[20px] py-[13px] flex flex-col gap-[0.3rem]">
          <h4 className="text-[#25324B] text-[24px] font-[700]">Details</h4>
          <img alt="avatar" src={user?.image === null ? user?.image : ""} className="rounded-md w-[200px] h-[200px]" />
          <div className="flex flex-col gap-[0.5rem] w-full">
            <span className="flex items-center gap-[0.5rem]">
              <h6 className="text-[#32475C99]/[60%] text-[16px] font-[700]">
                Full Name:
              </h6>
              <p className="text-[#32475C99]/[60%] text-[12px] md:text-[16px] font-[400]">
                {user?.name}
              </p>
            </span>
            <span className="flex items-center gap-[0.5rem]">
              <h6 className="text-[#32475C99]/[60%] text-[16px] font-[700]">
                Categories:
              </h6>
              <p className="text-[#32475C99]/[60%] text-[12px] md:text-[16px] font-[400]">
                {/* {user?.listings?.map((item: string) => item)} */}
              </p>
            </span>
            <span className="flex items-center gap-[0.5rem]">
              <h6 className="text-[#32475C99]/[60%] text-[16px] font-[700]">
                Location:
              </h6>
              <p className="text-[#32475C99]/[60%] text-[12px] md:text-[16px] font-[400]">
                {user?.location}
              </p>
            </span>
            <span className="flex items-center gap-[0.5rem]">
              <h6 className="text-[#32475C99]/[60%] text-[16px] font-[700]">
                Lifestyle:
              </h6>
              <p className="text-[#32475C99]/[60%] text-[12px] md:text-[16px] font-[400]">
                {user?.lifestyle === null ? user?.lifestyle : "No lifestyle"}
              </p>
            </span>
            <span className="flex items-center gap-[0.5rem]">
              <h6 className="text-[#32475C99]/[60%] text-[16px] font-[700]">
                Language:
              </h6>
              <p className="text-[#32475C99]/[60%] text-[12px] md:text-[16px] font-[400]">
                {user?.language === null ? user?.language : "No language"}
              </p>
            </span>
            <span className="flex items-center gap-[0.5rem]">
              <h6 className="text-[#32475C99]/[60%] text-[16px] font-[700]">
                Budget:
              </h6>
              <p className="text-[#32475C99]/[60%] text-[12px] md:text-[16px] font-[400]">
                {user?.budget === null ? user?.budget : "No budget"}
              </p>
            </span>
            <span className="flex items-center gap-[0.5rem]">
              <h6 className="text-[#32475C99]/[60%] text-[16px] font-[700]">
                Pet:
              </h6>
              <p className="text-[#32475C99]/[60%] text-[12px] md:text-[16px] font-[400]">
                {user?.pet === null ? user?.pet : "No pet"}
              </p>
            </span>
            <span className="flex items-center gap-[0.5rem]">
              <h6 className="text-[#32475C99]/[60%] text-[16px] font-[700]">
                Gender:
              </h6>
              <p className="text-[#32475C99]/[60%] text-[12px] md:text-[16px] font-[400]">
                {user?.gender === null ? user?.gender : "No gender"}
              </p>
            </span>
            <span className="flex items-center gap-[0.5rem]">
              <h6 className="text-[#32475C99]/[60%] text-[16px] font-[700]">
                Employment:
              </h6>
              <p className="text-[#32475C99]/[60%] text-[12px] md:text-[16px] font-[400]">
                {user?.employment === null ? user?.employment : "No employment"}
              </p>
            </span>
          </div>
        </div>
        <div className="p-[0.5rem] border border-[#D6DDEB] px-[20px] py-[13px] flex flex-col gap-[0.3rem]">
          <span className="flex items-center justify-between gap-[0.5rem]">
            <h4 className="text-[#25324B] text-[24px] font-[700]">About</h4>
          </span>
          <p className="text-[12px] md:text-[16px] font-[400] text-[#515B6F]">
            {user?.description ? user?.description : "No description"}
          </p>
        </div>

        <div className="p-[0.5rem] border border-[#D6DDEB] px[20px] py[13px] flex flex-col gap-[0.3rem]">
          <h4 className="text-[#25324B] text-[18px] md:text-[24px] font-[700]">
            Favorite and Saved Searches
          </h4>
          <div className="hfit">
            <Carousel
              dots={{ className: "text-[#010886] carouselBtn" }}
              // dotPosition="top"
              variableWidth
              className="max-h-[250px]"
            >
              <div className="w-fit hfit p-[1rem] flex flex-row gap-[0.2rem]">
                <Image alt="apartment" src={room} />
                <span className="text-[#25324B] text-[16px] font-[400]">
                  A bungalow
                </span>
              </div>
              <div className="w-fit p-[1rem] flex flex-row gap-[0.2rem]">
                <Image alt="apartment" src={room} />
                <span className="text-[#25324B] text-[16px] font-[400]">
                  A bungalow
                </span>
              </div>
              <div className="w-fit p-[1rem] flex flex-row gap-[0.2rem]">
                <Image alt="apartment" src={room} />
                <span className="text-[#25324B] text-[16px] font-[400]">
                  A bungalow
                </span>
              </div>
              <div className="w-fit p-[1rem] flex flex-row gap-[0.2rem]">
                <Image alt="apartment" src={room} />
                <span className="text-[#25324B] text-[16px] font-[400]">
                  A bungalow
                </span>
              </div>
              <div className="w-fit p-[1rem] flex flex-row gap-[0.2rem]">
                <Image alt="apartment" src={room} />
                <span className="text-[#25324B] text-[16px] font-[400]">
                  A bungalow
                </span>
              </div>
              <div className="w-fit p-[1rem] flex flex-row gap-[0.2rem]">
                <Image alt="apartment" src={room} />
                <span className="text-[#25324B] text-[16px] font-[400]">
                  A bungalow
                </span>
              </div>
              <div className="w-fit p-[1rem] flex flex-row gap-[0.2rem]">
                <Image alt="apartment" src={room} />
                <span className="text-[#25324B] text-[16px] font-[400]">
                  A bungalow
                </span>
              </div>
              <div className="w-fit p-[1rem] flex flex-row gap-[0.2rem]">
                <Image alt="apartment" src={room} />
                <span className="text-[#25324B] text-[16px] font-[400]">
                  A bungalow
                </span>
              </div>
            </Carousel>
          </div>
        </div>
        <div className="p-[0.5rem] border border-[#D6DDEB] px[20px] py[13px] flex flex-col gap-[0.3rem]">
          <h4 className="text-[#25324B] text-[24px] font-[700]">
            Rented Apartment
          </h4>
          <div className="">
            <Carousel
              dots={{ className: "text-[#010886] carouselBtn" }}
              dotPosition="bottom"
              variableWidth
              className="max-h-[250px]"
            >
              <div className="w-fit p-[1rem] flex flex-row gap-[0.2rem]">
                <Image alt="apartment" src={room} />
                <span className="text-[#25324B] text-[16px] font-[400]">
                  A bungalow
                </span>
              </div>
              <div className="w-fit p-[1rem] flex flex-row gap-[0.2rem]">
                <Image alt="apartment" src={room} />
                <span className="text-[#25324B] text-[16px] font-[400]">
                  A bungalow
                </span>
              </div>
              <div className="w-fit p-[1rem] flex flex-row gap-[0.2rem]">
                <Image alt="apartment" src={room} />
                <span className="text-[#25324B] text-[16px] font-[400]">
                  A bungalow
                </span>
              </div>
              <div className="w-fit p-[1rem] flex flex-row gap-[0.2rem]">
                <Image alt="apartment" src={room} />
                <span className="text-[#25324B] text-[16px] font-[400]">
                  A bungalow
                </span>
              </div>
              <div className="w-fit p-[1rem] flex flex-row gap-[0.2rem]">
                <Image alt="apartment" src={room} />
                <span className="text-[#25324B] text-[16px] font-[400]">
                  A bungalow
                </span>
              </div>
              <div className="w-fit p-[1rem] flex flex-row gap-[0.2rem]">
                <Image alt="apartment" src={room} />
                <span className="text-[#25324B] text-[16px] font-[400]">
                  A bungalow
                </span>
              </div>
              <div className="w-fit p-[1rem] flex flex-row gap-[0.2rem]">
                <Image alt="apartment" src={room} />
                <span className="text-[#25324B] text-[16px] font-[400]">
                  A bungalow
                </span>
              </div>
              <div className="w-fit p-[1rem] flex flex-row gap-[0.2rem]">
                <Image alt="apartment" src={room} />
                <span className="text-[#25324B] text-[16px] font-[400]">
                  A bungalow
                </span>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
      <ProfileSection2 data={user} />
    </div>
  );
};

export default ProfileSection;
