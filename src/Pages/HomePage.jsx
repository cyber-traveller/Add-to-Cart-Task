import { React, useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import NavBar from "../components/NavBar";

function HomePage() {
  const [products, setProducts] = useState([]);
  const [cartProduct, setCartProduct] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  function addTOCart(id) {
    if (cartProduct.find((product) => product.id === id)) {
      alert("Product already in cart");
      return;
    }
    let item =products.find((product) => product.id === id)
    const updatedCartProducts = [...cartProduct,
        
      {...item,
        quantity: 1, // Add the quantity property with an initial value of 1
        subTotal:item.price,// Add the subTotal property with an initial value of 0
      },
    ];

    setCartProduct(updatedCartProducts);
  }
  useEffect(() => {
    console.log(cartProduct);
  }, [cartProduct]);

  return (
    <>
      <div className="sticky top-0 z-10 px-4 bg-white shadow-md py-2 text-xl">
        <NavBar cartProduct={cartProduct} setCartProduct={setCartProduct} />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 min-h-screen bg-gray-100 p-3 md:p-20">
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              description={product.description}
              addTOCart={addTOCart}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default HomePage;
