import Image from "next/image";
import menu from "../../public/icons8-menu-30.png";
import dp from "../../public/dp.png";

export default function Home() {
  return (
    <main className="bg-primary">
      <div className="w-[90%] mx-auto ">
        {/* Hero Section */}
        <div className="h-[100vh]">
          <div className="py-5 h-[10%] md:h-[5%]">
            <Image src={menu} alt="menu" className="cursor-pointer"></Image>
          </div>
          {/* Personal Info */}
          <div className="flex justify-center items-center flex-col h-[90%] md:h-[95%]">
            {/* <Image src={dp} className="rounded-full w-[280px]" alt="dp"></Image> */}
            {/*  */}
            <div className="relative w-64 h-64">
              {/* First Background Layer */}
              <div className="absolute inset-0 bg-[#7fd1a3] transform rotate-6"></div>
              {/* Second Background Layer */}
              <div className="absolute inset-0 bg-[#d17fad] transform -rotate-6"></div>
              {/* Photo Container */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src={dp}
                  className="w-full h-full object-cover"
                  alt="dp"
                ></Image>
              </div>
            </div>
            {/*  */}
            <h1 className="mt-5 md:mt-8 text-[40px] md:text-[60px] font-poppins font-semibold text-center">
              Saiful Islam Shakil
            </h1>
            <span className="font-poppins text-center ">
              Data Analyst | Data Science Enthusiast
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}