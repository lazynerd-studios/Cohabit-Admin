import Image from "next/image";
import room from "@/assets/room.jpg";
import Avatar from "@/assets/Avatar.jpg";
import { CustomCarousel as Carousel } from "@/lib/AntDesignComponents";
import ProfileSection2 from "./ProfileSection2";

const ProfileSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[70%_30%] w-full md:py-[1rem]">
      <div className="flex flex-col gap-[0.5rem]">
        <div className="p-[0.5rem] border border-[#D6DDEB] px-[20px] py-[13px] flex flex-col gap-[0.3rem]">
          <h4 className="text-[#25324B] text-[24px] font-[700]">Details</h4>
          <Image alt="avatar" src={Avatar} />
          <div className="flex flex-col gap-[0.5rem] w-full">
            <span className="flex items-center gap-[0.5rem]">
              <h6 className="text-[#32475C99]/[60%] text-[16px] font-[700]">
                Full Name:
              </h6>
              <p className="text-[#32475C99]/[60%] text-[12px] md:text-[16px] font-[400]">
                James Bond
              </p>
            </span>
            <span className="flex items-center gap-[0.5rem]">
              <h6 className="text-[#32475C99]/[60%] text-[16px] font-[700]">
                Categories:
              </h6>
              <p className="text-[#32475C99]/[60%] text-[12px] md:text-[16px] font-[400]">
                One Bedroom, Bungalow
              </p>
            </span>
            <span className="flex items-center gap-[0.5rem]">
              <h6 className="text-[#32475C99]/[60%] text-[16px] font-[700]">
                Location:
              </h6>
              <p className="text-[#32475C99]/[60%] text-[12px] md:text-[16px] font-[400]">
                Lagos, Nigeria
              </p>
            </span>
            <span className="flex items-center gap-[0.5rem]">
              <h6 className="text-[#32475C99]/[60%] text-[16px] font-[700]">
                Lifestyle:
              </h6>
              <p className="text-[#32475C99]/[60%] text-[12px] md:text-[16px] font-[400]">
                Friendly, Indoor
              </p>
            </span>
            <span className="flex items-center gap-[0.5rem]">
              <h6 className="text-[#32475C99]/[60%] text-[16px] font-[700]">
                Language:
              </h6>
              <p className="text-[#32475C99]/[60%] text-[12px] md:text-[16px] font-[400]">
                English, French
              </p>
            </span>
            <span className="flex items-center gap-[0.5rem]">
              <h6 className="text-[#32475C99]/[60%] text-[16px] font-[700]">
                Budget:
              </h6>
              <p className="text-[#32475C99]/[60%] text-[12px] md:text-[16px] font-[400]">
                100k-500k
              </p>
            </span>
            <span className="flex items-center gap-[0.5rem]">
              <h6 className="text-[#32475C99]/[60%] text-[16px] font-[700]">
                Pet:
              </h6>
              <p className="text-[#32475C99]/[60%] text-[12px] md:text-[16px] font-[400]">
                Cat
              </p>
            </span>
            <span className="flex items-center gap-[0.5rem]">
              <h6 className="text-[#32475C99]/[60%] text-[16px] font-[700]">
                Gender:
              </h6>
              <p className="text-[#32475C99]/[60%] text-[12px] md:text-[16px] font-[400]">
                Male
              </p>
            </span>
            <span className="flex items-center gap-[0.5rem]">
              <h6 className="text-[#32475C99]/[60%] text-[16px] font-[700]">
                Employment:
              </h6>
              <p className="text-[#32475C99]/[60%] text-[12px] md:text-[16px] font-[400]">
                Self-employed
              </p>
            </span>
          </div>
        </div>
        <div className="p-[0.5rem] border border-[#D6DDEB] px-[20px] py-[13px] flex flex-col gap-[0.3rem]">
          <span className="flex items-center justify-between gap-[0.5rem]">
            <h4 className="text-[#25324B] text-[24px] font-[700]">About</h4>
          </span>
          <p className="text-[12px] md:text-[16px] font-[400] text-[#515B6F]">
            I’m a product designer + filmmaker currently working remotely at
            Twitter from beautiful Manchester, United Kingdom. I’m passionate
            about designing digital products that have a positive impact on the
            world..
          </p>
          <p className="text-[12px] md:text-[16px] font-[400] text-[#515B6F]">
            I am playful person, lover of cat and i don’t like to smoke
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
      <ProfileSection2 />
    </div>
  );
};

export default ProfileSection;
