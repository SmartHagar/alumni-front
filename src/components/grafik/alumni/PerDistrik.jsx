/** @format */

import React, { useContext, useEffect, useState } from "react";
import { GrafikContext } from "../../../context/GrafikContext";
import Chart from "react-apexcharts";

const PerDistrik = () => {
  const { dataGrafikKecamatan } = useContext(GrafikContext);
  // apexcharts
  const [options, setOptions] = useState("");
  const [series, setSeries] = useState("");
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const categories = [];
    const data = [];
    await dataGrafikKecamatan.map((row) => {
      categories.push(row.nm_kecamatan);
      data.push(row.jumlah);
    });
    console.log(dataGrafikKecamatan);
    setOptions({
      chart: {
        height: 350,
        type: "bar",
        events: {
          click: function (chart, w, e) {
            // console.log(chart, w, e)
          },
        },
      },
      plotOptions: {
        bar: {
          columnWidth: "90%",
          distributed: true,
        },
      },
      theme: {
        palette: "palette2", // upto palette10
      },
      dataLabels: {
        enabled: true,
        style: {
          fontSize: "12px",
          fontWeight: "bold",
          colors: ["#696565"],
        },
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories,
        labels: {
          style: {
            colors: [""],
            fontSize: "12px",
          },
        },
      },
    });
    setSeries([
      {
        name: "Jumlah",
        data,
      },
    ]);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, [dataGrafikKecamatan]);

  return (
    <div className="w-144 md:w-full">
      <div>
        {!loading && (
          <Chart
            options={options}
            series={series}
            type="bar"
            width="100%"
            height="500"
          />
        )}
      </div>
    </div>
  );
};

export default PerDistrik;