/** @format */

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./style.css";

const DetailKegiatan = () => {
  const location = useLocation();
  const state = location.state;
  const pathname = location.pathname;

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(state);
  }, [pathname]);

  return (
    <div className="kegiatan">
      {data.row && (
        <div>
          <h1 className="text-center mb-6">{data.row.judul}</h1>
          <img
            src={`${data.base_url}/${data.row.gambar}`}
            className="max-w-lg h-auto rounded-lg mx-auto"
            alt=""
          />
          <div
            className="my-6"
            dangerouslySetInnerHTML={{
              __html: data.row.post_kegiatan,
            }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default DetailKegiatan;
