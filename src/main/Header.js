import React, {Component} from 'react';
import style from "./css/Header.module.css";

class Header extends Component {
    render() {
        return (
            <>
                <div id="top">
                    <div className={style.topMenu}></div>


                </div>
            </>
        );
    }
}

export default Header;