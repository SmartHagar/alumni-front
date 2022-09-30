/** @format */

import React from "react";

const BgPage = ({ children }) => {
  return (
    <section className="relative pb-10 pt-24 md:pt-24 lg:h-[88vh] lg:px-24 sm:px-5 px-2">
      <picture className="pointer-events-none absolute inset-x-0 top-0 w-screen -z-10 dark:hidden">
        <img src={require("../assets/img/gradient.jpg")} alt="gradient" />
      </picture>
      <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 hidden dark:block">
        <img
          src={require("../assets/img/gradient_dark.jpg")}
          alt="gradient dark"
        />
      </picture>
      {children}
    </section>
  );
};

export default BgPage;
