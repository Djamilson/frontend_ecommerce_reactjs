import React, { useState, useEffect, useMemo } from 'react';

import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { MdDelete } from 'react-icons/md';

import api from '~/services/api';

import { createHorarioRequest } from '~/store/modules/horario/actions';

import { Container, Time, Content } from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const [horario, setHorario] = useState([]);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    async function loadHorario() {
      const range = await api.get('horarios');
      const data = range.data.map(hora => {
        const [hour, minute] = hora.horario.split(':');

        return {
          time: `${hour}h${minute}min`,
        };
      });

      setHorario(data);
    }

    loadHorario();
  }, []);

  useEffect(() => {
    async function loadHorario() {
      const range = await api.get('horarios');
      const data = range.data.map(hora => {
        const [hour, minute] = hora.horario.split(':');

        return {
          time: `${hour}h${minute}min`,
        };
      });

      setHorario(data);
    }

    loadHorario();
  }, [date]);

  const horarioSize = useMemo(() => horario.length, [horario]);

  function handleSubmit(data) {
    dispatch(createHorarioRequest(data));
  }

  function handleDelete() {
  //  const range = await api.get('horarios');

  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input name="hora" placeholder="Hora" />
        <Input name="min" placeholder="Minuto" />
        <hr />

        <button type="submit">Salvar</button>
      </Form>
      <Content>
        <header>
          <strong>Total de {horarioSize} Lista de horários</strong>
        </header>
        <ul>
          {horario.map(time => (
            <Time key={time.time}>
              <strong>{time.time}</strong>
              <button type="button" onClick={handleDelete}>
                <MdDelete size={28} color="#7159c1" />
              </button>
            </Time>
          ))}
        </ul>
      </Content>
    </Container>
  );
}
