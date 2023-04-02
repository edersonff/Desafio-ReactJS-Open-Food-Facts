import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCartStore } from "../../store/cart";

export default function Header() {
  const cart = useCartStore((state) => state.count);
  return (
    <nav className="bg-white shadow-lg">
      <div className="md:flex items-center justify-between py-2 px-8 md:px-12">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800 md:text-3xl">
            <a href="#">Desafio ReactJS Open Food Facts</a>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="block text-gray-800 hover:text-gray-700 focus:text-gray-700 focus:outline-none"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path
                  className="hidden"
                  d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z"
                />
                <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex-col md:flex-row hidden md:flex -mx-2">
          {[
            { name: "Home", href: "#" },
            { name: "About", href: "#" },
            { name: "Contact", href: "#" },
          ].map((link) => (
            <a
              href={link.href}
              className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2 transition-all"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#"
            className="text-gray-800 rounded hover:text-gray-600 hover:font-medium p-2 flex justify-center items-center md:mx-2 transition-all relative"
          >
            {cart > 0 ? (
              <img
                src="/icons/cart/cart-filled.png"
                alt="cart"
                className="w-6 h-6 object-scale-down"
              />
            ) : (
              <img
                src="/icons/cart/cart.png"
                alt="cart"
                className="w-6 h-6 object-scale-down"
              />
            )}
            {cart > 0 && (
              <span className="absolute top-1 right-0 bg-red-500 rounded-full w-4 h-4 flex justify-center items-center text-white text-xs">
                {cart}
              </span>
            )}
          </a>
        </div>
      </div>
    </nav>
  );
}
