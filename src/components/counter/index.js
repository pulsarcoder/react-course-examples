// store
// actions
// reducers
const initialState = { counter: 0 };

// creation of reducer
const counterReducer = (state = initialState, action) => {
    let { counter } = state;
    switch (action.type) {
        case 'INCREMENT':
            return { counter: ++counter };
        case 'DECREMENT':
            return { counter: --counter };
        default:
            return state;
    }
}

// creation of store
let store = createStore(counterReducer);

// way to call action
store.dispatch({ type: 'INCREMENT' });

store.dispatch({ type: 'DECREMENT' });

store.dispatch({ type: 'DECREMENT' });


const CounterComponent = (props) => {
    return (
        <div>
            <button type="button" onClick={props.onIncrement}>Increment</button>
            <button type="button" onClick={props.onDecrement}>Decrement</button>
            <span>{props.value.counter}</span>
        </div>
    )
}

const render = () => ReactDOM.render(
    <CounterComponent
        value={store.getState()}
        onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
        onDecrement={() => store.dispatch({ type: 'DECREMENT' })} />,
    document.getElementById('root'));
render();

store.subscribe(render);