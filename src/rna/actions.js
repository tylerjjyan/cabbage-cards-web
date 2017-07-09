export const updateAction = (varPath, newVal) => ({
	type: 'UPDATE_STATE',
	payload: {
		path: varPath,
		value: newVal
	}
})