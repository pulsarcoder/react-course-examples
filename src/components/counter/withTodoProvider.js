// store
// actions => todoActions
// reducers => todoReducer
const initialState = { counter: 0 };

const counterActions = {
    increment: () => ({ type: 'INCREMENT'}),
    decrement: () => ({ type: 'DECREMENT' })
}
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
const CounterComponent = (props) => {
    return (
        <div>
            <button type="button" onClick={props.onIncrement}>Increment</button>
            <button type="button" onClick={() => props.onDecrement()}>Decrement</button>
            <h1>{props.counterApp.counter}</h1>
        </div>
    )
}

const mapStateToProps = state => state;

const mapDispatchToProps = ({
    onIncrement: counterActions.increment,
    onDecrement: counterActions.decrement
});

const Counter = connect(mapStateToProps, mapDispatchToProps)(CounterComponent);

const store = createStore(combineReducers({
    counterApp: counterReducer,
    todoApp: todoReducer
}));

const render = () => ReactDOM.render(
    <Provider store={store}>
        <TodoWrapper />
        <Counter />
    </Provider>,
    document.getElementById('root'));
render();