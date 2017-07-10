import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import registerServiceWorker from './registerServiceWorker';

import App from './app';
import store from './store'
import networkCommunicator from './network-communication'
import { bindStore, state } from  './rna'
import { initializeNavigation, pushLocation, goTo } from './navigation'

bindStore(store)
initializeNavigation()

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'));

registerServiceWorker();
