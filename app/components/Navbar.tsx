"use client";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import React from "react";
import logo from "../img/LB2.png";

export const Navbar = () => {
  const navigation = ["Service", "Product", "Location", "About", "LYNX PROTECT"];

  return (
    <div className=" m-0 w-full bg-white p-2">
      <nav className="m-0 sticky flex items-center justify-between lg:justify-between xl:px-1">
        {/* Logo  */}
        <Link href="/">
          <span className="m-0 flex items-center text-2xl font-medium text-black dark:text-gray-100">
            <span>
              <Image src={logo} alt="N" className="w-auto h-20 " />
            </span>
          </span>
        </Link>

        {/* menu  */}
        <div className=" ">
          <ul className="flex">
            {navigation.map((menu, index) => (
              <li className="m-0 nav__item" key={index}>
                <Link
                  href="/"
                  className=" px-4 py-2 text-lg font-normal justify-end text-black no-underline rounded-md dark:text-black hover:text-indigo-500 focus:text-indigo-500 "
                >
                  {menu}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};
