/** @format */

import create from "zustand";
import { devtools } from "zustand/middleware";
import useUrl from "../services/base_url";

// eslint-disable-next-line react-hooks/rules-of-hooks
const { api } = useUrl();

const useFakultas = create(
  devtools((set, get) => ({
    responses: {},
    arrData: [],
    dataFakultas: [],
    setFakultas: async () => {
      //   const getToken = JSON.parse(localStorage.getItem("token"));
      try {
        const res = await api({
          method: "get",
          url: `/fakultas`,
          //   headers: { Authorization: `Bearer ${getToken}` },
        });
        set((state) => ({ ...state, responses: res }));
        set((state) => ({ ...state, arrData: res.data }));
        set((state) => ({ ...state, dataFakultas: res.data }));
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

export default useFakultas;
