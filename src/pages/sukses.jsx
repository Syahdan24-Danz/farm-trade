import { Link } from "react-router-dom";

const Sukses = () => {
  return (
    <div className="z-100 absolute max-w-full h-full bg-[#fdfdfd] flex flex-col items-center justify-between px-4 overflow-auto">
      <Link to="/">
        <img className="w-8 absolute top-4 right-4" src="/close.svg" alt="" />
      </Link>
      <div className="h-1/2 flex items-center justify-center ">
        <img src="../sukses.png" alt="Sukses" />
      </div>
      <div className="w-full px-4">
        <h1 className="font-bold text-[1.8rem] text-center">
          Pembayaran Berhasil dan Pesanan Kamu Telah Diterima
        </h1>
        <p className="text-gray-600 text-xl text-center">
          Barang Kamu telah ditempatkan dan sedang dalam perjalanan untuk
          diproses
        </p>
      </div>

      <div className="w-full flex flex-col gap-4 px-4">
        <Link
          to="/nota"
          className="py-4 rounded-2xl w-full bg-[#3a6b30] text-white text-center"
        >
          Lihat Nota / Faktur
        </Link>
        <Link
          to="/tracking"
          className="py-4 rounded-2xl w-full bg-[#3a6b30] text-white text-center"
        >
          Lacak Pesanan
        </Link>
      </div>
    </div>
  );
};

export default Sukses;
