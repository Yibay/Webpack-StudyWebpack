import React, { Component } from 'react';

import styles from './index.scss'

console.log(styles);

class Todo extends Component {
	render() {
		return <li className={this.props.completed ? styles.completed : null} onClick={this.props.onToggleClick}>{this.props.text}</li>
	}
}

export default Todo;