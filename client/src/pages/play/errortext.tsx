import React from 'react'

const ErrorText = ({text} : {text: string | undefined}) => {
    if (text === undefined){
        return(
            <a className='text-red'>შეცდომა</a>
        )
    } else {
        return(
            <a className='text-white'>{text}</a>
        )
    }
}

export default ErrorText