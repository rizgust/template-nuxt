export const state = () => ({ 
  userInfo: {
    id:'',
    name: '',
    email: '',
    avatar: '',
  },
});

export const mutations = {
    set(state, { item, value }) {
      state[item] = value;
    },
    toggle(state, { item }) {
      state[item] = !state[item];
    }
};