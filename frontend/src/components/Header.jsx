import { useState, useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import {
    XMarkIcon,
} from '@heroicons/react/24/outline'
import logoImage from '../assets/logo3.png';
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext';


export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const { logoutUser, user } = useAuth()

    const [isOpen, setIsOpen] = useState(false);
    
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    useEffect(() => {
        setIsOpen(false)
    }, [user])

    return (
        <header className="bg-gray-300">
            <nav className="p-3 flex justify-between items-center px-4 md:px-8 lg:px-16" aria-label="Global">
                <div className="flex flex-shrink-0">
                    <Link to="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img className="h-8 w-auto" src={logoImage} alt="" />
                    </Link>
                </div>
                <div className="flex-grow md:flex-grow-0 md:w-1/2 text-center ml-20">
                    <input name="search" className="mr-3 rounded-md p-1"/>
                    <button htmlFor="search" className="text-malibu-600 pl-3 pr-3 rounded-md"> Search </button>
                </div>
                <div className="hidden md:block">
                    {user ? (
                        <div className="relative inline-block text-left">
                            <button className="text-gray-900" onClick={toggleDropdown}>
                                {user.name} <span aria-hidden="true">&#9660;</span>
                            </button>

                            {isOpen && (
                                <div className="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                        <button
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                                            
                                        >
                                            My Events
                                        </button>
                                        <button
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                                            
                                        >
                                            Create Event +
                                        </button>
                                        <button
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                                            onClick={logoutUser}
                                        >
                                            Log out &#8594;
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <>
                            <Link to="/register" className="text-sm font-semibold leading-6 text-malibu-600">
                                Registre-se &nbsp;&nbsp;&nbsp;
                            </Link>
                            <Link to="/login" className="text-sm font-semibold leading-6 text-malibu-600">
                                Log in <span aria-hidden="true">&rarr;</span>
                            </Link>
                        </>
                    )}
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Home
                                </a>
                            </div>
                            <div className="py-6">
                                <Link
                                    to="/login"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Log in
                                </Link>
                            </div>
                            <div className="py-6">
                                <Link
                                    to="/register"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Registre-se
                                </Link>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
