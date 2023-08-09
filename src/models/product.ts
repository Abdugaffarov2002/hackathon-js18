export type TCategory = "barca" | "real" | "chelsy";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: TCategory;
  likes: number;
}

export type IProductCreate = Omit<Product, "id">;
