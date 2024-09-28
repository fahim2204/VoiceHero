"use client";
import { BiHomeAlt } from "react-icons/bi";
import { Badge, BreadcrumbItem, Breadcrumbs, Button, Input } from "@nextui-org/react";
import Link from "next/link";
import GetStartedSection from "../../components/GetStartedSection";
import Image from "next/image";

export default function AboutPage() {

    return (
        <main className="overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 py-4 sm:py-8 relative">
                <div className="mb-10">
                    <Breadcrumbs
                        separator={<><svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.86409 1.14003L6.74743 4.00003L3.86409 6.86003L4.80276 7.80669L8.64076 4.00003L4.80276 0.193359L3.86409 1.14003Z" fill="#3C312E" fill-opacity="0.8" />
                            <path d="M1.46943 0.193359L0.530762 1.14003L3.4141 4.00003L0.530762 6.86003L1.46943 7.80669L5.30743 4.00003L1.46943 0.193359Z" fill="#3C312E" fill-opacity="0.8" />
                        </svg></>}
                        itemClasses={{
                            separator: "px-2"
                        }}
                    >
                        <BreadcrumbItem startContent={<BiHomeAlt />}>Homepage</BreadcrumbItem>
                        <BreadcrumbItem color="primary">About Us</BreadcrumbItem>
                    </Breadcrumbs>
                </div>
                <section className="max-w-xl mx-auto flex flex-col gap-8 mb-10 sm:mb-16">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center">About Voicehero</h1>
                    <div className="flex flex-col gap-6">
                        <p>ElevenLabs is a voice AI research & deployment company with a mission to make content universally accessible in any language & voice.<br />
                            ElevenLabs creates the most realistic, versatile and contextually-aware AI audio, providing the ability to generate speech in hundreds of new and existing voices in 29 languages. As a technology research company, ElevenLabs is at the forefront of developing new cutting-edge voice AI. We deploy the most advanced models and features accessible via web app or API to a user base from creators to publishers and beyond.</p>
                        <Image className="w-full h-auto rounded-3xl mt-6 mb-6" src={'/image/about.webp'} height={464} width={576} alt='Blog ' />

                        <div className="space-y-2">
                            <h5 className="font-bold text-2xl">Our mission</h5>
                            <p>Our mission is to make on-demand multilingual audio support a reality across education, streaming, audiobooks, gaming, movies, and even real-time conversation.</p>

                            <p>Our research powers the platform's current features but it also contributes to realizing our ultimate goal of instantly converting spoken audio between languages. The AI dubbing tool - aimed for release later this year - will let users automatically re-voice any audio or video in a different language, all while preserving the original speaker's voice.</p>

                            <p>ElevenLabs was founded in 2022 by best friends: Piotr, an ex-Google machine learning engineer, and Mati, an ex-Palantir deployment strategist. Inspired by the 'poor' dubbing of Hollywood movies they watched growing up in their native Poland, the pair set about designing a platform which could eliminate the linguistic barriers of content.</p>

                        </div>
                        <div className="space-y-2">
                            <h5 className="font-bold text-2xl">Community</h5>
                            <p>To get help with the product, we recommend visiting our Help Center. There, you'll find a wealth of resources including documentation, FAQs, and more to address your concerns.</p>
                        </div>
                        <div className="space-y-2">
                            <h5 className="font-bold text-2xl">Press Contact</h5>
                            <p>We value opportunities to spread awareness of ElevenLabs' technology and initiatives. If you're a member of the press and would like to get in touch, please email us at <Link className="text-alpha" href={"mailto:press@voicehero.io"}>press@voicehero.io</Link> and include your name and publication, topic and purpose, and a deadline if applicable.</p>
                        </div>
                    </div>
                </section>
            </div>
            <div className="mt-16"><GetStartedSection /></div>
        </main>
    );
}