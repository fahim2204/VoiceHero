'use client';
import Image from 'next/image'
import React from 'react'
import Link from "next/link";
import { Card, CardBody, Tab, Tabs } from '@nextui-org/react';

const InfoSection = () => {

    return (
        <div className="max-w-[1400px] mx-auto z-0 relative overflow-hidden">
            <div className='container max-w-7xl w-full my:10 md:my-16'>
                <div className="grid md:grid-cols-2 gap-4 items-center mb-12">
                    <div className="flex flex-col gap-3">
                        <p className="uppercase font-bold text-sm md:text-base text-delta tracking-[0.3em]">AI Voice Generator</p>
                        <div className="text-2xl md:text-3xl lg:text-4xl font-semibold">Meet the ultimate
                            <br /> AI tool for <span className="text-alpha">text to speech</span></div>
                    </div>
                    <div className="flex items-center">
                        <p>
                            Whether you'e a student, a marketer, or a knowledge worker, you'll benefit tremendously from our library of AI models and voices.<br />Use the latest technology without having to write a line of code.
                        </p>
                    </div>
                </div>
                <div className="bg-beta/50 px-4 md:px-8 pt-6 md:pt-12 rounded-3xl">
                    <div className="flex w-full flex-col">
                        <Tabs aria-label="Options"
                            classNames={{
                                tabList: "bg-transparent flex-wrap",
                                tab: "border border-alpha rounded-full overflow-hidden w-auto px-4",
                                tabContent: "group-data-[selected=true]:text-white font-semibold text-black",
                                cursor: "bg-alpha text-white"
                            }}
                        >
                            <Tab key="article-reader" title="Article Reader">
                                <div className="grid md:grid-cols-2 gap-4 overflow-hidden">
                                    <div className="max-w-md flex flex-col gap-3 md:gap-4 pt-6 pb-4 md:pb-8 lg:pb-20">
                                        <div className="font-semibold text-2xl md:text-3xl">
                                            Elevate your reading experience
                                        </div>
                                        <p className="text-sm md:text-lg">Turn any article into an engaging audio experience.
                                        </p>
                                        <p className="text-sm md:text-lg">
                                            Perfect for busy learners, multitaskers, and audio enthusiasts, this tool allows you to listen to your favorite articles on-the-go, making learning and entertainment more accessible and enjoyable.
                                        </p>

                                        <div className="flex">
                                            <Link href={'#'} className="px-6 py-2 rounded-3xl border border-black text-sm font-semibold shadow">Learn More</Link>
                                        </div>
                                    </div>
                                    <div className="-mb-12 md:mb-0 lg:-mb-16 px-0 md:px-2 lg:px-4 xl:px-8 md:pt-6 flex justify-center items-center">
                                        <Image className="rounded-3xl shadow-xl w-full h-auto" src={'/image/info-1.webp'} height={706} width={658} alt='info' />
                                    </div>
                                </div>
                            </Tab>
                            <Tab key="ai-voice-over" title="AI Voice Over">
                                <div className="grid md:grid-cols-2 gap-4 overflow-hidden">
                                    <div className="max-w-md flex flex-col gap-3 md:gap-4 pt-6 pb-4 md:pb-8 lg:pb-20">
                                        <div className="font-semibold text-2xl md:text-3xl">
                                            Bring any words to life with our AI Voiceover Magic
                                        </div>
                                        <p className="text-sm md:text-lg">VoiceHero's AI Voiceover breathes life into your creative projects with cutting-edge AI text-to-speech tech.
                                        </p>
                                        <p className="text-sm md:text-lg">It's the go-to tool for everyone from video makers and podcasters to game developers and marketers, offering realistic AI-generated voiceovers. This saves both time and costs, making it a perfect match for content creators at any level of expertise.</p>
                                        <div className="flex">
                                            <Link href={'#'} className="px-6 py-2 rounded-3xl border border-black text-sm font-semibold shadow">Learn More</Link>
                                        </div>
                                    </div>
                                    <div className="-mb-12 md:mb-0 lg:-mb-16 px-0 md:px-2 lg:px-4 xl:px-8 md:pt-6 flex justify-center items-center">
                                        <Image className="rounded-3xl shadow-xl w-full h-auto" src={'/image/info-1.webp'} height={706} width={658} alt='info' />
                                    </div>
                                </div>
                            </Tab>
                            <Tab key="story-teller" title="Story Teller">
                                <div className="grid md:grid-cols-2 gap-4 overflow-hidden">
                                    <div className="max-w-md flex flex-col gap-3 md:gap-4 pt-6 pb-4 md:pb-8 lg:pb-20">
                                        <div className="font-semibold text-2xl md:text-3xl">
                                            Unleash creativity with our unique story generator
                                        </div>
                                        <p className="text-sm md:text-lg">Spark your imagination and weave compelling narratives at the click of a button.</p>
                                        <p className="text-sm md:text-lg">Ideal for writers, marketers, and parents in need of a creative audiobook, this tool generates and reads for you stories that captivate and inspire.</p>
                                        <div className="flex">
                                            <Link href={'#'} className="px-6 py-2 rounded-3xl border border-black text-sm font-semibold shadow">Learn More</Link>
                                        </div>
                                    </div>
                                    <div className="-mb-12 md:mb-0 lg:-mb-16 px-0 md:px-2 lg:px-4 xl:px-8 md:pt-6 flex justify-center items-center">
                                        <Image className="rounded-3xl shadow-xl w-full h-auto" src={'/image/info-1.webp'} height={706} width={658} alt='info' />
                                    </div>
                                </div>
                            </Tab>
                            <Tab key="podcast-producer" title="Podcast Producer">
                                <div className="grid md:grid-cols-2 gap-4 overflow-hidden">
                                    <div className="max-w-md flex flex-col gap-3 md:gap-4 pt-6 pb-4 md:pb-8 lg:pb-20">
                                        <div className="font-semibold text-2xl md:text-3xl">
                                            Craft unique,  custom podcast episodes
                                        </div>
                                        <p className="text-sm md:text-lg">Unlock the power of personalized audio storytelling.</p>
                                        <p className="text-sm md:text-lg">Tailored for creators and listeners alike, this allows you to curate and craft podcast episodes that resonate deeply with your personal tastes or brand's identity.</p>
                                        <div className="flex">
                                            <Link href={'#'} className="px-6 py-2 rounded-3xl border border-black text-sm font-semibold shadow">Learn More</Link>
                                        </div>
                                    </div>
                                    <div className="-mb-12 md:mb-0 lg:-mb-16 px-0 md:px-2 lg:px-4 xl:px-8 md:pt-6 flex justify-center items-center">
                                        <Image className="rounded-3xl shadow-xl w-full h-auto" src={'/image/info-1.webp'} height={706} width={658} alt='info' />
                                    </div>
                                </div>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoSection
