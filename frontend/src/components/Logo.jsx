import React from 'react'

import logoImage from '../assets/logo3.png';

export default function Logo({

}) {
    return (
        <div className="flex justify-center">
            <img
                alt=""
                className="h-14 w-20"
                src={logoImage} />
        </div>

    )
}