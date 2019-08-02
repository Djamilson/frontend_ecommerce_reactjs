import React from 'react';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

import { tokenUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(1, 'No mínimo 1 caracter')
    .required('A senha é obrigatória'),
});

export default function Token() {
  const dispatch = useDispatch();

  function handleSubmit({ token }) {
    dispatch(tokenUpRequest(token));
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome" />
        <Input name="email" type="email" placeholder="Seu email" />
        <Input name="password" type="password" placeholder="Sua Senha" />

        <button type="submit">Criar conta</button>
        <div>
          <Link to="/">Já tenho conta</Link>
        </div>
      </Form>
    </>
  );
}
