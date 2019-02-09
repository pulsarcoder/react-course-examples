
const style = {
    container: {
        padding: 20,
        margin: 10,
        color: 'black'
    }
}

class CustomApp extends React.Component {
    constructor() {
        super();
        this.state = {
            color: 'red'
        };
    }

    componentDidMount() {
        const { clientWidth } = this.containerNode;
        console.log(clientWidth, this.inputEl.value);
        this.inputEl.value = "Im changed";
    }

    handleRef = (ref) => this.containerNode = ref

    handleChange = (ref) => {
        this.inputEl = ref;
        this.inputEl.value = "Hey im typed with default";
    }

    render() {
        const { color } = this.state;

        return (
            <div
                ref={this.handleRef}
                style={style.container}
                >
                <p>Hey, i will be handled with ref having color {color}</p>
                <input type="text" ref={this.handleChange} />
            </div>
        );
    }
}