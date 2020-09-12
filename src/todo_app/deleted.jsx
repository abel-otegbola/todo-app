import React from 'react';

class Deleted extends React.Component {
	

	handleSearch = () => {
		const {text, searchValue} = this.props;
		const display = (text.toUpperCase().indexOf(searchValue) !== -1) ? "block" : "none";
		return display;
	}

	render() {

		const {text, onDelete} = this.props;

		return (
			<div className="container deleted" style={{display: this.handleSearch()}}>
				<div className="list">
					<h4 style={{color: "darkred", opacity: 0.9}}>{text}</h4>
					<span>
						<i className="fa fa-trash" onClick={onDelete}></i>
					</span>
				</div>
			</div>
		);	
	}
}

export default Deleted;