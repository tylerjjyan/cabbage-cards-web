import { combineReducers } from 'redux'

//hopefully at some point i'll have time to write a better architecture so we don't have to predefine all our reducers

import app from './app-reducer.js'
import navigation from './navigation-reducer.js'

export default combineReducers({
	navigation,
	app
})