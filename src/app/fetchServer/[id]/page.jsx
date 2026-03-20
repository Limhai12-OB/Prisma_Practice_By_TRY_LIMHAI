import React from "react";

export default async function Page({ params }) {
  const { id } = await params;

  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
  const data = await res.json();
  return (
    <div>
      <h1>Fetch Server by ID</h1>
      <p>{data.id}</p>
      <p>{data.title}</p>
    </div>
  );
}
