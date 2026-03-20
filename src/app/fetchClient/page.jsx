"use client";
import React, { useEffect, useState } from "react";

export default function page() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((info) => setData(info));
  }, []);
  return (
    <div>
      <h1>Fetch Client</h1>
      {data.map((product) => (
        <div key={product.id} className="flex bg-gray-300 gap-3">
          <p>id: {product.id}</p>
          <p>name: {product.title}</p>
        </div>
      ))}
    </div>
  );
}
