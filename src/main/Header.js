import React from 'react';
import style from "./css/Header.module.css";

function Header() {
    return (
        <div className={style.header}>
            <span className={style.title}>모임이름</span>
            <span className={style.total}>won 통장잔고</span>
        </div>
    );
}

export default Header;