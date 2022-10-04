/** @format */

import React from "react";
import BgPage from "../components/BgPage";
import Header from "../components/header/Header";

const TentangKami = () => {
  return (
    <div>
      <Header />
      <BgPage>
        {/* judul */}
        <div className="mb-5">
          <h1 className="text-center font-face-pd text-2xl dark:text-gray-100">
            Tentang Kami
          </h1>
        </div>
      </BgPage>
    </div>
  );
};

export default TentangKami;
