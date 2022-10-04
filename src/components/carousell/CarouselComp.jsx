/** @format */
import { Carousel } from "flowbite-react";
import React from "react";
import useUrl from "../../services/base_url";

const CarouselComp = ({ gambar }) => {
  const { BASE_URL } = useUrl();
  return (
    <section className="pb-6 xl:mt-40 w-screen">
      <div className="h-56 sm:h-64 md:h-80 lg:h-96 xl:h-my-carousel rounded-lg">
        {gambar && (
          <Carousel slideInterval={5000}>
            {gambar.map((row, index) => (
              <img
                key={index}
                src={`${BASE_URL}/${row.foto}`}
                className="object-contain h-56 sm:h-64 md:h-80 lg:h-96 xl:h-my-carousel rounded-lg"
                alt="..."
              />
            ))}
          </Carousel>
        )}
      </div>
    </section>
  );
};

export default CarouselComp;
