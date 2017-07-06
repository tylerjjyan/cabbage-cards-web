export function pushLocation(route, params) {
	return {
		type: "PUSH_LOCATION",
		payload: {
			pageName: route,
			params
		}
	}
}

export function goTo(route, params) {
	return {
		type: "GO_TO",
		payload: {
			pageName: route,
			params
		}
	}
}