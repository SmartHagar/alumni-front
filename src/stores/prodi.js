/** @format */

import create from "zustand";
import { devtools } from "zustand/middleware";
import useUrl from "../services/base_url";

// eslint-disable-next-line react-hooks/rules-of-hooks
const { api } = useUrl();

const useProdi = create(
  devtools((set, get) => ({
    dataProdi: [],
    setProdi: async () => {
      //   const getToken = JSON.parse(localStorage.getItem("token"));
      try {
        const res = await api({
          method: "get",
          url: `/prodi`,
          //   headers: { Authorization: `Bearer ${getToken}` },
        });
        set((state) => ({ ...state, dataProdi: res.data }));
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

export default useProdi;
