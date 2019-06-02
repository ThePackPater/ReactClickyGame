import React, { useState, useEffect } from "react";
import GameBoard from "./components/GameBoard";

import initializeDeck from "./deck"

export default function App() {
    const [cards, setCards] = useState([])
    const [flipped, setFlipped] = useState([]);

    useEffect(() => {
        setCards(initializeDeck())
    }, [])

    const handleClick = (id) => setFlipped([ ...flipped, id]);
    return(
        <div>
            <h1>Match the Punk Band Logos!!</h1>
           <GameBoard
            cards={cards}
            flipped={flipped}
            handleClick={handleClick}/>
        </div>
    )
};

 