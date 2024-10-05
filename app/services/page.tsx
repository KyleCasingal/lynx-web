import React from "react";

export default function services() {
  return (
    <main className="bg-white">
      <div className=" m-0 bg-white grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col row-start-2 items-start sm:items-start">
          <div className="bg-white flex content-start">
            <div className="flex content-start max-w-7xl sm:px-6 lg:px-8 ">
              <div className="relative isolate overflow-hidden px-6 pt-0 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-0 lg:flex lg:gap-x-0 lg:px-24 lg:pt-0">
                <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                    SERVICES
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-black">
                    Navigating the TNVS requirements can be overwhelming, but we
                    are here to make it easy for you. Let us handle the
                    paperwork while you focus on driving. Start your TNVS
                    application today!
                  </p>
                  <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                    <a
                      href="#"
                      className="rounded-md bg-gray-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      View services
                    </a>
                    <a
                      href="#"
                      className="text-sm font-semibold leading-6 text-black"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </main>
  );
}
