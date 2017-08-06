import React, { Component } from 'react';

import './index.scss'

class Todo extends Component {
	render() {
		return <li className={this.props.completed ? 'completed' : null} onClick={this.props.onToggleClick}>{this.props.text}</li>
	}
}

export default Todo;