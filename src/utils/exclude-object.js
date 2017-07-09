//return an object with the given key removed
//does not modify the origin object
const excludeObject = (object, key) => {
	const {[key]: deleted, ...toReturn} = object
	return toReturn
}

export default excludeObject