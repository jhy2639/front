import React from 'react';
import style from "./Login.module.css";
import TestData from "../testData/testData.json";


function loginPage() {
    return (
        <div>
            <div className={style.logo}>Logo</div>

            <div className={style.loginForm}>
                <div className={style.inputBox}>
                    <div className={style.id}>ID</div>
                    <div className={style.pwd}>PWD</div>
                </div>

                <div className={style.loginBtn}>버튼</div>
            </div>
        </div>
    );
}

export default loginPage;
