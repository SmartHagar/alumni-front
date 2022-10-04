/** @format */

import React, { useEffect } from "react";
import Benner from "../components/Benner";

import Header from "../components/header/Header";
import useSlide from "../stores/slide";

import CarouselComp from "../components/carousell/CarouselComp";
import PerKabupaten from "../components/grafik/alumni/PerKabupaten";
import useGrafik from "../stores/grafik";
import { GrafikContext } from "../context/GrafikContext";
import PerDistrik from "../components/grafik/alumni/PerDistrik";

const Dashboard = () => {
  const { arrData, setSlide } = useSlide();
  const {
    setGrafikKabupaten,
    dataGrafikKabupaten,
    setGrafikKecamatan,
    dataGrafikKecamatan,
  } = useGrafik();

  useEffect(() => {
    setSlide();
  }, []);

  useEffect(() => {
    setGrafikKabupaten();
    setGrafikKecamatan();
  }, []);

  return (
    <div>
      <Header />
      <Benner />
      <CarouselComp gambar={arrData} />
      {/* grafik */}
      <GrafikContext.Provider
        value={{ dataGrafikKabupaten, dataGrafikKecamatan }}
      >
        <div className="my-0">
          {/* grafik kabupatan */}
          <div>
            <h1 className="text-center md:text-xl text-lg font-face-Poppins-Bold">
              Grafik Alumni Berdasarkan Kabupaten / Kota
            </h1>
            <PerKabupaten />
          </div>
          {/* grafik kabupatan */}
          <div>
            <h1 className="text-center md:text-xl text-lg font-face-Poppins-Bold">
              Grafik Alumni Berdasarkan Kecamatan / Distrik
            </h1>
            <PerDistrik />
          </div>
        </div>
      </GrafikContext.Provider>
    </div>
  );
};

export default Dashboard;
