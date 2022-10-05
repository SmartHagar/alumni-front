/** @format */

import { Button, Modal } from "flowbite-react";
import React, { useContext } from "react";
import { AlumniContext } from "../pages/alumni/Alumni";

const ModalComp = () => {
  const { setModal, onClose, rowData } = useContext(AlumniContext);
  const {
    nm_alumni,
    jenkel,
    nm_kampus,
    prodi,
    thn_masuk,
    thn_lulus,
    email,
    status_nikah,
    jmlh_anak,
    status_kerja,
    nm_pekerjaan,
    nm_instansi,
    jabatan,
    tempat,
    tgl_lahir,
    nm_pasangan,
    alamat_lengkap,
    alamat_kantor,
  } = rowData;
  // console.log(rowData);
  return (
    <>
      {prodi && (
        <Modal show={onClose} onClose={() => setModal(false)}>
          <Modal.Header>{nm_alumni}</Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
              <table className="font-face-Poppins-Regular text-lg">
                <tbody>
                  <tr>
                    <td className="">Tempat, Tgl. Lahir</td>
                    <td>:</td>
                    <td className="pl-2">
                      {tempat}, {tgl_lahir}
                    </td>
                  </tr>
                  <tr>
                    <td className="">Jenis Kelamin</td>
                    <td>:</td>
                    <td className="pl-2">{jenkel}</td>
                  </tr>
                  <tr>
                    <td className="align-top">Alamat</td>
                    <td className="align-top">:</td>
                    <td className="pl-2">{alamat_lengkap}</td>
                  </tr>
                  <tr>
                    <td className="">Kampus</td>
                    <td>:</td>
                    <td className="pl-2">{nm_kampus}</td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap align-top">
                      Fakultas - Prodi
                    </td>
                    <td className="align-top">:</td>
                    <td className="pl-2 align-top">
                      {prodi.fakultas.nm_fakultas} - {prodi.nm_prodi}
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap">Tahun Masuk - Keluar</td>
                    <td>:</td>
                    <td className="pl-2">
                      {thn_masuk} - {thn_lulus}
                    </td>
                  </tr>
                  <tr>
                    <td className="align-top">Email</td>
                    <td className="align-top">:</td>
                    <td className="pl-2">{email}</td>
                  </tr>
                  <tr>
                    <td className="">Status Nikah</td>
                    <td>:</td>
                    <td className="pl-2">{status_nikah}</td>
                  </tr>
                  {status_nikah === "Belum Menikah" ? (
                    ""
                  ) : (
                    <>
                      <tr>
                        <td className="">Nama Pasangan</td>
                        <td>:</td>
                        <td className="pl-2">{nm_pasangan}</td>
                      </tr>
                      <tr>
                        <td className="">Jumlah Anak</td>
                        <td>:</td>
                        <td className="pl-2">{jmlh_anak}</td>
                      </tr>
                    </>
                  )}
                  {/* periksa status pekerjaan */}
                  {status_kerja === "Belum Bekerja" ? (
                    ""
                  ) : (
                    <>
                      <tr>
                        <td className="align-top">Profesi</td>
                        <td className="align-top">:</td>
                        <td className="pl-2">{nm_pekerjaan}</td>
                      </tr>
                      <tr>
                        <td className="align-top">Jabatan</td>
                        <td className="align-top">:</td>
                        <td className="pl-2">{jabatan}</td>
                      </tr>
                      <tr>
                        <td className="align-top">Instansi</td>
                        <td className="align-top">:</td>
                        <td className="pl-2">{nm_instansi}</td>
                      </tr>
                      <tr>
                        <td className="align-top">Alamat Kantor</td>
                        <td className="align-top">:</td>
                        <td className="pl-2">{alamat_kantor}</td>
                      </tr>
                    </>
                  )}
                </tbody>
              </table>
              ​
            </div>
          </Modal.Body>
          {/* <Modal.Footer>
            <Button onClick={() => setModal(false)}>I accept</Button>
            <Button color="gray" onClick={() => setModal(false)}>
              Decline
            </Button>
          </Modal.Footer> */}
        </Modal>
      )}
    </>
  );
};

export default ModalComp;
