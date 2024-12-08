import { useParams } from "react-router-dom";
import { useCart } from "../context/cartContext";
import { useState } from "react";
import BackToggle from "../utils/back";
import ShareToggle from "../utils/share";

const Product = () => {
  const { productData, cart, setCart } = useCart(); // Mendapatkan akses untuk mengubah cart langsung
  const { name } = useParams();
  const [jumlah, setJumlah] = useState(1); // Set default jumlah menjadi 1

  // Menambahkan jumlah produk
  const tambahJumlah = () => {
    setJumlah(jumlah + 1);
  };

  // Mengurangi jumlah produk
  const kurangJumlah = () => {
    if (jumlah > 1) {
      setJumlah(jumlah - 1);
    }
  };

  const product = productData.find((prod) => prod.name === name);

  if (!product) {
    return <p>Produk tidak ditemukan</p>;
  }

  // Cek apakah produk sudah ada di keranjang
  const cartItem = cart.find((item) => item.name === product.name);

  // Fungsi untuk memperbarui keranjang
  const handleAddToCart = () => {
    if (jumlah > 0) {
      if (cartItem) {
        const updatedCart = cart.map((item) => {
          if (item.id === product.id) {
            console.log(item);
            return { ...item, quantity: item.quantity + jumlah }; // Update jumlah produk yang ada
          }
          return item;
        });
        setCart(updatedCart); // Perbarui keranjang dengan updatedCart
      } else {
        // Jika produk belum ada di keranjang, tambahkan produk baru dengan jumlah yang sesuai
        const newItem = { ...product, quantity: jumlah };
        setCart([...cart, newItem]); // Menambahkan produk baru ke keranjang
      }
    }
  };

  return (
    <div className="min-h-full flex flex-col items-center">
      <div>
        <BackToggle />
        <ShareToggle />
      </div>

      <div className="h-1/2 w-full p-2 bg-gray-200 rounded-b-xl mb-4">
        <img
          src={`/${product.image}`} // Pastikan path gambar benar
          alt={product.name}
          className="bg-contain h-full w-full object-cover"
        />
      </div>
      <div className="h-2/4 w-full p-2">
        <div className="flex items-start justify-between py-2">
          <div>
            <h1 className="text-2xl font-semibold">{product.name}</h1>
            <p>1 Kg, Harga</p>
          </div>
          <div>
            <img className="w-6" src="../love.svg" alt="" />
          </div>
        </div>
        <div className="flex flex-row justify-between border-b border-gray-300 py-2">
          <div className="flex items-center gap-2 mt-2">
            <button
              onClick={kurangJumlah}
              className="bg-red-500 text-white py-1 px-3 rounded"
            >
              -
            </button>
            <span>{jumlah}</span>
            <button
              onClick={tambahJumlah}
              className="bg-green-500 text-white py-1 px-3 rounded"
            >
              +
            </button>
          </div>
          <p className="text-lg text-gray-600 mt-2">
            Rp. {product.price.toLocaleString()}
          </p>
        </div>
        <div className="mt-4">
          <h1 className="text-lg font-semibold">Detail Produk</h1>
          <p className="mt-2 text-gray-600 text-justify">
            {product.description} {/* Perbaikan typo disini */}
          </p>
        </div>

        <button
          onClick={handleAddToCart}
          className="bg-[#3a6b30] text-white p-4 mt-4 hover:bg-[#44b984] w-full rounded-xl"
        >
          Tambah ke Keranjang
        </button>
      </div>
    </div>
  );
};

export default Product;
