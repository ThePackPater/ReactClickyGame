import React from "react";
import MemCard from "./components/MemCard";

function App(){
    return(
        <div>
            <h1>Can you match match the toon cards?!</h1>
            <MemCard
                id={1}
                height={100} 
                width={100}
                front={`/img/spongebob.png`}
                back={`/img/cardBack.png`}
                flipped={flipped.includes(1)}
                handleClick={() => handleClick(1)}
            />
        </div>
    )
};

export default App;