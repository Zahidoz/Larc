import "./style.scss";
import React,{ useEffect } from "react";
import { Helmet } from "react-helmet";

import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { ProductCard } from "../../components/ProductCard";

import { products } from "../../data/products";

const ProductsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="products-p">


      <Nav />
      <section className="products-s">
        <h2>New Arrivals</h2>
        <p>Latest From our Store</p>
        <div className="container">
          {products.slice(0, 13).map((item) => {
            return <ProductCard key={item.id} item={item} />;
          })}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProductsPage;
