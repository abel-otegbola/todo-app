import React, { Component } from 'react';
import Deleted from './deleted';

class DeletedList extends Component {
	state = {
		toggleDeleted: "block",
		searchValue: ""
	}
	
	handleDeleteClass() {
		let arrow = "fa fa-arrow-"
		arrow += (this.state.toggleDeleted === "none") ? "right" : "down";
		return arrow;
	}


	handleToggleDeleted = () => {
		const hide = (this.state.toggleDeleted === "block") ? "none" : "block";
		this.setState({toggleDeleted: hide});
	}

	handleSearch = (e) => {
		const searchValue = e.target.value.toUpperCase();
		this.setState({searchValue})
	}

	render() {

		const { deleted, onDelete } = this.props;		

		return (

				<div id="deleted">
					<h5>Completed <input onChange={this.handleSearch} className="search" placeholder="Search completed..."/>
						<i onClick={this.handleToggleDeleted} className={this.handleDeleteClass()}></i></h5>	
				
					<div style={{display: this.state.toggleDeleted}}>	
						{deleted.map(element => 
							<Deleted 
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

export default DeletedList;