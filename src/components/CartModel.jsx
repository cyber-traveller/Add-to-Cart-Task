import React, { useEffect, useState } from "react";

function CartModel({ cartProduct, setCartProduct }) {
  const [isOpen, setIsOpen] = useState(false);

  const [data, setData] = useState({ totalQuantity: 0, totalPrice: 0 });
  //   finding total price
  useEffect(() => {
    setData({
      totalQuantity: cartProduct.reduce(
        (acc, product) => acc + product.quantity,
        0
      ),
      totalPrice: cartProduct.reduce(
        (acc, product) => acc + product.price * product.quantity,
        0
      ),
    });
  }, [cartProduct]);

  // deleting cart item
  function deleteCartItem(id) {
    setCartProduct(cartProduct.filter((product) => product.id !== id));
  }

  return (
    <div className="relative text-black">
      <button
        className="flex items-center  hover:underline"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        <span className="ml-1 text-sm font-medium">
          MyCart ({data.totalQuantity})
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-[280%] md:w-96 bg-white rounded-lg shadow-xl z-10">
          <div className="bg-gray-50 p-4 border-b border-gray-500 rounded-t-lg">
            <div className=" flex justify-between items-center">
              <h2 className=" text-sm md:text-lg font-semibold ">
                MyCart ({data.totalQuantity})
              </h2>
              <a href="#" className="text-blue-500 text-sm">
                View All
              </a>
            </div>
          </div>

          <div className="max-h-96 overflow-y-auto">
            {cartProduct && cartProduct.length > 0 ? (
              <>
                {cartProduct.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 border-b border-gray-500 transition-all hover:bg-gray-100 hover:shadow-md mt-2 "
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex items-center">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-20 h-20 object-scale-down mr-4"
                        />
                        <div>
                          <h3 className="text-sm font-medium">{item.title}</h3>
                          {item.rating && (
                            <div className="flex text-sm">
                              <span className="ml-2 text-yellow-500">
                                ★ {item.rating.rate}
                              </span>
                            </div>
                          )}
                          <span className="text-xs text-green-500">
                            Free Shipping
                          </span>
                        </div>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                        </svg>
                      </button>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center border rounded">
                        <button
                          onClick={() => {
                            setCartProduct(
                              cartProduct.map((product) => {
                                if (
                                  product.id === item.id &&
                                  product.quantity > 1
                                ) {
                                  return {
                                    ...product,
                                    quantity: product.quantity - 1,
                                    subTotal:
                                      product.price * (product.quantity - 1),
                                  };
                                }
                                return product;
                              })
                            );
                          }}
                          className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                        >
                          -
                        </button>
                        <span className="px-2 py-1">{item.quantity}</span>
                        <button
                          onClick={() => {
                            setCartProduct(
                              cartProduct.map((product) => {
                                if (product.id === item.id) {
                                  return {
                                    ...product,
                                    quantity: product.quantity + 1,
                                    subTotal:
                                      product.price * (product.quantity + 1),
                                  };
                                }
                                return product;
                              })
                            );
                          }}
                          className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>
                      <span className="font-semibold">
                        ${item.subTotal.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-end mt-2 space-x-2 text-sm">
                      <button className="text-gray-500 hover:text-pink-700 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                        Move to Favourites
                      </button>
                      <button
                        onClick={() => {
                          deleteCartItem(item.id);
                        }}
                        className="text-gray-500 flex items-center hover:text-red-500"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                        Remove
                      </button>
                    </div>
                  </div>
                ))}{" "}
              </>
            ) : (
              <div className="text-center p-4">your cart is empty</div>
            )}
          </div>
          <div className="bg-gray-200 shadow-md flex items-end justify-end p-2">
            <h2 className="font-bold text-sm md:text-lg mr-3">
              Total :${data.totalPrice.toFixed(2)}
            </h2>
          </div>
          <div className="p-4 border-t border-gray-200">
            <button
              onClick={() => {
                if (cartProduct.length === 0) {
                  alert("your cart is empty");
                  return;
                }
                setCartProduct([]);
                alert(
                  "Order placed successfully Thank you for shopping with us"
                );
              }}
              className="w-full bg-blue-500 text-white rounded-lg py-2 font-semibold hover:bg-blue-600 transition duration-300"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default CartModel;
