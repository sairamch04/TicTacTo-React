import React from 'react'
const { number,string,func } = React.PropTypes;

const Square = (props ) => {

	return(
		<button className="square"  onClick = {() => props.handleClick(props.id)}>
			{props.value}
		</button>
	);
}

Square.propTypes = {
	id : number.isRequired,
	value : string, //value can be null , When no user clicked on the button
	handleClick : func
}

module.exports = {Square}