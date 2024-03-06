import Image from 'next/image'
import React from 'react'
import Link from "next/link";

const HeroSection = () => {

    const VoiceArtistList = [
        {
            name: 'Ann George',
            voice: 'Male English Voice',
            img: 'artist-1.webp',
            url: '#',
        },
        {
            name: 'Jordyn George',
            voice: 'Female English Voice',
            img: 'artist-2.webp',
            url: '#',
        },
        {
            name: 'Ann George',
            voice: 'Male English Voice',
            img: 'artist-3.webp',
            url: '#',
        },
        {
            name: 'Jordyn George',
            voice: 'Female English Voice',
            img: 'artist-4.webp',
            url: '#',
        },
    ]

    return (
        <div className="max-w-[1400px] mx-auto z-0 relative overflow-hidden">
            <div className='container max-w-7xl w-full my-16'>
                <div className="w-full flex flex-col gap-3">
                    <p className="uppercase font-bold text-sm md:text-base text-[#9B2948] tracking-[0.3em] text-center">AI Voice Generator</p>
                    <div className="text-5xl md:text-6xl lg:text-6xl text-center font-semibold">AI voice generator <br /> that <span className="text-alpha">captivates</span> your audience</div>
                    <p className="max-w-2xl md:text-lg mx-auto text-center">1,000,000 users love VoiceHero. Award-winning AI Voice Generator and text to speech software with 500+ voices in 100 languages. </p>
                    <div className="flex justify-center">
                        <button className="text-white font-semibold bg-alpha border border-alpha drop-shadow-[0_5px_8px_#FF7251] rounded-full px-6 py-3 hover:bg-alpha-500 hover:border-500 hover:shadow transition-all duration-300">Try Now for free!</button>
                    </div>
                </div>
            </div>
            <div className="container max-w-5xl">
                <div className='bg-white p-3 md:p-5 my-16 shadow-sm rounded-3xl grid md:grid-cols-2 gap-4 md:gap-5'>
                    {VoiceArtistList.map((item, index) => {
                        return (
                            <Link href={item.url} key={index} className="rounded-full flex justify-between p-2 md:p-3 items-center bg-beta w-full hover:bg-beta-100 transition-all duration-300">
                                <div className="flex justify-center items-center gap-4">
                                    <Image className="size-14 md:size-16 object-contain" src={`/image/${item.img}`} height={100} width={100} alt={item.name} />
                                    <div className="flex flex-col md:gap-0.5">
                                        <div className="font-bold md:text-xl">{item.name}</div>
                                        <div className="text-sm md:text-base">{item.voice}</div>
                                    </div>
                                </div>
                                <Image className="size-14 md:size-16 object-contain" src={'/icon/play.svg'} height={80} width={80} alt='play' />
                            </Link>
                        );
                    })}
                </div>
            </div>
            <div className="container max-w-5xl my-16">
                <div className="font-semibold text-2xl md:text-3xl text-center mb-6 md:mb-12">
                    Trusted by nearly <span className="text-alpha">5000+</span> paying customers
                </div>
                <div className="flex items-center justify-around gap-4 flex-wrap">
                    <Image className="object-contain h-6 md:h-9 w-auto" src={'/icon/customer-1.svg'} height={40} width={196} alt='customer' />
                    <Image className="object-contain h-6 md:h-9 w-auto" src={'/icon/customer-2.svg'} height={40} width={196} alt='customer' />
                    <Image className="object-contain h-6 md:h-9 w-auto" src={'/icon/customer-3.svg'} height={40} width={196} alt='customer' />
                    <Image className="object-contain h-6 md:h-9 w-auto" src={'/icon/customer-4.svg'} height={40} width={196} alt='customer' />
                </div>
            </div>
        </div>
    )
}

export default HeroSection
