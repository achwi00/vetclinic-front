import React from 'react';
import '../styles/main-board.css';
import RoundButton from "./RoundButton";

function MainBoard(){
    return(
        <div className="main">
            <div className="centring-content">
                <div id="cat-holder">
                    <img src={"../group.svg"} alt={"cat"}/>
                </div>
                <div className="welcome-text">
                    <p id="welcome-msg">Lorem ipsum dolor sit amet.</p>
                    <p id="description-msg">Consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Consectetur adipiscing elit.</p>
                    <div id="learn-more-holder">
                        <RoundButton
                            label='LEARN MORE'
                            href='#'
                            styleClass="learn-more-btn"
                        />
                    </div>
                </div>
            </div>
            <hr className="center-line"/>
        </div>
    );
}
export default MainBoard;