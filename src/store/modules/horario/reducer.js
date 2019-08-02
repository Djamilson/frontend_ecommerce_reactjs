import produce from 'immer';

const INITIAL_STATE = {
  signed: false,
  loading: false,
};

export default function horario(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@horario/HORARIO_IN_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@horario/HORARIO_IN_SUCCESS': {
        draft.signed = true;
        draft.loading = false;
        break;
      }

      case '@horario/SIGN_FAILURE': {
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
