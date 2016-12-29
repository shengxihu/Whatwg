const actions = {
	changePageFlagN({ commit }, flag) {
		commit('changePageFlagN', flag)
	},
	changePageFlagY({ commit }, flag) {
		commit('changePageFlagY', flag)
	},
	initData({ commit }, data) {
		commit('initData', data)
	},
	initList({ commit }, data) {
		commit('initList', data)
	}
}

export default actions
