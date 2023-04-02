import React from "react";
import { motion } from "framer-motion";
/**
 * 
 * @param param0 

export const MyComponent = () => (
  <motion.div
    
    
    transition={{ duration: 0.5 }}
  />
)
 * @returns 
 */
export default function Card({ image, text }: { image: string; text: string }) {
  return (
    <div className="bg-white h-96 border max-w-xs md:max-w-none overflow-hidden relative center">
      <div
        className="w-full h-full absolute bg-black select-none"
        draggable={false}
      >
        <motion.img
          className="h-full w-full object-cover hover:scale-105"
          style={{
            transition: "transform 0.3s ease-in-out",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.7 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          src={image}
          alt=""
        />
      </div>
      <div className="p-10 relative z-10 select-none pointer-events-none">
        <motion.h3
          initial={{ opacity: 0, top: 40 }}
          whileInView={{ opacity: 1, top: 0 }}
          transition={{ duration: 0.6 }}
          className="font-semibold text-xl leading-6 text-gray-50 my-2 relative"
        >
          {text}
        </motion.h3>
      </div>
    </div>
  );
}
