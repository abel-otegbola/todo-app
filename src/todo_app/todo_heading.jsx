import React from 'react';

function Heading({onChange, onSubmit}) {

		return (
			<div className="container">
				<div className="heading">
					<h2>Todo list</h2>
					<div className="actions">
						<input onChange={onChange} placeholder="type to add to list..."/>
						<button onClick={onSubmit} ><i className="fa fa-pencil"></i> Add</button>
					</div>
				</div>
			</div>
		);	
	}


export default Heading;