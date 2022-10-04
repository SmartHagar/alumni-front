/** @format */

import create from "zustand";
import { devtools } from "zustand/middleware";
import useUrl from "../services/base_url";

// eslint-disable-next-line react-hooks/rules-of-hooks
const { api } = useUrl();

const useAlumni = create(
  devtools((set, get) => ({
    responses: {},
    dataAlumni: [],
    setAlumni: async (show = 10, page = 1, prodi_id, nm_alumni = "") => {
      //   const getToken = JSON.parse(localStorage.getItem("token"));
      try {
        const res = await api({
          method: "get",
          url: `/alumni`,
          //   headers: { Authorization: `Bearer ${getToken}` },
          params: {
            show,
            page,
            nm_alumni,
            prodi_id,
          },
        });
        set((state) => ({ ...state, responses: res.data }));
        set((state) => ({ ...state, dataAlumni: res.data.data }));
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

export default useAlumni;
