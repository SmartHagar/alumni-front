/** @format */

import React, { useContext } from "react";
import { AlumniContext } from "../../pages/alumni/Alumni";
import useUrl from "../../services/base_url";

const AlumniCard = () => {
  const { responses, setModal } = useContext(AlumniContext);

  const { BASE_URL } = useUrl();
  return (
    <div>
      {responses.data && (
        <div>
          {responses.data.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:gap-6 gap-3">
              {responses.data.map((row, index) => (
                <div
                  onClick={() => setModal(true, row)}
                  key={index}
                  className="cursor-pointer max-w-sm overflow-auto rounded-lg border border-gray-200 shadow-md dark:border-gray-700"
                >
                  <div>
                    <img
                      className="rounded-t-lg"
                      src={`${BASE_URL}/${row.foto}`}
                      alt=""
                    />
                  </div>
                  <div className="p-5">
                    <div>
                      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {row.nm_alumni}
                      </h5>
                    </div>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {row.nm_kampus}
                    </p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {row.prodi.fakultas.kd_fakultas} - {row.prodi.kd_prodi}
                    </p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {row.no_hp}
                    </p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {row.status_kerja}
                    </p>
                    <div
                      onClick={() => setModal(true, row)}
                      className="cursor-pointer inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <h1 className="text-center mt-32 font-face-Poppins-Bold text-pink-700">
              Tidak ada data alumni
            </h1>
          )}
        </div>
      )}
    </div>
  );
};

export default AlumniCard;
