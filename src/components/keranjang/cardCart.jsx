import { useCart } from "../../context/cartContext"; // Mengimpor `useCart` dari context yang relevan
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const CardCart = () => {
  const {
    cart,
    removeFromCart,
    decreaseQuantity,
    increaseQuantity,
    calculateTotal,
    calculateTotalByProductId,
  } = useCart();

  const [total, setTotal] = useState(0);
  const [productId, setProductId] = useState(1);
  console.log(cart);

  useEffect(() => {
    const newTotal = calculateTotalByProductId(productId);
    setTotal(newTotal);
  }, [cart, productId]);

  if (cart.length === 0) {
    return <p>Keranjang Anda kosong</p>;
  }

  return (
    <div className="flex flex-col justify-between min-h-full">
      <div className="border-b border-gray-300 h-full">
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-4">
              <div className="w-32 h-32 items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-xs text-gray-600">1Kg, Harga</p>
                <p>Rp. {item.price.toLocaleString()}</p>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => decreaseQuantity(item.id)} // Fungsi untuk mengurangi jumlah item
                    className="bg-red-500 text-white py-1 px-3 rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.id)} // Fungsi untuk menambah jumlah item
                    className="bg-green-500 text-white py-1 px-3 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end gap-4">
              <div>
                <button
                  onClick={() => removeFromCart(item.id)} // Fungsi untuk menghapus item dari keranjang
                >
                  <img className="w-6" src="close.svg" alt="" />
                </button>
              </div>
              <div>
                <h1>
                  Rp. {calculateTotalByProductId(item.id).toLocaleString()}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end">
        <Link
          to={`/checkout/${cart.id}`}
          className="bg-[#3a6b30] text-white p-4 mt-4 hover:bg-[#44b984] w-full rounded-xl"
        >
          <h1>Checkout Rp. {calculateTotal().toLocaleString()}</h1>
        </Link>
      </div>
    </div>
  );
};

export default CardCart;
