import React from 'react';

import { FaSignOutAlt, FaShoppingCart, FaSignInAlt } from 'react-icons/fa';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Menu from '~/components/Menu';
import Notifications from '~/components/Notifications';
import logo from '~/assets/logo-purple.svg';

import { Container, Cart, Content, AreaLogin } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">Home</Link>
        </nav>

        <Menu />

        <aside>
          <Notifications />
          <Cart to="/cart">
            <div>
              <strong>Meu Carrinho</strong>
              <span>3 Itens</span>
            </div>
            <FaShoppingCart color="#7159c1" size={28} />{' '}
          </Cart>
          <AreaLogin to="/signIn">
            <div>
              <strong>Acessar</strong>
              <span>Área segura</span>
            </div>
            <FaSignInAlt color="#7159c1" size={28} />{' '}
          </AreaLogin>
        </aside>
      </Content>
    </Container>
  );
}
