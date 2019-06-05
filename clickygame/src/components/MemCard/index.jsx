import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

export default function MemCard({ 
    handleClick,
    flipped,
    solved,  
    id, 
    type,  
    height, 
    width,
    disabled
}) { return(
        <div 
            className={`flip-container ${flipped ? "flipped" : ""} `}
            style={{
                width,
                height
            }}
            onClick={() => (disabled ? null : handleClick(id))}
        >
            <div className="flipper">
                <img
                    style={{height, width}}
                    className={flipped ? "front" : "back"}
                    src={flipped || solved ? `/img/${type}.jpg` : "/img/AcardBack.jpg"}
                    alt={"punk rock card"}
                />
            </div>
        </div>
    
    )};

MemCard.propTypes = {
    disabled: PropTypes.bool,
    handleClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    flipped: PropTypes.bool.isRequired,
    solved: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired
};


