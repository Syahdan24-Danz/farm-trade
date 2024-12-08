import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="py-12 flex flex-row relative">
      <div className=" py-6 w-full fixed bg-white rounded-t-2xl shadow-md border-t bottom-0 flex flex-row justify-evenly items-center">
        <Link to="/" className="flex items-center">
          <img src="beranda.png" alt="" />
        </Link>
        <Link to="/pencarian" className="flex items-center">
          <img src="pencarian.png" alt="" />
        </Link>
        <Link to="/keranjang" className="flex items-center">
          <img src="keranjang.png" alt="" />
        </Link>
        <Link to="/" className="flex items-center">
          <img src="rekomendasi.png" alt="" />
        </Link>
        <Link to="/akun" className="flex items-center">
          <img src="akun.png" alt="" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
