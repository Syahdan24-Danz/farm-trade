import CardCart from "../components/keranjang/cardCart";

const Keranjang = () => {
  return (
    <div className="p-4 h-full">
      <div className="h-2/5 w-full border-b border-gray-300">
        <h1 className="text-2xl font-bold text-center">Keranjang Saya</h1>
      </div>
      <div>
        <CardCart />
      </div>
    </div>
  );
};

export default Keranjang;
