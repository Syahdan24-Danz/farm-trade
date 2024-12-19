import Search from "../components/beranda/search";
import CardCategory from "../components/pencarian/cardKategori";

const isiCategory = [
  {
    id: 1,
    img: "buahbuahan.png",
    title: "Buah - buahan",
  },
  {
    id: 2,
    img: "sayurSayuran.png",
    title: "Sayur - sayuran",
  },
  {
    id: 3,
    img: "bibit.png",
    title: "Bibit Tanaman",
  },
  {
    id: 4,
    img: "rempah.png",
    title: "Rempah-Rempah",
  },
  {
    id: 5,
    img: "tanaman.png",
    title: "Tanaman Hias",
  },
  {
    id: 6,
    img: "tani.png",
    title: "Hasil Tani Lainnya",
  },
];
const Pencarian = () => {
  return (
    <div className="p-4 w-full">
      <h1 className="text-2xl font-bold text-center mb-4">Temukan Produk</h1>
      <Search />
      <div className="grid grid-cols-2 gap-4">
        {isiCategory.map((item) => (
          <CardCategory key={item.id} img={item.img} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default Pencarian;
