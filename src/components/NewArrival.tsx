import React, { useEffect, useState } from "react";
import { Whisper } from "next/font/google";
import { Data } from "@/utils/ProductData";
import Image from "next/image";
import ProductCard from "./ProductCard";

const whisper = Whisper({ subsets: ["latin"], weight: "400" });

const NewArrival = () => {
  const [data, setdata] = useState<any>([]);
  const [selecteddata, setSelectedData] = useState<any>();
  const shuffleArray = (array: any) => {
    array
      .map((value: any) => ({ value, sort: Math.random() }))
      .sort((a: any, b: any) => a.sort - b.sort)
      .map(({ value }: any) => value);
  };
  useEffect(() => {
    setdata(shuffleArray(Data));
  }, []);
  const tabsData = ["All", "Lipsticks", "Perfume"];

  const handletab = (index: number) => {
    console.log(index);
    const category = tabsData[index].toLowerCase();
    console.log(category);
    setSelectedData(index);

    if (category === "all") {
      setdata(shuffleArray(Data)).slice(0, 8);
      return;
    }

    const filteredData = Data.filter((item) =>
      item.category.includes(category)
    );
    setdata(shuffleArray(filteredData));
  };

  return (
    <div className="container pt-32">
      <div className="text-center">
        <h3>
          <span className="text-accent font-semibold">New</span> Arrivals
        </h3>

        <div className="flex justify-center gap-3 mt-3">
          {tabsData.map((item, index) => (
            <button
              key={index}
              onClick={() => handletab(index)}
              className={`text-[14px] hover:text-accent ${
                selecteddata === index ? "text-accent" : ""
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {Data.map((item: any, index: number) => (
          <ProductCard
            key={index}
            name={item.name}
            img={item.img}
            price={item.price}
            desc={item.desc}
            id={item.id}
            category={item.category}
            sale={item.sale}
          />
        ))}
      </div>
    </div>
  );
};

export default NewArrival;
