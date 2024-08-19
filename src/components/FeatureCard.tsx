import Image from "next/image";
import React from "react";

interface featuretype {
  name: string;
  img: string;
  desc: string;
}

const FeatureCard = ({ name, img, desc }: featuretype) => {
  return (
    <div className="flex gap-6">
      <Image
        className="h-[50px] w-auto"
        src={img}
        alt={name}
        width={60}
        height={50}
      />
      <div className="">
        <h1 className="font-medium text-xl uppercase">{name}</h1>
        <p className=" text-gray-500 text-[14px]">{desc}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
