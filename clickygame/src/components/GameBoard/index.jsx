import React from "react";
import PropTypes from "prop-types";
import MemCard from "../MemCard";

import "./styles.css";

export default function GameBoard({ solved, disabled, dimension, cards, flipped, handleClick}) {

    return( <div className="board">
        {
            cards.map((card) => ( <MemCard
                key={card.id}
                id={card.id}
                type={card.type}
                height={dimension / 4.5} 
                width={dimension / 4.5}
                flipped={flipped.includes(card.id)}
                handleClick={handleClick}
                disabled={disabled}
                solved={disabled || solved.includes(card.id)}
                />))};
            </div>
    )
};

GameBoard.propTypes = {
    solved: PropTypes.arrayOf(PropTypes.number).isRequired,
    disabled: PropTypes.bool.isRequired,
    dimension: PropTypes.number.isRequired,
    cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    flipped: PropTypes.arrayOf(PropTypes.number).isRequired,
    handleClick: PropTypes.func.isRequired,
}
