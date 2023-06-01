import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { products } from "../../data/products";
import { Helmet } from "react-helmet";
import "./style.scss";
import { ProductCard } from "../../components/ProductCard";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const [item, setItem] = useState(false);
  const params = useParams();

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  const getData = async () => {
    const x = await products.find((x) => x.id == params.id);
    setItem(x);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getData();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    getData();
  }, [params]);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  //   getData();
  // }, [clicked]);

  return (
    <div className="product-p">
      <Helmet>
        <title>Larc | {`${item?.name}`}</title>
      </Helmet>
      <Nav />
      <div className="info-s">
        <div className="img-gallery">
          {item?.img?.map((image,index) => {
            return <img key={index} src={`${image}`} alt="" />;
          })}
        </div>
        <div className="txt">
          <div className="box">
            <h1>Broken T Shirt</h1>
            <p>
              This black t-shirt is constructed using fine cotton poplin on the
              front panel for a refined, elegant finish and a contrasting
              textural pique knit on the reverse for comfort and detail. The fit
              is tailored, with both fabrics adding elements of stretch for
              increased comfort.
            </p>
            <ul>
              <li>
                SKU: <span>3</span>
              </li>
              <li>
                Categories: <span>Men, T Shirts</span>
              </li>
              <li>
                Tags: <span>broken, tshirt</span>
              </li>
            </ul>
            <h2>$9</h2>
            <div className="btns">
              <select name="" id="">
                <option value="M">(XS) X Side</option>
                <option value="M">(S) Side</option>
                <option value="M">(M) Medium</option>
                <option value="M">(L) Large</option>
                <option value="M">(XL) Extra Large</option>
              </select>
              <input type="number" />
              <button>Add to card</button>
            </div>
          </div>
        </div>
      </div>
      <div className="other-cards">
        {shuffle(products)
          .slice(0, 3)
          .map((product) => {
            return (
              <ProductCard
                key={item.id}
                item={product}
              />
            );
          })}
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
