/** @format */

import React from "react";
import { Outlet } from "react-router-dom";
import BgPage from "../../components/BgPage";
import Header from "../../components/header/Header";

const Kegiatan = () => {
  return (
    <div>
      <Header />
      <BgPage>
        <Outlet />
      </BgPage>
    </div>
  );
};

export default Kegiatan;
