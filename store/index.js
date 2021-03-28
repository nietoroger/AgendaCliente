export const state = () => ({
  isLoading: false,
  reserva: null,
  especialidad: null,
  prevision: null,
  profesional: null,
  especialidades: [],
  profesionales: []
});

export const getters = () => {
  especialidad: state => {
    return state.especialidad;
  }
}

export const mutations = {
  SET_LOADING: (state, isLoading) => {
    state.isLoading = isLoading;
  },
  SET_RESERVA: (state, payload) => {
    state.reserva = payload;
  },
  SET_ESPECIALIDAD: (state, payload) => {
    state.especialidad = payload;
  },
  SET_ESPECIALIDADES: (state, payload) => {
    state.especialidades = payload;
  },
  SET_PROFESIONAL: (state, payload) => {
    state.profesional = payload;
  },
  SET_PROFESIONALES: (state, payload) => {
    state.profesionales = payload;
  },
  SET_PREVISION: (state, payload) => {
    state.prevision = payload;
  }
}

export const actions = {
  changeLoadingState({ commit }, payload) {
    commit("SET_LOADING", payload);
  },
  setReserva({ commit }, payload) {
    commit("SET_RESERVA", payload);
  },
  setEspecialidad({ commit }, payload) {
    commit("SET_ESPECIALIDAD", payload);
  },
  setProfesional({ commit }, payload) {
    commit("SET_PROFESIONAL", payload);
  },
  setPrevision({ commit }, payload) {
    commit("SET_PREVISION", payload);
  },
  setEspecialidades({ commit }, payload) {
    commit("SET_ESPECIALIDADES", payload);
  },
  setProfesionales({ commit }, payload) {
    commit("SET_PROFESIONALES", payload);
  },
}
