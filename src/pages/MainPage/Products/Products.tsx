import { FC } from 'react';

import { ProductCard } from './ProductCard/ProductCard';
import { Group, List, Title, Wrapper } from './Products.styled';
import { ProductGroupM, ProductM } from '../../../api/types';

interface Props {
  cartProducts: ProductM[];
  groupItems: ProductGroupM[];
  likedProducts: ProductM[];
  onChangeCartProduct: (item: ProductM, inCart: boolean) => void;
  onChangeLikedProduct: (item: ProductM, isLiked: boolean) => void;
}

export const Products: FC<Props> = ({
  groupItems,
  likedProducts,
  cartProducts,
  onChangeLikedProduct,
  onChangeCartProduct,
}) => {
  return (
    <Wrapper>
      {groupItems.map(({ id, caption, items }) => {
        if (!items.length) return null;

        return (
          <Group key={id}>
            <Title>{caption}</Title>
            <List>
              {items.map(item => {
                const isLiked = likedProducts.some(likedProduct => likedProduct.id === item.id);
                const inCart = cartProducts.some(likedProduct => likedProduct.id === item.id);

                return (
                  <ProductCard
                    key={item.id}
                    item={item}
                    isLiked={isLiked}
                    inCart={inCart}
                    onClickLike={() => onChangeLikedProduct(item, isLiked)}
                    onClickSetToCart={() => onChangeCartProduct(item, inCart)}
                  />
                );
              })}
            </List>
          </Group>
        );
      })}
    </Wrapper>
  );
};
