import { Link } from "react-router-dom";
import NavBack from "../../components/navBack";

const AddProductForm = () => {
  return (
    <div className="w-full">
      <NavBack title={"Tambah Produk"}></NavBack>
      <div className="p-4 space-y-6">
        {/* Foto Produk */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Foto Produk</h2>
          <div className="border-dashed border-2 border-[#3a6b30] rounded-lg w-32 h-32 flex items-center justify-center text-[#3a6b30]">
            <span className="text-center text-sm font-medium">
              + Tambah Foto
            </span>
          </div>
        </div>

        {/* Nama Produk */}
        <div className="space-y-1">
          <h2 className="text-lg font-semibold">Nama Produk</h2>
          <input
            type="text"
            placeholder="Masukan Nama Produk"
            className="w-full border border-gray-300 rounded-lg p-2 text-sm"
          />
        </div>

        {/* Deskripsi Produk */}
        <div className="space-y-1">
          <h2 className="text-lg font-semibold">Deskripsi Produk</h2>
          <textarea
            placeholder="Masukan Deskripsi Produk"
            rows="3"
            className="w-full border border-gray-300 rounded-lg p-2 text-sm"
          ></textarea>
        </div>

        {/* Kategori Produk */}
        <div className="flex justify-between items-center py-4 border-b border-gray-300">
          <div>
            <h2 className="text-lg font-semibold">Kategori Produk</h2>
            <p className="text-sm text-gray-400">Atur Kategori Produk</p>
          </div>
          <Link to="#" className="text-[#3a6b30] font-medium">
            &#8250;
          </Link>
        </div>

        {/* Harga, Stok, Minimal Order */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Harga</h2>
            <Link to="#" className="text-[#3a6b30] font-medium">
              Atur &#8250;
            </Link>
          </div>
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Stok</h2>
            <input
              type="number"
              placeholder="Masukan Stok"
              className="border border-gray-300 rounded-lg p-2 text-sm w-32"
            />
          </div>
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Minimal Order</h2>
            <input
              type="number"
              placeholder="Masukan Minimal Order"
              className="border border-gray-300 rounded-lg p-2 text-sm w-32"
            />
          </div>
        </div>

        {/* Jadwal Produk Ditambahkan */}
        <div className="flex justify-between items-center py-4 border-t border-gray-300">
          <div>
            <h2 className="text-lg font-semibold">Jadwal Produk Ditambahkan</h2>
          </div>
          <Link to="#" className="text-[#3a6b30] font-medium">
            Atur &#8250;
          </Link>
        </div>
      </div>
      <div className="p-4 flex justify-between items-center bg-white fixed bottom-0 left-0 right-0">
        <button className="bg-[#d6e8d1] text-[#3a6b30] py-3 px-6 rounded-2xl font-semibold border border-[#3a6b30]">
          Simpan
        </button>
        <button className="bg-[#3a6b30] text-white py-3 px-6 rounded-2xl font-semibold">
          Tampilkan
        </button>
      </div>
    </div>
  );
};

export default AddProductForm;
