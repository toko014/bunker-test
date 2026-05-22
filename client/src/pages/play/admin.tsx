import React from "react";
import LightText from "./light";

const Admin = ({game} : {game : (a: string) => void}) => {
    return (
        <div
            className='space-y-3 flex flex-col align-top font-bold text-start text-3xl text-wrap leading-10 break-words'>
            <span className='py-4 text-center text-4xl'><LightText text={'პარამეტრები'}/>{'{\n}'}</span>
            <button className='py-1 bg-blue rounded-md align-text-top' onClick={() => game('0')}>
                საკვები = ყოფნის დრო
            </button>
            <button className='py-1 bg-blue rounded-md align-text-top' onClick={() => game('1')}>
                საკვების გაორმაგება
            </button>
            <button className='py-1 bg-blue rounded-md align-text-top' onClick={() => game('2')}>
                ახალი აპოკალიფსი
            </button>
            <button className='py-1 bg-blue rounded-md align-text-top' onClick={() => game('3')}>
                ახალი ბუნკერი
            </button>
        </div>
    )
}

export default Admin