import React, { Component } from 'react';

import './index.scss';
import FilterLink from './FilterLink';
// 要使用图片，要先引入图片 —— 打包到 配置了静态文件的路径
import image_time_png from './images/time.png';

class Footer extends Component {
	render() {
		return <div className='m-Footer'>
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
		</div>
	}
}

export default Footer;