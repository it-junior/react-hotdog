import { PRODUCT_GROUP_LIST } from './constatns';
import { ProductGroupM } from './types';

class Api {
  private async delay() {
    return new Promise(resolve => setTimeout(resolve, Math.random() * 2000));
  }
  public async getProducts(): Promise<ProductGroupM[]> {
    await this.delay();

    return Promise.resolve(PRODUCT_GROUP_LIST);
  }
}

export const api = new Api();
