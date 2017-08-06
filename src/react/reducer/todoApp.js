import { combineReducers } from 'redux';
// 引入 action 中的变量
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions/todoApp';
const { SHOW_ALL } = VisibilityFilters;

// reducer 函数
// 1、返回一个状态值 state
// 2、参数 state 自定义，切需要一个 默认初始值（可以是 string，array...任何类型）
// 3、根据 参数 action，修改 state

const init_state = [
	{
		text: 'lalala', completed: false, index: 0
	},
	{
		text: 'xixixi', completed: false, index: 1
	},
	{
		text: 'dododo', completed: false, index: 2
	},
	{
		text: 'hahaha', completed: false, index: 3
	}
];
// 重点：
// reducer 函数 功能
// 1、定义 各state 结构
// 2、不同 Action 对 各state 的 影响
// 总结：
// 		reducer 划分，按 state 数据格式 来 划分
//		switch...case 划分，按 action 来 划分
function todos(state=init_state, action){
	switch(action.type) {
		case ADD_TODO:
			return [].concat(state, { text: action.text, completed: false, index: state.length });
		case TOGGLE_TODO:
			return state.map( (todo, index) => Object.assign({}, todo, { 
				completed: index == action.index ? !todo.completed : todo.completed 
			}) );
		default:
			return state;
	}
}

// 多 reducer 函数，合并成 一个函数
// 1、若 createStore() 传入 单独的reducer，store.getState()，得到 该reducer的 state
// 2、若 createStore() 传入 combineReducers 合并过的函数， store.getState()，得到一个 Obj{ reducer函数名：它的state，... }
// const todoApp = todos;
// 合并后的 todoApp 也是一个函数
const todoApp = combineReducers({ todos });

export default todoApp;