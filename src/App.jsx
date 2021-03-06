import React, { useState, useEffect } from "react";
import GameBoard from "./components/GameBoard";
import initializeDeck from "./deck";

export default function App() {
    const [cards, setCards] = useState([]);
    const [flipped, setFlipped] = useState([]);
    const [dimension, setDimension] = useState(400);
    const [solved, setSolved] = useState([]);
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        resizeGameboard()
        setCards(initializeDeck())
    }, []);
   
    useEffect(() => {
        const resizeListener = window.addEventListener("resize", resizeGameboard)
        return () => window.removeEventListener("resize", resizeListener)
    });

    const resizeGameboard = () => {
        setDimension(Math.min(
            document.documentElement.clientWidth,
            document.documentElement.clientHeight
        ),
    )};

    const sameCardClickedTwice = (id) => flipped.includes(id);

    const isAMatch = (id) => {
        const clickedCard = cards.find((card) => card.id === id)
        const flippedCard = cards.find((card) => flipped[0] === card.id)
        return flippedCard.type === clickedCard.type

    };

    const resetCards = () => {
        setFlipped([])
        setDisabled(false)
    };

    const handleClick = (id) => {
        setDisabled(true)
        if (flipped.length === 0) {
            setFlipped([id])
            setDisabled(false)
        } else {
            if (sameCardClickedTwice(id)) return 
                setFlipped([...flipped, id])
            if (isAMatch(id)) { 
                setSolved([...solved, ...flipped, id])
                //need code if solved remove cards || keep cards face up & add points 
            } else {
                setTimeout(resetCards, 2000)
            }
        }
    };

 
    return(
        <div>
            <h1>Match the PUNK BAND Logos!!</h1>
                <GameBoard
                    dimension={dimension}
                    cards={cards}
                    flipped={flipped}
                    handleClick={handleClick}
                    diabled={disabled}
                    solved={solved}
                />
            <h1>And FIGHT the System!!</h1>
        </div>
    )
}