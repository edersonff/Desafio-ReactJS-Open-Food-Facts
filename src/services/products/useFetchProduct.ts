import { useQuery } from "@tanstack/react-query";
import { QueryFunctionContext } from "react-query";

import { ProductService, ListProducts, GetProduct } from "./product";

export async function getAllProducts(
  ctx: QueryFunctionContext
): Promise<ListProducts> {
  const [, limit, offset] = ctx.queryKey;
  const { data } = await ProductService.list(Number(limit), Number(offset));

  return data;
}

export async function getProduct(
  ctx: QueryFunctionContext
): Promise<GetProduct> {
  const [, code] = ctx.queryKey;
  const { data } = await ProductService.get(String(code));

  return data;
}

export default function useFetchAllProducts(limit?: number, offset?: number) {
  return useQuery<ListProducts>(["products", limit, offset], getAllProducts);
}

export function useFetchProduct(code: string) {
  return useQuery<GetProduct>(["product", code], getProduct);
}
