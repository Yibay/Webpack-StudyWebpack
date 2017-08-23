import React, { Component } from 'react';

import styles from './index.scss';
import FilterLink from './FilterLink';
// 要使用图片，要先引入图片 —— 打包到 配置了静态文件的路径
import image_time_png from './images/time.png';

console.log(styles);

class Footer extends Component {
	render() {
		return <div className={styles['m-Footer']}>
			<p>
				Show:
				<FilterLink filter='SHOW_ALL' current_filter={this.props.current_filter} >All</FilterLink>
				{', '}
				<FilterLink filter='SHOW_COMPLETED' current_filter={this.props.current_filter}>Completed</FilterLink>
				{', '}
				<FilterLink filter='SHOW_ACTIVE' current_filter={this.props.current_filter}>Active</FilterLink>
			</p>
			{ /* <img> src 为 require时 赋值的 str */ }
			<img src={ image_time_png } />
			{ /* css-loader 模块化后，html标签 正常；类名 都要用styles对象 属性名引用 */ }
			<div className={styles['time-png']}></div>
		</div>
	}
}

export default Footer;