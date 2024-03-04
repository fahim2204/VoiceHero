import { Inter, Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const fontInter = Inter({ subsets: ["latin"] });
const fontPlayfair = Playfair_Display({ subsets: ["latin"], variable: '--font-play-fair' })
const fontManrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' })


export const metadata = {
  title: "Voice Hero",
  description: "AI voice generator that captivates your audience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${fontPlayfair.variable} ${fontManrope.variable} ${fontInter.variable} bg-[#fefcf5]`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
