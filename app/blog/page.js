import { AiOutlineMail } from "react-icons/ai";
import { Badge, Button, Input } from "@nextui-org/react";
import Link from "next/link";
import GetStartedSection from "../../components/GetStartedSection";

export default function Home() {

    const MoreBlogList = [
        {
            title: "Voicehero gives lifelike voice to rabbit's r1 device",
            desc: "Making futuristic technology simple to use.",
            url: "",
            createdAt: "Mar 27, 2024",
            readTime: "2 min read"
        },
        {
            title: "Turbo v2 numbers pronunciation",
            desc: "Our fastest model now has improved numbers pronunciation.",
            url: "",
            createdAt: "Mar 27, 2024",
            readTime: "2 min read"
        },
        {
            title: "Bill Weihl continues to fight for climate policy progress while battling ALS",
            desc: "Making futuristic technology simple to use.",
            url: "",
            createdAt: "Mar 27, 2024",
            readTime: "2 min read"
        },
        {
            title: "Voicehero joins Disney's accelerator program",
            desc: "ElevenLabs tech to bring Perplexity's content to life with daily podcasts.",
            url: "",
            createdAt: "Mar 27, 2024",
            readTime: "2 min read"
        },
        {
            title: "Voicehero partners with Perplexity to launch Discover Daily",
            desc: "What if you could describe a sound and generate it with AI?",
            url: "",
            createdAt: "Mar 27, 2024",
            readTime: "2 min read"
        },
        {
            title: "AI Sound Effects are coming soon",
            desc: "What if you could describe a sound and generate it with AI?",
            url: "",
            createdAt: "Mar 27, 2024",
            readTime: "2 min read"
        }
    ];

    const FeaturedBlogList = [
        {
            title: "How Voicehero is preparing for new AI techonology in 2024",
            desc: "Making futuristic technology simple to use.",
            url: "",
            createdAt: "Mar 27, 2024",
            readTime: "2 min read"
        },
        {
            title: "Introducing Speech to Speech",
            desc: "Our fastest model now has improved numbers pronunciation.",
            url: "",
            createdAt: "Mar 27, 2024",
            readTime: "2 min read"
        },
        {
            title: "Turbo v2 is Here!",
            desc: "Making futuristic technology simple to use.",
            url: "",
            createdAt: "Mar 27, 2024",
            readTime: "2 min read"
        },
    ];

    const TopicList = [
        {
            title: "AI",
            count: 5,
            url: "#",
        },
        {
            title: "AI Voice Generator",
            count: 9,
            url: "#",
        },
        {
            title: "Alternatives",
            count: 1,
            url: "#",
        },
        {
            title: "Case Studies",
            count: 8,
            url: "#",
        },
        {
            title: "Dubbing",
            count: 7,
            url: "#",
        },
        {
            title: "Initiatives",
            count: 2,
            url: "#",
        },
        {
            title: "Other",
            count: 4,
            url: "#",
        },
        {
            title: "Partnerships",
            count: 7,
            url: "#",
        },
        {
            title: "Text To Speech",
            count: 1,
            url: "#",
        },
        {
            title: "Voice Cloning",
            count: 6,
            url: "#",
        },
    ]


    return (
        <main className="overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 py-4 sm:py-8 relative">
                {/* <div className="z-0 w-[3000px] h-[2200px] absolute top-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-[#F3C246]/20 to-transparent"></div> */}
                <section className="relative z-10 flex flex-col gap-2 mb-10 sm:mb-16">
                    <p className="uppercase font-bold text-sm md:text-base text-delta tracking-[0.3em]">Latest - FEB 2024</p>
                    <div className="max-w-2xl text-2xl sm:text-3xl md:text-4xl font-semibold">How Voicehero is preparing for new AI techonology in 2024</div>
                    <p className="max-w-2xl md:text-lg">Ensuring our systems are developed, deployed, and used safely is our priority</p>
                    <p className="max-w-2xl text-sm font-medium uppercase opacity-70">2 min read</p>
                </section>
                <section className="relative z-10 grid md:grid-cols-12 gap-4">
                    <div className="md:col-span-7 lg:col-span-8">
                        <section className="flex flex-col gap-4">
                            <p className="uppercase font-bold text-sm md:text-base text-delta tracking-[0.3em]">MORE UPDATES</p>
                            <div className="flex flex-col gap-8">
                                {MoreBlogList.map((item, index) => {
                                    return (
                                        <div key={index} className="flex flex-col gap-1">
                                            <Link href={item.url} className="max-w-2xl text-lg sm:text-xl md:text-2xl font-semibold">{item.title}</Link>
                                            <p className="max-w-2xl md:text-lg font-medium">{item.desc}</p>
                                            <p className="max-w-2xl text-sm font-medium uppercase">{item.createdAt} - <span className="opacity-70">{item.readTime}</span></p>
                                        </div>
                                    );
                                })}
                                <Button variant="bordered" color="secondary" radius="full" fullWidth className="text-black font-medium">Load More</Button>
                            </div>
                        </section>
                    </div>
                    <div className="md:col-span-5 lg:col-span-4">
                        <section className="flex flex-col gap-10">
                            <div className="flex flex-col gap-3">
                                <p className="uppercase font-bold text-sm md:text-base text-delta tracking-[0.3em]">ABOUT</p>
                                <div className="flex flex-col gap-8">
                                    <div className="flex flex-col gap-2">
                                        <div className="max-w-2xl sm:text-lg md:text-xl font-semibold">Voicehero Blog</div>
                                        <p className="max-w-2xl text-sm md:text-base opacity-60">Latest Trends in AI Voice Technology: Insights on Voicehero and Speech Synthesis.</p>
                                        <p className="max-w-2xl text-sm md:text-base font-semibold">Sign up now to get access to the library of members-only updates.</p>
                                        <Input
                                            radius="full"
                                            size="sm"
                                            startContent={
                                                <span className="opacity-50"><AiOutlineMail size={16} /></span>
                                            }
                                            endContent={
                                                <Button radius="full" color="primary" size="sm" className="px-6">Subscribe</Button>
                                            }
                                            classNames={{
                                                mainWrapper: "mt-4",
                                                inputWrapper: "bg-white group-data-[hover=true]:bg-white group-data-[focus=true]:bg-slate-50 border-1 border-slate-200 py-0 h-full pe-0.5",
                                                innerWrapper: "pb-0",
                                                input: "border-0 focus-visible:ring-0 !ps-2"
                                            }}
                                            placeholder="Enter your email address" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <p className="uppercase font-bold text-sm md:text-base text-delta tracking-[0.3em]">FEATURED</p>
                                <div className="flex flex-col gap-8">
                                    {FeaturedBlogList.map((item, index) => {
                                        return (
                                            <div key={index} className="flex flex-col gap-1">
                                                <Link href={item.url} className="max-w-2xl sm:text-lg md:text-xl font-semibold">{item.title}</Link>
                                                <p className="max-w-2xl text-sm md:text-base font-medium">{item.desc}</p>
                                                <p className="max-w-2xl text-xs md:text-sm font-medium uppercase">{item.createdAt} - <span className="opacity-70">{item.readTime}</span></p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <p className="uppercase font-bold text-sm md:text-base text-delta tracking-[0.3em]">Topics</p>
                                <div className="flex flex-col gap-2">
                                    {TopicList.map((item, index) => {
                                        return (
                                            <div key={index} className="flex items-center justify-between gap-1.5">
                                                <Link href={item.url} className="max-w-2xl text-sm md:text-base font-bold">{item.title}</Link>
                                                <span className="px-2 py-1 text-xs border rounded-full text-slate-500">{item.count} updates</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </section>
                    </div>
                </section>

            </div>
            <div className="mt-16"><GetStartedSection /></div>
        </main>
    );
}
