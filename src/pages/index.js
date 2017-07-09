import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import Routes from '../routes.js'

const mapStateToProps = state => {
	return {
		currentLocation: state.navigation.currentLocation
	}
}

const RoutedPage = props => {
	const PageToRender = Routes[props.currentLocation.pageName]
	return (<PageToRender {...props.currentLocation.params}/>)
}

export default connect(mapStateToProps)(RoutedPage)
