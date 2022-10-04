/** @format */

import React, { createContext, useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import BgPage from "../../components/BgPage";
import Header from "../../components/header/Header";
import ModalComp from "../../components/ModalComp";
import useAlumni from "../../stores/alumni";
import useProdi from "../../stores/prodi";

export const AlumniContext = createContext([]);

const Alumni = () => {
  const { setAlumni, responses } = useAlumni();
  const { id } = useParams();

  // state
  const [show, setShow] = useState(12);
  const [page, setPage] = useState(1);
  const [nm_alumni, setNm_alumni] = useState("");
  const [onClose, setOnClose] = useState(false);
  const [rowData, setRowData] = useState({});

  useEffect(() => {
    setAlumni(show, page, id, nm_alumni);
  }, [page, show, id]);

  // get data prodi
  const { setProdi, dataProdi } = useProdi();
  useEffect(() => {
    setProdi();
  }, []);

  const showProdi = () => {
    if (dataProdi.length > 0) {
      const filter = dataProdi.filter((item) => item.id === parseInt(id));
      return filter[0].nm_prodi;
    }
  };

  const cariData = (e) => {
    const nama = e.target.value;
    setNm_alumni(nama);
    setPage(1);
    setAlumni(show, 1, id, nama);
  };

  const setModal = (e, row = "") => {
    setOnClose(e);
    setRowData(row);
  };

  return (
    <AlumniContext.Provider
      value={{ responses, setPage, id, setModal, onClose, rowData }}
    >
      <div>
        <Header />
        <BgPage>
          {/* header */}
          <div className="mb-5">
            {/* judul */}
            <div>
              <h1 className="text-center font-face-pd text-2xl dark:text-white">
                Daftar Alumni
              </h1>
            </div>
            {/* keterangan prodi */}
            {id && (
              <div>
                <h1 className="font-face-pd text-center text-xl dark:text-white">
                  Program Studi {showProdi()}
                </h1>
              </div>
            )}
            {/* pencarian data alumni */}
            <div className="mt-2">
              <label htmlFor="simple-search" className="sr-only">
                Search
              </label>
              <div className="relative w-full">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-transparent border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-1.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Masukan Nama Alumni"
                  onChange={(e) => cariData(e)}
                />
              </div>
            </div>
          </div>

          <Outlet />
        </BgPage>
        <ModalComp />
      </div>
    </AlumniContext.Provider>
  );
};

export default Alumni;
