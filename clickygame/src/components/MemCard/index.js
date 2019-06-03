/* eslint-disable react/no-typos */
import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

export default function MemCard({handleClick, type, id, flipped, height, width}) {
    return(

        <div 
            className={`flip-container ${flipped ? "flipped" : ""} `}
            style={{width, height}}
            onClick={() => handleClick(id)}
        >
            <div className="flipper">
                <img
                    style={{height, width}}
                    className={flipped ? "front" : "back"}
                    src={flipped ? `img/${type}.jpg` : "/img/Acardback.jpg"}
                    alt={"punk rock card"}
                />
            </div>
        </div>
    
    )};

MemCard.propTypes = {
    handleClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    flipped: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired
};


