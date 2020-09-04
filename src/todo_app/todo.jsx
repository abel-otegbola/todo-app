import React, { Component } from 'react';
import Heading from './todo_heading';
import Element from './elements';
import Deleted from './deleted';
import './todo.css';

class Todo extends Component {
	state = {
		elements: [],
		deleted: [],
		value: "",
		toggleList: 'block',
		toggleDeleted: 'block',
		searchValue: ""
	}

	//get input values and set it to the value in state
	handleChange = (e) => {
		var textvalue = e.target.value;
		this.setState({value: textvalue});
	}

	
	handleSubmit = () => { 
		const value = this.state.value;
		const elements = [...this.state.elements]; 

		const firstId = (elements.length === 0 ) ? 1 : elements[0].id + 1;
		const list = {id: firstId, text: value}
		value !== "" && elements.unshift(list);

		this.setState({elements});
	}

	handleDelete = (element) => {
		const elements = this.state.elements.filter(e => e.id !== element.id)
		this.setState({elements});

		const deleted = [...this.state.deleted];
		
		const firstId = (deleted.length === 0 ) ? 1 : deleted[0].id + 1;
		const list = {id: firstId, text: element.text};
		element.text !== "" && deleted.unshift(list);
		
		this.setState({deleted});
	}

	handleFinalDelete = element => {
		const deleted = this.state.deleted.filter(e => e.id !== element.id);
		this.setState({deleted});	
	}
	
	handleAddClass() {
		let arrow = "fa fa-arrow-"
		arrow += (this.state.toggleList === "none") ? "right" : "down";
		return arrow;
	}
	
	handleDeleteClass() {
		let arrow = "fa fa-arrow-"
		arrow += (this.state.toggleDeleted === "none") ? "right" : "down";
		return arrow;
	}

	handleToggleList = () => {
		const hide = (this.state.toggleList === "block") ? "none" : "block";
		this.setState({toggleList: hide});
	}

	handleToggleDeleted = () => {
		const hide = (this.state.toggleDeleted === "block") ? "none" : "block";
		this.setState({toggleDeleted: hide});
		
	}	

	handleSearch = (e) => {
		const searchValue = e.target.value.toUpperCase();
		//let elements = this.state.elements.filter(element => (element.text.toUpperCase().indexOf(value) !== -1));
		//this.setState({elements});
		this.setState({searchValue})
	}

	render() {
		return (
			<React.Fragment>
				<Heading onSubmit={this.handleSubmit} onChange={this.handleChange}/>
					
				<h5>list <input onChange={this.handleSearch} className="search" placeholder="Search list..."/><i onClick={this.handleToggleList} className={this.handleAddClass()}></i></h5>
				
				<div style={{display: this.state.toggleList}}>
				{this.state.elements.map(element => 
				<Element 
					searchValue={this.state.searchValue}
					key={element.id} 
					text={element.text} 
					id={element.id} 
					onDelete={ () => this.handleDelete(element)} 
				/>)}
				</div>
				
				<div id="deleted">
				<h5>Completed <i onClick={this.handleToggleDeleted} className={this.handleDeleteClass()}></i></h5>	
				
				<div style={{display: this.state.toggleDeleted}}>	
					{this.state.deleted.map(element => 
						<Deleted key={element.id} 
							text={element.text} 
							id={element.id} 
							onDelete={ () => this.handleFinalDelete(element)} 
						/>
					)}
				</div>
				</div>
			</React.Fragment>
		);	
	}



}

export default Todo;