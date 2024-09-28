import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import React from 'react'
import Link from "next/link";
import Image from 'next/image';

const FooterSection = () => {
    return (
        <div className='container max-w-7xl'>
            <div className="w-full py-6 md:py-12 grid grid-cols-9 gap-6 md:gap-2 sm:gap-3">
                <div className="col-span-9 md:col-span-3 flex flex-col gap-4 items-center md:items-start md:pr-16">
                    <Link href={'/'} className="flex items-center gap-2 hover:drop-shadow-lg transition-all duration-300">
                        <Image className="size-8 object-contain" src={'/icon/logo.svg'} height={36} width={37} alt='Voice Hero' />
                        <div className="font-bold text-xl">Voice Hero</div>
                    </Link>
                    <p>124 folks are absolutely loving VoiceHero, our AI voice generator and text-to-speech software. Join the family!</p>
                    <div className="flex items-center gap-3 text-[#001B39] text-lg pt-2">
                        <Link href={"#"} className="bg-beta rounded-full p-3 hover:bg-beta-100 hover:shadow transition-all duration-300"><FaTwitter /></Link>
                        <Link href={"#"} className="bg-beta rounded-full p-3 hover:bg-beta-100 hover:shadow transition-all duration-300"><AiFillInstagram /></Link>
                        <Link href={"#"} className="bg-beta rounded-full p-3 hover:bg-beta-100 hover:shadow transition-all duration-300"><FaYoutube /></Link>
                    </div>

                </div>
                <ul className="col-span-9 sm:col-span-3 md:col-span-2 list-none flex flex-col items-center md:items-start gap-2 md:gap-3">
                    <div className="font-bold text-lg mb-2 md:mb-3">Features</div>
                    <Link href={'#'} className='hover:translate-x-1 transition-all duration-300'>Text to Speech</Link>
                    <Link href={'#'} className='hover:translate-x-1 transition-all duration-300'>Auto Subtitle Generator</Link>
                    <Link href={'#'} className='hover:translate-x-1 transition-all duration-300'>Voice Cloning</Link>
                    <Link href={'#'} className='hover:translate-x-1 transition-all duration-300'>Online Video Editor</Link>
                </ul>
                <ul className="col-span-9 sm:col-span-3 md:col-span-2 list-none flex flex-col items-center md:items-start gap-2 md:gap-3">
                    <div className="font-bold text-lg mb-2 md:mb-3">Resources</div>
                    <Link href={'#'} className='hover:translate-x-1 transition-all duration-300'>Tutorials</Link>
                    <Link href={'/blog'} className='hover:translate-x-1 transition-all duration-300'>Blogs</Link>
                    <Link href={'#'} className='hover:translate-x-1 transition-all duration-300'>Affiliate Program</Link>
                    <Link href={'#'} className='hover:translate-x-1 transition-all duration-300'>FAQ</Link>
                </ul>
                <ul className="col-span-9 sm:col-span-3 md:col-span-2 list-none flex flex-col items-center md:items-start gap-2 md:gap-3">
                    <div className="font-bold text-lg mb-2 md:mb-3">Use cases</div>
                    <Link href={'#'} className='hover:translate-x-1 transition-all duration-300'>
                        Advertisements
                    </Link>
                    <Link href={'#'} className='hover:translate-x-1 transition-all duration-300'>
                        Education
                    </Link>
                    <Link href={'#'} className='hover:translate-x-1 transition-all duration-300'>
                        Explainer
                    </Link>
                    <Link href={'#'} className='hover:translate-x-1 transition-all duration-300'>
                        YouTube
                    </Link>

                </ul>
            </div>
            <div className="border-t text-black/50">
                <div className='w-full py-5 flex flex-col md:flex-row gap-3 items-center justify-between'>
                    <p>© Copyright 2024 Lumination AI, All Rights Reserved.</p>
                    <div className="flex gap-2 md:gap-4 text-sm sm:text-base">
                        <Link href={'#'}>Privacy Policy</Link>
                        <Link href={'#'}>Terms & Conditions</Link>
                        <Link href={'#'}>Support</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterSection