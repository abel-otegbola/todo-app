import React, { Component } from 'react';
import Element from './elements';

class ElementList extends Component {
	state = {
		toggleList: "block",
		searchValue: ""
	}

	
	handleAddClass() {
		let arrow = "fa fa-arrow-"
		arrow += (this.state.toggleList === "none") ? "right" : "down";
		return arrow;
	}

	handleToggleList = () => {
		const hide = (this.state.toggleList === "block") ? "none" : "block";
		this.setState({toggleList: hide});
	}

	handleSearch = (e) => {
		const searchValue = e.target.value.toUpperCase();
		this.setState({searchValue})
	}

	render() {

		const { elements, onDelete } = this.props;		

		return (

			<div>
				<h5>list <input onChange={this.handleSearch} className="search" placeholder="Search list..."/>
						<i onClick={this.handleToggleList} className={this.handleAddClass()}></i></h5>
				
				<div style={{display: this.state.toggleList}}>
					{elements.map(element => 
						<Element 
							searchValue={this.state.searchValue}
							key={element.id} 
							text={element.text} 
							id={element.id} 
							onDelete={ () => onDelete(element)} 
						/>
					)}
				</div>
			</div>
		);
	}

}

export default ElementList;