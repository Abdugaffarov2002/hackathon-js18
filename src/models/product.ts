export type TCategory = "barca" | "real" | "chelsy";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: TCategory;
  likes: number;
  image1: string;
  image2: string;
}

export type IProductCreate = Omit<Product, "id">;
