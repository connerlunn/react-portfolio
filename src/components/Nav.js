import React from 'react';
import './Nav.css';
import Avi from '../images/me.jpg'

function Nav() {
    return (
        <div className='navdiv'>
            <div className='namesection'>
                <img src={Avi} alt="Conner" className="avi"/>
                <h1>Conner Lunn</h1>
                <h3>Software Developer</h3>
                <h3>Omaha, NE</h3>
            </div>
            <div>
                <nav>
                    <br />
                    <span className='navlinks'>Resume</span><br />
                    <span className='navlinks'>Tic-Tac-Toe</span><br />
                    <span className='navlinks'>Sudoku</span><br />
                    <span className='navlinks'>Pong</span><br />
                </nav>
            </div>
        </div>
    );
  }
  
  export default Nav;