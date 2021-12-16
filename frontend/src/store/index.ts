import { createStore } from "vuex";
import axios from "axios";

const apiUrl = "http://localhost:3011";

export default createStore({
  state: {
    events: [],
  },
  getters: {
    events: (state) => {
      return state.events;
    },
  },
  mutations: {
    setEvents: (state, events) => (state.events = events),
  },
  actions: {
    async fetchEvents({ commit }) {
      const response = await axios.get(`${apiUrl}/events`);
      commit("setEvents", response.data);
    },
  },
  modules: {},
});
