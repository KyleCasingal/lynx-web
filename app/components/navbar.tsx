"use client";
import Link from "next/link";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import logofull from "../img/LB2.png"
import React from "react";

export default function Navbar() {
  
const navigation = [
  { href: "/services", key: "services", label: "Services" },
  { href: "/location", key: "location", label: "Location" },
  { href: "/about", key: "about", label: "About Us" },
  { href: "/lynxprotect", key: "lynxprotect", label: "LYNX PROTECT" },
];

  return (
    <div className="w-full sticky top-0  bg-white backdrop-blur-sm z-50">
      <nav className="bg-gray container relative flex flex-wrap items-center justify-between p-3 mx-auto lg:justify-between xl:px-1">
        {/* Logo  */}
        <Link href="/">
          <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
            <span>
              <Image src={logofull} alt="N" className="h-16 w-auto" />
            </span>
          </span>
        </Link>

        {/* get started  */}
        <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
          <div className="hidden mr-3 lg:flex nav__item">
            <Link
              href="/Register"
              className="px-6 py-2 text-white bg-gray-800 rounded-md md:ml-5"
            >
              Get Started
            </Link>
            <Link
              href="/login"
              className="px-6 py-2 text-white bg-gray-800 rounded-md md:ml-5"
            >
              Log In
            </Link>
          </div>
        </div>

        <Disclosure>
          {({ open }: { open: any }) => (
            <>
              <Disclosure.Button
                aria-label="Toggle Menu"
                className="px-2 py-1 text-black rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
              >
                <svg
                  className="w-6 h-6 fill-slate-800"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  {open && (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
                  )}
                  {!open && (
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  )}
                </svg>
              </Disclosure.Button>

              <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                <>
                  {navigation.map((link) => (
                    <Link
                      key={link.key}
                      href={link.href}
                      className="w-full px-4 py-2 -ml-4 text-black rounded-md dark:text-black hover:text-indigo-500 focus:text-indigo-500 focus:outline-none"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link
                    href="/"
                    className="w-full px-6 py-2 mt-3 text-center text-white bg-gray-800 rounded-md lg:ml-5"
                  >
                    Get Started
                  </Link>
                  <Link
                    href="/"
                    className="w-full px-6 py-2 mt-3 text-center text-white bg-gray-800 rounded-md lg:ml-5"
                  >
                    Log In
                  </Link>
                </>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((link) => (
              <li className="mr-3 nav__item" key={link.key}>
                <Link
                  href={link.href}
                  className="inline-block px-4 py-2 text-lg font-normal text-black no-underline rounded-md dark:text-black hover:text-indigo-500 focus:text-indigo-500"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};
