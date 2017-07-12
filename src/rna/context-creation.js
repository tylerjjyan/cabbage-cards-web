import path from 'object-path'
import {connect} from 'react-redux'

import { receive } from '../messaging'
import map from '../utils/object-map'

import self from './self'

export const Context = arr => {
	const namespace = 'name1'
	
	const createdContext = {
		self: namespace,
		stateToPropsMap: {},
		actions: {}
	}

	for(let i = 0; i < arr.length; ++i)
		arr[i](createdContext)

	const mapStateToProps = (state, ownProps) =>
		map(func => func(state, ownProps, createdContext), createdContext.stateToPropsMap)

	const mapDispatchToProps = (dispatch) => createdContext.actions
	return connect(mapStateToProps, mapDispatchToProps)
}

export const namespace = name => context => {
	context.self = name
}

export const selector = (name, func) => context => {
	context.stateToPropsMap[name] = func
}

export const action = (name, func) => context => {
	context.actions[name] = (data, ...args) => {func(data, {...self, self: context.self}) }
}

export const on = (eventName, func) => context => {
	receive(eventName, func)
}

export const mount = (view, context) => context(view)