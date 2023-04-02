import { api } from "../provider";

export type Index = {
  up_time: number;
  next_import: number;
  db_write: boolean;
  db_read: boolean;
};

export const IndexService = {
  index: () => api.get<Index>("/"),
};
