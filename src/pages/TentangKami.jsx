/** @format */

import React from "react";
import BgPage from "../components/BgPage";
import Header from "../components/header/Header";

const TentangKami = () => {
  return (
    <div>
      <Header />
      <BgPage>
        {/* judul */}
        {/* <div className="mb-5">
          <h1 className="text-center font-face-pd text-2xl dark:text-gray-100">
            Tentang Kami
          </h1>
        </div> */}
        <div>
          <h2 className="text-center font-face-cft text-2xl font-bold">
            KELUARGA ALUMNI
          </h2>
          <h2 className="text-center font-face-cft text-2xl font-bold">
            UNIVERSITAS OTTOW & GEISSLER
          </h2>
          <h2 className="text-center font-face-cft text-2xl font-bold">
            KAOGES - JAYAPURA
          </h2>
          <h5 className="text-center font-face-cft text-xl font-bold">
            Jln. Perkutut Kotaraja Dalam
          </h5>
        </div>
        {/* maps */}
        <div className="mb-10 pb-14">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2092.0796918252513!2d140.66802857318302!3d-2.591112088508144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sid!2sid!4v1664930902467!5m2!1sid!2sid"
            width="100%"
            height="500"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen="true"
            aria-hidden="false"
            tabIndex="0"
            title="peta-sekreatariat"
          />
        </div>
      </BgPage>
    </div>
  );
};

export default TentangKami;
