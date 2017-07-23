import state from './state'
import isEmpty from '../utils/is-empty'

const self = {
	self: ''
}

self.get = function(varName) {
	const path = isEmpty(varName) ? this.self : `${this.self}.${varName}`
	return state.get(path)
}

self.update = function(varName, value) {
	const path = isEmpty(varName) ? this.self : `${this.self}.${varName}`
	state.update(path, value)
}

export default self