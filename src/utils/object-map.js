const map = (func, obj) => Object.keys(obj).reduce(
		(previousObj, currentVal) => {
			previousObj[currentVal] = func(obj[currentVal], currentVal)
			return previousObj
		},
	{})

export default map