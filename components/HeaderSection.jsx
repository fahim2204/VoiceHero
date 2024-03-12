'use client'
import { RiMagicLine } from "react-icons/ri";
import { AiFillApple } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Link from "next/link";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

const HeaderSection = () => {
    const [activeLink, setActiveLink] = useState("");
    const [isSideOpen, setIsSideOpen] = useState(false);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const MenuList = [
        {
            title: "Text to speech",
            url: 'text-to-speech',
        },
        {
            title: "AI Voice Generator",
            url: '#',
        },
        {
            title: "Pricing",
            url: '#',
        },
        {
            title: "About us",
            url: '#',
        },
    ]

    return (
        <>
            <div className="sticky top-0 bg-white z-50 shadow">
                <div className='relative min-h-16 container max-w-7xl w-full flex items-center justify-between py-2'>
                    <Link href={'/'} className="flex items-center gap-2 hover:drop-shadow-lg transition-all duration-300">
                        <Image className="size-8 object-contain" src={'/icon/logo.svg'} height={36} width={37} alt='Voice Hero' />
                        <div className="font-bold text-xl">Voice Hero</div>
                    </Link>
                    <button className="lg:hidden" onClick={() => setIsSideOpen(true)}><HiOutlineMenuAlt2 className="text-2xl" /></button>
                    <div className="hidden lg:flex items-center gap-4 xl:gap-5">
                        {MenuList.map((item, index) => {
                            return (
                                <Link key={index} href={item.url} className={`py-2 relative hover:font-medium before:content-normal before:absolute before:bottom-1.5 hover:before:w-1/2 before:h-0.5 before:rounded-3xl before:bg-alpha before:transition-all before:duration-500 transition-all duration-300 ${activeLink === item.url ? 'before:w-1/3 font-medium' : 'before:w-0'}`}>{item.title}</Link>
                            )
                        })}
                    </div>
                    <div className="hidden lg:flex items-center gap-2">
                        <button onClick={onOpen} className="border rounded-full px-5 py-1.5 hover:bg-gray-300/10 hover:shadow transition-all duration-300">Log in</button>
                        <button className="text-white bg-alpha border border-alpha rounded-full px-5 py-1.5 hover:bg-alpha/90 hover:border-alpha/85 hover:shadow transition-all duration-300">Try for free</button>
                    </div>

                    <div onClick={() => setIsSideOpen(false)} className={`lg:hidden fixed lg:static top-0 ${isSideOpen ? 'left-0' : '-left-full'} w-full h-full bg-white flex flex-col lg:flex-row p-5 lg:p-0 items-center gap-2 order-1 lg:order-2 transition-all duration-500`}>
                        <button onClick={() => setIsSideOpen(false)} className="lg:hidden ms-auto mb-10">
                            <AiOutlineClose className="text-3xl" />
                        </button>
                        {MenuList.map((item, index) => {
                            return (
                                <Link key={index} href={item.url} className={`py-2 relative hover:font-medium before:content-normal before:absolute before:bottom-0 hover:before:w-1/2 before:h-0.5 before:rounded-3xl before:bg-beta before:transition-all before:duration-500 transition-all duration-300 ${activeLink === item.url ? 'before:w-1/3 font-medium' : 'before:w-0'}`}>{item.title}</Link>
                            )
                        })}
                        <div className="flex flex-col items-center gap-5">
                            <button onClick={onOpen} className="border rounded-full px-5 py-1.5 hover:bg-gray-300/10 hover:shadow transition-all duration-300">Log in</button>
                            <button className="text-white bg-alpha border border-alpha rounded-full px-5 py-1.5 hover:bg-alpha/90 hover:border-alpha/85 hover:shadow transition-all duration-300">Try for free</button>
                        </div>
                    </div>

                </div>
            </div>
            <Modal isOpen={isOpen} size="lg" scrollBehavior="outside" placement="top" backdrop="blur" onOpenChange={onOpenChange}
                motionProps={{
                    variants: {
                        enter: {
                            y: 0,
                            opacity: 1,
                            transition: {
                                duration: 0.3,
                                ease: "easeOut",
                            },
                        },
                        exit: {
                            y: -20,
                            opacity: 0,
                            transition: {
                                duration: 0.3,
                                ease: "easeIn",
                            },
                        },
                    }
                }}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalBody>
                                <div className="px-2 sm:px-6 py-8 flex flex-col items-center gap-6 min-w-unit-xl overflow-y-auto">
                                    <Link href={'/'} className="flex items-center gap-2 hover:drop-shadow-lg transition-all duration-300">
                                        <Image className="size-7 object-contain" src={'/icon/logo.svg'} height={36} width={37} alt='Voice Hero' />
                                        <div className="font-bold text-xl">Voice Hero</div>
                                    </Link>
                                    <div className="flex flex-col gap-0 w-full">
                                        <div className="font-semibold text-center text-2xl sm:text-3xl">Sign in to Voice Hero</div>
                                        <div className="font-medium text-center sm:text-lg opacity-70">Please sign in your account to get started.</div>
                                    </div>
                                    <div className="flex flex-col gap-3 w-full">
                                        <button className="font-medium w-full p-2.5 border border-black rounded-full flex justify-center items-center gap-4 hover:border-alpha hover:text-alpha transition-all duration-300"><FcGoogle className="text-2xl" /> Sign in with Google</button>
                                        <button className="font-medium w-full p-2.5 border border-black rounded-full flex justify-center items-center gap-4 hover:border-alpha hover:text-alpha transition-all duration-300"><AiFillApple className="text-2xl !text-black" />Sign in with Apple</button>
                                    </div>
                                    <div className="relative w-full h-[1px] bg-black/20 before:content-normal before:content-['OR'] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-white before:px-4 before:font-semibold text-sm"></div>
                                    <div className="flex flex-col gap-3 w-full">
                                        <input className="w-full px-6 py-2.5 border border-black/30 rounded-full" type="email" name="username" id="username" placeholder="Your email address" />
                                        <button className="font-medium w-full p-2.5 bg-alpha text-white rounded-full flex justify-center items-center gap-4 hover:bg-alpha-500 transition-all duration-300">Sign in with email</button>
                                    </div>
                                    <div className="flex flex-col items-center gap-5 w-full">
                                        <div className="flex items-center gap-2 text-sm"><RiMagicLine className="text-alpha text-lg" />We'll email you a magic code for a password-free sign in.</div>
                                        <div className="font-bold">Already have an account? <Link href={'#'} className="text-alpha underline">Sign in</Link></div>
                                    </div>
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}


export default HeaderSection