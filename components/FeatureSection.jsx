import Image from 'next/image'
import React from 'react'
import Link from "next/link";

const FeatureSection = () => {

    const FeatureList = [
        {
            title: 'Listen at any speed',
            details: 'Our high-quality AI voices can read up to 9x faster than the average reading speed, so you can learn even more in less time.',
            img: 'info-1.webp',
            bg: '#ffeeee',
        },
        {
            title: 'Natural-sounding AI Voice',
            details: 'Our high-quality AI voices can read up to 9x faster than the average reading speed, so you can learn even more in less time.',
            img: 'info-1.webp',
            bg: '#efffde',
        },
        {
            title: 'Listen on desktop or mobile devices',
            details: 'Our high-quality AI voices can read up to 9x faster than the average reading speed, so you can learn even more in less time.',
            img: 'info-1.webp',
            bg: '#f3edff',
        },
        {
            title: 'Listen to any page',
            details: 'Our high-quality AI voices can read up to 9x faster than the average reading speed, so you can learn even more in less time.',
            img: 'info-1.webp',
            bg: '#dfffee',
        },
    ]

    return (
        <div className="max-w-[1400px] mx-auto z-0 relative overflow-hidden">
            <div className='container max-w-7xl w-full my-16'>
                <div className="w-full flex flex-col gap-3 mb-12">
                    <p className="uppercase font-bold text-[#9B2948] tracking-[0.3em] text-center">Multiplateform</p>
                    <div className="text-5xl md:text-6xl lg:text-6xl text-center font-semibold">Enjoy your <span className="text-alpha">new reading</span> superpowers</div>
                    <p className="max-w-2xl text-lg mx-auto text-center">VoiceHero is the #1 rated AI text to speech app in its category with over 250,000.</p>
                </div>
                <div className="grid grid-cols-2 gap-10">
                    {FeatureList.map((item, index) => {
                        return (
                            <div className="flex flex-col gap-3">
                                <div style={{ backgroundColor: item.bg }} className={`px-8 pt-8 rounded-t-3xl -mb-10`}>
                                    <Image className="w-full rounded-t-3xl object-cover" src={`/image/info-1.webp`} height={603} width={515} alt={'benefits'} />
                                </div>
                                <div className="font-bold text-3xl text-center mt-14">{item.title}</div>
                                <p className="text-center px-4">{item.details}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default FeatureSection
