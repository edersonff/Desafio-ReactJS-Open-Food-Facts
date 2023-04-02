import React, { useState } from "react";
import { AiOutlineCheck, AiOutlineShoppingCart } from "react-icons/ai";
import { Product } from "../../services/products/product";
import { useCartStore } from "../../store/cart";
import { motion } from "framer-motion";

const colorsRainbow = [
  "#ef4444",
  "#f59e0b",
  "#fbbf24",
  "#10b981",
  "#3b82f6",
  "#6366f1",
  "#8b5cf6",
];

export default function ProductComp({ item, i }: { item: Product; i: number }) {
  const [itemAdded, setItemAdded] = useState(false);
  const buttonColor = colorsRainbow[i % colorsRainbow.length];
  const addItem = useCartStore((state) => state.addItem);

  const onAddItem = () => {
    addItem({
      id: item.data.code,
      name: item.data.product_name,
      image: item.data.image_url,
      price: item.data.nutriscore_score,
      quantity: 1,
    });
    setItemAdded(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
      viewport={{ once: true }}
      className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden"
    >
      <div
        className="w-1/3 bg-cover"
        style={{
          backgroundImage: `url('${item.data.image_url}')`,
        }}
      ></div>
      <div className="w-2/3 p-4">
        <div className="flex flex-col justify-between h-full">
          <div>
            <h1 className="text-gray-900 font-bold text-2xl">
              {item.data.product_name}
            </h1>
            <p className="mt-2 text-gray-600 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit In odit
              exercitationem fuga id nam quia
            </p>
            <p className="mt-2 text-gray-600 text-sm">
              <span className="font-bold">Nutriscore: </span>
              {item.data.nutriscore_score}
            </p>
            <p className="mt-2 text-gray-600 text-sm">{item.data.tags}</p>
            <div className="flex item-center mt-2">
              <svg
                className="w-5 h-5 fill-current text-gray-700"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>
              <svg
                className="w-5 h-5 fill-current text-gray-700"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>
              <svg
                className="w-5 h-5 fill-current text-gray-700"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>
              <svg
                className="w-5 h-5 fill-current text-gray-500"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>
              <svg
                className="w-5 h-5 fill-current text-gray-500"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>
            </div>
          </div>
          <div className="flex item-center justify-between mt-3">
            <h1 className="text-gray-700 font-bold text-xl">$220</h1>
            <button
              className="px-3 py-2 text-white text-xs font-bold uppercase rounded active:scale-95 transition-all"
              style={{ backgroundColor: buttonColor }}
              onClick={onAddItem}
            >
              {itemAdded ? (
                <>
                  <AiOutlineCheck className="inline mr-3" size={20} />
                  Adicionado
                </>
              ) : (
                <>
                  {" "}
                  <AiOutlineShoppingCart className="inline mr-3" size={20} />
                  Adicionar
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
