import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { todoReducer } from './components/todoApp/todoReducer';
import TodoWrapper from './components/todoApp/TodoAppContainer';
import thunk from 'redux-thunk';

// store
// actions => todoApp/actions.js
// reducers => todoApp/todoReducer.js

/*
ui <=> actions  => dispatch => reducers (type filtered new state)
        store
        ui
*/
// const axiosDefaults = ({getState}) => next => action => {
//     axios.defaults.baseUrl = 'https://localhost:8334/api';
//     axios.headers.authorization = 'Bearer asdasdasdasdasdasdasdasdsa';
//     return next(action);
// }
const logger = ({getState}) => next => action => {
    console.log('will dispatch', action);
    return next(action);
}

const store = createStore(
    combineReducers({
        todoApp: todoReducer
    }), 
    applyMiddleware(logger, thunk)
);

const render = () => ReactDOM.render(
    <Provider store={store}>
        <TodoWrapper />
    </Provider>,
    document.getElementById('root'));
render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
