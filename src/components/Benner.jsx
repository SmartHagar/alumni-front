/** @format */

import React from "react";
import Typed from "react-typed";

const Benner = () => {
  return (
    <section className="relative pb-10 pt-20 md:pt-32 lg:h-[88vh]">
      <picture className="pointer-events-none absolute inset-x-0 top-0 w-screen -z-10 dark:hidden">
        <img src={require("../assets/img/gradient.jpg")} alt="gradient" />
      </picture>
      <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 hidden dark:block">
        <img
          src={require("../assets/img/gradient_dark.jpg")}
          alt="gradient dark"
        />
      </picture>

      <div className="container h-full">
        <div className="grid h-full items-center gap-4 md:grid-cols-12">
          <div className="col-span-6 flex h-full flex-col items-center justify-center py-10 md:items-start md:py-20 xl:col-span-4">
            <div className="ml-8">
              <h1 className="font-face-Vhiena-Regular text-4xl mb-4 text-center dark:text-white">
                Selamat datang di website
              </h1>
              <p className="font-face-Vhiena-Solid-Shadow text-6xl mb-8 text-center">
                <Typed
                  strings={["Alumni Universitas Ottow Geissler Papua"]}
                  typeSpeed={150}
                  backSpeed={100}
                  loop
                />
              </p>
            </div>
            {/* <div className="flex space-x-4">
              <a
                href="create.html"
                className="bg-accent shadow-accent-volume hover:bg-accent-dark w-36 rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
              >
                Upload
              </a>
              <a
                href="collections.html"
                className="text-accent shadow-white-volume hover:bg-accent-dark hover:shadow-accent-volume w-36 rounded-full bg-white py-3 px-8 text-center font-semibold transition-all hover:text-white"
              >
                Explore
              </a>
            </div> */}
          </div>

          {/* <!-- Hero image --> */}
          <div className="col-span-6 xl:col-span-7">
            <div className="relative text-center md:pl-8 md:text-right">
              <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-8 inline-block w-72 rotate-[8deg] sm:w-full lg:w-[24rem] xl:w-[35rem]"
              >
                <defs>
                  <clipPath id="clipping" clipPathUnits="userSpaceOnUse">
                    <path
                      d="
                    M 0, 100
                    C 0, 17.000000000000004 17.000000000000004, 0 100, 0
                    S 200, 17.000000000000004 200, 100
                        183, 200 100, 200
                        0, 183 0, 100
                "
                      fill="#9446ED"
                    ></path>
                  </clipPath>
                </defs>
                <g clipPath="url(#clipping)">
                  {/* <!-- Bg image --> */}
                  <image
                    href={require("../assets/img/hero/logo-alumni.jpeg")}
                    width="200"
                    height="200"
                    clipPath="url(#clipping)"
                  />
                </g>
              </svg>
              <img
                src={require("../assets/img/hero/3D_elements.png")}
                alt=""
                className="animate-fly absolute top-0 md:-right-[10%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benner;
