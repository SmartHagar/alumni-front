/** @format */

import React, { useEffect, useState } from "react";
import BgPage from "../../components/BgPage";
import Header from "../../components/header/Header";
import {
  AiOutlineClose,
  AiFillLeftCircle,
  AiFillRightCircle,
} from "react-icons/ai";

import "./style.css";
import useGaleri from "../../stores/galeri";
import useUrl from "../../services/base_url";

const Galeri = () => {
  const { setGaleri } = useGaleri();
  const { BASE_URL } = useUrl();

  const [model, setModel] = useState(false);
  const [tmpImg, setTmpImg] = useState(null);
  const [index, setIndex] = useState();
  const [list, setList] = useState(null);

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

  useEffect(() => {
    const fetch = async () => {
      const data = await setGaleri();
      setList(data.data);
    };

    fetch();
  }, []);

  const showImages = () => {
    return (
      <div>
        {/* judul */}
        <div className="">
          <h1 className="text-center font-face-pd text-2xl mb-3 dark:text-gray-100">
            Galeri Alumni
          </h1>
        </div>
        {console.log(list)}
        {/* card */}
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
                        src={`${BASE_URL}/${row.foto}`}
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
                    <img src={`${BASE_URL}/${tmpImg[index].foto}`} alt="" />
                    <h4 className="text-center font-face-Poppins-Bold text-black text-lg -mt-3">
                      {tmpImg[index].nm_alumni}
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
