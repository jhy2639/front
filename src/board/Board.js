import React from 'react';
import style from './Board.module.css';

function mainPage() {
    return (
        <div className={style.background}>
            <div className={style.chgBtnClass}>
                <span className={style.chgBtn1}>일정</span>
                <span className={style.chgBtn2}>식당목록</span>
                <span className={style.chgBtn3}>액티비티</span>
            </div>
            <div className={style.board}>
                asdf
            </div>
        </div>
    );
}

export default mainPage;