import { connect } from 'react-redux';
import { addTodo } from './actions';
import { TodoAppRedux } from './TodoAppRedux';
import PropTypes from 'prop-types';

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addTodo: (todo) => {
            dispatch(addTodo(todo))
        }
    }
};

const TodoWrapper = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoAppRedux);

TodoWrapper.childContextTypes = {
    store: PropTypes.object
}

export default TodoWrapper;