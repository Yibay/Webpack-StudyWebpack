import React, { Component } from 'react';

import Todo from '../Todo/index';

class TodoList extends Component {
	render () {
		return <ul>
			{
				this.props.todos.map(
					(todo) => 
					<Todo key={todo.index} {...todo} onToggleClick={() => this.props.onToggleClick(todo.index)} />
				)
			}
		</ul>
	}
}

export default TodoList;