import { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { PageWrapper } from '../../components/App/App.styled';
import { Button } from '../../components/Button/Button';
import { Empty } from '../../components/Empty/Empty';

export const OrderPage: FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <PageWrapper>
      <Empty subCaption={<Button onClick={() => navigate('/')}>Вернуться на главную</Button>}>
        Заказ №{id} оформлен
      </Empty>
    </PageWrapper>
  );
};
