import GameCell from "./GameCell"
import { useContext, useState } from "react"
import { GameState } from "../ContextFile"

export default function GameBoard() {

    const [player, setPlayer, boardState, setBoardState, result, setResult] = useContext(GameState)

    return (

        <div className="game-board w-96 h-96 bg-slate-600 m-auto relative top-12 flex flex-wrap justify-center items-center">
            {boardState.map((cell, index) => (
                cell.map((gameCell, index) => (
                    <GameCell key={index} />
                ))
            ))}
        </div>

    )
}

// need to figure out how to arrange cells