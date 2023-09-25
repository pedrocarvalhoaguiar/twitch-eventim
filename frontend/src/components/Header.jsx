import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext';
import Logo from '../components/Logo'

export default function Header({
    heading,
    paragraph,
    linkName,
    linkUrl = "#"
}) {

    let {profile, logoutUser} = useAuth()

    return (
        <div>
            <Link to="/">Home</Link>
            <span> | </span>
            {profile ? (
                <p onClick={logoutUser}>Logout</p>
            ) : (
                <Link to="/login" >Login</Link>
            )}
            {profile &&
                <div className="mb-10">
                    <Logo/>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        {profile.name} {profile.name}
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        {paragraph} {' '}
                        <Link to={linkUrl} className="font-medium text-green-600 hover:text-green-500">
                            {linkName}
                        </Link>
                    </p>
                </div>
            }

        </div>

    )
}