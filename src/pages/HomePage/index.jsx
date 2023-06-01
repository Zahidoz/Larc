import React, { useEffect } from "react";
import "./style.scss";

import Footer from "../../components/Footer";
import Hero from "../../components/Hero";

import { ProductCard } from "../../components/ProductCard";

import { products } from "../../data/products";
import { Helmet } from "react-helmet";

import categoryWomen from "../../assets/categories/cat-women.png";
import categoryMen from "../../assets/categories/cat-men.png";
import categoryAccess from "../../assets/categories/cat-access.png";

import news1 from "../../assets/news/news1.jpg";
import news2 from "../../assets/news/news2.jpg";
import news3 from "../../assets/news/news3.jpg";
import news4 from "../../assets/news/news4.jpg";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Larc | Home Page</title>
        <style>
          {`
           nav > .container> ul li {
            color: #fff;
            }
            nav > .container> ul>li>svg{
            fill: #fff;
            }
            nav > .container> ul>svg {
             fill: #fff;
            }
            nav > .container> ul>.hamburger > .bar {
             background: #fff;
            }
            
           nav > .container> .sidenav {
           background: #706762;
            }
            nav > .container> .sidenav>li{
           color: #fff;
            }
            nav > .container> .sidenav>li:hover{
           color: #fff;
           border-color: #fff
            }

              
          `}
        </style>
      </Helmet>
      <Hero />
      <section className="products-s">
        <h2>New Arrivals</h2>
        <p>Latest From our Store</p>
        <div className="container">
          {products.slice(0, 13).map((item) => {
            return <ProductCard key={item.id} item={item} />;
          })}
        </div>
      </section>
      <section className="categories-cards">
        <div className="container">
          <div className="cat-card">
            <img src={categoryWomen} alt="" />
            <h2>Women</h2>
          </div>
          <div className="cat-card">
            <img src={categoryMen} alt="" />
            <h2>Men</h2>
          </div>
          <div className="cat-card">
            <img src={categoryAccess} alt="" />
            <h2>Accessories</h2>
          </div>
        </div>
      </section>
      <section className="news-s">
        <div className="container">
          <h1>Latest News</h1>
          <p>News, press releases and multimedia</p>

          <div className="news-cards">
            <div className="news-card">
              <img src={news1} alt="" />
              <p>OCTOBER 22, 2016</p>
              <h2>"Summer Is Not Ever Yet" Show</h2>
            </div>
            <div className="news-card">
              <img src={news2} alt="" />
              <p>SEPTEMBER 12, 2016</p>
              <h2>New York Fashion Show, Looks and More</h2>
            </div>
            <div className="news-card">
              <img src={news3} alt="" />
              <p>OCTOBER 3, 2016</p>
              <h2>Kids Winter Collection</h2>
            </div>
            <div className="news-card">
              <img src={news4} alt="" />
              <p>OCTOBER 27, 2016</p>
              <h2>"Want My Look" gymwear editorial</h2>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
