import path from 'object-path'
import {connect} from 'react-redux'
import map from '../utils/object-map'

export const Context = arr => {
	const namespace = 'name1'
	
	const createdContext = {
		stateToPropsMap: {},
		actions: {}
	}

	for(let i = 0; i < arr.length; ++i)
		arr[i](createdContext)

	const mapStateToProps = (state, ownProps) => map(func => func(state, ownProps), createdContext.stateToPropsMap)
	const mapDispatchToProps = (dispatch) => createdContext.actions
	return connect(mapStateToProps, mapDispatchToProps)
}

export const selector = (name, func) => context => {
	context.stateToPropsMap[name] = func
}

export const action = (name, func) => context => {
	context.actions[name] = func
}

export const mount = (view, context) => context(view)