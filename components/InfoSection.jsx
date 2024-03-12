import Image from 'next/image'
import React from 'react'
import Link from "next/link";

const InfoSection = () => {

    return (
        <div className="max-w-[1400px] mx-auto z-0 relative overflow-hidden">
            <div className='container max-w-7xl w-full my:10 md:my-16'>
                <div className="grid md:grid-cols-2 gap-4 items-center mb-12">
                    <div className="flex flex-col gap-3">
                        <p className="uppercase font-bold text-sm md:text-base text-[#9B2948] tracking-[0.3em]">AI Voice Generator</p>
                        <div className="text-2xl md:text-3xl lg:text-4xl font-semibold">Meet the ultimate
                            <br /> AI tool for <span className="text-alpha">text to speech</span></div>
                    </div>
                    <div className="flex items-center">
                        <p>
                        Whether you’e a student, a marketer, or a knowledge worker, you’ll benefit tremendously from our library of AI models and voices.We’re making it easy for you to use the latest technology without having to write a line of code.
                        </p>
                    </div>
                </div>
                <div className="bg-beta/50 px-4 md:px-8 pt-6 md:pt-12 rounded-3xl">
                    <div className="flex items-center gap-2 text-sm md:text-base flex-wrap">
                        <div className="border border-alpha rounded-3xl px-4 py-1 font-semibold hover:bg-alpha hover:text-white cursor-pointer transition-all duration-300">
                            Article Voiceover
                        </div>
                        <div className="border border-alpha rounded-3xl px-4 py-1 font-semibold hover:bg-alpha hover:text-white cursor-pointer transition-all duration-300">
                            Personalised Podcast
                        </div>
                        <div className="border border-alpha rounded-3xl px-4 py-1 font-semibold hover:bg-alpha hover:text-white cursor-pointer transition-all duration-300">
                            AI Dubbing
                        </div>
                        <div className="border border-alpha rounded-3xl px-4 py-1 font-semibold hover:bg-alpha hover:text-white cursor-pointer transition-all duration-300">
                            Voice to Text
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 overflow-hidden">
                        <div className="max-w-md flex flex-col gap-3 md:gap-4 pt-6 pb-4 md:pb-8 lg:pb-20">
                            <div className="font-semibold text-2xl md:text-3xl">
                                Automate your text with an AI Voice Over Feature
                            </div>
                            <p className="text-sm md:text-lg">Create human-quality voice overs in real time with AI voice. Narrate text, videos, explainers – anything – in any style.</p>
                            <p className="text-sm md:text-lg">1,000,000 users love VoiceHero. Award-winning AI Voice Generator and text to speech software with 500+ voices in 100 languages. </p>
                            <div className="flex">
                                <Link href={'#'} className="px-6 py-2 rounded-3xl border border-black text-sm font-semibold shadow">Learn More</Link>
                            </div>
                        </div>
                        <div className="-mb-12 md:mb-0 lg:-mb-16 px-0 md:px-2 lg:px-4 xl:px-8 md:pt-6 flex justify-center items-center">
                            <Image className="rounded-3xl shadow-xl w-full h-auto" src={'/image/info-1.webp'} height={706} width={658} alt='info' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoSection
