import Search from "../components/beranda/search";
import Carousel from "../components/beranda/carousel";
import MenuKategori from "../components/beranda/menuKategori";
import ProductList from "../components/beranda/cardProduct";

const Beranda = () => {
  return (
    <>
      <div className="p-4 text-black">
        <div className="flex flex-col items-center gap-2 py-1 mb-2">
          <img className="w-8" src="yellow-carrot.png" alt="" />
          <div className="flex flex-row items-center gap-q">
            <img className="w-6" src="location.svg" alt="" />
            <h1 className="text-md ">Bandung, Indonesia</h1>
          </div>
        </div>
        <Search />
        <Carousel />
        <MenuKategori />
        <ProductList />
        <MenuKategori title="Terlaris" />
      </div>
    </>
  );
};

export default Beranda;
