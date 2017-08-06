// 暴露给 reducer函数 用的 常量
	// type 类型
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
	// 其他 常量
export const VisibilityFilters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_COMPLETED: 'SHOW_COMPLETED',
	SHOW_ACTIVE: 'SHOW_ACTIVE'
}


// Action 对象 的 生成函数
// 划分：每个 Action 都代表 用户一个操作
export function addTodo(text) {
	return {
		type: ADD_TODO,
		text
	}
}

export function toggleTodo(index) {
	return {
		type: TOGGLE_TODO,
		index
	}
}