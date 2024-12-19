import ProfilToko from "../../components/profilToko";
import { Link } from "react-router-dom";
import { useCart } from "../../context/cartContext";

const PageProduk = ({ link1, className }) => {
  const { productData } = useCart();
  return (
    <div className="h-full px-4">
      <div className="text-white w-full px-4 h-1/6 bg-[#3a6b30]">
        <ProfilToko className={"text-white"} link1={"ikut"} />
      </div>

      <div>
        <div className="text-sm flex py-2 border-b border-gray-300 flex-row justify-evenly">
          <Link>Toko</Link>
          <Link>Produk</Link>
          <Link>Kategori</Link>
        </div>
        <SorterProduk />
        <Produk productData={productData} />
      </div>
    </div>
  );
};
export default PageProduk;
const SorterProduk = () => {
  return (
    <div className="flex text-xs py-2 flex-row justify-evenly">
      <button>Populer</button> |<button>Terbaru</button>|
      <button>Terlaris</button>|<button>Harga</button>
    </div>
  );
};

const Produk = ({ productData }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {productData.map((product) => (
        <div
          key={product.id}
          className="rounded-2xl p-4 border-[2px] border-[#BC968C] bg-[#fde9e4]"
        >
          <div className="flex flex-col w-full items-center">
            {/* Gambar produk */}
            <img
              src={product.image}
              alt={product.name}
              className="w-24 h-24 object-contain"
            />

            <div className="w-full">
              <h2 className="text-sm font-semibold mt-1">{product.name}</h2>
              <p className="text-sm font-bold text-[#3a6b30]">
                {product.price
                  .toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })
                  .replace(",00", "")}
              </p>
              <p className="text-xs">0 Terjual</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
