"use client";
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";

const links = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Resume", path: "/resume" },
    { name: "Work", path: "/work" },
    { name: "Contact", path: "/contact" }
];

const MobileNav = ({ onNavigate }) => {
    const pathname = usePathname();
    const [activeSection, setActiveSection] = useState('home');

    const handleNavigation = (section) => {
        setActiveSection(section);
        onNavigate(section);
    };

    return (
        <Sheet>
            <SheetTrigger className='p-2'>
                <CiMenuFries className='text-[32px] text-accent' />
            </SheetTrigger>
            <SheetContent className='flex flex-col p-6 bg-primary shadow-lg'>
                <div className='mb-8 text-center'>
                    <Link href="/" className='text-2xl font-bold'>
                        <h1 className='text-4xl font-semibold'>
                            Raheel<span className='text-accent'>.</span>
                        </h1>
                    </Link>
                </div>
                <nav className='flex flex-col items-center space-y-6 text-white/10'>
                    {links.map((link) => (
                        <button
                            key={link.path}
                            className={`text-xl capitalize cursor-pointer ${link.path === pathname || activeSection === link.name.toLowerCase() ? 'text-accent' : 'text-gray-800'} hover:text-accent transition-colors duration-200`}
                            onClick={() => handleNavigation(link.name.toLowerCase())}
                        >
                            {link.name}
                        </button>
                    ))}
                </nav>
                <button className="mt-6 bg-accent text-primary px-2 py-2 rounded-lg">
                    Hire me
                </button>
            </SheetContent>
        </Sheet>
    );
}

export default MobileNav;
