import state from './state'

const self = {
	self: ''
}

self.get = function(varName) {
	return state.get(`${this.self}.${varName}`)
}

self.update = function(varName, value) {
	state.update(`${this.self}.${varName}`, value)
}

export default self