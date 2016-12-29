import Vue from 'vue'
import Vuex from 'vuex'
import state from './model/state'
import getters from './model/getters'
import actions from './model/actions'
import mutations from './model/mutations'
Vue.use(Vuex)
const store = new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
})
export default store