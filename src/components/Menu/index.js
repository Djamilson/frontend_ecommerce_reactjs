import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function Menu() {
  return (
    <Container>
      <ul>
        <Link to="/horario">Cadastra Horário</Link>
      </ul>
    </Container>
  );
}
