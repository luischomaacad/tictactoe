import React, { Component } from 'react';

import './stylesheets/board.css';

class Board extends Component {
  
  constructor() {
    super()
    this.state = {
      turn: 'X',
      gameEnded: false,
      board: Array(9).fill(''),
      totalMoves: 1,
      winner: ''
    }
  }
  
  move = (i) => {
      if(this.state.board[i] === ''){
        this.state.board[i] = this.state.turn
        this.setState({
          turn: this.state.turn === 'X' ? 'O' : 'X',
          board: this.state.board,
          totalMoves: this.state.totalMoves+1
        })
        console.log(this.state.board)
        console.log(this.state.totalMoves)
      } else {
        console.log("Jogada inválida")
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
    
    if(this.state.totalMoves == 9) {
      return 'draw';
    }
  }
  
  checkWinner(result) {
    if(result == 'X') {
      console.log('Acabou e o X ganhou!')
      this.gameEnded = true;
      this.setState({
        winner: 'X'
      })
    } else if(result == 'O') {
      console.log('Acabou e o O ganhou!')
      this.gameEnded = true;
      this.setState({
        winner: 'O'
      })
    } else if(result == 'draw') {
      console.log('Empate!')
      this.gameEnded = true;
      this.setState({
        winner: 'draw'
      })
    }
  }

  
  renderSquares () {
    let squares = []
    for(let i = 0; i<9; i++){
      let idName = (`square-${i}`)
      squares.push(
        <div key={i} id={idName} className="square" onClick={() =>this.move(i)}>
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
