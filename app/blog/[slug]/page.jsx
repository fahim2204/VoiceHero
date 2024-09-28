"use client";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { BiHomeAlt } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { Badge, BreadcrumbItem, Breadcrumbs, Button, Input } from "@nextui-org/react";
import Link from "next/link";
import GetStartedSection from "../../../components/GetStartedSection";
import MusicPlayerSection from "../../../components/MusicPlayerSection";
import Image from "next/image";

export default function Home() {



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
                        <BreadcrumbItem>Product</BreadcrumbItem>
                        <BreadcrumbItem>Blog</BreadcrumbItem>
                        <BreadcrumbItem color="primary">Voice Hero partners with Perplexity</BreadcrumbItem>
                    </Breadcrumbs>
                </div>
                <section className="max-w-xl mx-auto flex flex-col gap-8 mb-10 sm:mb-16">
                    <div className="flex flex-col gap-3">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold sm:!leading-[3.5rem]">Voicehero partners with Perplexity to launch Discover Daily</h1>
                        <p className="text-lg md:text-xl font-medium">Ensuring our systems are developed, deployed, and used safely is our priority</p>
                        <p className="max-w-2xl text-sm font-medium uppercase">By Voice hero Team in Product - <span className="opacity-70">Mar 21, 2024</span></p>
                    </div>
                    <MusicPlayerSection />
                    <div className="flex flex-col gap-4">
                        <Image className="w-full h-auto rounded-3xl" src={'/image/blog-1.webp'} height={336} width={576} alt='Blog ' />
                        <p>We're excited to partner with Perplexity - the fastest and most accurate way to search the web. Today, we are releasing our first collaboration: a short-form daily podcast powered by Voicehero' voices that covers the latest headlines in innovation, science, and culture.</p>
                        <p>
                            Discover Daily is available on all podcast platforms and listeners can now enjoy a daily selection of curated knowledge in audio form, making it easier to engage with the material on-the-go. By combining Voicehero' voice technology with Perplexity's powerful search and content engine, we have created a new way to stay up to speed on the latest breakthroughs. <Link href="#" className="text-alpha">Subscribe to Discovery Daily and listen now.</Link>
                        </p>
                        <h5 className="font-bold text-2xl">About Perplexity</h5>
                        <p>Perplexity is the fastest and most accurate way to search the web. With access to real-time data across the internet, Perplexity curates relevant sources (from academic research to Reddit threads) and creates answers far better than a list of sponsored and SEO-optimized links on a traditional search engine. Unlike other AI offerings, Perplexity must include in-line citations for every source it uses in the response. This means trusted answers and the ability to fact-check.</p>
                    </div>
                </section>
                <hr />
                <div className="flex justify-between gap-4 pt-4 text-sm sm:text-base">
                    <div className="flex flex-col items-start">
                        <Link className="flex items-center gap-1.5 font-semibold" href={"#"}><BsArrowLeftShort /> Previous update</Link>
                        <p className="text-[#3C312E]/80 text-start">The Best Robot Voice Generator for 2024</p>
                    </div>
                    <div className="flex flex-col items-end">
                        <Link className="flex items-center gap-1.5 font-semibold" href={"#"}>Next update <BsArrowRightShort /></Link>
                        <p className="text-[#3C312E]/80 text-end">The Best Robot Voice Generator for 2024</p>
                    </div>
                </div>

            </div>
            <div className="mt-16"><GetStartedSection /></div>
        </main>
    );
}