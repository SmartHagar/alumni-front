/** @format */
import { Carousel } from "flowbite-react";
import React from "react";
import useUrl from "../../services/base_url";

const CarouselComp = ({ gambar }) => {
  const { BASE_URL } = useUrl();
  return (
    <section className="pb-6 xl:mt-40 w-screen">
      <div className="h-56 sm:h-64 lg:h-my-carousel lg:w-5/6 mx-auto">
        {gambar && (
          <Carousel slideInterval={5000}>
            {gambar.map((row, index) => (
              <img key={index} src={`${BASE_URL}/${row.foto}`} alt="..." />
            ))}
          </Carousel>
        )}
      </div>
    </section>
  );
};

export default CarouselComp;
