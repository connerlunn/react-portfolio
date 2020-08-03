import React, { useState } from 'react';
import './Sudoku.css';
import GeneratePuzzle from '../api/SudokuLogic';

function Cell(props) {
    if(props.isGiven){
        return <td className='isGiven'>{props.value}</td>;
    } else {
        if(props.value == 0){
            return <td onClick={props.onClick}> </td>;
        } else {
            return <td onClick={props.onClick}>{props.value}</td>;
        }
    }
}

class Sudoku extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                board: GeneratePuzzle(),
            };  
        }

    OnCellClick(row, col) {
        const newboard = this.state.board.slice();
        if (newboard[row][col] == 9){
            newboard[row][col] = 0;
        } else{
            newboard[row][col] += 1;
        }
        this.setState({board: newboard});
    }

    InitNewPuzzle() {
        this.setState({board: GeneratePuzzle()});
    }

    renderRow(i) {
        const row = this.state.board[i]
        return row.map((value, index) => 
            <Cell 
                value={value} 
                isGiven={false} 
                key={index} 
                onClick={() => this.OnCellClick(i, index)}
            />
        );
    }

    render() {
        return(
            <div className='outerdiv'>
                    <table>
                        <colgroup><col/><col/><col/></colgroup>
                        <colgroup><col/><col/><col/></colgroup>
                        <colgroup><col/><col/><col/></colgroup>
                    <tbody>
                        <tr>{this.renderRow(0)}</tr>
                        <tr>{this.renderRow(1)}</tr>
                        <tr>{this.renderRow(2)}</tr>
                    </tbody>
                    <tbody>
                        <tr>{this.renderRow(3)}</tr>
                        <tr>{this.renderRow(4)}</tr>
                        <tr>{this.renderRow(5)}</tr>
                    </tbody>
                    <tbody>
                        <tr>{this.renderRow(6)}</tr>
                        <tr>{this.renderRow(7)}</tr>
                        <tr>{this.renderRow(8)}</tr>
                    </tbody>
                </table>

                <div className='buttondiv'>
                    <button>Check Solution</button>
                    <button onClick={() => this.InitNewPuzzle()}>New Sudoku</button>
                </div>
            </div>
        )
    }
}

export default Sudoku;