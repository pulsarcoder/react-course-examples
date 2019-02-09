export function customReducer(prevState, action) {
    switch(action.type) {
        case 'INCREMENT':
            console.log('incrementing...');
            return { id: prevState.id + 1 };
        default:
            return {...prevState };
    }
}

export class Store {
    constructor(reducer, onChange) {
        console.log(reducer);
        this.reducer = reducer;
        this.onChange = onChange;
        this.state = {
            id: 1
        };
        this.onChange(this.state);
    }

    dispatch = (action) => {
        this.state = this.reducer(this.state, action);
        console.log(this.state);
        this.onChange(this.state);
    }

    getState() {
        return this.state;
    }
}