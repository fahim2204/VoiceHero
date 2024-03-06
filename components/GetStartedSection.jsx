
export default function GetStartedSection() {
    return (
        <div className="max-w-7xl mx-auto px-3 flex flex-col">
            <div className="relative before:content-normal before:absolute before:top-0 before:w-full before:h-full before:bg-[url('/image/get-started.webp')] before:bg-cover before:z-0 w-full mt-0 mb-10 px-4 py-8 md:p-16 rounded-[2.5rem] flex flex-col items-center gap-5 md:gap-8 overflow-hidden ">
                <div className="w-full flex flex-col items-center gap-4 md:gap-6 z-10">
                    <p className="uppercase font-bold text-sm md:text-base text-white tracking-[0.3em] text-center">GET STARTED</p>
                    <div className="text-white text-3xl sm:text-4xl lg:text-6xl text-center font-semibold">Unlock the best listening <br />
                        experience with text to speech AI</div>
                    <button className="text-alpha bg-white font-bold rounded-full md:text-lg px-8 py-3">Try it for free</button>
                </div>
            </div>
        </div>
    )
}
