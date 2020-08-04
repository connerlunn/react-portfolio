import React, { useState } from 'react';
import './Sudoku.css';
import {GeneratePuzzle, CheckSolution} from '../api/SudokuLogic';
import { array } from 'prop-types';

function Cell(props) {
    if(props.isGiven){
        return <td className='isgiven'>{props.value}</td>;
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
            board: new Array(9).fill(0).map(() => new Array(9).fill(0)),
            givens: new Array(9).fill(0).map(() => new Array(9).fill(true)),
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
        const newBoard = GeneratePuzzle()
        this.setState({
            board: newBoard,
            givens: newBoard.map((row) => {
                return row.map((value) => {
                    if (value != 0){
                        return true;
                    } else {
                        return false;
                    }
                })
            })
        });
    }

    CheckSolution() {
        const check = CheckSolution(this.state.board)
        return check;
    }

    renderRow(i) {
        const row = this.state.board[i]
        return row.map((value, index) => 
            <Cell 
                value={value} 
                isGiven={this.state.givens[i][index]} 
                key={index} 
                onClick={() => this.OnCellClick(i, index)}
            />
        );
    }

    componentDidMount() {
        this.InitNewPuzzle()
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
                    <button onClick={() => this.CheckSolution()}>Check Solution</button>
                    <button onClick={() => this.InitNewPuzzle()}>New Sudoku</button>
                </div>
            </div>
        )
    }
}

export default Sudoku;