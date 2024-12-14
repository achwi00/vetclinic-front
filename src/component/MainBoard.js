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
                    <p id="welcome-msg">Your pets are safe with us.</p>
                    <p id="description-msg">Your pets deserve the best care - trust our expert veterinary team to keep them happy, healthy, and thriving!</p>
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