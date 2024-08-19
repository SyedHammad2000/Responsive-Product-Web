"use client";
import React from "react";
import "primeicons/primeicons.css";
import { FaShoppingCart } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import { useSelector } from "react-redux";
import Cart from "./Cart";
const Navbar = ({ setshowcart }: any) => {
  const cartcount = useSelector((state: any) => state.cart.length);

  return (
    <div className="bg-white sticky py-4 z-10">
      <div className="container flex justify-between items-center">
        <RxHamburgerMenu className=" sm:hidden text-2xl" />
        <Link href={"/"} className="text-4xl font-semibold hover:text-accent">
          Logo
        </Link>
        <ul className="gap-6 hidden sm:flex">
          <li>
            <Link
              href={"/"}
              className="hover:text-accent transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={"/products"}
              className="hover:text-accent transition-colors duration-300"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              href={"/about"}
              className="hover:text-accent transition-colors duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href={"/contact"}
              className="hover:text-accent transition-colors duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="gap-6 flex text-[26px]">
          <div className="relative">
            <FaShoppingCart
              onClick={() => setshowcart(true)}
              className="cursor-pointer"
            />
            <Cart setshowcart={setshowcart} />
            <div
              className="
                absolute bg-red-600 w-5 h-5 rounded-full top-[-10px] right-[15px] text-center text-[10px] place-items-center grid"
            >
              {cartcount}
              {/* {1} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
