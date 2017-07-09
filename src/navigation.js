import eventManager from './event-manager'
import { state } from './rna'

const Location = {
	pageName: '',
	params: {}
}

let navigation = {
	previousPages: [],
	currentLocation: null
}

const createLocation = (pageName, params) => (
	{...Location, pageName, params}
)

function initializeNavigation() {
	navigation = {
		currentLocation: {pageName: 'home', params: null},
		previousPages: []
	}

	state.update('navigation', navigation)

	eventManager.on('pushLocation', pushLocation)
	eventManager.on('goTo', goTo)
}

function pushLocation(pageName, params) {
	
	if(navigation.currentLocation === null) {

		initializeNavigation();
		goTo(pageName, params);
		return
	}

	navigation.previousPages.push(navigation.currentLocation)
	navigation.currentLocation = createLocation(pageName, params)

	state.update('navigation', navigation)
}

function goTo(pageName, params) {

	if(navigation.currentLocation === null)
		initializeNavigation()

	navigation.previousPages = []
	navigation.currentLocation = createLocation(pageName, params)

	state.update('navigation', navigation)
}

export {
	initializeNavigation,
	pushLocation,
	goTo,
}