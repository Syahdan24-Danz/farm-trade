import { useState } from "react";
import HeaderTools from "../../components/headTools";
import { Link } from "react-router-dom";

const ProdukSaya = () => {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <div className="h-2/6">
        <div className="bg-[#3a6b30] h-1/6">
          <HeaderTools title={"Produk Saya"} />
        </div>
        <NavProdukSaya />
      </div>
      <div className="flex relative">
        <Link
          to="/tambahProduk"
          className="w-full bg-[#3a6b30] text-white text-center py-2 rounded-2xl fixed bottom-20"
        >
          Tambah Produk
        </Link>
      </div>
    </div>
  );
};

export default ProdukSaya;

const NavProdukSaya = () => {
  const [currentPage, setCurrentPage] = useState("Live"); // Default page

  const navProduk = [
    { id: 1, title: "Live", page: "Live" },
    { id: 2, title: "Habis", page: "Habis" },
    { id: 3, title: "Sedang Diperiksa", page: "Sedang Diperiksa" },
    { id: 4, title: "Arsip", page: "Arsip" },
  ];

  return (
    <div>
      <nav className="bg-[#3a6b30] text-white">
        <ul className="flex flex-row py-4 items-center">
          {navProduk.map((item) => (
            <li className="w-1/4 text-center" key={item.id}>
              <button
                onClick={() => setCurrentPage(item.page)}
                className={`w-full py-2 text-xl ${
                  currentPage === item.page
                    ? "font-bold border-b-2 border-white"
                    : "font-normal"
                }`}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div>
        {currentPage === "Live" && <Kategori />}
        {currentPage === "Habis" && <Kosong />}
        {currentPage === "Sedang Diperiksa" && <Kosong />}
        {currentPage === "Arsip" && <Arsip />}
      </div>
    </div>
  );
};

const Kategori = () => {
  return (
    <div>
      <div className="w-full text-center">
        <div className="flex border-b border-gray-400">
          <div className="w-1/2 p-2 font-bold">Baru</div>
          <div className="w-1/2 p-2 font-bold">Stok</div>
        </div>
        <div className="h-full flex p-2 items-center grid-cols-2">
          <div className="w-1/2 flex justify-center items-center gap-4">
            <div className="w-24 h-24">
              <img
                src="../apple.png"
                alt="Apple"
                className="w-full h-full object-contain"
              />
            </div>
            <h1 className="text-bold">Apel Merah</h1>
          </div>
          <div className="w-1/2 h-full text-bold">100 KG</div>
        </div>
        <div className="flex flex-row justify-evenly">
          <Link className="py-3 px-6 rounded-lg border border-gray-500">
            Edit
          </Link>
          <Link className="py-3 px-6 rounded-lg border border-gray-500">
            Arsip
          </Link>
        </div>
      </div>
    </div>
  );
};

const Arsip = () => {
  return (
    <div className="p-4">
      <div className="p-4 rounded-xl border-2 border-gray-300">
        <div className="border-b-2 p2 flex items-center gap-4 border-gray-400">
          <div className="w-24 h-24">
            <img
              className="w-full h-full object-contain"
              src="../apple.png"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-1">
            <h1>Semangka Segar</h1>
            <h1>Rp 16.000</h1>
          </div>
        </div>
        <div>
          <div className="flex flex-row justify-between">
            <h1>Stok: 50kg</h1>
            <h1>Terjual: 20kg</h1>
          </div>
          <div>
            <h1>Favorit: 0</h1>
          </div>
          <div className="flex mt-2 text-white flex-row justify-between gap-4">
            <button className="w-1/2 p-2 rounded-xl bg-[#3a6b30]">
              Simpan
            </button>
            <button className="w-1/2 p-2 rounded-xl bg-[#3a6b30]">
              Tampilkan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Kosong = () => {
  return (
    <div className="flex justify-center h-full items-center">
      <h1 className="text-xl text-gray-500">Ups Produk Tidak Ditemukan</h1>
    </div>
  );
};
