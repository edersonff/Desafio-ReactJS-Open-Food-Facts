import { api } from "../provider";

export type Product = {
  _id: string;
  data: { [key: string]: any };
  imported_t: number;
  status: "draft" | "trash" | "publish";
};

export type ListProducts = Product[];

export type GetProduct = Product;

export type UpdateProduct = Product;

export type UpdateProductBody = {
  data: { [key: string]: any };
  status: "draft" | "trash" | "publish";
};

export const ProductService = {
  list: (limit?: number, offset?: number) =>
    api.get<ListProducts>("/products", {
      params: { limit: limit ?? "", offset: offset ?? "" },
    }),
  get: (code: string) => api.get<GetProduct>(`/products/${code}`),
  update: (code: string, body: UpdateProductBody) =>
    api.put<UpdateProduct>(`/products/${code}`, body),
  delete: (code: string) => api.delete<string>(`/products/${code}`),
};
