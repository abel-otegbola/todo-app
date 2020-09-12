import React, { Component } from 'react';
import Heading from './todo_heading';
import ElementsList from './elementsList';
import DeletedList from './deletedList';
import './todo.css';

class Todo extends Component {
	state = {
		elements: [],
		deleted: [],
		value: ""
	}

	
	handleSubmit = () => { 
		const value = this.state.value;
		const elements = [...this.state.elements]; 

		const firstId = (elements.length === 0 ) ? 1 : elements[0].id + 1;
		const list = {id: firstId, text: value}
		value !== "" && elements.unshift(list);

		this.setState({elements});
		localStorage.setItem("todolist", JSON.stringify(elements));
	}

	handleDelete = (element) => {
		const elements = this.state.elements.filter(e => e.id !== element.id)
		this.setState({elements});
		localStorage.setItem("todolist", JSON.stringify(elements));

		const deleted = [...this.state.deleted];
		
		const firstId = (deleted.length === 0 ) ? 1 : deleted[0].id + 1;
		const list = {id: firstId, text: element.text};
		element.text !== "" && deleted.unshift(list);
		
		this.setState({deleted});
		localStorage.setItem("deletedList", JSON.stringify(deleted));
	}

	handleFinalDelete = element => {
		const deleted = this.state.deleted.filter(e => e.id !== element.id);
		this.setState({deleted});	
		localStorage.setItem("deletedList", JSON.stringify(deleted));
	}

	

	componentDidMount = () => {
			const todo = JSON.parse(localStorage.getItem("todolist"));
			if(todo !== null) {this.setState({elements: todo})};

			const deletedList = JSON.parse(localStorage.getItem("deletedList"));
			if(deletedList !== null) {this.setState({deleted: deletedList})};
	}
	render() {
		return (
			<React.Fragment>

				<Heading onSubmit={this.handleSubmit} onChange={(e) => this.setState({value: e.target.value})}/>
					
				<ElementsList elements={this.state.elements} onDelete={this.handleDelete} />
				
				<DeletedList deleted={this.state.deleted} onDelete={this.handleFinalDelete} />
				
			</React.Fragment>
		);	
	}



}

export default Todo;