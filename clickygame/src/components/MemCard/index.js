import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

function MemCard({handleClick, id, front, back, height, width}) {
    return(

        <div 
            className={'flip-container ${flipped ? "flipped" : ""} '}
            style={{width, height}}
            onClick={() => handleClick(id)}
        >

            <div className="flipper">
                <img style={{height, width}}
                className={flipped ? front : back}
                />

            </div>
        </div>


    )
};

export default MemCard;
