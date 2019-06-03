import React, { useState, useEffect } from "react";
import GameBoard from "./components/GameBoard";
import initializeDeck from "./deck"

export default function App() {

    const [cards, setCards] = useState([])
    const [flipped, setFlipped] = useState([]);
    const [dimension, setDimension] = useState(400)
    const [solved, setSolved] = useState([]);
    const [disabled, setDisabled] = useState([false]);

    useEffect(() => {
        resizeGameboard()
        setCards(initializeDeck())
    }, [])

    useEffect(() => {
        const resizeListener = window.addEventListener("resize", resizeGameboard)
        return () => window.removeEventListener("resize", resizeListener)
    });

    const handleClick = (id) => {
        setDisabled(true)
        if (flipped === 0) {
            setFlipped([ ...flipped, id])
            setDisabled(false)
        } else {
            if (sameCardClicked(id)) return
                setFlipped([flipped[0], id])
            if (isMatch(id)){
                setSolved([ ...solved, flipped[0], id])
                resetCards()
            } else {
                setTimeout(resetCards, 2000)
            }
        }
    };

    const resetCards = () => {
        setFlipped([])
        setDisabled(false)
    }

    const isMatch = (id) => {
        const clickedCard = cards.find((card)=> card.id === id)
        const flippedCard = cards.find((card)=> flipped[0] === id)
        return flippedCard.type === clickedCard.type
    } 

    const sameCardClicked = (id) => flipped.includes(id);

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
            handleClick={handleClick}
            diabled={disabled}
            solved={solved}/>

            <h1>And FIGHT the System!!</h1>
        </div>
    )
}