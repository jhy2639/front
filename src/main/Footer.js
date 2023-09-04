import React, {Component} from 'react';
import style from './css/Footer.module.css'

class Footer extends Component {
    render() {
        return (
            <>
                <div>
                    <span className={style.footer}>footer test</span>
                </div>
            </>
        );
    }
}

export default Footer;