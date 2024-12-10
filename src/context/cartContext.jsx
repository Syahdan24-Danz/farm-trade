// CartContext.js
import { createContext, useState, useContext } from "react";

// Membuat context untuk keranjang
const CartContext = createContext();

// Provider untuk memberikan akses keranjang ke komponen lain
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // State untuk menyimpan keranjang belanja

  const productData = [
    {
      id: 1,
      name: "Sawi",
      price: 15000,
      image: "sawi.png",
      nutrition: 100,
      description:
        "Apel bergizi. Apel mungkin baik untuk menurunkan berat badan. Apel mungkin baik untuk jantung Anda. Sebagai bagian dari diet yang sehat dan bervariasi. Apel Merah ini bersertifikasi BPOM ;)",
    },
    { id: 2, name: "Apel", price: 12000, image: "apple.png" },
    { id: 3, name: "Ginger", price: 13000, image: "ginger.png" },
  ];

  // Fungsi untuk menambah produk ke keranjang
  const addToCart = (product) => {
    const productInCart = cart.find((item) => item.id === product.id);
    if (productInCart) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Fungsi untuk mengurangi jumlah produk di keranjang
  const decreaseQuantity = (productId) => {
    setCart(
      cart.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const increaseQuantity = (productId) => {
    setCart(
      cart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Fungsi untuk menghapus produk dari keranjang
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  // Fungsi untuk menghitung total harga
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        decreaseQuantity,
        removeFromCart,
        calculateTotal,
        increaseQuantity,
        productData,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
