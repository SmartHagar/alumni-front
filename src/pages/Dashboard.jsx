/** @format */

import React, { useEffect } from "react";
import Benner from "../components/Benner";

import Header from "../components/header/Header";
import useSlide from "../stores/slide";

import CarouselComp from "../components/carousell/CarouselComp"

const Dashboard = () => {
  const {arrData, setSlide} = useSlide()

  useEffect(()=>{
    setSlide()
  },[])

  return (
    <div>
      <Header />
      <Benner />
     <CarouselComp gambar={arrData}/>
    </div>
  );
};

export default Dashboard;
