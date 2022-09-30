/** @format */

import React from "react";
import BgPage from "../components/BgPage";
import Header from "../components/header/Header";

const StrukturOrganisasi = () => {
  return (
    <div>
      <Header />
      <BgPage>
        {/* judul */}
        <div className="mb-5">
          <h1 className="text-center font-face-pd text-2xl">
            Struktur Organisasi
          </h1>
        </div>
      </BgPage>
    </div>
  );
};

export default StrukturOrganisasi;
