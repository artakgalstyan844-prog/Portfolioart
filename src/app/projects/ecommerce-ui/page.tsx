"use client";

import { useState } from "react";

export default function EcommerceLanding() {
  const [cart, setCart] = useState(0);
  const [search, setSearch] = useState("");

  const products = [
    { name: "Nike Air Max", price: "$120", category: "Shoes", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff" },
    { name: "Apple Watch", price: "$299", category: "Tech", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30" },
    { name: "Headphones", price: "$89", category: "Tech", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80" },
  ];

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-[#0b0f19] text-white">

      {/* NAV */}
      <nav className="flex justify-between items-center px-6 md:px-24 py-6 border-b border-gray-800">
        <h1 className="text-xl font-bold">ShopifyX</h1>

        <button className="bg-blue-600 px-4 py-2 rounded">
          Cart ({cart})
        </button>
      </nav>

      {/* HERO */}
      <section className="px-6 md:px-24 py-16 text-center">
        <h1 className="text-5xl font-bold">Find Your Best Products</h1>

        {/* SEARCH */}
        <input
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mt-6 w-full md:w-1/2 p-3 rounded bg-[#111827]"
        />
      </section>

      {/* PRODUCTS */}
      <section className="px-6 md:px-24 py-10">

        <h2 className="text-2xl font-bold mb-6">Products</h2>

        <div className="grid md:grid-cols-3 gap-6">

          {filtered.map((p) => (
            <div
              key={p.name}
              className="bg-[#111827] p-5 rounded-xl hover:scale-[1.03] transition"
            >

              <img
                src={p.img}
                className="h-48 w-full object-cover rounded mb-4"
              />

              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="text-gray-400">{p.price}</p>
              <p className="text-gray-500 text-sm">{p.category}</p>

              <button
                onClick={() => setCart(cart + 1)}
                className="mt-4 w-full bg-blue-600 py-2 rounded"
              >
                Add to Cart
              </button>

            </div>
          ))}

        </div>

      </section>

    </div>
  );
}