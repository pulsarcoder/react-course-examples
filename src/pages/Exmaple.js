
// React PureComponent
class PureApp extends React.Component {
    constructor(props) {
        super(props);
        console.log('Initialized pureApp');
    }

    componentWillMount() {
        console.log('Component will mount');
    }
    
    componentDidMount() {
        console.log('Component mounted...');
    }

    // update life cycle
    /**
     * 1. component will receive props
     * 2. should component update
     * 3. component will update
     * 4. render
     * 5. component did update
     */

    componentWillReceiveProps(nextProps) {
        console.log('Component will receive props', nextProps);
    }

    shouldComponentUpdate(nextProps) {
        console.log('Should component update', nextProps);
        return true; // it will call render
    }

    componentWillUpdate(nextProps) {
        console.log('Component will update', nextProps);
    }
    
    componentDidUpdate(prevProps) {
        console.log('Component did update', prevProps);
    }

    // destruction

    componentWillUnmount() {
        console.log('Component will unmount');
    }

    render()  {
        console.log('Component is rendering...');
        return <div>Hi, Im {this.props.title}, {this.props.color}</div>;
    }
}
// React Stateless Component
const StatelessComp = ({ color }) => {
    return (
        <div>
            <span>Hi, Im Stateless Component {color}</span>
        </div>
    );
}

// React Stateful Component
class CustomApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: this.props.color,
            title: this.props.title,
            show: true
        };
    }

    componentDidMount() {
        this.updateColor('red');
    }

    updateColor(color) {
        // update state value
        setTimeout(() => {
            this.setState({ color });
            setTimeout(() => {
                this.setState({ color: 'yellow' });
                
                setTimeout(() => {
                    this.setState({ show: false });
                }, 2000);
            }, 2000);
        }, 6000);
    }

    render() {
        return (
            <div>
                <span>Hi, Im {this.state.title}, {this.state.color}</span>
                { this.state.show? <PureApp {...this.state} /> : '' }
                <StatelessComp color={this.state.color} />
            </div>
        );
    }
}
