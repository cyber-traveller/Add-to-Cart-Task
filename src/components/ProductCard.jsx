function ProductCard({ id, title, price, image, description, addTOCart }) {
  return (
    <div
      key={id}
      className="text-xs md:text-sm flex border-b border-gray-500 transition-all hover:bg-gray-100 hover:shadow-xl hover:scale-[105%] duration-300 "
    >
      <div className="relative flex flex-col justify-center md:w-full md:max-w-md bg-white rounded-lg shadow-lg overflow-hidden h-[380px] md:h-[480px]">
        <div className="p-3">
          <button className="absolute top-2 right-2  ">
            <span className="material-icons active:text-red-600">favorite</span>
          </button>
          <img
            src={image}
            alt="Nike Air Max"
            className="w-full h-32 md:h-52 object-scale-down"
          />
        </div>
        <div className="p-4">
          <div className="flex flex-col md:flex-row justify-between mb-2">
            <h2 className="text-sm md:text-base font-bold text-gray-800 line-clamp-2  md:w-[80%]">
              {title}
            </h2>
            <span className="text-sm md:text-2xl font-bold text-blue-600 self-start">${price}</span>
          </div>
          <p className="text-gray-600 mb-6 line-clamp-3">{description}</p>
          <button
            onClick={() => {
              addTOCart(id);
            }}
            className="w-full mt-2 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 flex items-center justify-center"
          >
            <span className="material-icons md:mr-2 ">shopping_cart</span>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
