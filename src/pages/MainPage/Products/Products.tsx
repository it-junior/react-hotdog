import { FC } from 'react';

import { ProductCard } from './ProductCard/ProductCard';
import { Group, List, Title, Wrapper } from './Products.styled';
import { ProductGroupM } from '../../../api/types';

interface Props {
  groupItems: ProductGroupM[];
}

export const Products: FC<Props> = ({ groupItems }) => {
  return (
    <Wrapper>
      {groupItems.map(({ id, caption, items }) => {
        if (!items.length) return null;

        return (
          <Group key={id}>
            <Title>{caption}</Title>
            <List>
              {items.map(item => (
                <ProductCard key={item.id} item={item} />
              ))}
            </List>
          </Group>
        );
      })}
    </Wrapper>
  );
};
