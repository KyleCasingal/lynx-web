"use client"

import React from 'react'
import FirebaseConfig from "../../firebase.js";
import { ref, set, get, update, remove, child } from "firebase/database";
import { useState } from 'react';
import LPlogo from "../../img/LP.png";
import Image from 'next/image.js';

export default function Quotation() {
     let [name, setName] = useState("");
     let [brand, setBrand] = useState("");
     let [model, setModel] = useState("");
     let [year, setYear] = useState("");
  let [transmission, setTransmission] = useState("");
  

    return (
      <div>
        
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <Image src={LPlogo} alt="N" className="mx-auto h-16 w-auto" />

              <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                Get a Quote now!
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" >
                <div>
                  <label
                    htmlFor="fname"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Full Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="fullname"
                      name="fullname"
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                      required
                      autoComplete="text"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="lname"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Brand of vehicle
                  </label>
                  <div className="mt-2">
                    <input
                      id="brand"
                      name="brand"
                      type="text"
                      onChange={(e) => setBrand(e.target.value)}
                      required
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Model
                  </label>
                  <div className="mt-2">
                    <input
                      id="model"
                      name="model"
                      type="text"
                      onChange={(e) => setModel(e.target.value)}
                      required
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Year
                    </label>
                  </div>

                  <div className="mt-2">
                    <input
                      id="year"
                      name="year"
                      type="text"
                      onChange={(e) => setYear(e.target.value)}
                      required
                      autoComplete="current-password"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                {/* <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Confirm password
                </label>
              </div>

              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
            </div> */}

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-gray-800 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Request Quote
                  </button>
                </div>
              </form>

              {/* <p className="mt-10 text-center text-sm/6 text-gray-500">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="font-semibold text-black hover:text-indigo-500"
                >
                  Log in
                </a>
              </p> */}
            </div>
          </div>
      </div>
    );
}
