/** @format */

import create from "zustand";
import { devtools } from "zustand/middleware";
import useUrl from "../services/base_url";

// eslint-disable-next-line react-hooks/rules-of-hooks
const { api } = useUrl();

const useGrafik = create(
  devtools((set, get) => ({
    dataGrafikKabupaten: [],
    dataGrafikKecamatan: [],
    setGrafikKabupaten: async () => {
      //   const getToken = JSON.parse(localStorage.getItem("token"));
      try {
        const res = await api({
          method: "get",
          url: `/grafikKabupaten`,
          //   headers: { Authorization: `Bearer ${getToken}` },
        });
        set((state) => ({ ...state, dataGrafikKabupaten: res.data }));
        return {
          status: "berhasil",
          data: res.data,
        };
      } catch (error) {
        return {
          status: "error",
          error: error.response.data,
        };
      }
    },
    setGrafikKecamatan: async (districts_id = "") => {
      //   const getToken = JSON.parse(localStorage.getItem("token"));
      try {
        const res = await api({
          method: "get",
          url: `/grafikKecamatan`,
          //   headers: { Authorization: `Bearer ${getToken}` },
          params: {
            districts_id,
          },
        });
        set((state) => ({ ...state, dataGrafikKecamatan: res.data }));
        return {
          status: "berhasil",
          data: res.data,
        };
      } catch (error) {
        return {
          status: "error",
          error: error.response.data,
        };
      }
    },
  }))
);

export default useGrafik;
