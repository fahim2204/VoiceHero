'use client'
import { BsFillPlayFill } from "react-icons/bs";
import { BsStopFill } from "react-icons/bs";
import Image from 'next/image'
import Link from "next/link";
import React, { useState, useRef, useEffect } from 'react';

const HeroSection = () => {




    const VoiceArtistList = [
        {
            name: 'Ann George',
            voice: 'Male English Voice',
            voiceID: 6,
            img: 'artist-1.webp',
            text: 'Welcome to voice hero which can read to you',
        },
        {
            name: 'Jordyn George',
            voice: 'Female English Voice',
            voiceID: 10,
            img: 'artist-2.webp',
            text: 'Welcome to voice hero which can read to you',
        },
        {
            name: 'Ann George',
            voice: 'Female English Voice',
            voiceID: 11,
            img: 'artist-3.webp',
            text: 'Welcome to voice hero which can read to you',
        },
        {
            name: 'Jordyn George',
            voice: 'Male English Voice',
            voiceID: 12,
            img: 'artist-4.webp',
            text: 'Welcome to voice hero which can read to you',
        },
    ]


    const TTSComponent = ({ item, index }) => {
        const containerRef = useRef(null); // Ref to the container element

        const [highlightSection, setHighlightSection] = useState({
            from: 0,
            to: 0
        });

        const [percentage, setPercentage] = useState(0);
        const [textLength, setTextLength] = useState(0);
        const [isPlaying, setIsPlaying] = useState(false);

        useEffect(() => {
            setTextLength(item.text.length);
        }, []);

        useEffect(() => {
            // Scroll the container into view if the highlighted section is out of view
            if (containerRef.current) {
                const container = containerRef.current;
                const highlightedElement = container.querySelector('.highlighted');

                if (highlightedElement) {
                    highlightedElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
                }
            }
        }, [highlightSection]);

        const handlePlayTTS = () => {
            const synth = window.speechSynthesis;

            if (!synth) {
                console.error("no tts");
                return;
            }
            setIsPlaying(false)

            let utterance = new SpeechSynthesisUtterance(item.text);
            // utterance.voice = synth.getVoices()[item.voiceID];
            utterance.addEventListener("boundary", (event) => {
                const { charIndex, charLength } = event;
                setPercentage(((charIndex + charLength) / textLength) * 100);
                setHighlightSection({ from: charIndex, to: charIndex + charLength });
            });
            utterance.addEventListener('end', () => {
                setHighlightSection({ from: 0, to: 0 });
                setPercentage(0)
                setIsPlaying(false)
            });
            utterance.addEventListener('cancel', () => {
                setHighlightSection({ from: 0, to: 0 });
                setPercentage(0)
                setIsPlaying(false)
            });

            if (isPlaying) {
                synth.cancel();
            } else {
                setIsPlaying(true)
                synth.speak(utterance);
            }
        };

        const [start, highlight, finish] = [
            item.text.slice(0, highlightSection.from),
            item.text.slice(highlightSection.from, highlightSection.to),
            item.text.slice(highlightSection.to)
        ]

        return (
            <div key={index} ref={containerRef} className="rounded-full flex justify-between gap-2 p-1.5 sm:p-2 md:p-3 items-center bg-beta w-full">
                <div className="flex justify-center items-center gap-4">
                    <Image className="size-14 md:size-16 object-contain" src={`/image/${item.img}`} height={100} width={100} alt={item.name} />

                    {highlightSection.from === 0 && highlightSection.to === 0 ? <>
                        <div className="flex flex-col md:gap-0.5">
                            <div className="font-bold text-sm sm:text-base md:text-xl">{item.name}</div>
                            <div className="text-xs sm:text-sm md:text-base">{item.voice}</div>
                        </div>
                    </> : <div className='overflow-y-scroll max-h-12 sm:max-h-14' style={{ scrollbarWidth: 'none', '-ms-overflow-style': 'none', '&::-webkit-scrollbar': { display: 'none' } }}>
                        <p className='font-semibold sm:text-lg'>
                            {start}
                            <span className={`bg-alpha text-white rounded ${highlight ? 'px-1 highlighted' : ''}`}>{highlight}</span>
                            {finish}
                        </p>
                    </div>}
                </div>
                <button onClick={handlePlayTTS} className='relative z-0 flex-shrink-0 flex items-center justify-center size-14 md:size-16 rounded-full text-3xl md:text-4xl text-alpha overflow-hidden'>
                    {isPlaying ? <>
                        <BsStopFill className="z-30" />
                    </> : <>
                        <BsFillPlayFill className="ml-1 z-30" />
                    </>}
                    <div className="absolute rounded-full z-20 bg-white size-12 md:size-14"></div>
                    <div style={{ background: `conic-gradient(#ff7251 ${3.6 * percentage}deg, #fbf3dd 0deg)` }} className="absolute rounded-full z-10 bg-white size-20 transition-background !duration-500"></div>
                </button>
            </div>
        );
    }


    return (
        <div className="max-w-[1400px] mx-auto z-0 relative overflow-hidden">
            <div className='container max-w-7xl w-full my-16'>
                <div className="w-full flex flex-col gap-3">
                    <p className="uppercase font-bold text-sm md:text-base text-[#9B2948] tracking-[0.3em] text-center">text to speech</p>
                    <div className="max-w-4xl  mx-auto text-4xl sm:text-5xl md:text-6xl text-center font-semibold">AI voice generator that melts any text into <span className="text-alpha">audio gold</span></div>
                    <p className="max-w-2xl md:text-lg mx-auto text-center">Turn any article, book, newsletter, or social media thread into delightful audio.</p>
                    <div className="flex justify-center">
                        <button className="text-white font-semibold bg-alpha border border-alpha drop-shadow-[0_5px_8px_#FF7251] rounded-full px-6 py-3 hover:bg-alpha-500 hover:border-500 hover:shadow transition-all duration-300">Try Now for free!</button>
                    </div>
                </div>
            </div>
            <div className="container max-w-5xl">
                <div className='bg-white p-3 md:p-5 my-16 shadow-sm rounded-3xl grid md:grid-cols-2 gap-4 md:gap-5'>
                    {VoiceArtistList.map((item, index) => {
                        return (
                            <TTSComponent {...{ item, index }} />
                        )
                    }
                    )}
                </div>
            </div>
            <div className="container max-w-5xl my-16">
                <div className="font-semibold text-2xl md:text-3xl text-center mb-6 md:mb-12">
                    Trusted by <span className="text-alpha">124</span> users and collaborating with
                </div>
                <div className="flex items-center justify-around gap-4 flex-wrap">
                    <Image className="object-contain h-6 md:h-9 w-auto grayscale opacity-80" src={'/icon/customer-1.svg'} height={40} width={196} alt='customer' />
                    <Image className="object-contain h-6 md:h-9 w-auto grayscale opacity-80" src={'/icon/customer-2.svg'} height={40} width={196} alt='customer' />
                    <Image className="object-contain h-6 md:h-9 w-auto grayscale opacity-80" src={'/icon/customer-3.webp'} height={40} width={196} alt='customer' />
                    <Image className="object-contain h-6 md:h-9 w-auto grayscale opacity-80" src={'/icon/customer-4.webp'} height={40} width={196} alt='customer' />
                </div>
            </div>
        </div>
    )
}

export default HeroSection
