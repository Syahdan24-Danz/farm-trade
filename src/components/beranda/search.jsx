import { useState } from "react";
import { useCart } from "../../context/cartContext"; // Pastikan konteks cart diimpor dengan benar

const Search = () => {
  const [query, setQuery] = useState(""); // State untuk menyimpan input pencarian
  const { productData } = useCart(); // Mengambil data produk dari context

  // Fungsi untuk menangani perubahan input pencarian
  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  // Filter produk berdasarkan nama yang mengandung query pencarian (case-insensitive)
  const filteredProducts = productData.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      {/* Input pencarian */}
      <div className="flex flex-row items-center bg-gray-200 py-2 px-4 border border-gray-300 rounded-xl gap-2 mb-4">
        <span className="search-icon">
          <img className="w-6" src="search.svg" alt="Search" />
        </span>
        <input
          className="w-full bg-transparent focus:outline-none placeholder:text-black py-1 px-2"
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Cari Produk"
        />
      </div>

      {/* Tampilkan produk hanya jika query tidak kosong */}
      {query && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.length === 0 ? (
            // Jika tidak ada produk yang cocok, tampilkan pesan
            <p className="text-center col-span-full">Produk tidak ditemukan</p>
          ) : (
            // Jika ada produk, tampilkan produk yang cocok
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="border p-4 rounded-lg shadow-lg bg-white flex flex-col items-center"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-32 h-32 object-cover mb-4"
                />
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-500">
                  Rp. {product.price.toLocaleString()}
                </p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
