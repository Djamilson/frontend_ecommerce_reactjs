export function createHorarioRequest(data) {
  return {
    type: '@horario/CREATE_HORARIO_REQUEST',
    tempo: { data },
  };
}

export function updateHorarioSuccess(data) {
  return {
    type: '@horario/CREATE_HORARIO_SUCCESS',
    tempo: { data },
  };
}

export function createHorariofailure() {
  return {
    type: '@horario/CREATE_HORARIO_REQUEST',
  };
}
