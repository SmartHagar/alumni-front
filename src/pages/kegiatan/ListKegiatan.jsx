/** @format */

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useUrl from "../../services/base_url";
import useKegiatan from "../../stores/kegiatan";

const ListKegiatan = () => {
  const { arrData, setKegiatan } = useKegiatan();

  useEffect(() => {
    setKegiatan();
  }, []);

  const { BASE_URL } = useUrl();
  return (
    <div>
      {/* judul */}
      <div className="mb-5">
        <h1 className="text-center font-face-pd text-2xl">Kegiatan Alumni</h1>
      </div>
      {/* card */}
      <div className="kegiatan grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-content-center place-items-center md:place-items-end">
        {arrData &&
          arrData.map((row, index) => (
            <div
              key={index}
              className="max-w-sm mb-4 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
            >
              <Link to="detail" state={{ row, base_url: BASE_URL }}>
                <img
                  className="rounded-t-lg overflow-scroll"
                  src={`${BASE_URL}/${row.gambar}`}
                  alt=""
                />
              </Link>
              <div className="p-5">
                <Link to="detail" state={{ row, base_url: BASE_URL }}>
                  <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {row.judul}
                  </h2>
                </Link>
                <p
                  className="mb-3 font-normal text-gray-700 dark:text-gray-400"
                  dangerouslySetInnerHTML={{
                    __html: row.post_kegiatan.substring(0, 100) + "...",
                  }}
                >
                  {/* {row.post_kegiatan} */}
                </p>
                <Link
                  to="detail"
                  state={{ row, base_url: BASE_URL }}
                  className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Selengkapnya
                  <svg
                    aria-hidden="true"
                    className="ml-2 -mr-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ListKegiatan;
