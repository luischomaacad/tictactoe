import React, { Component } from 'react';

import './stylesheets/board.css';

class Board extends Component {
  
  constructor() {
    super()
    this.state = {
      turn: 'X',
      gameEnded: false,
      board: Array(9).fill('')
    }
  }
  
  move = (i) => {
      if(this.state.board[i] === ''){
        this.state.board[i] = this.state.turn
        this.setState({
          turn: this.state.turn === 'X' ? 'O' : 'X',
          board: this.state.board
        })
        console.log(this.state.board)
      } else {
        console.log("n pode jogar aí o anta")
      }
  }
  
  renderSquares () {
    let squares = []
    for(let i = 0; i<9; i++){
      squares.push(<div key={i} className="square" onClick={() =>this.move(i)}>{this.state.board[i]}</div>)
    }
    return (
      squares
    )
  }
  
  render() {
    return (
      <React.Fragment>
        <div className="board-container">
          <div className="board">
            {this.renderSquares()}
          </div>
        </div>
      </React.Fragment>
        
    );
  }
}

export default Board;
