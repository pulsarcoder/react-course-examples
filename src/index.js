import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import { createStore, combineReducers } from 'redux';
import { connect, Provider } from 'react-redux';
import { todoReducer } from './components/todoApp/todoReducer';
import TodoWrapper from './components/todoApp/TodoAppContainer';
// store
// actions => todoActions
// reducers => todoReducer

const store = createStore(combineReducers({
    todoApp: todoReducer
}));

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
