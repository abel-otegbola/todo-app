import React, { Component } from 'react';

class Element extends Component {
	state = {
		style: ""
	}

	handleCancel = () => {
		this.setState({style: {textDecoration: "line-through", opacity: 0.5}});
	}

	handleSearch = () => {
		const {text, searchValue} = this.props;
		const display = (text.toUpperCase().indexOf(searchValue) !== -1) ? "block" : "none";
		return display;
	}

	render() {
		const {text, onDelete} = this.props;

		return (
			<div className="container"  style={{display: this.handleSearch()}}>
				<div className="list">
					<h4 style={{textDecoration: this.state.style.textDecoration, opacity: this.state.style.opacity}}>{text}</h4>
					<span>
						<i className="fa fa-times" onClick={this.handleCancel}></i>
						<i className="fa fa-trash" onClick={onDelete}></i>
					</span>
				</div>
			</div>
		);	
	}
}

export default Element;