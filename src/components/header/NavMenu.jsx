/** @format */

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const NavMenu = () => {
  const links = [
    {
      name: "Home",
      submenu: false,
      link: "/home",
    },
    {
      name: "Kegiatan",
      submenu: false,
      link: "/kegiatan",
    },
    {
      name: "Galeri",
      submenu: false,
      link: "/galeri",
    },
    {
      name: "Alumni",
      submenu: true,
      sublink: [
        {
          head: "Keseluruhan",
          link: "/",
          haveSub: false,
        },
        {
          head: "FE",
          link: "/",
          haveSub: true,
          sublink: [
            { name: "Akuntansi", link: "/" },
            { name: "Ekonomi", link: "/" },
            { name: "Manajemen", link: "/" },
          ],
        },
        {
          head: "FPKK",
          link: "/",
          haveSub: true,
          sublink: [
            { name: "Agribisnis", link: "/" },
            { name: "Agroekoteknologi", link: "/" },
            { name: "Kehutanan", link: "/" },
            { name: "Manajemen Sumber Daya Perairan", link: "/" },
          ],
        },
        {
          head: "FST",
          link: "/",
          haveSub: true,
          sublink: [
            { name: "Biologi ", link: "/" },
            { name: "Geologi ", link: "/" },
            { name: "Sistem Informasi ", link: "/" },
          ],
        },
      ],
    },
    {
      name: "Struktur Organisasi",
      submenu: false,
      link: "/struktur-organisasi",
    },
    {
      name: "Tentang Kami",
      submenu: false,
      link: "/tentang-kami",
    },
  ];

  document.addEventListener("click", function (event) {
    // If user clicks inside the element, do nothing
    if (event.target.closest(".myNav")) return;
    // If user clicks outside the element, hide it!
    setHeading("");
  });

  const [heading, setHeading] = useState("");
  return (
    <nav className="navbar w-full">
      <div className="lg:flex font-face-Poppins-SemiBold dark:text-gray-300">
        {links.map((link, index) => (
          <div key={index} className="relative group ml-6 lg:ml-0">
            {link.submenu ? (
              // jika ada sub link
              <Link
                className="myNav my-2 lg:px-5 cursor-pointer hover:text-pink-700"
                to={link.link}
                onClick={() => {
                  heading !== link.name
                    ? setHeading(link.name)
                    : setHeading("");
                }}
              >
                {link.name}
              </Link>
            ) : (
              <NavLink
                className="myNav my-2 lg:px-5 cursor-pointer hover:text-pink-700"
                to={link.link}
              >
                {link.name}
              </NavLink>
            )}
            {/* <h1
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
              }}
            ></h1> */}
            {link.submenu && (
              <div
                className={`${
                  heading === link.name ? "block" : "hidden"
                } lg:absolute lg:py-4 lg:px-2 lg:shadow-2xl lg:w-96 lg:bg-white lg:rounded-lg dark:bg-my-dark`}
              >
                <div className="lg:grid lg:grid-cols-2 lg:gap-2">
                  {link.sublink.map((sbl, index) => (
                    <div key={index} className="ml-2">
                      <h2 className="cursor-pointer font-display hover:text-pink-700">
                        {sbl.head}
                      </h2>
                      {sbl.haveSub &&
                        sbl.sublink.map((lsbl, index) => (
                          <div key={index}>
                            <h3 className="ml-2 cursor-pointer font-face-Poppins-Regular hover:text-pink-700">
                              {lsbl.name}
                            </h3>
                          </div>
                        ))}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default NavMenu;
