export const state = () => ({
  isLoading: false,
  reserva: null,
});

export const mutations = {
  SET_LOADING: (state, isLoading) => {
    state.isLoading = isLoading;
  },
  SET_RESERVA: (state, payload) => {
    state.reserva = payload;
  }
}

// export const getters = () => ({
//   getLoadingState: (state){
//     return state.isLoading;
//   }
// });

export const actions = {
  changeLoadingState({ commit }, payload) {
    commit("SET_LOADING", payload);
  },
  setReserva({commit}, payload){
    commit("SET_RESERVA", payload);
  }
}
