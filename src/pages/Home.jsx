import React from "react";

import Hero from "../components/Hero";
import { clothDatas } from "../data";
import Product from "../components/Product";

const Home = () => {
  return (
    <div>
      <Hero />

      <section className="py-16">
        <h1 className="text-6xl text-center mb-10"> All products</h1>
        <div className="container mx-auto">
          <div className=" mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px]">
            {clothDatas.map((clothData) => {
              return <Product clothData={clothData} key={clothData.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
