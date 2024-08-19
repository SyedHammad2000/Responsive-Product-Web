import { addtoCart } from "@/Redux/feature/cartSlice";
import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useDispatch } from "react-redux";

export interface Products {
  id: number;
  name: string;
  img: string;
  price: number;
  desc: string;
  category: Array<string>;
  sale: boolean;
}
const ProductCard = ({
  id,
  name,
  img,
  price,
  desc,
  category,
  sale,
}: Products) => {
  const dispatch = useDispatch();
  const getRating = () => {
    const Randomnumber = (min: number, max: number) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };

    switch (Randomnumber(0, 5)) {
      case 0:
        return (
          <div
            className="
                    flex justify-center text-accent pt-5 pb-10
                    "
          >
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );

        break;

      case 1:
        return (
          <div
            className="
                    flex justify-center text-accent pt-5 pb-10
                    "
          >
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );

        break;

      case 2:
        return (
          <div
            className="
                    flex justify-center text-accent pt-5 pb-10
                    "
          >
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );

        break;

      case 3:
        return (
          <div
            className="
                    flex justify-center text-accent pt-5 pb-10
                    "
          >
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
        break;

      case 4:
        return (
          <div
            className="
                    flex justify-center text-accent pt-5 pb-10
                    "
          >
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
        );
        break;
      case 5:
        return (
          <div
            className="
                            flex justify-center text-accent pt-5 pb-10
                            "
          >
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        );
        break;

      default:
        return <div></div>;
        break;
    }
  };

  const AddproducttoCart = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("add to cart");
    //& Add product to cart logic here

    const payload = {
      id,
      name,
      img,
      price,
      quantity: 1,
    };

    dispatch(addtoCart(payload));
  };

  return (
    <div>
      <div
        className="h-[250px] w-full bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${img})` }}
      ></div>

      <div className="p-3">
        <h1 className="text-xl font-semibold">{name}</h1>
        <p className="text-gray-500 text-[14px]">{desc}</p>
      </div>
      {getRating()}
      <div className="flex justify-between items-center p-3">
        <h1 className="text-xl font-semibold">${price}</h1>
        <button
          onClick={(e) => AddproducttoCart(e)}
          className="bg-accent text-white px-3 py-2 rounded-md"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
