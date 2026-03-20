import React from "react";

export default async function page() {
  const res = await fetch("https://api.escuelajs.co/api/v1/products");
  const data = await res.json();
  return (
    <div>
      <main>
        <h1>Fetch Server</h1>
        {data.map((item) => (
          <div className="flex bg-gray-300 gap-3" key={item.id}>
            <p>id: {item.id}</p>
            <p>name: {item.title}</p>
          </div>
        ))}
      </main>
    </div>
  );
}
