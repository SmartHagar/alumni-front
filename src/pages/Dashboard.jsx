/** @format */

import React, { useEffect, useState } from "react";
import Benner from "../components/Benner";

import Header from "../components/header/Header";
import useSlide from "../stores/slide";

import CarouselComp from "../components/carousell/CarouselComp";
import PerKabupaten from "../components/grafik/alumni/PerKabupaten";
import useGrafik from "../stores/grafik";
import { GrafikContext } from "../context/GrafikContext";
import PerDistrik from "../components/grafik/alumni/PerDistrik";

import Select from "react-select";
import useKab from "../stores/kabupaten";
import PerProgramStudi from "../components/grafik/alumni/PerProgramStudi";
import useFakultas from "../stores/fakultas";

const Dashboard = () => {
  const { arrData, setSlide } = useSlide();
  const {
    setGrafikKabupaten,
    dataGrafikKabupaten,
    setGrafikKecamatan,
    dataGrafikKecamatan,
    setGrafikProdi,
    dataGrafikProdi,
  } = useGrafik();

  useEffect(() => {
    setSlide();
  }, []);

  useEffect(() => {
    setGrafikKabupaten();
    setGrafikKecamatan();
    setGrafikProdi();
  }, []);

  // data kabupaten
  const { setKab, dataKab } = useKab();
  useEffect(() => {
    setKab();
  }, []);

  const pilihanKab = [{ value: "", label: "Pilih Kabupaten" }];
  dataKab.forEach((el) => {
    pilihanKab.push({ value: el.id, label: el.nm_kabupaten });
  });
  // Ketika memilih kabupaten
  const gantiKab = (e) => {
    setGrafikKecamatan(e.value);
  };

  // data fakults
  const { setFakultas, dataFakultas } = useFakultas();
  useEffect(() => {
    setFakultas();
  }, []);

  const pilihFak = [{ value: "", label: "Pilih Fakultas" }];
  dataFakultas.forEach((el) => {
    pilihFak.push({ value: el.id, label: el.nm_fakultas });
  });
  // Ketika memilih Fakultas
  const gantiFak = (e) => {
    setGrafikProdi(e.value);
  };

  return (
    <div>
      {/* {console.log(dataFakultas)} */}
      <Header />
      <Benner />
      <CarouselComp gambar={arrData} />
      {/* grafik */}
      <GrafikContext.Provider
        value={{ dataGrafikKabupaten, dataGrafikKecamatan, dataGrafikProdi }}
      >
        <div className="my-2">
          {/* grafik kabupatan */}
          <div className="my-10">
            <h1 className="text-center md:text-xl text-lg font-face-Poppins-Bold dark:text-gray-100">
              Grafik Alumni Berdasarkan Kabupaten / Kota
            </h1>
            <PerKabupaten />
          </div>
          {/* grafik kecamatan */}
          <div className="my-10">
            <h1 className="text-center md:text-xl text-lg font-face-Poppins-Bold dark:text-gray-100">
              Grafik Alumni Berdasarkan Kecamatan / Distrik
            </h1>
            {/* pilih kabupaten */}
            <div className="md:w-2/3 w-full m-auto mt-3">
              <Select
                options={pilihanKab}
                defaultValue={pilihanKab[0]}
                onChange={(e) => gantiKab(e)}
              />
            </div>
            <PerDistrik />
          </div>
          {/* grafik Prodi */}
          <div className="my-10">
            <h1 className="text-center md:text-xl text-lg font-face-Poppins-Bold dark:text-gray-100">
              Grafik Alumni Berdasarkan Program Studi
            </h1>
            {/* pilih prodi */}
            <div className="md:w-2/3 w-full m-auto mt-3">
              <Select
                options={pilihFak}
                defaultValue={pilihFak[0]}
                onChange={(e) => gantiFak(e)}
              />
            </div>
            <PerProgramStudi />
          </div>
        </div>
      </GrafikContext.Provider>
    </div>
  );
};

export default Dashboard;
