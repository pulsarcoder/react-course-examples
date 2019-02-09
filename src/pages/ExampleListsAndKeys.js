
class CustomApp extends React.Component {

    constructor() {
        super();
        this.state = {
            topics: [
                'Event Handling',
                'Input Handling',
                'Conditional Rendering',
                'Styling',
                'Lists and Keys'
            ]
        };
    }

    render() {
        const arrFunParan = () => (
            <ul>
                {this.state.topics.map((topic) => <li key={topic}>{topic}</li>)}
            </ul>
        );
        const arrFun = () => <ul>{this.state.topics.map((topic) => <li key={topic}>{topic}</li>)}</ul>;
        const arrFunFlower = () => {
            return <ul>{this.state.topics.map((topic) => <li key={topic}>{topic}</li>)}</ul>;
        };
        // const topicComps = [];
        // this.state.topics.forEach((topic) => topicComps.push(<li>{topic}</li>));
        // const topicComps = this.state.topics.map((topic) => <li>{topic}</li>);
        return (
            arrFunParan()
        );
    }
}