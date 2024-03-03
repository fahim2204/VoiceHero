import { FiArrowUpRight } from "react-icons/fi";
import Image from 'next/image'
import React from 'react'
import Link from "next/link";

const HeroSection = () => {


    return (
        <div id="index" className="max-w-[1400px] mx-auto z-0 relative overflow-hidden">
            <div className='container max-w-7xl w-full py-16'>
                <div className="w-full flex flex-col gap-3">
                    <p className="uppercase font-bold text-[#9B2948] tracking-[0.3em] text-center">AI Voice Generator</p>
                    <div className="text-5xl md:text-6xl lg:text-7xl text-center font-semibold">AI voice generator <br /> that <span className="text-alpha">captivates</span> your audience</div>
                    <p className="max-w-2xl text-lg mx-auto text-center">1,000,000 users love VoiceHero. Award-winning AI Voice Generator and text to speech software with 500+ voices in 100 languages. </p>
                    <div className="flex justify-center">
                        <button className="text-white bg-alpha border border-alpha drop-shadow-[0_35px_35px_#FF7251] rounded-full px-5 py-1.5 hover:bg-alpha/90 hover:border-alpha/85 hover:shadow transition-all duration-300">Try Now for free!</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HeroSection
