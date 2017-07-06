import pushIf from '../utils/push-if'
import hasValue from '../utils/has-value'

const defaultNavigation = {
	currentLocation: {pageName: 'home', params: null},
	previousPages: []
}

export default function reducer(state=defaultNavigation, action) {
	switch(action.type) {
		case "PUSH_LOCATION": {

			state = {...state, previousPages: pushIf(hasValue, state.currentLocation, state.previousPages.slice())}
			state.currentLocation = action.payload

			return state
			break
		}

		case "GO_TO": {
			return {...state, currentLocation: action.payload, previousPages: []}
			break
		}
	}

	return state
}