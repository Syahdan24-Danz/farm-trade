import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./index.css";
import "./app.css";
import Navbar from "./components/beranda/navbar.jsx";
import Beranda from "./pages/beranda.jsx";
import Pencarian from "./pages/pencarian.jsx";
import Profil from "./pages/profil.jsx";
import Keranjang from "./pages/keranjang.jsx";
import { CartProvider } from "./context/cartContext.jsx";
import Product from "./pages/product.jsx";
import CheckOut from "./pages/checkout.jsx";
import Sukses from "./pages/sukses.jsx";

// Komponen App yang menangani rute dan navbar
function App() {
  const location = useLocation(); // Mengambil lokasi saat ini

  // Cek jika lokasi saat ini adalah '/checkout/:id' maka navbar tidak akan ditampilkan
  const hideNavbar = location.pathname.startsWith("/checkout");

  return (
    <div className="app max-w-[599px]">
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/pencarian" element={<Pencarian />} />
        <Route path="/akun" element={<Profil />} />
        <Route path="/keranjang" element={<Keranjang />} />
        <Route path="/checkout/:id" element={<CheckOut />} />
        <Route path="/product/:name" element={<Product />} />
        <Route path="/sukses" element={<Sukses />} />
      </Routes>

      {/* Hanya render Navbar jika bukan halaman checkout */}
      {!hideNavbar && <Navbar />}
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <CartProvider>
        <App />
      </CartProvider>
    </Router>
  </StrictMode>
);
