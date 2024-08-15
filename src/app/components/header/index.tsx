'use client'

import { useState, useEffect, useRef } from 'react';

import Logo from "./logo";
import MainNav from "./mainNav";
import NavToggler from './navToggler';
import SearchButton from './searchButton';
import ProfileButton from './profileButton';

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
    const navRef = useRef<HTMLDivElement>(null);

    // listener for nav closing
    useEffect(() => {
        // close nav listener
        window.addEventListener("click", closeNav);

        // clean up listener when component unmounts
        return () => {
        window.removeEventListener("click", closeNav);
        };
    }, []);

    // toggle nav state
    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    // handler for closing navbar when clicked when link is clicked or when clicked outside
    const closeNav = (e: MouseEvent) => {
        if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsNavOpen(false);
        }
    };

    return (
        <nav
            ref={navRef} 
            className="w-screen h-[80px] z-50 bg-white fixed top-0 left-0 px-4 md:px-10 lg:px-32 shadow-lg shadow-black/5"
        >
            <div className="w-full h-fit bg-white rounded-lg md:rounded-none flex flex-wrap items-center justify-between">
                <div className="w-fit h-[80px] flex items-center">
                    <Logo/>
                </div>
                <div className={`items-center justify-between ${isNavOpen ? "" : "hidden"} w-full md:flex md:w-auto order-1`}>
                    <MainNav/>
                </div>
                <div className="flex flex-row-reverse items-center gap-x-4 md:order-2">
                    <NavToggler toggleNav={toggleNav}/>
                    <div className="flex">
                        <SearchButton/>
                        <ProfileButton/>
                    </div>
                </div>
            </div>
        </nav>
    );
}
 
export default Header;