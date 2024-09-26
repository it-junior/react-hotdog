import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Column, Content, Field } from './OrderFormPage.styled';
import { api } from '../../api/api';
import { SaveOrderM } from '../../api/types';
import { PageWrapper } from '../../components/App/App.styled';
import { RoutesConstants } from '../../components/App/routes';
import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';
import { Loader } from '../../components/Loader/Loader';
import { Panel } from '../../components/Panel/Panel';

export const OrderFormPage: FC = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [fields, setFields] = useState<Omit<SaveOrderM, 'date'>>({
    name: '',
    phone: '',
    email: '',
    home: '',
    city: '',
    street: '',
  });

  const { name, email, phone, city, street, home } = fields;

  return (
    <PageWrapper>
      {renderContent()}
      <Panel>
        <Button onClick={handleSubmit}>Оформить заказ</Button>
      </Panel>
    </PageWrapper>
  );

  function renderContent() {
    if (isLoading) return <Loader />;

    return (
      <Content>
        <Column>
          <Field>
            <div>Имя</div>
            <Input value={name} placeholder="Введите имя" onChange={value => handleChange({ name: value })} />
          </Field>
          <Field>
            <div>Email</div>
            <Input value={email} placeholder="Введите email" onChange={value => handleChange({ email: value })} />
          </Field>
          <Field>
            <div>Телефон</div>
            <Input value={phone} placeholder="Введите телефон" onChange={value => handleChange({ phone: value })} />
          </Field>
        </Column>
        <Column>
          <Field right>
            <div>Город</div>
            <Input value={city} placeholder="Введите город" onChange={value => handleChange({ city: value })} />
          </Field>
          <Field right>
            <div>Улица</div>
            <Input value={street} placeholder="Введите улицу" onChange={value => handleChange({ street: value })} />
          </Field>
          <Field right>
            <div>Дом</div>
            <Input value={home} placeholder="Введите дом" onChange={value => handleChange({ home: value })} />
          </Field>
        </Column>
      </Content>
    );
  }

  function handleChange(value: Partial<SaveOrderM>) {
    setFields(prevState => ({ ...prevState, ...value }));
  }

  async function handleSubmit() {
    try {
      setIsLoading(true);
      const { id } = await api.order({ ...fields, date: new Date(), phone: '+79999999999' });

      navigate(`${RoutesConstants.Order}/${id}`, { replace: true });
    } catch (e) {
      console.log(e);
    }
  }
};
