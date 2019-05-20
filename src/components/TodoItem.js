import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: 'lightgrey',
            padding: '10px',
            borderBottom: '1px white dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const {id, title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox"
                    onChange={this.props.markComplete.bind(this, id)} />
                    {' '}
                    {title}
                    <button
                    onClick={this.props.delTodo.bind(this, id)}
                    style={btnStyle}
                    >Delete</button>
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}

const btnStyle = {
    background: 'red',
    color: 'black',
    padding: '5px 8px',
    borderRadius: '100%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem;