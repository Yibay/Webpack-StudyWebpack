import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class FilterLink extends Component {
	render (){
		if(this.props.current_filter === this.props.filter){
			return <span>
				{this.props.children}
			</span>;
		}
		else {
			return <Link to={this.props.filter}>
				{this.props.children}
			</Link>
		}
	}
}

export default FilterLink;