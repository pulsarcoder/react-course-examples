
class CustomApp extends React.Component {
    constructor() {
        super();
        this.state = {
            username: ''
        };
    }

    onInputChange = (event) => {
        const { name, value } = event.target;
        const username = value;
        console.log(`name = ${name}, value = ${username}`);
        // this.setState({ username: value });
        this.setState({ username });
    }

    render() {
        return (
            <div>
                <input type="text" name="username" value={this.state.username} onChange={this.onInputChange} />
            </div>
        );
    }
}