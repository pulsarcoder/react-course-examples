// store
// actions
// reducers
const counterActions = {
    increment: () => ({ type: 'INCREMENT'}),
    decrement: () => ({ type: 'DECREMENT' })
}
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

const CounterComponent = (props) => {
    return (
        <div>
            <button type="button" onClick={props.onIncrement}>Increment</button>
            <button type="button" onClick={() => props.onDecrement()}>Decrement</button>
            <h1>{props.counter}</h1>
        </div>
    )
}

const mapStateToProps = state => state;

const mapDispatchToProps = ({
    onIncrement: counterActions.increment,
    onDecrement: counterActions.decrement
});

const Counter = connect(mapStateToProps, mapDispatchToProps)(CounterComponent);
