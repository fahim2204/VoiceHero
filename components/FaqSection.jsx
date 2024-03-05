export default function FaqSection() {

    const FaqList = [
        {
            ques: "Is any of my personal information stored in the App?",
            ans: "Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.",
        },
        {
            ques: "What formats can I download my transaction history in?",
            ans: "Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.",
        },
        {
            ques: "Can I schedule future transfers?",
            ans: "Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.",
        },
        {
            ques: "When can I use Banking App services?",
            ans: "Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.",
        },
        {
            ques: "Can I create my own password that is easy for me to remember?",
            ans: "Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.",
        },
        {
            ques: "What happens if I forget or lose my password?",
            ans: "Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.",
        },

    ];



    return (
        <div className="max-w-[1400px] mx-auto z-0 relative overflow-hidden">
            <div className='container max-w-7xl w-full my-16'>
                <div className="w-full flex flex-col gap-3 mb-12">
                    <p className="uppercase font-bold text-[#9B2948] tracking-[0.3em] text-center">FAQS</p>
                    <div className="text-5xl md:text-6xl lg:text-6xl text-center font-semibold">Frequently <span className="text-alpha">Asked</span> Question</div>
                    <p className="max-w-2xl text-lg mx-auto text-center">VoiceHero is the #1 rated AI text to speech app in its category with over 250,000.</p>
                </div>
                <ul className="max-w-4xl w-full mx-auto flex flex-col gap-3 mt-10 mb-12 md:mb-28">
                    {
                        FaqList.map((item, index) => {
                            return (
                                <li key={index}>
                                    <details className="group bg-beta rounded-3xl px-2 py-1">
                                        <summary className="flex items-center justify-between gap-3 px-4 py-3 font-semibold marker:content-none hover:cursor-pointer select-none">
                                            <span>{item.ques}</span>
                                            <svg className="w-7 h-7 p-2 font-bold rounded-full text-black bg-white hover:bg-alpha hover:text-white transition-all duration-300 rotate-90 group-open:-rotate-90" xmlns="http://www.w3.org/2000/svg"
                                                width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd"
                                                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                                                </path>
                                            </svg>
                                        </summary>
                                        <article className="px-4 pb-4">
                                            <p>
                                                {item.ans}
                                            </p>
                                        </article>
                                    </details>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </div>

    );
};