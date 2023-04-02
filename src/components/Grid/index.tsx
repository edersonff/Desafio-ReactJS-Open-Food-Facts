import React from "react";
import Card from "./Card";

export default function Grid() {
  return (
    <section className=" w-screen bg-gradient-to-br from-pink-50 to-indigo-100 p-8 py-14">
      <h1 className="font-bold text-4xl text-red-700 text-center mb-10">
        Descubra mais sobre o Open Food Facts
      </h1>

      <div className="grid justify-center md:grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-7 my-10">
        <Card
          text="Conheça o Open Food Facts"
          image="https://cdn.pixabay.com/photo/2014/12/11/02/55/cereals-563796_960_720.jpg"
        />
        <Card
          text="Conheça o Open Food Facts"
          image="https://cdn.pixabay.com/photo/2015/05/04/10/16/vegetables-752153_960_720.jpg"
        />
        <Card
          text="Conheça o Open Food Facts"
          image="https://cdn.pixabay.com/photo/2015/12/09/17/11/vegetables-1085063_960_720.jpg"
        />
        <Card
          text="Conheça o Open Food Facts"
          image="https://cdn.pixabay.com/photo/2017/10/09/19/29/eat-2834549_960_720.jpg"
        />
      </div>
    </section>
  );
}
