'use client'
import { BiDotsVerticalRounded } from "react-icons/bi";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import { Select, SelectSection, SelectItem } from "@nextui-org/react";
import Image from 'next/image'
import React from 'react'
import Link from "next/link";

const SpeechHistorySection = () => {

    const FilteredVoice = [
        { title: "Action Satisfaction", lang: "English", gender: "Female", created: "20-01-2024" },
        { title: "Golden Slumbers", lang: "English", gender: "Female", created: "22-01-2024" },
        { title: "High Noon (Do Not Forsake Me)", lang: "English", gender: "Female", created: "05-02-2024" },
    ]

    return (
        <div className="max-w-7xl mx-auto px-2 sm:px-4 py-4 sm:py-8 flex flex-col">
            <div className="bg-white rounded-3xl p-4 sm:p-6 shadow flex flex-col gap-3">
                <div className="flex items-center gap-2">
                    <Image className='size-7 lg:size-9 object-contain' src={'/icon/history.svg'} height={38} width={38} alt='Voice' />
                    <div className='font-extrabold text-2xl lg:text-3xl'>AI-Generated text to speech History</div>
                </div>
                <p className='md:text-lg opacity-80'>This feature is only for paid users for now. Sign up for a paid plan to try it out.</p>
                <div className="bg-white rounded-3xl p-4 sm:p-6 shadow flex flex-col gap-4 border">
                    <div className="flex flex-col gap-3">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {FilteredVoice.map((item, index) => {
                                return (
                                    <div key={index} className="flex flex-col gap-1">
                                        <div className="rounded-3xl flex justify-center py-28 px-6 items-center bg-beta border w-full cursor-pointer transition-all duration-300 relative group">
                                            <div className="flex justify-center items-center gap-4">
                                                <BsFillPlayCircleFill className="text-alpha text-6xl" />
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between px-2">
                                            <div className="flex flex-col">
                                                <div className="font-medium sm:text-lg">{item.title}</div>
                                                <div className="text-[#9B2948] text-xs sm:text-sm">Created on {item.created}</div>
                                            </div>
                                            <Dropdown>
                                                <DropdownTrigger>
                                                    <BiDotsVerticalRounded className="text-lg opacity-80 cursor-pointer" />
                                                </DropdownTrigger>
                                                <DropdownMenu variant="faded" aria-label="Static Actions">
                                                    <DropdownItem key="new">New file</DropdownItem>
                                                    <DropdownItem key="copy">Copy link</DropdownItem>
                                                    <DropdownItem key="edit">Edit file</DropdownItem>
                                                    <DropdownItem key="delete" className="text-danger" color="danger">
                                                        Delete file
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </Dropdown>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SpeechHistorySection