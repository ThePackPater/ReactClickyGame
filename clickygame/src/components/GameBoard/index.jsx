import React from "react";
import PropTypes from "prop-types";
import MemCard from "../MemCard";

import "./styles.css";

export default function GameBoard({
    solved, 
    disabled,
    dimension,
    cards, 
    flipped, 
    handleClick
    }) {
    return(
        <div className="wrapper">
            <div className="board">
            {
                cards.map((card) => ( <MemCard
                key={card.id}
                type={card.type}
                height={dimension / 5.5} 
                width={dimension / 5.5}
                flipped={flipped.includes(card.id)}
                handleClick={handleClick}
                disabled={disabled}
                solved={disabled || solved.includes(card.id)}
                {...card}
                />
            ))};
            </div>
        </div>
    )
};

GameBoard.propTypes = {
    solved: PropTypes.arrayOf(PropTypes.number).isRequired,
    dimension: PropTypes.number.isRequired,
    cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    flipped: PropTypes.arrayOf(PropTypes.number).isRequired,
    handleClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
}
