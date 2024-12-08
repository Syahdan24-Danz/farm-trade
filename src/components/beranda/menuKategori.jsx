import { Link } from "react-router-dom";

const MenuKategori = ({ title = "Penawaran Ekslusif" }) => {
  return (
    <div className="flex flex-row justify-between py-6 items-center">
      <h1 className="text-2xl font-bold">{title}</h1>
      <Link to="/Project">Lihat Semua</Link>
    </div>
  );
};

export default MenuKategori;
