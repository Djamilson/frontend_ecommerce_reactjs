import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { createHorarioRequest, createHorariofailure } from './actions';

export function* createHorario({ tempo }) {
  try {
    const { hora, min } = tempo.data;

    const response = yield call(api.post, 'horarios', {
      hora,
      min,
    });

    toast.success(`Cadastro efetuado com sucesso!`);

    yield put(createHorarioRequest(response.data));
  } catch (error) {
    toast.error('Falha no cadastro, verifique seus dados!');
    yield put(createHorariofailure());
  }
}

export default all([
  takeLatest('@horario/CREATE_HORARIO_REQUEST', createHorario),
]);
