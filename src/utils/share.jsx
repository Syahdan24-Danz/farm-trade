import { useCart } from "../context/cartContext";
const ShareToggle = () => {
  const { productData } = useCart();

  const product = productData.find((prod) => prod.name === name);
  console.log(product);
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: product.name,
          text: `Check out this product: ${product.name}`,
          url: window.location.href,
        })
        .then(() => {
          console.log("Produk berhasil dibagikan!");
        })
        .catch((error) => {
          console.log("Error sharing product: ", error);
        });
    } else {
      alert("Fitur share tidak didukung di browser ini");
    }
  };
  return (
    <button
      onClick={handleShare}
      className="hover:bg-gray-700 rounded-full absolute top-4 right-4"
    >
      <img className="w-8" src="../share.svg" alt="" />
    </button>
  );
};

export default ShareToggle;
