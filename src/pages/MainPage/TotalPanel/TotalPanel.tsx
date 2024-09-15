import { FC } from 'react';

import { Content, Total, Wrapper } from './TotalPanel.styled';
import { ProductM } from '../../../api/types';
import { Button } from '../../../components/Button/Button';

interface Props {
  cartProducts: ProductM[];
}

export const TotalPanel: FC<Props> = ({ cartProducts }) => {
  const priceTotal = cartProducts.reduce((acc, item) => acc + item.price, 0);

  return (
    <Wrapper>
      <Content>
        <Total>Итого: {priceTotal} руб.</Total>
        <Button>Перейти к оформлеию</Button>
      </Content>
    </Wrapper>
  );
};
