import React from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import RoutedPage from './pages'
import networkManager from './network-communication'

const mapStateToProps = state => {
	return {
		currentLocation: state.navigation.currentLocation
	}
}

const App = props => {
	const pageName = props.currentLocation.pageName
	return (
		<RoutedPage currentPage={pageName} {...props.currentLocation.params}/>
	)
}

export default connect(mapStateToProps)(App)