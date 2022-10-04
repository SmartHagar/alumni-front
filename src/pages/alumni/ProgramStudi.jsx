/** @format */

import React, { useContext, useEffect } from "react";
import AlumniCard from "../../components/card/AlumniCard";
import Paginate from "../../components/paginate/Paginate";

const ProgramStudi = () => {
  return (
    <div>
      <AlumniCard />
      <Paginate />
    </div>
  );
};

export default ProgramStudi;
