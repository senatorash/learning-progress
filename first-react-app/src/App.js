import products from "./product";
import ProductCard from "./components/ProductCard";

const App = () => {
  return (
    <section className="container">
      <div className="row">
        {products.length > 0 ? (
          products.map((product) => {
            return (
              <ProductCard
                key={product.id}
                productName={product.name}
                productPrice={product.price}
                productImage={product.image}
                productDesc={product.description}
              />
            );
          })
        ) : (
          <h1>No product available</h1>
        )}

        {/* second method */}
        {/* {products.length > 0 &&
          products.map((product) => {
            return (
              <ProductCard
                key={product.id}
                productName={product.name}
                productPrice={product.price}
                productImage={product.image}
                productDesc={product.description}
              />
            );
          })}

        {products.length === 0 && <h1>No products found</h1>} */}
      </div>
    </section>
  );
};

export default App;
