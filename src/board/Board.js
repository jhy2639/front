import React, {Component} from 'react';
import style from './Board.module.css';

class Board extends Component {
    render() {
        return (
            <>
                <div>
                    <span className={style.board}></span>
                </div>
            </>
        );
    }
}

export default Board;