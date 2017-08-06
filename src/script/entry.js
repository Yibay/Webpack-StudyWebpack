import '../style/reset.scss';
import '../font/iconfont.css';

import React from 'react'; // 使用 react-dom，必须引入 React
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';

import App from '../react/container/App';
import todoApp from '../react/reducer/todoApp';


// reducer 构造 store
let store = createStore(
	todoApp,
	// 用于 在Chrome中，用 redux DevTools 调试
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
	// 根节点 上存放 store
	<Provider store={store}>
		<HashRouter>
			{ /* 将路径参数 filter ，传给 <Route> 渲染组件 */ }
			{ /* :filter* filter参数可有可无，这样也能匹配 根路径／ */ }
			<Route path='/:filter*' component={ App }></Route>
		</HashRouter>
	</Provider>,
	document.getElementById('app')
)