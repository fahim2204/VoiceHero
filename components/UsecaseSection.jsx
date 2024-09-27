import { BsArrowUpRight } from "react-icons/bs";
import Image from 'next/image'
import React from 'react'
import Link from "next/link";

const UsecaseSection = () => {

    const PlatformList = [
        {
            name: 'Listen to articles',
            detail: 'Still bookmarking for “later”? Listen to articles instead.',
            img: 'headphone.svg',
            url: '#',
            urlText: 'Enjoy listening'
        },
        {
            name: 'Listen to anything',
            detail: 'Turn any PDF, eBook, academic paper into a delightful audio experience.',
            img: 'dashboard.svg',
            url: '#',
            urlText: 'Melt text into audio gold'
        },
        {
            name: 'Stories on demand',
            detail: 'Listen to wonderful, new stories for your kids of for for yourself',
            img: 'book.svg',
            url: '#',
            urlText: 'Story Generator'
        },
        {
            name: 'Your personal podcast',
            detail: 'We create your own pod with articles,  and books you like.',
            img: 'mic.svg',
            url: '#',
            urlText: 'Coming soon'
        },

    ]

    return (
        <div className="max-w-[1400px] mx-auto z-0 relative overflow-hidden">
            <div className='container max-w-7xl w-full my-16'>
                <div className="w-full flex flex-col gap-3 mb-12">
                    <p className="uppercase font-bold text-sm md:text-base text-[#9B2948] tracking-[0.3em] text-center">Multiplateform</p>
                    <div className="text-4xl sm:text-5xl md:text-6xl text-center font-semibold">Best  <span className="text-alpha">AI text to speech</span> for <br />any use case</div>
                    <p className="max-w-2xl md:text-lg mx-auto text-center">VoiceHero can help you with all of these things and much more.</p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {PlatformList.map((item, index) => {
                        return (
                            <div key={index} className="rounded-[2.5rem] border flex flex-col items-center gap-5 py-8 px-4 bg-white w-full hover:bg-alpha/80 hover:text-white transition-all !duration-5000 group">
                                <Image className="size-16 object-contain group-hover:invert group-hover:brightness-0 transition-all" src={`/icon/${item.img}`} height={75} width={75} alt={item.name} />
                                <div className="flex flex-col items-center gap-2">
                                    <div className="font-bold text-lg md:text-xl text-center">{item.name}</div>
                                    <div className="text-sm text-center">{item.detail}</div>
                                </div>
                                <Link href={item.url} className="flex items-center flex-shrink-0 gap-1 text-sm md:text-base text-alpha group-hover:text-white font-bold hover:underline">{item.urlText}<BsArrowUpRight /></Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default UsecaseSection
