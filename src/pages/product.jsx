import { useParams } from "react-router-dom";
import { useCart } from "../context/cartContext";
import { useState } from "react";
import BackToggle from "../utils/back";
import ShareToggle from "../utils/share";
import { Link } from "react-router-dom";
import ProfilToko from "../components/profilToko";

const Product = () => {
  const { productData, cart, setCart } = useCart();
  const { name } = useParams();
  const [jumlah, setJumlah] = useState(1);

  const tambahJumlah = () => {
    setJumlah(jumlah + 1);
  };

  const kurangJumlah = () => {
    if (jumlah > 1) {
      setJumlah(jumlah - 1);
    }
  };

  const product = productData.find((prod) => prod.name === name);

  if (!product) {
    return <p>Produk tidak ditemukan</p>;
  }

  const cartItem = cart.find((item) => item.name === product.name);

  const handleAddToCart = () => {
    if (jumlah > 0) {
      if (cartItem) {
        const updatedCart = cart.map((item) => {
          if (item.id === product.id) {
            console.log(item);
            return { ...item, quantity: item.quantity + jumlah };
          }
          return item;
        });
        setCart(updatedCart);
      } else {
        const newItem = { ...product, quantity: jumlah };
        setCart([...cart, newItem]);
      }
    }
  };

  const bargainToggle = () => {
    const bargain = document.getElementById("bargain");
    bargain.classList.toggle("hidden");
    const bgProduct = document.getElementById("product");
    bgProduct.classList.toggle("bg-gray-200");
  };

  return (
    <div id="product" className="min-h-full flex flex-col items-center ">
      <div>
        <BackToggle />
        <ShareToggle />
      </div>
      <div className="h-1/2 w-full p-2 bg-gray-200 rounded-b-xl mb-4">
        <img
          src={`/${product.image}`}
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
        <div>
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
            <p className="text-2xl font-semibold mt-2">
              Rp. {product.price.toLocaleString()}
            </p>
          </div>
          <div className="w-full flex justify-end items-center">
            <button
              onClick={bargainToggle}
              className="text-xs flex items-center gap-2 mt-2 bg-[#3a6b30] text-white py-1 px-3 rounded"
            >
              <img className="w-4" src="../pen.svg" alt="" />
              Berikan Penawaran Terbaik Anda Disini!
            </button>
          </div>
        </div>
        <div className="mt-4 pb-2 border-b border-gray-300">
          <h1 className="text-lg font-semibold">Detail Produk</h1>
          <p className="mt-2 text-gray-600 text-justify">
            {product.description} {/* Perbaikan typo disini */}
          </p>
        </div>
        <div className="mt-4 pb-2 border-b border-gray-300 flex flex-row justify-between items-center">
          <div>
            <h1 className="text-lg font-semibold">Minimal Order</h1>
          </div>
          <div className="bg-[#ebebeb] h-full px-4 py-1 rounded-lg text-center">
            <p className=" text-gray-600 text-lg">{product.nutrition}</p>
          </div>
        </div>
        <div className="mt-4 pb-2 border-b border-gray-300 flex flex-row justify-between">
          <h1 className="text-lg font-semibold">Ulasan</h1>
          <img className="w-24 h-full" src="../rating.png" alt="" />
        </div>
        <ProfilToko className={"text-[#3a6b30]"} />
        <button
          onClick={bargainToggle}
          className="bg-[#3a6b30] text-white p-4 mt-4 hover:bg-[#44b984] w-full rounded-xl"
        >
          Masukan Keranjang
        </button>
        <div>
          <Bargain bargainToggle={bargainToggle} product={product} />
        </div>
      </div>
    </div>
  );
};

export default Product;
const Bargain = ({ bargainToggle, product }) => {
  return (
    <div
      id="bargain"
      className="w-full z-20 rounded-t-2xl absolute bottom-0 p-2 bg-white hidden transition duration-500 ease-in-out overflow-y-auto"
    >
      <button onClick={bargainToggle} className="absolute top-4 right-4">
        <img className="w-6" src="../close.svg" alt="Close" />
      </button>
      <div className="flex flex-col items-center justify-center py-2 px-4 space-y-4">
        <h1 className="text-xl font-semibold text-center">
          Berikan Penawaran Terbaik Anda!
        </h1>
        <div className="w-full border-b border-gray-300 py-2">
          <div className="flex flex-row items-center w-full justify-between">
            <p>Harga Sebelumnya</p>
            <h1 className="text-lg font-semibold">
              Rp. {product.price.toLocaleString()}
            </h1>
          </div>
          <p>Harga Terbaik Anda</p>
          <div className="text-center">
            <input
              className="bg-gray-200 p-2 h-16 rounded-xl w-full max-w-[90%] mt-4 placeholder:text-black placeholder:text-center placeholder:text-2xl placeholder:font-bold"
              placeholder="Enter Here"
              type="number"
            />
          </div>
          <p className="text-xs text-gray-600 mt-2 text-justify">
            Dengan melakukan pemesanan, Anda setuju dengan{" "}
            <strong>Syarat</strong> dan <strong>Ketentuan kami.</strong>
          </p>
        </div>
        <button
          onClick={bargainToggle}
          className="bg-[#3a6b30] text-white p-4 mt-4 hover:bg-[#44b984] w-full rounded-xl"
        >
          Konfirmasi Penawaran
        </button>
      </div>
    </div>
  );
};
