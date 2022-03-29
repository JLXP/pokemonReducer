import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';
import { createStore,compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import pokemonReducer from './reducers/pokemonReducer';
import { logActions} from './Middlewares';

const composedEnhacers = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(logActions)
)

const store = createStore(
    pokemonReducer,
    composedEnhacers
    
);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider> , 
document.getElementById('root'));
