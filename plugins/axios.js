/** RIZGUST, AXIOS OVERIDE
 * CREATED : 20201202, by rizgust
 * FUNCTION: overide axios life cycle functions
 * USAGE   : Auth guard or other request and response handler
 */
export default function ({ $axios, store, redirect, getters }) {
  $axios.onRequest((request) => {
    store.commit('setLoading', true);
    console.log('loading');
    return request;
  });

  $axios.onResponse((response) => {
    store.commit('setLoading', false);
    console.log('loading ended');
    return response;
  });

  $axios.onError((error) => {
    store.commit('setLoading', false);
    console.log('error ' + error);
    if(error == 'Error: Network Error') {
      store.commit('setOfflineMode', true);
      return {error: 'Network Error'};
    } else {
      return error;
    }
  });
}
