/*

	IGNORE PAGE FOR NOW, USE 'navigation-actions' TO  HANDLE NAVIGATION
*/

import eventManager from './event-manager'

var State = {}

const Location = {
	pageName: '',
	params: {}
}

const Navigation = {
	pastLocations: [],
	currentLocation: null
}

const createLocation = (pageName, params) =>
	Object.assign({}, Location, {pageName, params})

function initializeNavigation() {
	State.Navigation = Object.assign({}, Navigation)

	eventManager.on('pushLocation', pushLocation)
	eventManager.on('goTo', goTo)
}

function pushLocation(pageName, params) {
	
	if(!('Navigation' in State)) {

		initializeNavigation();
		goTo(pageName, params);
		return
	}

	if(State.Navigation.currentLocation !== null)
	 State.Navigation.pastLocations.push(Navigation.currentLocation)

	State.Navigation.currentLocation = createLocation(pageName, params)
}

function goTo(pageName, params) {

	if(!('Navigation' in State)) {

		initializeNavigation();
	}

	State.Navigation.pastLocations = []
	State.Navigation.currentLocation = createLocation(pageName, params)
}

export {
	initializeNavigation,
	pushLocation,
	goTo,
}