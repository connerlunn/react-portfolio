import React from 'react';
import Sudoku from './Sudoku';
import Nav from './Nav';
import Content from './Content';
import Game from './TicTacToe';

function App() {
  return (
    <div >
      <Nav/>
      <div className='contentdiv'>
        <Sudoku/>
      </div>
    </div>
  );
}

export default App;
