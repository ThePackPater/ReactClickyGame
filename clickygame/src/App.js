import React, { useState, useEffect } from "react";
import GameBoard from "./components/GameBoard";

import initializeDeck from "./deck"

export default function App() {
    const [cards, setCards] = useState([])
    const [flipped, setFlipped] = useState([]);
    const [dimension, setDimension] = useState(400)

    useEffect(() => {
        resizeGameboard()
        setCards(initializeDeck())
    }, [])

    useEffect(() => {
        const resizeListener = window.addEventListener("resize", resizeGameboard)
        return () => window.removeEventListener("resize", resizeListener)
    });

    const handleClick = (id) => setFlipped([ ...flipped, id]);

    const resizeGameboard = () => {
            setDimension(Math.min(
                document.documentElement.clientWidth,
                document.documentElement.clientHeight
            ),
        )    
    };
    return(
        <div>
            <h1>Match the Punk Band Logos!!</h1>
           <GameBoard
            dimension={dimension}
            cards={cards}
            flipped={flipped}
            handleClick={handleClick}/>
            <h1>And FIGHT the System!!</h1>
        </div>
    )
};

 