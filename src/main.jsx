import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./index.css";
import "./app.css";
import Navbar from "./components/beranda/navbar.jsx";
import Beranda from "./pages/beranda.jsx";
import Pencarian from "./pages/pencarian.jsx";
import Profil from "./pages/profil.jsx";
import Keranjang from "./pages/keranjang.jsx";
import { CartProvider } from "./context/cartContext.jsx";
import Product from "./pages/product.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/pencarian" element={<Pencarian />} />
          <Route path="/akun" element={<Profil />} />
          <Route path="/keranjang" element={<Keranjang />} />
          <Route path="/product/:name" element={<Product />} />
        </Routes>
        <Navbar />
      </CartProvider>
    </Router>
  </StrictMode>
);
