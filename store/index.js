const MainUrl = 'localhost:3000';

const state = {
	loading: false,
	items: [],
};

const actions = {
	nuxtServerInit(context) {
		actions.getAllItems(context, this);
	},
	async getAllItems(context, _ = this){
		var config = {
			method: 'get',
			url: '',
		};
	  
		let {data} = await _.$axios(config);
		if (data != null){
			if (data.items != null ) context.commit('setItems', data.items);
			if (data.categories != null ) context.commit('setCategories', data.categories);
		}
		return data;
	},
};
  
const mutations = {

	setLoading(state, data) {
		state.loading = data;
	},

	setItems(state, data) {
		state.items = data;
	},

	setUserData(state, data) {
		state.sessionStorage.userInfo.id = data['id'];
		state.sessionStorage.userInfo.name = data['name'];
		state.sessionStorage.userInfo.number = data['number'];
		state.sessionStorage.userInfo.email = data['email'];
		state.sessionStorage.userInfo.avatar = (data['profile_picture'] != '' ) ? data['profile_picture']: '/icons/placeholder.svg';
	},

	logout(state) {
		state.sessionStorage.userInfo.id = '';
		state.sessionStorage.userInfo.name = '';
		state.sessionStorage.userInfo.number = '';
		state.sessionStorage.userInfo.email = '';
		state.sessionStorage.userInfo.avatar = '';
		state.sessionStorage.cart = [];
	},
};
  
export default {
	state,
	actions,
	mutations
}