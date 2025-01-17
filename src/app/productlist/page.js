"use client";
import { useEffect, useState } from "react";
export default function ProductList() {
  const [product, setProduct] = useState([]);

  useEffect(async () => {
    let data = await fetch("https://dummyjson.com/products");
    data = await data.json();
    console.log(data);
    setProduct(data.products);
  }, []);
  return (
    <>
      <h1>Product list</h1>
      {product.map(
        (items, index) => (
          <div key={index}>
            <h3>Title : {items.title}</h3>
            <p>Description : {items.description}</p>
            <p>Brand : {items.brand}</p>
            <p>Categpry : {items.category}</p>
            <h2>
              {items.reviews.map((data, index) => (
                <div key={index}>
                  <h4>Comment : {data.comment}</h4>
                </div>
              ))}
            </h2>
          </div>
        )
        // <div key={index}>
        //   <h3>{items.title}</h3>
        // </div>;
      )}
    </>
  );
}
