import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    console.tron.log('+++>>: email ', email);
    console.tron.log('+++>>: password ', password);

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    console.tron.log('response===> ', response);

    console.tron.log('Porra Aqui: payload ', payload);

    const { token, user } = response.data;

    if (!user.provider) {
      toast.error('Usuário não é prestador de serviço');
      return;
    }
    /*
    if (!user.status) {
      toast.error(
        `Esse usuário não é está ativo, entre em contato com o administrador do sistema`
      );
      return;
    }

    if (!user.is_verifield) {
      toast.error(`Entre no email ${user.is_verified} para ativar sua conta!`);
      return;
    }
    */

    api.defaults.headers.Authorization = ` Bearer ${token}`;

    yield put(signInSuccess(token, user));

    history.push('/dashboard');
  } catch (error) {
    console.tron.log('Porra: ', error);

    toast.error('Falha na autenticação, verifique seus dados!');
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, 'users', {
      name,
      email,
      password,
      provider: true,
    });
    toast.success(
      `Cadastro efetuado com sucesso, acesse o email ${email} para a tivar sua conta!`
    );

    history.push('/dashboard');
  } catch (error) {
    toast.error('Falha no cadastro, verifique seus dados!');
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;
  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = ` Bearer ${token}`;
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
