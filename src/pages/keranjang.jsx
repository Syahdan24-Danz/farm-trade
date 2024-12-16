import CardCart from "../components/keranjang/cardCart";
import PageTitle from "../components/pageTitle";

const Keranjang = () => {
  return (
    <div className="p-4 h-screen w-full max-w-[599px]">
      <PageTitle title={"Keranjang"} />
      <CardCart />
    </div>
  );
};

export default Keranjang;
