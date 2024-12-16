import { Link } from "react-router-dom";
import { useCart } from "../../context/cartContext";

const ProductList = () => {
  return (
    <div className="max-w-full overflow-x-auto">
      <div className="grid grid-flow-col auto-cols-[150px] gap-4">
        <CardProduct />
      </div>
    </div>
  );
};

const CardProduct = () => {
  const { addToCart, productData } = useCart();

  return (
    <>
      {productData.map((product) => (
        <div
          key={product.id}
          className="flex flex-row  border border-gray-300 rounded-lg"
        >
          <div className="flex flex-col w-full items-center">
            <Link className="h-1/2 p-2 w-full" to={`/product/${product.name}`}>
              <img
                className="bg-contain h-full w-full"
                src={product.image}
                alt={product.name}
              />
            </Link>
            <div className="flex flex-col justify-between mt-2 w-full p-2">
              <Link to={`/product/${product.name}`}>
                <div>
                  <h1 className="text-lg font-bold">{product.name}</h1>
                  <p className="text-sm">1 Kg</p>
                </div>
              </Link>
              <div className="flex flex-row items-center justify-between gap-2 mt-4">
                <div className="flex flex-col text-left">
                  <h1 className="text-md font-bold">
                    {product.price.toLocaleString()}
                  </h1>
                  <img className="w-12" src="rating.png" alt="" />
                  <p className="text-[8px]">5000+ kg Terjual</p>
                </div>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-[#3A6B30] text-white p-2 rounded-xl"
                >
                  <img className="w-6" src="plus.svg" alt="Add" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductList;
