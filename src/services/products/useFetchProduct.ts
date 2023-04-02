import { useQuery, QueryFunctionContext } from "@tanstack/react-query";

import { ProductService, ListProducts, GetProduct } from "./product";

export async function getAllProducts(
  ctx: QueryFunctionContext
): Promise<ListProducts> {
  const [, limit, offset, status] = ctx.queryKey;
  const { data } = await ProductService.list(
    Number(limit),
    Number(offset),
    String(status)
  );

  return data;
}

export async function getProduct(
  ctx: QueryFunctionContext
): Promise<GetProduct> {
  const [, code] = ctx.queryKey;
  const { data } = await ProductService.get(String(code));

  return data;
}

export default function useFetchAllProducts(
  limit?: number,
  offset?: number,
  status?: string
) {
  return useQuery<ListProducts>(
    ["products", limit, offset, status],
    getAllProducts
  );
}

export function useFetchProduct(code: string) {
  return useQuery<GetProduct>(["product", code], getProduct);
}
