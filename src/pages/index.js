import React from 'react'
import ReactDOM from 'react-dom'
import Routes from '../routes.js'

const RoutedPage = props => {
	const PageToRender = Routes[props.currentPage]
	return (<PageToRender {...props}/>)
}

export default RoutedPage
