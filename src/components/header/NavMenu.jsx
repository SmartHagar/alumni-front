/** @format */

import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useFakultas from "../../stores/fakultas";

const NavMenu = () => {
  const { setFakultas } = useFakultas();
  const [links, setLinks] = useState();

  const menu = async () => {
    const data = await setFakultas();

    const menuAlumni = [
      {
        head: "Keseluruhan",
        link: "/alumni/keseluruhan",
        haveSub: false,
      },
    ];
    // add data MenuAlumni
    data.data.map((row) =>
      menuAlumni.push({
        head: row.kd_fakultas,
        link: `/alumni/fakultas/${row.id}`,
        haveSub: true,
        sublink: row.prodi.map((item) => ({
          name: item.nm_prodi,
          link: `/alumni/prodi/${item.id}`,
        })),
      })
    );

    setLinks([
      {
        name: "Home",
        submenu: false,
        link: "/home",
      },
      {
        name: "Kegiatan",
        submenu: false,
        link: "/kegiatan/daftar",
      },
      {
        name: "Galeri",
        submenu: false,
        link: "/galeri",
      },
      {
        name: "Alumni",
        submenu: true,
        sublink: menuAlumni,
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
    ]);
  };

  useEffect(() => {
    menu();
  }, []);

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
        {links &&
          links.map((link, index) => (
            <div key={index} className="relative group ml-6 lg:ml-0">
              {link.submenu ? (
                // jika ada sub link
                <Link
                  className="myNav my-2 lg:px-5 cursor-pointer hover:text-pink-700"
                  to="#"
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

              {link.submenu && (
                <div
                  className={`${
                    heading === link.name ? "block" : "hidden"
                  } lg:absolute lg:py-4 lg:px-2 lg:shadow-2xl lg:w-96 lg:bg-white lg:rounded-lg dark:bg-my-dark`}
                >
                  <div className="lg:grid lg:grid-cols-2 lg:gap-2">
                    {link.sublink.map((sbl, index) => (
                      <div key={index} className="ml-2">
                        {sbl.haveSub ? (
                          <div className="font-display">{sbl.head}</div>
                        ) : (
                          <NavLink
                            className="cursor-pointer font-display hover:text-pink-700"
                            to={sbl.link}
                          >
                            {sbl.head}
                          </NavLink>
                        )}
                        {sbl.haveSub && (
                          <ul>
                            {sbl.sublink.map((lsbl, index) => (
                              <NavLink
                                key={index}
                                className="cursor-pointer font-face-Poppins-Regular hover:text-pink-700"
                                to={lsbl.link}
                              >
                                <li className="ml-2 mb-2">{lsbl.name}</li>
                              </NavLink>
                            ))}
                          </ul>
                        )}
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
