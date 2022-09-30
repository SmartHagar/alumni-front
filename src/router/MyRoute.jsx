/** @format */

import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Alumni from "../pages/alumni/Alumni";
import Dashboard from "../pages/Dashboard";
import Galeri from "../pages/galeri/Galeri";
import DetailKegiatan from "../pages/kegiatan/DetailKegiatan";
import Kegiatan from "../pages/kegiatan/Kegiatan";
import StrukturOrganisasi from "../pages/StrukturOrganisasi";
import TentangKami from "../pages/TentangKami";
import "./styel.css";

const MyRoute = () => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <Routes location={location} key={pathname}>
      <Route path="/" element={<Navigate to="home" replace />} />
      <Route path="home" index element={<Dashboard />} />
      <Route path="kegiatan" element={<Kegiatan />}>
        {/* <Route path="daftar" element={<DashboardMessages />} /> */}
        <Route path="detail" element={<DetailKegiatan />} />
      </Route>
      <Route path="galeri" element={<Galeri />} />
      <Route path="alumni" element={<Alumni />} />
      <Route path="struktur-organisasi" element={<StrukturOrganisasi />} />
      <Route path="tentang-kami" element={<TentangKami />} />
    </Routes>
  );
};

export default MyRoute;
