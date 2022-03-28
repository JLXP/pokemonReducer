import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import pokemonReducer from './actions/pokemonReducer';

const store = createStore({
    pokemonReducer
});


ReactDOM.render(
    <Provider>
        <App />
    </Provider> , 
document.getElementById('root'));
