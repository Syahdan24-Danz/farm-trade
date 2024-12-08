import { useParams } from "react-router-dom";
import { useCart } from "../context/cartContext";

const Product = () => {
  const { productData, cart, addToCart, decreaseQuantity, increaseQuantity } =
    useCart();
  const { name } = useParams();

  // Temukan produk berdasarkan nama yang diterima dari URL
  const product = productData.find((prod) => prod.name === name);
  console.log(product);

  // Jika produk tidak ditemukan
  if (!product) {
    return <p>Produk tidak ditemukan</p>;
  }

  // Cek apakah produk sudah ada di dalam keranjang
  const cartItem = cart.find((item) => item.id === product.id);

  // Tentukan kuantitas produk di keranjang, jika belum ada, set 0
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <div className="min-h-full flex flex-col items-center">
      <div className="h-1/2 w-full p-2 bg-gray-200 rounded-b-xl mb-4">
        <img
          // Pastikan path gambar benar
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
        <div className="flex flex-row justify-between border-b border-gray-300 py-2">
          <div className="flex items-center gap-2 mt-2">
            <button
              onClick={() => decreaseQuantity(product.id)}
              className="bg-red-500 text-white py-1 px-3 rounded"
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => increaseQuantity(product.id)}
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
          <p className="mt-2 text-gray-600 text-justify">{product.deskription}</p>
        </div>

        <button
          onClick={() => addToCart(product)}
          className="bg-[#3a6b30] text-white p-4 mt-4 hover:bg-[#44b984] w-full rounded-xl"
        >
          Tambah ke Keranjang
        </button>
      </div>
    </div>
  );
};

export default Product;
