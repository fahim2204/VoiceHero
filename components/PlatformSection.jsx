import { BsArrowUpRight } from "react-icons/bs";
import Image from 'next/image'
import React from 'react'
import Link from "next/link";

const PlatformSection = () => {

    const PlatformList = [
        {
            name: 'Chrome extension',
            detail: 'Turn text into natural sounding voice in Google Chrome',
            img: 'chrome.svg',
            url: '#',
        },
        {
            name: 'Apple iOS',
            detail: 'Turn text into natural sounding voice in Google Chrome',
            img: 'apple.svg',
            url: '#',
        },
        {
            name: 'Android',
            detail: 'Turn text into natural sounding voice in Google Chrome',
            img: 'playstore.svg',
            url: '#',
        },
        {
            name: 'VoiceHero Studio',
            detail: 'Turn text into natural sounding voice in Google Chrome',
            img: 'voice-hero-studio.svg',
            url: '#',
        },

    ]

    return (
        <div className="max-w-[1400px] mx-auto z-0 relative overflow-hidden">
            <div className='container max-w-7xl w-full my-16'>
                <div className="w-full flex flex-col gap-3 mb-12">
                    <p className="uppercase font-bold text-[#9B2948] tracking-[0.3em] text-center">Multiplateform</p>
                    <div className="text-5xl md:text-6xl lg:text-6xl text-center font-semibold">Best  <span className="text-alpha">AI text to speech</span> for <br /> Chrome, iOS, Android, Mac, & Edge</div>
                    <p className="max-w-2xl text-lg mx-auto text-center">VoiceHero is the #1 rated AI text to speech app in its category with over 250,000.</p>
                </div>
                <div className="grid grid-cols-4 gap-4">
                    {PlatformList.map((item, index) => {
                        return (
                            <div key={index} className="rounded-3xl border flex flex-col items-center gap-5 p-8 bg-white w-full hover:bg-alpha/80 hover:text-white transition-all !duration-5000 group">
                                <Image className="size-16 object-contain" src={`/icon/${item.img}`} height={75} width={75} alt={item.name} />
                                <div className="flex flex-col items-center gap-2">
                                    <div className="font-bold text-2xl text-center">{item.name}</div>
                                    <div className="text-center">{item.detail}</div>
                                </div>
                                <Link href={item.url} className="flex items-center gap-1 text-alpha group-hover:text-white font-bold hover:underline">View Chrome Extension<BsArrowUpRight /></Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default PlatformSection
