import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Column, Content, Field } from './OrderFormPage.styled';
import { PageWrapper } from '../../components/App/App.styled';
import { RoutesConstants } from '../../components/App/routes';
import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';
import { Panel } from '../../components/Panel/Panel';

export const OrderFormPage: FC = () => {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <Content>
        <Column>
          <Field>
            <div>Имя</div>
            <Input placeholder="Введите имя" />
          </Field>
          <Field>
            <div>Email</div>
            <Input placeholder="Введите email" />
          </Field>
          <Field>
            <div>Телефон</div>
            <Input placeholder="Введите телефон" />
          </Field>
        </Column>
        <Column>
          <Field right>
            <div>Город</div>
            <Input placeholder="Введите город" />
          </Field>
          <Field right>
            <div>Улица</div>
            <Input placeholder="Введите улицу" />
          </Field>
          <Field right>
            <div>Дом</div>
            <Input placeholder="Введите дом" />
          </Field>
        </Column>
      </Content>
      <Panel>
        <Button onClick={() => navigate(`${RoutesConstants.Order}/0010`)}>Оформить заказ</Button>
      </Panel>
    </PageWrapper>
  );
};
