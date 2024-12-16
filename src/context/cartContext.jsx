// CartContext.js
import { createContext, useState, useContext } from "react";

// Membuat context untuk keranjang
const CartContext = createContext();

// Provider untuk memberikan akses keranjang ke komponen lain
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const productData = [
    {
      id: 1,
      name: "Sawi",
      price: 15000,
      image: "sawi.png",
      nutrition: 100,
      description:
        "Sawi bergizi. Sawi kaya akan vitamin C dan dapat membantu meningkatkan sistem kekebalan tubuh. Cocok untuk diolah dalam berbagai masakan sehat.",
    },
    {
      id: 2,
      name: "Apel Merah",
      price: 12000,
      image: "apple.png",
      nutrition: 80,
      description:
        "Apel merah ini kaya akan antioksidan dan serat, baik untuk kesehatan jantung dan pencernaan. Nikmati apel segar ini untuk camilan sehat.",
    },
    {
      id: 3,
      name: "Jahe (Ginger)",
      price: 13000,
      image: "ginger.png",
      nutrition: 70,
      description:
        "Jahe dikenal sebagai rempah dengan banyak manfaat kesehatan. Dapat membantu meredakan mual, meningkatkan sirkulasi darah, dan meningkatkan daya tahan tubuh.",
    },
    {
      id: 4,
      name: "Tomat",
      price: 10000,
      image: "tomato.png",
      nutrition: 95,
      description:
        "Tomat adalah sumber vitamin C yang sangat baik, serta kaya akan likopen, antioksidan yang bermanfaat untuk kesehatan kulit dan jantung.",
    },
    {
      id: 5,
      name: "Kentang",
      price: 8000,
      image: "potato.png",
      nutrition: 110,
      description:
        "Kentang adalah sumber karbohidrat yang sangat baik, kaya akan serat dan vitamin B. Cocok untuk berbagai olahan, baik dipanggang, digoreng, atau direbus.",
    },
    {
      id: 6,
      name: "Wortel",
      price: 12000,
      image: "carrot.png",
      nutrition: 60,
      description:
        "Wortel kaya akan beta-karoten, yang sangat bermanfaat untuk kesehatan mata. Dapat dinikmati mentah atau dimasak sebagai tambahan dalam berbagai hidangan.",
    },
    {
      id: 7,
      name: "Bayam",
      price: 13000,
      image: "spinach.png",
      nutrition: 90,
      description:
        "Bayam adalah sayuran yang kaya akan zat besi dan vitamin K. Bayam dapat membantu meningkatkan energi dan menjaga kesehatan tulang.",
    },
    {
      id: 8,
      name: "Kangkung",
      price: 7000,
      image: "water-spinach.png",
      nutrition: 85,
      description:
        "Kangkung adalah sayuran yang kaya akan serat dan mineral, sangat bermanfaat untuk menjaga pencernaan dan melawan peradangan.",
    },
    {
      id: 9,
      name: "Bawang Merah",
      price: 9000,
      image: "red-onion.png",
      nutrition: 75,
      description:
        "Bawang merah memiliki kandungan antioksidan tinggi dan dapat membantu menurunkan kadar gula darah serta meningkatkan sistem kekebalan tubuh.",
    },
    {
      id: 10,
      name: "Lemon",
      price: 15000,
      image: "lemon.png",
      nutrition: 95,
      description:
        "Lemon adalah sumber vitamin C yang sangat baik, dapat meningkatkan kekebalan tubuh dan memberikan rasa segar pada berbagai hidangan atau minuman.",
    },
    {
      id: 11,
      name: "Paprika Merah",
      price: 16000,
      image: "red-pepper.png",
      nutrition: 80,
      description:
        "Paprika merah kaya akan vitamin C dan beta-karoten. Paprika dapat membantu meningkatkan daya tahan tubuh dan menjaga kesehatan kulit.",
    },
    {
      id: 12,
      name: "Lobak",
      price: 8000,
      image: "radish.png",
      nutrition: 70,
      description:
        "Lobak memiliki kandungan serat yang tinggi dan dapat membantu meningkatkan pencernaan. Selain itu, lobak juga membantu detoksifikasi tubuh.",
    },
    {
      id: 13,
      name: "Timun",
      price: 7000,
      image: "cucumber.png",
      nutrition: 65,
      description:
        "Timun rendah kalori dan kaya akan air, sangat cocok untuk menjaga hidrasi tubuh dan membantu mendinginkan tubuh di hari yang panas.",
    },
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

  const calculateTotalByProductId = (productId) => {
    return cart
      .filter((item) => item.id === productId)
      .reduce((total, item) => total + item.price * item.quantity, 0);
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
        calculateTotalByProductId,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
