"use client";
import { useState } from 'react';


const Nav = ({ onNavigate }) => {
    const [activeSection, setActiveSection] = useState('home');

    const handleNavigation = (section) => {
        setActiveSection(section);
        onNavigate(section);
    };

    return (
        <nav className="flex justify-between items-center p-6">
            {/* <div className="text-xl font-bold">Raheel.</div> */}
            <ul className="flex gap-8">
                {['Home', 'Services', 'Resume', 'Work', 'Contact'].map((item) => (
                    <li
                        key={item}
                        className={`cursor-pointer ${activeSection === item.toLowerCase() ? 'text-accent' : ''}`}
                        onClick={() => handleNavigation(item.toLowerCase())}
                    >
                        {item}
                    </li>
                ))}
            </ul>
            {/* <button className="bg-accent text-primary px-4 py-2 rounded-lg">Hire me</button> */}
        </nav>
    );
};

export default Nav;
