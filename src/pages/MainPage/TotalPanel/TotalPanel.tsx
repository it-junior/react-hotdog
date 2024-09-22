import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Total } from './TotalPanel.styled';
import { ProductM } from '../../../api/types';
import { RoutesConstants } from '../../../components/App/routes';
import { Button } from '../../../components/Button/Button';
import { Panel } from '../../../components/Panel/Panel';

interface Props {
  cartProducts: ProductM[];
}

export const TotalPanel: FC<Props> = ({ cartProducts }) => {
  const navigate = useNavigate();
  const priceTotal = cartProducts.reduce((acc, item) => acc + item.price, 0);

  return (
    <Panel>
      <Total>Итого: {priceTotal} руб.</Total>
      <Button onClick={() => navigate(RoutesConstants.OrderForm)}>Перейти к оформлению</Button>
    </Panel>
  );
};
