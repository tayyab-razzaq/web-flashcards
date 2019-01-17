import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';
import {createBrowserHistory} from "history";
import {Router} from "react-router-dom";
import store from './store';
import routes from './routes';

let history = createBrowserHistory();


function App (props) {
	return (
		<Provider store={store} {...props}>
			<Router history={history}>
				{routes}
			</Router>
		</Provider>
	);
}

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();