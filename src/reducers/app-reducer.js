const defaultApp = {
	playerName: '',
	roomCode: ''
}

export default function reducer(state=defaultApp, action) {
	switch(action.type) {
		case "SET_FIELD": {
			state = {...state, ...action.payload }
			return state
			break
		}
	}

	return state
}