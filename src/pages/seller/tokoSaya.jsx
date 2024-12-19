import ProfilToko from "../../components/profilToko";
import HeaderTools from "../../components/headTools";
import { Link } from "react-router-dom";

const TokoSaya = () => {
  return (
    <div className="min-h-screen w-full bg-gray-100">
      <HeaderTools />
      <ProfilToko className="bg-[#3a6b30] text-white" />
      <StatusPesanan />
      <div className="flex justify-center items-center py-8">
        <TokoMenu />
      </div>
    </div>
  );
};

export default TokoSaya;

// StatusPesanan Component
const StatusPesanan = () => {
  const statusPesanan = [
    { id: 1, title: "Perlu Dikirim", jumlah: 0 },
    { id: 2, title: "Pembatalan", jumlah: 0 },
    { id: 3, title: "Pengembalian", jumlah: 0 },
    { id: 4, title: "Penilaian Perlu Dibalas", jumlah: 0 },
  ];

  return (
    <div className="px-4 shadow-lg mb-8 bg-white rounded-lg">
      <div className="py-4 flex justify-between items-center">
        <h1 className="text-lg font-bold">Status Pesanan</h1>
        <p className="text-sm text-gray-600">Riwayat Pesanan</p>
      </div>
      <div className="flex flex-wrap gap-4">
        {statusPesanan.map((item) => (
          <div key={item.id} className="text-center w-1/4 sm:w-1/2 lg:w-1/4">
            <h1 className="font-bold text-2xl">{item.jumlah}</h1>
            <p className="text-xs text-gray-600">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// TokoMenu Component
const TokoMenu = () => {
  const menu = [
    { id: 1, title: "Produk", link: "/produkSaya", img: "/produk.png" },
    { id: 2, title: "Keuangan", link: "/test", img: "/Wallet.png" },
    { id: 3, title: "Performa Toko", link: "/test", img: "/usd.png" },
    { id: 4, title: "Promosi Toko", link: "/test", img: "/Discount.png" },
    { id: 5, title: "Perbandingan Harga", link: "/test", img: "/chart.png" },
    { id: 6, title: "Bantuan", link: "/test", img: "/help.svg" },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
      {menu.map((item) => (
        <Link
          to={item.link}
          key={item.id}
          className="text-center flex flex-col justify-center items-center bg-white p-4 rounded-lg shadow-lg hover:bg-gray-100"
        >
          <div className="w-16 h-16 mb-2">
            <img
              className="w-full h-full bg-[#3a6b30] p-2 rounded-2xl object-contain"
              src={item.img}
              alt={item.title}
            />
          </div>
          <h1 className="text-sm font-medium">{item.title}</h1>
        </Link>
      ))}
    </div>
  );
};
