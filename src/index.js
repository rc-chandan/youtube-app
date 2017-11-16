import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './utils/registerServiceWorker';
import { composeWithDevTools } from 'redux-devtools-extension';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import YoutubeApp from './containers/YoutubeApp';
import reducer from './reducers';

const middlewares = [ ReduxThunk ];

// create the store with redux dev-tools and redux-thunk middleware
const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(...middlewares))
);

// connect the app component to redux store using Provider component as wrapper
const App = () => (
    <Provider store={store}>
        <YoutubeApp />
    </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
