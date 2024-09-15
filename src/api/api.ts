import { LIKED_PRODUCTS_KEY, PRODUCT_GROUP_LIST } from './constatns';
import { ProductM, ProductsInfoM } from './types';

class Api {
  private async delay() {
    return new Promise(resolve => setTimeout(resolve, Math.random() * 2000));
  }

  private getLikedProducts() {
    return JSON.parse(localStorage.getItem(LIKED_PRODUCTS_KEY) ?? '[]') as ProductM[];
  }

  public async getProductsInfo(): Promise<ProductsInfoM> {
    await this.delay();

    const likedProducts = this.getLikedProducts();

    return Promise.resolve({ groups: PRODUCT_GROUP_LIST, likedProducts });
  }

  public async toggleLike(product: ProductM): Promise<void> {
    await this.delay();

    const likedProducts = this.getLikedProducts();
    const isLiked = likedProducts.some(likedProduct => likedProduct.id === product.id);

    localStorage.setItem(
      LIKED_PRODUCTS_KEY,
      JSON.stringify(
        isLiked ? likedProducts.filter(likedProduct => likedProduct.id !== product.id) : [...likedProducts, product],
      ),
    );
  }
}

export const api = new Api();
