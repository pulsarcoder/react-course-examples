import { connect } from 'react-redux';
import { addTodo, removeTodo } from './actions';
import { TodoAppRedux } from './TodoAppRedux';

const mapStateToProps = state => state;

const mapDispatchToProps = ({
    addTodo,
    removeTodo
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoAppRedux);