import Link from "next/link";
import Image from "next/image";
import React from "react";
import logo from "../img/LB2.png";

export default function Footer() {
  const navigation = [
    { href: "/services", key: "services", label: "Services" },
    { href: "/location", key: "location", label: "Location" },
    { href: "/about", key: "about", label: "About Us" },
    { href: "/lynxpro", key: "lynxprotect", label: "LYNX PROTECT" },
  ];


  const legal = ["Terms", "Privacy", "Legal"];
  return (
    <div className=" bottom-0 bg-white p-5">
      <div>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div>
              {" "}
              <Link
                href="/"
                className="flex items-center space-x-2 text-2xl font-medium text-black dark:text-black"
              >
                <Image src={logo} alt="N" className="w-auto h-20 " />
              </Link>
            </div>

            <div className="max-w-md mt-4 text-black">
              We make the TNVS application process simple and stress-free. From
              paperwork to compliance, our experts handle everything, so you can
              get on the road faster.
            </div>
          </div>

          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {navigation.map((link) => (
                <Link
                  key={link.key}
                  href={link.href}
                  className="w-full px-4 py-2 text-black rounded-md dark:text-black hover:text-indigo-500 focus:text-indigo-500 "
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {legal.map((item, index) => (
                <Link
                  key={index}
                  href="/"
                  className="w-full px-4 py-2 text-black rounded-md dark:text-black hover:text-indigo-500 focus:text-indigo-500 "
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div className="">
            <div className="text-black">Follow us</div>
            <div className="flex flex-row  mt-5 space-x-5 text-black dark:text-black">
              <a
                href="https://www.facebook.com/profile.php?id=61561137403473"
                target="_blank"
                rel="noopener"
              >
                <Facebook />
              </a>
              <span className="">Lynx Bridge Solutions</span>
            </div>
            <div className="flex flex-row  mt-5 space-x-5 text-black dark:text-black">
              <a
                href="https://www.facebook.com/profile.php?id=61566535352829"
                target="_blank"
                rel="noopener"
              >
                <Facebook />
              </a>
              <span className="">LYNX PROTECT</span>
            </div>
          </div>
        </div>

        <div className="my-10 text-sm text-center text-black dark:text-black">
          Copyright © {new Date().getFullYear()}. Lynx Bridge Solutions Inc.{" "}
        </div>
      </div>

      {/* Do not remove this */}
    </div>
  );
}


const Facebook = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07" />
  </svg>
);



