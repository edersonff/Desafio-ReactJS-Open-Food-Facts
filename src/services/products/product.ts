import { api } from "../provider";

export type Product = {
  id: string;
  data: { [key: string]: any };
  imported_t: number;
  status: Status;
};

export type ListProducts = Product[];

export type GetProduct = Product;

export type UpdateProduct = Product;

export type Status = "draft" | "trash" | "publish";

export type UpdateProductBody = {
  data?: { [key: string]: any };
  status?: Status;
};

export const ProductService = {
  list: (limit?: number, offset?: number, status?: string) =>
    api.get<ListProducts>("/products", {
      params: { limit: limit ?? "", index: offset ?? "", status },
    }),
  get: (code: string) => api.get<GetProduct>(`/products/${code}`),
  update: (code: string, body: UpdateProductBody) =>
    api.put<UpdateProduct>(`/products/${code}`, body),
  delete: (code: string) => api.delete<string>(`/products/${code}`),
};
