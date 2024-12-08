import { Link } from "react-router-dom";

const Order = () => {
  return (
    <div>
      <div className="flex flex-row justify-between py-6 items-center px-4">
        <h1 className="text-2xl font-bold">Pesanan Saya</h1>
        <Link
          className="flex flex-row items-center justify-center"
          to="/Project"
        >
          <p>Lihat Riwayat Pesanan</p>
          <img className="w-6" src="arrow.svg" alt="" />
        </Link>
      </div>
      <div className="grid grid-cols-4">
        {menu.map((item) => (
          <div
            key={item.id}
            className="flex flex-row items-center justify-center p-2 border-b border-gray-300 shadow-sm"
          >
            <Link to="/Project">
              <div className="flex flex-col items-center gap-2">
                <img className="w-8" src={item.img} alt={item.title} />
                <h1 className="text-sm font-bold">{item.title}</h1>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;

const menu = [
  {
    id: 1,
    title: "Belum Bayar",
    img: "wallet.svg",
  },
  {
    id: 2,
    title: "Dikemas",
    img: "box-package.svg",
  },
  {
    id: 3,
    title: "Dikirim",
    img: "shipping-truck.svg",
  },
  {
    id: 4,
    title: "Menilai",
    img: "star-circle.svg",
  },
];
