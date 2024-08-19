import Image from "next/image";
import React from "react";
import FeatureCard from "./FeatureCard";

const Feature = () => {
  const data = [
    {
      name: "Lipsticks",
      img: "/lipstics.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      name: "Lipsticks",
      img: "/lipstics.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      name: "Lipsticks",
      img: "/lipstics.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];
  return (
    <div className="container pt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 lg:grid-cols-3">
        {data.map((item) => (
          <FeatureCard
            key={item.name}
            name={item.name}
            img={item.img}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Feature;
