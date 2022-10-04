/** @format */

import React, { useContext, useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { GrafikContext } from "../../../context/GrafikContext";

const PerKabupaten = () => {
  const { dataGrafikKabupaten } = useContext(GrafikContext);
  // apexcharts
  const [options, setOptions] = useState("");
  const [series, setSeries] = useState("");
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const categories = [];
    const data = [];
    await dataGrafikKabupaten.map((row) => {
      categories.push(row.nm_kabupaten);
      data.push(row.jumlah);
    });
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
          borderRadius: 10,
          dataLabels: {
            position: "center",
            style: {
              fontSize: "12px",
              fontWeight: "bold",
              colors: ["#ffffff"],
            },
          },
        },
      },
      theme: {
        palette: "palette2", // upto palette10
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
  }, [dataGrafikKabupaten]);

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

export default PerKabupaten;
