import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { todoReducer } from './components/todoApp/todoReducer';
import { Provider } from 'react-redux';
import TodoAppContainer from './components/todoApp/TodoAppContainer';

let store = createStore(todoReducer);

store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
    <Provider store={store}>
        <TodoAppContainer />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
