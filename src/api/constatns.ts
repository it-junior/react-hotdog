import { ProductGroupM } from './types';

export const LIKED_PRODUCTS_KEY = 'likedProducts';
export const CART_PRODUCTS_KEY = 'cartProducts';

export const PRODUCT_GROUP_LIST: ProductGroupM[] = [
  {
    id: 'g-1',
    caption: 'Булки',
    items: [
      {
        id: 'p-1',
        img: 'product-1.png',
        caption: 'Обычная',
        price: 100,
      },
      {
        id: 'p-2',
        img: 'product-2.png',
        caption: 'С кунжутом',
        price: 120,
      },
      {
        id: 'p-3',
        img: 'product-3.png',
        caption: 'C семечками',
        price: 140,
      },
      {
        id: 'p-4',
        img: 'product-4.png',
        caption: 'Френч',
        price: 200,
      },
    ],
  },
  {
    id: 'g-2',
    caption: 'Сосики',
    items: [
      {
        id: 'p-5',
        img: 'product-5.png',
        caption: 'Куриная',
        price: 80,
      },
      {
        id: 'p-6',
        img: 'product-6.png',
        caption: 'Сырная',
        price: 95,
      },
      {
        id: 'p-7',
        img: 'product-7.png',
        caption: 'Баварская',
        price: 105,
      },
    ],
  },
  {
    id: 'g-3',
    caption: 'Сосусы',
    items: [
      {
        id: 'p-8',
        img: 'product-8.png',
        caption: 'Кетчуп',
        price: 20,
      },
      {
        id: 'p-9',
        img: 'product-9.png',
        caption: '1000  островов',
        price: 30,
      },
      {
        id: 'p-10',
        img: 'product-10.png',
        caption: 'Сырный',
        price: 30,
      },
      {
        id: 'p-11',
        img: 'product-11.png',
        caption: 'Барбекю',
        price: 30,
      },
    ],
  },
];
