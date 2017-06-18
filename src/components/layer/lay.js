// 引入的 html文件 经过 loader处理 转成string
import tpl from './lay.html';
import './lay.scss'

function layer(){
	return {
		name: 'layer',
		tpl: tpl
	}
}

export default layer;