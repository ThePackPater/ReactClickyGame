import React from "react";
import PropTypes from "prop-types";
import MemCard from "../MemCard";

export default function GameBoard({ cards, flipped, handleClick}) {

    return( <div className="board">
        {
            cards.map((card) => ( <MemCard
                key={card.id}
                id={card.id}
                type={card.type}
                height={100} 
                width={100}
                flipped={flipped.includes(card.id)}
                handleClick={() => handleClick(card.id)}
                />))};
            </div>
    )
};

GameBoard.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    flipped: PropTypes.arrayOf(PropTypes.number).isRequired,
    handleClick: PropTypes.func.isRequired,
}
