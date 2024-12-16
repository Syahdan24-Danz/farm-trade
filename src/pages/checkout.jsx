import PageTitle from "../components/pageTitle";
import Sukses from "./sukses";
import { useState } from "react";
import { useCart } from "../context/cartContext"; // Pastikan context ini benar

const CheckOut = () => {
  const [showSukses, setShowSukses] = useState(false);
  const { cart } = useCart();

  const handleSukses = () => {
    setShowSukses(true);
  };

  // Fungsi untuk menghitung total harga dari cart
  const calculateTotal = () => {
    const totalProductPrice = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    const shippingFee = 10000; // Contoh biaya pengiriman tetap
    const serviceFee = 5000; // Contoh biaya layanan tetap
    const discount = 0; // Misalnya tidak ada diskon untuk saat ini

    return totalProductPrice + shippingFee + serviceFee - discount;
  };

  return (
    <>
      {showSukses && <Sukses />}
      <div className="px-4 h-full flex flex-col justify-between">
        <div>
          <PageTitle title={"Checkout"} />
          <Alamat />
          <div>
            {cart.map((item, index) => (
              <CheckOutProduct key={index} product={item} />
            ))}

            <TitleFiture
              title={"Pengiriman"}
              info={<strong className="font-bold">Reguler</strong>}
            />
            <TitleFiture title={"Kode Promo"} info={"Pilih Diskon"} />
            <TitleFiture
              title={"Metode Pembayaran"}
              info={
                <img
                  className="w-6"
                  src="../../mastercard.svg"
                  alt="Mastercard"
                />
              }
            />
            <Rincian cart={cart} calculateTotal={calculateTotal} />
            <p className="text-xs mt-8">
              Dengan melakukan pemesanan, Anda setuju dengan{" "}
              <strong>Syarat</strong> dan <strong>Ketentuan</strong> kami
            </p>
          </div>
        </div>
        <div className="w-full">
          <button
            className="bg-[#3a6b30] w-full rounded-t-2xl text-white text-center py-4"
            onClick={handleSukses}
          >
            Buat Pesanan
          </button>
        </div>
      </div>
    </>
  );
};

export default CheckOut;

const Alamat = () => {
  return (
    <div className="border-b-[1px] text-md border-gray-300 py-4">
      <h1 className="font-bold">Alamat Pengiriman</h1>
      <p>
        Raden Mas | <span>(+62) 123 456 789</span>
      </p>
      <p>Bandung, Jawa Barat</p>
    </div>
  );
};

// Komponen TitleFiture
const TitleFiture = ({ title, info }) => {
  return (
    <div className="flex border-b py-2 border-gray-300 flex-row justify-between">
      <h1 className="font-bold text-md">{title}</h1>
      <div className="flex text-sm">
        <h1>{info}</h1>
        <img className="w-6" src="../../arrow.svg" alt="Arrow" />
      </div>
    </div>
  );
};

// Komponen CheckOutProduct untuk menampilkan produk di cart
const CheckOutProduct = ({ product }) => {
  return (
    <div className="flex items-center py-4">
      <div className="w-20 h-20">
        <img
          src={`../../${product.image}`}
          alt={product.name}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="ml-4">
        <h1 className="font-bold text-xl text-[#3a6b30]">{product.name}</h1>
        <p>
          {product.quantity} x Rp {product.price}
        </p>
        <p>Total: Rp {product.price * product.quantity}</p>
      </div>
    </div>
  );
};

// Komponen Rincian Pembayaran
const Rincian = ({ cart, calculateTotal }) => {
  return (
    <div>
      <h1 className="font-bold">Rincian Pembayaran</h1>
      <p>
        Subtotal Produk: Rp{" "}
        {cart.reduce((total, item) => total + item.price * item.quantity, 0)}
      </p>
      <p>Subtotal Pengiriman: Rp 10,000</p>
      <p>Biaya Layanan: Rp 5,000</p>
      <p>Total Diskon Toko: Rp 0</p>
      <h1>Total Pembayaran: Rp {calculateTotal()}</h1>
    </div>
  );
};
