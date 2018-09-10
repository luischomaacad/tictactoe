import React, { Component } from 'react';

import './stylesheets/board.css';

class Board extends Component {
  
  constructor() {
    super()
    this.state = {
      turn: 'X',
      gameEnded: false,
      board: Array(9).fill(''),
      totalMoves: 0,
      winner: ''
    }
  }
  
  move = (i) => {
      if(this.state.board[i] === ''){
        this.state.board[i] = this.state.turn
        this.setState({
          turn: this.state.turn === 'X' ? 'O' : 'X',
          board: this.state.board,
          totalMoves: this.state.totalMoves++
        })
        console.log(this.state.board)
      } else {
        console.log("n pode jogar aí o anta")
      }
      let result = this.checkMoves();
      this.checkWinner(result) 
  }
  
  checkMoves() {
    let moves = [[0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6], [0, 1, 2], [3, 4, 5], [6, 7, 8]];
    let board = this.state.board;
    for(let i=0;i<moves.length;i++) {
      if(board[moves[i][0]] == board[moves[i][1]] && board[moves[i][1]] == board[moves[i][2]])
          return board[moves[i][0]];
    }
    
    if(this.totalMoves == 9) {
      return 'draw';
    }
  }
  
  checkWinner(result) {
    if(result == 'X') {
      console.log('Acabou e o Xizao ganhou')
      this.gameEnded = true;
      this.setState({
        winner: 'X'
      });
    } else if(result == 'O') {
      console.log('Acabou e o Bolao ganhou')
      this.gameEnded = true;
      this.setState({
        winner: 'O'
      });
    } else if(result == 'draw') {
      console.log('Dois bosta jogando')
      this.gameEnded = true;
      this.setState({
        winner: 'draw'
      })
    }
  }

  
  renderSquares () {
    let squares = []
    for(let i = 0; i<9; i++){
      squares.push(
        <div key={i} className="square" onClick={() =>this.move(i)}>
          {this.state.board[i]}
        </div>
      )
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
