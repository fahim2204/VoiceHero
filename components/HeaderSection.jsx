'use client'

import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Link from "next/link";

const HeaderSection = () => {
    const [activeLink, setActiveLink] = useState("");
    const [isSideOpen, setIsSideOpen] = useState(false);

    const MenuList = [
        {
            title: "Text to speech",
            url: '#index',
        },
        {
            title: "AI Voice Generator",
            url: '#visitor-info',
        },
        {
            title: "Products",
            url: '#reserve-meal',
        },
        {
            title: "Teams",
            url: '#story',
        },
        {
            title: "Edu",
            url: '#story',
        },
        {
            title: "About",
            url: '#story',
        },
    ]

    const handleClick = (e, url) => {
        e.preventDefault();
        setIsSideOpen(false);
        const id = url.substring(1);
        const element = document.getElementById(id);
        if (element) {
            const offset = 70;
            const elementRect = element.getBoundingClientRect();
            const scrollTop = elementRect.top + window.scrollY - offset;
            window.scrollTo({ top: scrollTop, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            {
                MenuList.forEach((item) => {
                    const section = document.getElementById(item.url.substring(1));
                    if (section &&
                        section.offsetTop <= scrollPosition + 80 &&
                        section.offsetTop + section.offsetHeight > scrollPosition + 80
                    ) {
                        setActiveLink(item.url);
                    }
                });
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [MenuList]);

    return (
        <div className="sticky top-0 bg-white z-50 shadow">
            <div className='relative min-h-16 container max-w-7xl w-full flex items-center justify-between py-2'>
                <Link href={'/'} className="flex items-center gap-2 hover:drop-shadow-lg transition-all duration-300">
                    <Image className="size-8 object-contain" src={'/icon/logo.svg'} height={36} width={37} alt='Voice Hero' />
                    <div className="font-bold text-xl">Voice Hero</div>
                </Link>
                <div className="flex items-center gap-5">
                    {MenuList.map((item, index) => {
                        return (
                            <Link key={index} href={item.url} onClick={(e) => handleClick(e, item.url)} className={`py-2 relative hover:font-medium before:content-normal before:absolute before:bottom-1.5 hover:before:w-1/2 before:h-0.5 before:rounded-3xl before:bg-alpha before:transition-all before:duration-500 transition-all duration-300 ${activeLink === item.url ? 'before:w-1/3 font-medium' : 'before:w-0'}`}>{item.title}</Link>
                        )
                    })}
                </div>
                <div className="flex items-center gap-2">
                    <button className="border rounded-full px-5 py-1.5 hover:bg-gray-300/10 hover:shadow transition-all duration-300">Log in</button>
                    <button className="text-white bg-alpha border border-alpha rounded-full px-5 py-1.5 hover:bg-alpha/90 hover:border-alpha/85 hover:shadow transition-all duration-300">Try for free</button>
                </div>

            </div>
        </div>
    )
}

{/* <div className="sticky top-0 bg-white z-50 shadow">
<div className='relative min-h-16 container max-w-7xl w-full flex items-center justify-between sm:justify-between gap-4 md:gap-8 py-2'>
    <Image className="size-8 sm:size-9 object-contain" src={'/icon/logo.svg'} height={36} width={37} alt='Voice Hero' />
    <button className="sm:hidden" onClick={() => setIsSideOpen(true)}><HiOutlineMenuAlt2 className="text-2xl" /></button>

    <div className={`fixed sm:static top-0 ${isSideOpen ? 'left-0' : '-left-full'} w-full h-full bg-white flex flex-col sm:flex-row p-6 md:p-0 items-center gap-4 order-1 sm:order-2 transition-all duration-500`}>
        <button onClick={() => setIsSideOpen(false)} className="sm:hidden ms-auto mb-10">
            <AiOutlineClose className="text-3xl" />
        </button>
        {MenuList.map((item, index) => {
            return (
                <Link key={index} href={item.url} onClick={(e) => handleClick(e, item.url)} className={`py-2 relative hover:font-medium before:content-normal before:absolute before:bottom-0 hover:before:w-1/2 before:h-0.5 before:rounded-3xl before:bg-beta before:transition-all before:duration-500 transition-all duration-300 ${activeLink === item.url ? 'before:w-1/3 font-medium' : 'before:w-0'}`}>{item.title}</Link>
            )
        })}
    </div>
    <div className='sm:ms-auto flex items-center gap-3 order-3'>
        <BiSearch className="text-2xl hidden md:block" />
        <button className="border border-beta rounded-3xl text-sm sm:text-base px-3 sm:px-5 py-1 sm:py-2 hover:bg-beta hover:text-white transition-all duration-300">Donate</button>
    </div>
</div>
</div> */}

export default HeaderSection