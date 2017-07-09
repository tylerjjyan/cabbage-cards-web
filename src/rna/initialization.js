import properties from './properties'

const bindStore = reduxStore => {
	properties.store = reduxStore
}

export default bindStore