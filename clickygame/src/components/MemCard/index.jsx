import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

export default function MemCard({ 
    solved, 
    disabled, 
    handleClick, 
    type, 
    id, 
    flipped, 
    height, 
    width
}) {
    return(

        <div 
            className={`flip-container ${flipped ? "flipped" : ""} `}
            style={{width, height}}
            onClick={() => disabled ? null : handleClick(id)}
        >
            <div className="flipper">
                <img
                    style={{height, width}}
                    className={flipped ? "front" : "back"}
                    src={flipped || solved ? `img/${type}.jpg` : `hide-MemCard`}
                    alt={"punk rock card"}
                />
            </div>
        </div>
    
    )};

MemCard.propTypes = {
    solved: PropTypes.bool.isRequired,
    disabled: PropTypes.bool,
    handleClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    flipped: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired
};


