import LightText from "./light";
import BlueText from "./blue";
import React from "react";
import {Game} from "@/pages/play/[room]";

const GameInfo = ({game}: {game: Game}) =>{
    const peopleEnding = (n: number) =>{
        if (n == 2 || n == 3 || n == 4) return 'ადამიანი'
        return 'ადამიანი'
    }

    const monthEnding = (n: number) => {
        if (n % 10 > 4 || n % 10 == 0 || (n >= 10 && n <= 20)) return 'თვე'
        if (n % 10 == 1) return 'თვე'
        return 'თვე'
    }

    return (
        <div className='space-y-3 flex flex-col align-top font-bold text-start text-3xl text-wrap leading-10 break-words'>
            <span className='text-center text-4xl'><LightText text={'აპოკალიფსი'}/></span>
            <span className='pt-2 text-'>{game?.apocalypse}</span>
            <span className='py-4 text-center text-4xl'><LightText text={'თავშესაფარი'}/></span>
            <span><BlueText text={'ტევადობა:'}/> {game?.size} {peopleEnding(game?.size)}</span>
            <span><BlueText text={'საჭიროა გადარჩენა:'}/> {game?.time} {monthEnding(game?.time)}</span>
            <span><BlueText text={'საკვები:'}/> {game?.food} {monthEnding(game?.food)}</span>
            <span><BlueText text={'მდებარეობა:'}/> {game?.place}</span>
            <span><BlueText text={'ოთახები:'}/> {game?.rooms}</span>
            <span><BlueText text={'ნივთები:'}/> {game?.resources}</span>
        </div>
    )
}

export default GameInfo