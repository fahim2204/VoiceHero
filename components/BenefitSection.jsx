'use client'

import Image from 'next/image'
import React from 'react'
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Pagination, Navigation, Autoplay, Mousewheel } from 'swiper/modules';

const BenefitSection = () => {
    const ReviewList = [
        {
            name: "Usman",
            title: "Web Designer",
            img: "review-1.webp",
            desc: "“I love listening to my backlog of bookmarked articles from The New Yorker, Tech Crunch, and Bloomberg Tech”",
        },
        {
            name: "Catalin",
            title: "Product Manager",
            img: "review-2.webp",
            desc: "“I use Voice Hero to record anything from guided meditations to summaries of books I don't have the time to read in full”",
        },
        {
            name: "Rishi",
            title: "Freelance Designer",
            img: "review-3.webp",
            desc: "“This is hands down the best text-to-speech consumer product on the market. I know because I built it”",
        },
        {
            name: "Theo",
            title: "Freelance Designer",
            img: "review-4.webp",
            desc: "“I am a very curious person and I start more than 5 books at a time. Now finally I am able to finish them by listening to summaries”",
        },
    ]

    return (
        <div className="max-w-[1400px] mx-auto z-0 relative overflow-hidden">
            <div className='container max-w-7xl w-full my-16'>
                <div className="w-full flex flex-col gap-3 mb-12">
                    <p className="uppercase font-bold text-sm md:text-base text-[#9B2948] tracking-[0.3em] text-center">Your new Superpower</p>
                    <div className="text-4xl sm:text-5xl md:text-6xl text-center font-semibold"><span className="text-alpha">Listening</span> is the new way to read </div>
                    <p className="max-w-3xl md:text-lg mx-auto text-center">Meet your sidekicks, helping you to study or go through any amount of text much faster.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="rounded-[2.5rem] relative overflow-hidden">
                        <Image className="w-full object-cover" src={`/image/benefit-1.webp`} height={603} width={515} alt={'benefits'} />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/80 from-40%"></div>
                        <div className="absolute bottom-6 sm:bottom-8 w-full text-white font-bold text-2xl sm:text-3xl text-center">The Sonic <br /> Alchemist</div>
                    </div>
                    <div className="rounded-[2.5rem] relative overflow-hidden">
                        <Image className="w-full object-cover" src={`/image/benefit-2.webp`} height={603} width={515} alt={'benefits'} />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/80 from-40%"></div>
                        <div className="absolute bottom-6 sm:bottom-8 w-full text-white font-bold text-2xl sm:text-3xl text-center">The Vocal <br /> Visionary</div>
                    </div>
                    <div className="rounded-[2.5rem] relative overflow-hidden">
                        <Image className="w-full object-cover" src={`/image/benefit-3.webp`} height={603} width={515} alt={'benefits'} />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/80 from-40%"></div>
                        <div className="absolute bottom-6 sm:bottom-8 w-full text-white font-bold text-2xl sm:text-3xl text-center">The <br /> Podmaster</div>
                    </div>

                </div>
                <div className="pt-10 sm:pt-14 md:pt-20">
                    <Swiper
                        style={{
                            '--swiper-navigation-color': '#00000036',
                            '--swiper-pagination-color': '#00000036',
                            '--swiper-navigation-sides-offset': '0px',
                            '--swiper-navigation-size': '30px',
                        }}
                        grabCursor={true}
                        centeredSlides={false}
                        slidesPerView={1.1}
                        slidesPerGroupSkip={1}
                        loop={true}
                        rewind={true}
                        mousewheel={true}
                        // lazy={true}
                        navigation={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            550: {
                                slidesPerView: 2.4,
                            },
                            900: {
                                slidesPerView: 3.4,
                            },
                        }}

                        pagination={false}
                        modules={[Pagination, Navigation, Autoplay, Mousewheel]}
                    >
                        {ReviewList.map((item, index) => {
                            return (
                                <SwiperSlide className="p-2" key={index}>
                                    <div className="bg-gamma p-6 flex flex-col gap-4 rounded-3xl">
                                        <div className="flex items-center gap-4">
                                            <Image className="size-20 object-contain rounded-full" src={`/image/${item.img}`} height={88} width={115} alt={item.title} />
                                            <div className="flex flex-col">
                                                <div className="text-xl font-semibold">{item.name}</div>
                                                <div className="text-sm text-alpha font-semibold">{item.title}</div>
                                            </div>
                                        </div>
                                        <p className="opacity-90">{item.desc}</p>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default BenefitSection
