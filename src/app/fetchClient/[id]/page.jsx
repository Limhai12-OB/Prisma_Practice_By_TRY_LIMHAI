"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
        .then((res) => res.json())
        .then(setData);
    }
  }, [id]);

  return (
    <div>
      <h1>Fetch Client by ID</h1>
      <p>id: {data?.id}</p>
      <p>name: {data?.title}</p>
    </div>
  );
}
