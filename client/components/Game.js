import React from 'react'

import {Board} from './Board';

class Game extends React.Component{

	constructor(){
		super();
		this.state = {
			history: [{ board : Array(9).fill(null), isXNext : true }], // history[i] contains the state of board on ith step
			currStepNumber : 0,  // current step number in the history
		};
		this.handleClick = this.handleClick.bind(this);
	}
	/*
		Function to handle user click on square
	 */
	handleClick(id){ 
		const stepNumber = this.state.currStepNumber;
		const {board,isXNext} = this.state.history[ stepNumber];// Board state in currentStep
		debugger;
		if(board[id] == null && this.calculateWinner(board) ==null){  // If the square was not filled earlier and game is ON
			const nBoard = board.slice();
			nBoard[id] = ( isXNext ) ?  'X'  : 'O' ;
			this.setState ({
				history: this.state.history.slice(0,stepNumber+1).
									concat([{ board : nBoard,isXNext: !isXNext}]),
				currStepNumber : stepNumber+1,
				
			});
		}		
	}
	/*
		Step through history
	 */
	jumpToStep(stepNumber){
		const {board,isXNext} = this.state.history[ stepNumber];
		this.setState ({
			currStepNumber : stepNumber,
		});
	}
	calculateWinner(board){
		const possibleWinPositions = [
		    [0, 1, 2],
		    [3, 4, 5],
		    [6, 7, 8],
		    [0, 3, 6],
		    [1, 4, 7],
		    [2, 5, 8],
		    [0, 4, 8],
		    [2, 4, 6],
		];
		let isPossibleNextStep = false;
		for(let i=0;i<possibleWinPositions.length;i++){
			const [a,b,c] = possibleWinPositions[i];			
			if(board[a] == null || board[b] == null || board[c] == null){
				isPossibleNextStep = true;
			} else if(board[a] === board[b] && board[a] === board[c]){
				return board[a];
			}			
		}
		return (isPossibleNextStep) ? null : 'DRAW';
	}
	render(){
		const {board,isXNext} = this.state.history[ this.state.currStepNumber];// Board state in currentStep
		const moves = this.state.history.map( (value,step) => {
			const desc = (step) ? `Move #:${step}` : 'Game Start';
			return (
				<li key ={step}>
					  <a href="#" onClick = {() => this.jumpToStep(step)} >  {desc}  </a>
				</li>
			)
		});
		return(
			<div className="game">
				<div className="game-board">
					<Board  winner={this.calculateWinner(board)} 
						 	board ={board} 
							handleClick={this.handleClick}
							isXNext={isXNext}
					/>
				</div>
				<div className="game-info">
					<div> History </div>
					<ol>{moves}</ol>
				</div>
			</div>
		)
	}
}
module.exports = {Game}

