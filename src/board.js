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
      if(this.state.board[i] === '' && !this.state.gameEnded){
        this.state.board[i] = this.state.turn
        this.setState({
          turn: this.state.turn === 'X' ? 'O' : 'X',
          board: this.state.board,
          totalMoves: this.state.totalMoves+1
        })
        // console.log(this.state.board)
        // console.log(this.state.totalMoves)
      } else {
        // console.log("Jogada inválida")
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
      // console.log('Acabou e o X ganhou!')
      this.setState({
        gameEnded: true,
        winner: 'X'
      })
    } else if(result == 'O') {
      // console.log('Acabou e o O ganhou!')
      this.setState({
        gameEnded: true,
        winner: 'O'
      })
    } else if(result == 'draw') {
      // console.log('Empate!')
      this.setState({
        gameEnded: true,
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
          <p className="square-symbol">{this.state.board[i]}</p>
        </div>
      )
    }
    return (
      squares
    )
  }
  
  renderWinner() {
    let winner = this.state.winner
    let message = 'O melhor jogo da velha do mundo'
    if(this.state.gameEnded && winner == 'draw') {
      message = 'O jogo empatou'
    } else if (this.state.gameEnded){
      message = `O jogo acabou e o vencedor é ${this.state.winner}`
    }
    
    return(
      <div className="winner-title">
        <h1> {message} </h1>
      </div>
    )
  }
  
  resetGame() {
    this.setState({
      turn: 'X',
      gameEnded: false,
      board: Array(9).fill(''),
      totalMoves: 1,
      winner: ''
    })
  }
  
  
  render() {
    console.log(JSON.stringify(this.state))
    return (
      <React.Fragment>
        {this.renderWinner()}      
        <div className="board-container">
          <div className="board">
            {this.renderSquares()}
          </div>
        </div>
        <div className="reset-button-container">
          <button className="reset-button" onClick = {this.resetGame.bind(this)}>Reiniciar o jogo</button>  
        </div>    
      </React.Fragment>
        
    );
  }
}

export default Board;
