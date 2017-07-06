const pushIf = (condition, data, target) => {
	if(condition(data) && (target instanceof Array))
		target.push(data)

	return target
}

export default pushIf