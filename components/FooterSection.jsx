import { CgMail } from "react-icons/cg";
import { BsTelephone } from "react-icons/bs";
import { CgPin } from "react-icons/cg";
import React from 'react'
import Link from "next/link";
import Image from 'next/image';
import { FiArrowUpRight } from "react-icons/fi";

const FooterSection = () => {
    return (

        <div className="w-full bg-black text-white">
            <div className='container max-w-7xl w-full py-12 grid md:grid-cols-3 gap-6 md:gap-2 sm:gap-3'>
                <div className="flex flex-col gap-4 items-center md:items-start">
                    <Link href={`#`} ><Image className='size-16 object-contain' src={'/icon/logo.svg'} height={64} width={64} alt='Logo' /></Link>
                    <p>Myrtle Beach Pesach</p>
                    <div className="flex justify-start mt-5">
                        <Link href="#" className="font-medium bg-beta hover:bg-beta/80 hover:ring-1 text-black rounded-3xl px-5 py-2.5 flex items-center gap-2 transition-all duration-300">Reserve Seder and Yom TovMeals <FiArrowUpRight /></Link>
                    </div>
                </div>
                <ul className="list-none flex flex-col items-center md:items-start gap-4">
                    <div className="font-bold text-lg mb-3">Quick Links</div>
                    <li className='sm:text-lg hover:translate-x-1 transition-all duration-300'><Link className="block" target="_blank" href={`#`}>About us</Link></li>
                    <li className='sm:text-lg hover:translate-x-1 transition-all duration-300'><Link className="block" target="_blank" href={`#`}>Appointment</Link></li>
                    <li className='sm:text-lg hover:translate-x-1 transition-all duration-300'><Link className="block" target="_blank" href={`#`}>Contact</Link></li>

                </ul>
                <ul className="list-none flex flex-col items-center md:items-start gap-4">
                    <div className="font-bold text-lg mb-3">Contact Rabbi Doron Aizenman </div>
                    <li className='flex items-center gap-3 hover:translate-x-1 transition-all duration-300'>
                        <BsTelephone className="text-alpha stroke-1" /> +1 (999) 245 4563
                    </li>
                    <li className='flex items-center gap-3 hover:translate-x-1 transition-all duration-300'>
                        <CgMail className="text-alpha stroke-1" /> contact@Rabbi.com
                    </li>
                    <li className='flex items-center gap-3 hover:translate-x-1 transition-all duration-300'>
                        <CgPin className="text-alpha stroke-1" />113 S. Perry StreetSuite 206<br /> #6960Lawrenceville, GA 30046
                    </li>
                </ul>
            </div>
            <div className="bg-white/5 text-white">
                <div className='container max-w-7xl w-full py-5 flex flex-col md:flex-row gap-3 items-center justify-between'>
                    <p>Chabad of Myrtle Beach</p>
                    <p>Copyright © 2024. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default FooterSection