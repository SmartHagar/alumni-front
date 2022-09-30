/** @format */

import React, { useState } from "react";
import BgPage from "../../components/BgPage";
import Header from "../../components/header/Header";
import {
  AiOutlineClose,
  AiFillLeftCircle,
  AiFillRightCircle,
} from "react-icons/ai";

import "./style.css";

const Galeri = () => {
  const list = [
    {
      judul: "Judul-1",
      penulis: "penulis-1",
      post_kegiatan: "post kegiatan-1",
      gambar:
        "https://images.unsplash.com/photo-1662581871665-f299ba8ace07?ixid=MnwzNDg0NDJ8MXwxfGFsbHwxfHx8fHx8Mnx8MTY2NDQ1NDc1MA&ixlib=rb-1.2.1",
    },
    {
      judul: "Judul-2",
      penulis: "penulis-2",
      post_kegiatan: "post kegiatan-2",
      gambar:
        "https://images.unsplash.com/photo-1664309570712-564c233f112b?ixid=MnwzNDg0NDJ8MHwxfGFsbHwyfHx8fHx8Mnx8MTY2NDQ1NDc1MA&ixlib=rb-1.2.1",
    },
    {
      judul: "Judul-3",
      penulis: "penulis-3",
      post_kegiatan: "post kegiatan-3",
      gambar:
        "https://images.unsplash.com/photo-1664393603138-a07aa623a582?ixid=MnwzNDg0NDJ8MHwxfGFsbHwzfHx8fHx8Mnx8MTY2NDQ1NDc1MA&ixlib=rb-1.2.1",
    },
    {
      judul: "Judul-4",
      penulis: "penulis-4",
      post_kegiatan: "post kegiatan-4",
      gambar:
        "https://images.unsplash.com/photo-1664411179124-4fb6413a3e1e?ixid=MnwzNDg0NDJ8MHwxfGFsbHw0fHx8fHx8Mnx8MTY2NDQ1NDc1MA&ixlib=rb-1.2.1",
    },
    {
      judul: "Judul-4",
      penulis: "penulis-4",
      post_kegiatan: "post kegiatan-4",
      gambar:
        "https://images.unsplash.com/photo-1664391026266-12aea2d987af?ixid=MnwzNDg0NDJ8MHwxfGFsbHw1fHx8fHx8Mnx8MTY2NDQ1NDc1MA&ixlib=rb-1.2.1",
    },
    {
      judul: "Judul-5",
      penulis: "penulis-5",
      post_kegiatan: "post kegiatan-5",
      gambar:
        "https://images.unsplash.com/photo-1657299142312-5e12a754ff0e?ixid=MnwzNDg0NDJ8MXwxfGFsbHw2fHx8fHx8Mnx8MTY2NDQ1NDc1MA&ixlib=rb-1.2.1",
    },
  ];

  const [model, setModel] = useState(false);
  const [tmpImg, setTmpImg] = useState(null);
  const [index, setIndex] = useState();

  const getImg = (image) => {
    setTmpImg(image);
    console.log(image);
    setModel(true);
  };

  const prevPicture = () => {
    setIndex(index - 1);
  };
  const nextPicture = () => {
    setIndex(index + 1);
  };

  const showImages = () => {
    return (
      <div>
        {/* judul */}
        <div className="">
          <h1 className="text-center font-face-pd text-2xl">Galeri Alumni</h1>
        </div>
        ;{/* card */}
        <section className="overflow-hidden text-gray-700 ">
          <div className="container px-5 py-2 mx-auto lg:px-32">
            <div className="flex flex-wrap -m-1 md:-m-2 justify-center">
              {list &&
                list.map((row, index) => (
                  <div
                    key={index}
                    className="flex flex-wrap w-4/5 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
                  >
                    <div className="w-full p-1 md:p-2">
                      <img
                        alt="gallery"
                        className="cursor-pointer block object-cover object-center w-full h-full rounded-lg"
                        src={row.gambar}
                        onClick={() => getImg(list, setIndex(index))}
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </div>
    );
  };

  return (
    <div>
      <Header />
      <BgPage>
        <div>
          <div className="flex flex-wrap justify-center">
            <div className={model ? "model open" : "model"}>
              {tmpImg && (
                <div>
                  <div className="h-144">
                    <img src={tmpImg[index].gambar} alt="" />
                    <h4 className="text-center font-face-Poppins-Regular text-pink-300 text-lg">
                      Nama
                    </h4>
                  </div>
                  <div id="close">
                    <AiOutlineClose onClick={() => setModel(false)} />
                  </div>
                  {index > 0 && (
                    <div id="fill-left">
                      <AiFillLeftCircle onClick={prevPicture} />
                    </div>
                  )}

                  {index + 1 < tmpImg.length && (
                    <div id="fill-right">
                      <AiFillRightCircle onClick={nextPicture} />
                    </div>
                  )}
                </div>
              )}
            </div>
            {showImages()}
          </div>
        </div>
      </BgPage>
    </div>
  );
};

export default Galeri;
