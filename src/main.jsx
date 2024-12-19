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
import PageProduk from "./pages/seller/pageProduk.jsx";
import TokoSaya from "./pages/seller/tokoSaya.jsx";
import ProdukSaya from "./pages/seller/produkSaya.jsx";
import AddProductForm from "./pages/seller/tambahProduk.jsx";
import Penghasilan from "./pages/seller/penghasilan.jsx";

function App() {
  const location = useLocation();

  const hideNavbar = location.pathname.startsWith("/checkout");

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/pencarian" element={<Pencarian />} />
        <Route path="/akun" element={<Profil />} />
        <Route path="/keranjang" element={<Keranjang />} />
        <Route path="/checkout/:id" element={<CheckOut />} />
        <Route path="/product/:name" element={<Product />} />
        <Route path="/sukses" element={<Sukses />} />
        <Route path="/toko" element={<PageProduk />} />
        <Route path="/tokoSaya" element={<TokoSaya />} />
        <Route path="/produkSaya" element={<ProdukSaya />} />
        <Route path="/tambahProduk" element={<AddProductForm />} />
        <Route path="/penghasilan" element={<Penghasilan />} />
      </Routes>

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
