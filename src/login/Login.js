import React from 'react';
import style from "./Login.module.css";


function loginPage() {
    function confirmLogin() {

    }

    return(
        <div className={style.backGround}>
            <div className={style.loginForm}>
                <input className={style.id}></input>
                <br/>
                <input className={style.pwd}></input>
                <br/>
                <span className={style.btn} onClick={confirmLogin}>로그인</span>
            </div>
            <br/>

        </div>
    );
}

export default loginPage;
