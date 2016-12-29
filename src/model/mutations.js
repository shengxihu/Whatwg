const mutations = {
	changePageFlagN(state, flag) {
		if (Object.prototype.toString.call(flag) === '[object String]') {
			state[flag] = false
		} else if (Object.prototype.toString.call(flag) === '[object Array]') {
			flag.forEach(element => {
				state[element] = false
			})
		}
	},
	changePageFlagY(state, flag) {
		if (Object.prototype.toString.call(flag) === '[object String]') {
			state[flag] = true
		} else if (Object.prototype.toString.call(flag) === '[object Array]') {
			flag.forEach(element => {
				state[element] = true
			})
		}
	},
	initData(state, data) {
		state.usr_data = data
	},
	initList(state, data) {
		state.list = data
	},
}

export default mutations
