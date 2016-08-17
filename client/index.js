import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose }from 'redux';
import rootReducer from './rootReducer';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const store = createStore(
	rootReducer, 
	compose(
		applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	)
);

render (
<MuiThemeProvider>
	<Provider store={store}>
		<Router history={browserHistory} routes={routes}/>
	</Provider>
</MuiThemeProvider>, 
document.getElementById('app'));
