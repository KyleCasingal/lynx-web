import React from "react";

export default function Location() {
  return (
    <main className="bg-white">
      <div className=" m-0 bg-white grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-row  justify-between row-start-2 gap-10 items-start sm:items-start">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d482.73306510710904!2d121.18283475253685!3d14.54973901885538!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c1eacbaae5f7%3A0xd22d4121a5b5ca58!2sLynx%20Bridge%20Solution%20Inc.!5e0!3m2!1sen!2sph!4v1728100360003!5m2!1sen!2sph"
            width="800"
            height="600"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="flex flex-col items-start ">
            <div>
              <p className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Office location
              </p>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                JMC Building Unit D. DOMSA Highway Mahabang Parang, Angono Rizal
              </p>
            </div>
            <div className="mt-10">
              <p className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Office hours
              </p>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                Monday to Friday 9:00 am to 5:00 pm
              </p>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                Saturday 9:00 am to 3:00 pm
              </p>
            </div>
          </div>
        </main>
      </div>
    </main>
  );
}
