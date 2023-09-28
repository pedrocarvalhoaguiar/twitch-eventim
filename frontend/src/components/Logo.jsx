import React from 'react'

import logoImage from '../assets/logo-white.png';

export default function Logo({

}) {
    return (
        <div className="flex justify-center bg-color-malibu-300">
            <img
                alt=""
                className="h-30 w-40"
                src={logoImage} />
        </div>

    )
}