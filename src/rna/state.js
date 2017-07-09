import path from 'object-path'
import properties from './properties'
import { updateAction } from './actions'

const update = (path, val) => {
	properties.store.dispatch(updateAction(path, val))
}

const get = pathToVar => path.get(properties.store.getState(), pathToVar)

export default {
	update,
	get
}