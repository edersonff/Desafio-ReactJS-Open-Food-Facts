import { create } from "zustand";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

type CartStore = {
  cart: CartItem[];
  count: number;
  addItem: (item: CartItem) => void;
};
export const useCartStore = create<CartStore>((set) => ({
  cart: [],
  count: 0,
  addItem: (item: CartItem) =>
    set((state) => ({ cart: [...state.cart, item], count: state.count + 1 })),
}));
