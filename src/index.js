import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from "react-redux";

import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from 'redux-thunk';

import bodyReducer from '../src/store/reducer/BodyReducer';
import loadingReducer from '../src/store/reducer/LoadingBarReducer';

const rootReducer = combineReducers({

    isBodyReducer: bodyReducer,
    isLoad: loadingReducer

});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const app = (

    <Provider store={store}>
        <BrowserRouter basename="/">
            <App/>
        </BrowserRouter>
    </Provider>
    
);

ReactDOM.render(app, document.getElementById('root'));

