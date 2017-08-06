import React, { Component } from 'react';

class AddTodo extends Component {
	render () {
		return <div>
			<i className='iconfont icon-liuyanfill'></i>
			<input ref='todo_text' type='text' />
			<button onClick={this.addTodo.bind(this)} >添加</button>
		</div>;
	}

	addTodo () {
		// 事件函数内，用到 this，记得绑定 this
		this.props.onAddClick(this.refs.todo_text.value.trim());
		this.refs.todo_text.value = '';
	}
}

export default AddTodo;