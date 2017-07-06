import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';

import App from './app';
import { initializeNavigation, pushLocation, goTo } from './navigation'

import store from './store'

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'));

registerServiceWorker();
