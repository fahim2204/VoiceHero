'use client'

import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import { Select, SelectSection, SelectItem } from "@nextui-org/react";
import Image from 'next/image'
import React from 'react'
import Link from "next/link";

const TextToSpeechSection = () => {

    const FilteredVoice = [
        { title: "Action Satisfaction", lang: "English", gender: "Female" },
        { title: "Golden Slumbers", lang: "English", gender: "Female" },
        { title: "High Noon (Do Not Forsake Me)", lang: "English", gender: "Female" },
    ]

    return (
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col">
            <div className="bg-white rounded-3xl p-6 shadow flex flex-col gap-3">
                <div className="flex items-center gap-2">
                    <Image className='size-9 object-contain' src={'/icon/voice-bubble.svg'} height={38} width={38} alt='Voice' />
                    <div className='font-extrabold text-3xl'>Text to Voice</div>
                </div>
                <p className='text-lg opacity-80'>You can convert text into speech</p>
                <div className="bg-white rounded-3xl p-6 shadow flex flex-col gap-4 border">
                    <div className="flex flex-col">
                        <div className='font-semibold text-xl'>Voice Selection</div>
                        <p className='opacity-80'>Here is the list of all the voices that you can use to generate speech</p>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                        <Select
                            size={"sm"}
                            variant="bordered"
                            radius="full"
                            label="Voice Gender"
                            labelPlacement="inside"
                            // color="alpha"
                            className="max-w-sm"
                            classNames={{
                                // base:"border-alpha",
                                // label:"text-alpha",
                                // popoverContent:"text-alpha",
                                // trigger:"border-alpha outline-0 focus-within:ring-0 focus",
                                // value:"text-alpha",
                                // mainWrapper:"border-alpha",
                                // innerWrapper:"border-alpha",
                            }}
                        >
                            <SelectItem key='male' value='male'>
                                Male
                            </SelectItem>
                            <SelectItem key='female' value='female'>
                                Female
                            </SelectItem>
                        </Select>
                        <Select
                            size={"sm"}
                            variant="bordered"
                            radius="full"
                            label="Choose Language"
                            labelPlacement="inside"
                            className="max-w-sm"

                        >
                            <SelectItem key='english' value='english'>
                                English
                            </SelectItem>
                            <SelectItem key='bangla' value='bangla '>
                                Bangla
                            </SelectItem>
                        </Select>
                        <Select
                            size={"sm"}
                            variant="bordered"
                            radius="full"
                            label="Access"
                            labelPlacement="inside"
                            className="max-w-sm"

                        >
                            <SelectItem key='english' value='english'>
                                Public Access
                            </SelectItem>
                            <SelectItem key='bangla' value='bangla '>
                                Private Access
                            </SelectItem>
                        </Select>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className='font-semibold text-xl'>Filtered Results</div>
                        <div className="flex flex-col gap-2">
                            {FilteredVoice.map((item, index) => {
                                return (
                                    <div key={index} className="rounded-3xl flex justify-between py-3 px-6 items-center bg-beta border w-full hover:border-alpha cursor-pointer transition-all duration-300 relative group">
                                        <div className="flex justify-center items-center gap-4">
                                            <BsFillPlayCircleFill className="text-alpha text-6xl" />
                                            <div className="flex flex-col gap-1">
                                                <div className="font-medium text-xl">{item.title}</div>
                                                <div className="flex items-center gap-1">
                                                    <button className="bg-white text-sm font-medium px-3 py-1 rounded-3xl">{item.lang}</button>
                                                    <button className="bg-white text-sm font-medium px-3 py-1 rounded-3xl">{item.gender}</button>
                                                </div>
                                            </div>
                                        </div>
                                        <FaCheckCircle className="absolute opacity-0 group-hover:opacity-100 top-1/2 -translate-y-1/2 right-5 text-alpha text-xl transition-all duration-300" />
                                    </div>
                                );
                            })}
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="opacity-80 text-sm">Showing 3 to 5 of 227 results</div>
                            <div className="flex items-center gap-1">
                                <button className="rounded-full text-sm size-6 flex items-center justify-center hover:bg-alpha hover:text-white hover:shadow transition-all duration-300"><IoIosArrowBack /></button>
                                <button className="rounded-full text-sm size-6 flex items-center justify-center hover:bg-alpha hover:text-white hover:shadow transition-all duration-300">1</button>
                                <button className="rounded-full text-sm size-6 flex items-center justify-center hover:bg-alpha hover:text-white hover:shadow transition-all duration-300">2</button>
                                <button className="rounded-full text-sm size-6 flex items-center justify-center hover:bg-alpha hover:text-white hover:shadow transition-all duration-300">3</button>
                                <button className="rounded-full text-sm size-6 flex items-center justify-center hover:bg-alpha hover:text-white hover:shadow transition-all duration-300">4</button>
                                <button className="rounded-full text-sm size-6 flex items-center justify-center hover:bg-alpha hover:text-white hover:shadow transition-all duration-300"><IoIosArrowForward /></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-3xl p-6 shadow flex flex-col gap-4 border">
                    <div className="flex flex-col">
                        <div className='font-semibold text-xl'>Your Text</div>
                        <p className='opacity-80'>Add your text below to generate speech</p>
                    </div>
                    <textarea className="border border-black/20 rounded-3xl bg-beta p-4 focus-within:ring-0 focus-within:outline-0 focus-within:border-alpha/50" name="text" id="text" cols="30" rows="6" placeholder="Write your text here"></textarea>
                </div>
                <div className="flex justify-center py-4">
                    <Link href="/history" className="text-white font-semibold bg-alpha border border-alpha drop-shadow-[0_5px_8px_#FF7251] rounded-full px-6 py-3 hover:bg-alpha-500 hover:border-500 hover:shadow transition-all duration-300">Generate Speech</Link>
                </div>
            </div>
        </div>
    )
}

export default TextToSpeechSection