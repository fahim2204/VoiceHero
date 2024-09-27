import Image from 'next/image'
import React from 'react'
import Link from "next/link";

const FeatureSection = () => {

    const FeatureList = [
        {
            title: 'Tailored for you 100%',
            details: 'Adjust voice tones, accents, and speaking pace. Our platform offers a rich selection of voices and you can bookmark your faves.',
            img: 'info-1.webp',
            bg: '#ffeeee',
        },
        {
            title: 'Natural-sounding',
            details: 'Natural-sounding voices available in over 30 languages, including Arabic, Chinese, English, French, and Spanish, to name just a few.',
            img: 'info-1.webp',
            bg: '#efffde',
        },
        {
            title: 'Listen on desktop or mobile devices',
            details: 'Voice Hero ensures seamless synchronization across devices. Your content is always at your fingertips, ready to be heard anytime, anywhere.',
            img: 'info-1.webp',
            bg: '#f3edff',
        },
        {
            title: 'Works with anything',
            details: 'Listen to our high-quality AI voices reading anything from your library: PDFs, articles, books, workshop summaries, tutorials, and more.',
            img: 'info-1.webp',
            bg: '#dfffee',
        },
    ]

    return (
        <div className="max-w-[1400px] mx-auto z-0 relative overflow-hidden">
            <div className='container max-w-7xl w-full my-8 md:my-16'>
                <div className="w-full flex flex-col gap-3 mb-12">
                    <p className="uppercase font-bold text-sm md:text-base text-delta tracking-[0.3em] text-center">simply amazing</p>
                    <div className="text-4xl sm:text-5xl md:text-6xl text-center font-semibold">Mind-bending  <span className="text-alpha">voice technology</span> for all</div>
                    <p className="max-w-2xl md:text-lg mx-auto text-center">VoiceHero has all the features you need, and none you don't</p>
                </div>
                <div className="grid sm:grid-cols-2 gap-10">
                    {FeatureList.map((item, index) => {
                        return (
                            <div key={index} className="flex flex-col gap-3">
                                <div style={{ backgroundColor: item.bg }} className={`px-8 pt-8 rounded-t-3xl -mb-10`}>
                                    <Image className="w-full rounded-t-3xl object-cover" src={`/image/info-1.webp`} height={603} width={515} alt={'benefits'} />
                                </div>
                                <div className="font-bold text-2xl sm:text-xl md:text-3xl text-center mt-14">{item.title}</div>
                                <p className="text-base sm:text-sm md:text-base text-center px-4">{item.details}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default FeatureSection
