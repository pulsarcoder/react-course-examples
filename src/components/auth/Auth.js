import React from 'react';

export default class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    login = () => {
        const findUser = this.props.users
                            .find(u => u.username === this.state.username
                                    && u.username === this.state.password);
        if(findUser) {
            this.props.login(this.state.username);
        }
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.username} onChange={(e) => this.setState({ username: e.target.value })} />
                <input type="password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />
                <button type="button" onClick={this.login}>Log me in</button>
            </div>
        )
    }
}