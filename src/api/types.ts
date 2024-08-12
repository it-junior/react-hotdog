export interface ProductM {
  caption: string;
  id: string;
  img: string;
  price: number;
}

export interface ProductGroupM {
  caption: string;
  id: string;
  items: ProductM[];
}
