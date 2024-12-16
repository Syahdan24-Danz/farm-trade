import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex flex-row fixed bottom-0 z-10 w-full max-w-[599px] bg-white">
      <div className="py-4 w-full bg-white rounded-t-2xl shadow-md border-t flex justify-evenly items-center">
        <Link to="/" className="flex items-center">
          <img src="beranda.png" alt="Beranda" className="w-8 h-8" />
        </Link>
        <Link to="/pencarian" className="flex items-center">
          <img src="pencarian.png" alt="Pencarian" className="w-8 h-8" />
        </Link>
        <Link to="/keranjang" className="flex items-center">
          <img src="keranjang.png" alt="Keranjang" className="w-8 h-8" />
        </Link>
        <Link to="/" className="flex items-center">
          <img src="rekomendasi.png" alt="Rekomendasi" className="w-8 h-8" />
        </Link>
        <Link to="/akun" className="flex items-center">
          <img src="akun.png" alt="Akun" className="w-8 h-8" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
