import { CART_PRODUCTS_KEY, LIKED_PRODUCTS_KEY, ORDERS_KEY, PRODUCT_GROUP_LIST } from './constatns';
import { OrderM, ProductM, ProductsInfoM, SaveOrderM } from './types';

class Api {
  private async delay() {
    return new Promise(resolve => setTimeout(resolve, Math.random() * 2000));
  }

  private getItemsFromLS<T>(key: string) {
    return JSON.parse(localStorage.getItem(key) ?? '[]') as T;
  }

  public async getProductsInfo(): Promise<ProductsInfoM> {
    await this.delay();

    const likedProducts = this.getItemsFromLS<ProductM[]>(LIKED_PRODUCTS_KEY);
    const cartProducts = this.getItemsFromLS<ProductM[]>(CART_PRODUCTS_KEY);

    return Promise.resolve({ groups: PRODUCT_GROUP_LIST, likedProducts, cartProducts });
  }

  public async toggleLike(product: ProductM): Promise<void> {
    await this.delay();

    const likedProducts = this.getItemsFromLS<ProductM[]>(LIKED_PRODUCTS_KEY);
    const isLiked = likedProducts.some(likedProduct => likedProduct.id === product.id);

    localStorage.setItem(
      LIKED_PRODUCTS_KEY,
      JSON.stringify(
        isLiked ? likedProducts.filter(likedProduct => likedProduct.id !== product.id) : [...likedProducts, product],
      ),
    );
  }

  public async setToCart(product: ProductM): Promise<void> {
    await this.delay();

    const cartProduct = this.getItemsFromLS<ProductM[]>(CART_PRODUCTS_KEY);
    const inCart = cartProduct.some(likedProduct => likedProduct.id === product.id);

    localStorage.setItem(
      CART_PRODUCTS_KEY,
      JSON.stringify(
        inCart ? cartProduct.filter(likedProduct => likedProduct.id !== product.id) : [...cartProduct, product],
      ),
    );
  }

  public async order(orderInfo: SaveOrderM): Promise<OrderM> {
    await this.delay();

    const cartProduct = this.getItemsFromLS<ProductM[]>(CART_PRODUCTS_KEY);
    const orders = this.getItemsFromLS<OrderM[]>(ORDERS_KEY);

    const order: OrderM = {
      ...orderInfo,
      id: orders.length + 1 + '',
      products: cartProduct,
    };

    localStorage.setItem(ORDERS_KEY, JSON.stringify([...orders, order]));
    localStorage.removeItem(CART_PRODUCTS_KEY);

    return order;
  }
}

export const api = new Api();
