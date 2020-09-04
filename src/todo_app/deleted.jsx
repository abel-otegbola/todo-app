import React from 'react';

function Deleted({text,onDelete}) {

		return (
			<div className="container deleted">
				<div className="list">
					<h4 style={{color: "darkred", opacity: 0.9}}>{text}</h4>
					<span>
						<i className="fa fa-trash" onClick={onDelete}></i>
					</span>
				</div>
			</div>
		);	
	
}

export default Deleted;