import { FC } from 'react';

import { ProductCard } from './ProductCard/ProductCard';
import { Group, List, Title, Wrapper } from './Products.styled';
import { ProductGroupM, ProductM } from '../../../api/types';

interface Props {
  groupItems: ProductGroupM[];
  likedProducts: ProductM[];
  onChangeLikedProduct: (item: ProductM, isLiked: boolean) => void;
}

export const Products: FC<Props> = ({ groupItems, likedProducts, onChangeLikedProduct }) => {
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

                return (
                  <ProductCard
                    key={item.id}
                    item={item}
                    isLiked={isLiked}
                    onChangeLikedProduct={onChangeLikedProduct}
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
