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

export interface ProductsInfoM {
  cartProducts: ProductM[];
  groups: ProductGroupM[];
  likedProducts: ProductM[];
}

export interface OrderM {
  city: string;
  date: string | Date;
  email: string;
  home: string;
  id: string;
  name: string;
  phone: string;
  products: ProductM[];
  street: string;
}

export interface SaveOrderM {
  city: string;
  date: string | Date;
  email: string;
  home: string;
  name: string;
  phone: string;
  street: string;
}
