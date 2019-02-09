
class CounterButton extends React.Component {    
    incrementCount = (event) => {
        const count = this.props.count + 1;
        this.props.onChange(count);
    }

    decrementCount = () => {
        const count = this.props.count - 1;
        this.props.onChange(count);
    }

    componentWillReceiveProps(nextProps) {
        console.log('Component receive props, ', nextProps);
    }

    shouldComponentUpdate(nextProps) {
        console.log('Should component update ', nextProps);
        if (this.props.count !== nextProps.count) {
            return true;
        }
        return false;
    }

    render() {
        const { count } = this.props;
        return (
            <div>
                <button type="button" onClick={this.incrementCount}>Increment</button>
                { count > 10 && <span>{count}</span>}
                <button type="button" onClick={this.decrementCount}>Decrement</button>
            </div>            
        );
    }
}

class CustomApp extends React.Component {

    constructor() {
        super();
        this.state = {
            count: 0
        };
    }

    updateCount = (count) => {
        this.setState({ count });
    }

    render() {
        return (
            <CounterButton count={this.state.count} onChange={this.updateCount} />
        );
    }
}