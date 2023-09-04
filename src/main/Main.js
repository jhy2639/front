import React, {Component} from 'react';
import Header from "./Header";
import Board from "../board/Board";
import Footer from "./Footer";

class Main extends Component {
    render() {
        return (
            <>
                <div>
                    <Header/>
                    <Board />
                    <Footer/>
                </div>
            </>
        );
    }
}

export default Main;