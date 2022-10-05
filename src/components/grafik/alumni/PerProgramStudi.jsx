/** @format */

import React, { useContext, useEffect, useState } from "react";
import { GrafikContext } from "../../../context/GrafikContext";
import Chart from "react-apexcharts";

const PerProgramStudi = () => {
  const { dataGrafikProdi } = useContext(GrafikContext);
  // apexcharts
  const [options, setOptions] = useState("");
  const [series, setSeries] = useState("");
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const categories = [];
    const data = [];
    await dataGrafikProdi.map((row) => {
      categories.push(row.nm_prodi);
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
        palette: "palette5", // upto palette10
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
  }, [dataGrafikProdi]);

  return (
    <div className="">
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

export default PerProgramStudi;
