import React from 'react'

import logoImage from '../assets/twitch-logo.jpg';

export default function Logo({

}) {
    return (
        <div className="flex justify-center">
            <img
                alt=""
                className="h-14 w-14"
                src={logoImage} />
        </div>

    )
}