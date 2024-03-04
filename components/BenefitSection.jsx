import Image from 'next/image'
import React from 'react'
import Link from "next/link";

const BenefitSection = () => {


    return (
        <div className="max-w-[1400px] mx-auto z-0 relative overflow-hidden">
            <div className='container max-w-7xl w-full my-16'>
                <div className="w-full flex flex-col gap-3 mb-12">
                    <p className="uppercase font-bold text-[#9B2948] tracking-[0.3em] text-center">Multiplateform</p>
                    <div className="text-5xl md:text-6xl lg:text-6xl text-center font-semibold">Listening is  <span className="text-alpha">the fastest</span>  way to read </div>
                    <p className="max-w-2xl text-lg mx-auto text-center">VoiceHero is the #1 rated AI text to speech app in its category with over 250,000.</p>
                </div>
                <div className="grid grid-cols-3 gap-6">
                    <div className="rounded-[2.5rem] relative overflow-hidden">
                        <Image className="w-full object-cover" src={`/image/benefit-1.webp`} height={603} width={515} alt={'benefits'} />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/70 from-50%"></div>
                        <div className="absolute bottom-8 w-full text-white font-bold text-3xl text-center">Double <br /> your reading</div>
                    </div>
                    <div className="rounded-[2.5rem] relative overflow-hidden">
                        <Image className="w-full object-cover" src={`/image/benefit-2.webp`} height={603} width={515} alt={'benefits'} />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/70 from-50%"></div>
                        <div className="absolute bottom-8 w-full text-white font-bold text-3xl text-center">Double <br /> your focus</div>
                    </div>
                    <div className="rounded-[2.5rem] relative overflow-hidden">
                        <Image className="w-full object-cover" src={`/image/benefit-3.webp`} height={603} width={515} alt={'benefits'} />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/70 from-50%"></div>
                        <div className="absolute bottom-8 w-full text-white font-bold text-3xl text-center">Double <br /> your exposure</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BenefitSection
