import React from 'react';
import LightText from "./light";
import Blue from "./blue";
import RedText from "./canred";
import LockText from "./lock";
import {Character} from "@/pages/play/[room]";

const Char = ({c, self, handler}: {c : Character | null, self : boolean, handler : (a: string, b: string) => void}) => {
    if (c === null || c?.lock.length < 9) {
        return (
            <div></div>
        )
    }
    if (self) {
        return (
            <div className='space-y-3 flex flex-col align-top font-bold text-start text-3xl text-wrap leading-10 break-words'>
                <span className='py-4 text-center text-4xl'><LightText text={c?.username}/>{'\n'}</span>
                <button className='py-1 bg-blue rounded-md align-text-top' onClick={() => handler('100000000', c.username)}>
                    <LockText text={'ძირითადი:'} lock={c?.lock[0] == '0'}/> {c?.main}
                </button>
                <button className='py-1 bg-blue rounded-md align-text-top' onClick={() => handler('010000000', c.username)}>
                    <LockText text={'ტანის აღნაგობა:'} lock={c?.lock[1] == '0'}/> {c?.body}
                </button>
                <button className='py-1 bg-blue rounded-md align-text-top' onClick={() => handler('001000000', c.username)}>
                    <LockText text={'ჯანმრთელობა:'} lock={c?.lock[2] == '0'}/> {c?.health}
                </button>
                <button className='py-1 bg-blue rounded-md align-text-top' onClick={() => handler('000100000', c.username)}>
                    <LockText text={'სამსახური:'} lock={c?.lock[3] == '0'}/> {c?.job}
                </button>
                <button className='py-1 bg-blue rounded-md align-text-top' onClick={() => handler('000010000', c.username)}>
                    <LockText text={'ჰობი:'} lock={c?.lock[4] == '0'}/> {c?.hobby}
                </button>
                <button className='py-1 bg-blue rounded-md align-text-top' onClick={() => handler('000001000', c.username)}>
                    <LockText text={'ფობია:'} lock={c?.lock[5] == '0'}/> {c?.phobia}
                </button>
                <button className='py-1 bg-blue rounded-md align-text-top' onClick={() => handler('000000100', c.username)}>
                    <LockText text={'ნივთი:'} lock={c?.lock[6] == '0'}/> {c?.item}
                </button>
                <button className='py-1 bg-blue rounded-md align-text-top' onClick={() => handler('000000010', c.username)}>
                    <LockText text={'დამატებითი ინფორმაცია:'} lock={c?.lock[7] == '0'}/> {c?.info}
                </button>
                <button className='py-1 bg-blue rounded-md align-text-top' onClick={() => handler('000000001', c.username)}>
                    <LockText text={'უნარი:'} lock={c?.lock[8] == '0'}/> {c?.ability}
                </button>
            </div>
        )
    } else {
        return (
            <div className='space-y-3 flex flex-col align-top font-bold text-start text-3xl text-wrap leading-10 break-words'>
                <span className='py-4 text-center text-4xl'><LightText text={c?.username}/>{'\n'}</span>
                <span><Blue text={'ძირითადი:'}/>{' '}
                    <RedText text={c?.lock[0] == '1' ? c?.main : 'დამალული'} r={c?.lock[0] == '1'}/></span>
                <span><Blue text={'ტანის აღნაგობა:'}/>{' '}
                    <RedText text={c?.lock[1] == '1' ? c?.body : 'დამალული'} r={c?.lock[1] == '1'}/></span>
                <span><Blue text={'ჯანმრთელობა:'}/>{' '}
                    <RedText text={c?.lock[2] == '1' ? c?.health : 'დამალული'} r={c?.lock[2] == '1'}/></span>
                <span><Blue text={'სამსახური:'}/>{' '}
                    <RedText text={c?.lock[3] == '1' ? c?.job : 'დამალული'} r={c?.lock[3] == '1'}/></span>
                <span><Blue text={'ჰობი:'}/>{' '}
                    <RedText text={c?.lock[4] == '1' ? c?.hobby : 'დამალული'} r={c?.lock[4] == '1'}/></span>
                <span><Blue text={'ფობია:'}/>{' '}
                    <RedText text={c?.lock[5] == '1' ? c?.phobia : 'დამალული'} r={c?.lock[5] == '1'}/></span>
                <span><Blue text={'ნივთი:'}/>{' '}
                    <RedText text={c?.lock[6] == '1' ? c?.item : 'დამალული'} r={c?.lock[6] == '1'}/></span>
                <span><Blue text={'დამატებითი ინფორმაცია:'}/>{' '}
                    <RedText text={c?.lock[7] == '1' ? c?.info : 'დამალული'} r={c?.lock[7] == '1'}/></span>
                <span><Blue text={'უნარი:'}/>{' '}
                    <RedText text={c?.lock[8] == '1' ? c?.ability : 'დამალული'} r={c?.lock[8] == '1'}/></span>
            </div>
        )
    }
}

export default Char