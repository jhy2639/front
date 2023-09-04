import React, {Component} from 'react';
import Main from "../main/Main";
import style from "./Login.module.css";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Main:false
        };
    }
    goMainPage = () => {
        this.setState({Main:true});
    }
    render() {
        if(this.state.Main){
            return <Main/>
        }
        return (
            <>
                <div className="loginInput">
                    <input className={style.id}></input>
                    <br/><br/>
                    <input className={style.pw}></input>
                </div>

                <div>
                    <span>회원가입</span>
                    <button className={style.loginBtn} onClick={this.goMainPage}>로그인</button>
                </div>
            </>
        );
    }
}

export default Login;