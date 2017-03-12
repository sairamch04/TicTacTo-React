import React from 'react'

import { Square } from './Square'
const  {number,array,func} =  React.PropTypes

const Board = (props) => {
	
		const renderSquare = (i) => {
			return <Square id={i}  value ={props.board[i]} handleClick = {props.handleClick}/>;
		};	
		let status;
		const winner = props.winner;
		if(winner && (winner === 'X' || winner == 'O') ){
			status = `Winner is : ${winner}`;
		} else if(winner){
			status = 'DRAW. Well played both!';
		} else {
			status = `Next Player : ${(props.isXNext ) ?  'X'  : 'O'}`;
		}		
		return (
			<div>
				<div className="status">{status}</div>
				<div className="board-row">
				    {renderSquare(0)}
				    {renderSquare(1)}
				    {renderSquare(2)}
				</div>
				<div className="board-row">
					{renderSquare(3)}
					{renderSquare(4)}
					{renderSquare(5)}
				</div>
				<div className="board-row">
					{renderSquare(6)}
					{renderSquare(7)}
					{renderSquare(8)}
				</div>

			</div>

		);
}
Board.propTypes ={
	id : number,
	board : array,
	handleClick: func,

}
module.exports ={ Board }; 