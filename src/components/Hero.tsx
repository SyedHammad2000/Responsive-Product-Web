import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="container relative pt-[15px] ">
      <Image
        className="w-full h-auto "
        src="/lipstics.jpg"
        width={1200}
        height={900}
        alt="herobg"
      />
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white w-[250px] h-[200px] space-y-3 sm:block hidden lg:w-[300px] lg:h-[270px] lg:space-y-6  xl:w-[400px] xl:h-[300px] p-6 xl:space-y-8 opacity-[0.7]">
        <h1 className="text-5xl font-bold text-black">Lipsticks</h1>
        <p className="text-[16px] font-bold text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
        </p>
        <button className="w-[100px] h-[30px] rounded-md hover:text-accent bg-black text-white text-center ">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
